import { useState, useEffect } from 'react';
import api from '../utils/axiosConfig';
import '../styles/ManagePage.css';

const ManageDocumentation = () => {
  const [documentations, setDocumentations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requiredFor: 'Study Visa',
    importance: 'Required'
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const fetchDocumentations = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/api/documentation-requirements');
      setDocumentations(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch documentation requirements');
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDocumentations();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await api.put(`/api/documentation-requirements/${currentId}`, formData);
      } else {
        await api.post('/api/documentation-requirements', formData);
      }
      resetForm();
      fetchDocumentations();
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };

  const handleEdit = (doc) => {
    setFormData({
      title: doc.title,
      description: doc.description,
      requiredFor: doc.requiredFor,
      importance: doc.importance
    });
    setCurrentId(doc._id);
    setEditMode(true);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this documentation requirement?')) {
      try {
        await api.delete(`/api/documentation-requirements/${id}`);
        fetchDocumentations();
      } catch (err) {
        setError('Failed to delete documentation requirement');
        console.error(err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      requiredFor: 'Study Visa',
      importance: 'Required'
    });
    setEditMode(false);
    setCurrentId(null);
    setShowForm(false);
  };

  if (loading) return <div className="admin-loading">Loading documentation requirements...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-manage-page">
      <div className="admin-page-header">
        <h1>Manage Documentation Requirements</h1>
        <button 
          className="admin-button admin-button-primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Requirement'}
        </button>
      </div>

      {showForm && (
        <div className="admin-card admin-form-container">
          <h2>{editMode ? 'Edit Documentation Requirement' : 'Add New Documentation Requirement'}</h2>
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
              <label htmlFor="requiredFor">Required For</label>
              <select
                id="requiredFor"
                name="requiredFor"
                value={formData.requiredFor}
                onChange={handleInputChange}
                required
              >
                <option value="Study Visa">Study Visa</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Business Visa">Business Visa</option>
                <option value="Immigration">Immigration</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label htmlFor="importance">Importance</label>
              <select
                id="importance"
                name="importance"
                value={formData.importance}
                onChange={handleInputChange}
                required
              >
                <option value="Required">Required</option>
                <option value="Optional">Optional</option>
                <option value="Recommended">Recommended</option>
              </select>
            </div>
            <div className="admin-form-buttons">
              <button type="submit" className="admin-button admin-button-success">
                {editMode ? 'Update Requirement' : 'Add Requirement'}
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
              <th>Title</th>
              <th>Required For</th>
              <th>Importance</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {documentations.length > 0 ? (
              documentations.map((doc) => (
                <tr key={doc._id}>
                  <td>{doc.title}</td>
                  <td>{doc.requiredFor}</td>
                  <td>
                    <span className={`admin-badge admin-badge-${doc.importance.toLowerCase()}`}>
                      {doc.importance}
                    </span>
                  </td>
                  <td>
                    <div className="admin-truncate-text">
                      {doc.description}
                    </div>
                  </td>
                  <td>
                    <button
                      className="admin-button admin-button-small"
                      onClick={() => handleEdit(doc)}
                    >
                      Edit
                    </button>
                    <button
                      className="admin-button admin-button-small admin-button-danger"
                      onClick={() => handleDelete(doc._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="admin-no-data">No documentation requirements found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDocumentation;