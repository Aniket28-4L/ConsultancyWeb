import { useState, useEffect } from 'react';
import api from '../utils/axiosConfig';
import '../styles/ManagePage.css';

const ManageProcesses = () => {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    stepNumber: 1,
    processType: 'Study Abroad'
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const fetchProcesses = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/api/processes');
      setProcesses(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch processes');
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProcesses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await api.put(`/api/processes/${currentId}`, formData);
      } else {
        await api.post('/api/processes', formData);
      }
      resetForm();
      fetchProcesses();
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };

  const handleEdit = (process) => {
    setFormData({
      title: process.title,
      description: process.description,
      icon: process.icon || '',
      stepNumber: process.stepNumber,
      processType: process.processType
    });
    setCurrentId(process._id);
    setEditMode(true);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this process?')) {
      try {
        await api.delete(`/api/processes/${id}`);
        fetchProcesses();
      } catch (err) {
        setError('Failed to delete process');
        console.error(err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: '',
      stepNumber: 1,
      processType: 'Study Abroad'
    });
    setEditMode(false);
    setCurrentId(null);
    setShowForm(false);
  };

  if (loading) return <div className="admin-loading">Loading processes...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-manage-page">
      <div className="admin-page-header">
        <h1>Manage Processes</h1>
        <button 
          className="admin-button admin-button-primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Process'}
        </button>
      </div>

      {showForm && (
        <div className="admin-card admin-form-container">
          <h2>{editMode ? 'Edit Process' : 'Add New Process'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="admin-form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="icon">Icon (emoji or icon class)</label>
              <input
                type="text"
                id="icon"
                name="icon"
                value={formData.icon}
                onChange={handleInputChange}
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="stepNumber">Step Number</label>
              <input
                type="number"
                id="stepNumber"
                name="stepNumber"
                min="1"
                value={formData.stepNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="processType">Process Type</label>
              <select
                id="processType"
                name="processType"
                value={formData.processType}
                onChange={handleInputChange}
                required
              >
                <option value="Study Abroad">Study Abroad</option>
                <option value="Work Abroad">Work Abroad</option>
                <option value="Documentation">Documentation</option>
              </select>
            </div>
            <div className="admin-form-buttons">
              <button type="submit" className="admin-button admin-button-success">
                {editMode ? 'Update Process' : 'Add Process'}
              </button>
              <button 
                type="button" 
                className="admin-button" 
                onClick={resetForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Icon</th>
              <th>Title</th>
              <th>Type</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {processes.length > 0 ? (
              processes.map((process) => (
                <tr key={process._id}>
                  <td>{process.stepNumber}</td>
                  <td>
                    <span className="admin-process-icon">{process.icon}</span>
                  </td>
                  <td>{process.title}</td>
                  <td>{process.processType}</td>
                  <td>
                    <div className="admin-truncate-text">
                      {process.description}
                    </div>
                  </td>
                  <td>
                    <button
                      className="admin-button admin-button-small"
                      onClick={() => handleEdit(process)}
                    >
                      Edit
                    </button>
                    <button
                      className="admin-button admin-button-small admin-button-danger"
                      onClick={() => handleDelete(process._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="admin-no-data">No processes found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProcesses;