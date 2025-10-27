import { useState, useEffect } from 'react';
import api from '../utils/axiosConfig';
import '../styles/ManagePage.css';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    serviceType: 'Study Abroad'
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/api/services');
      setServices(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch services');
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await api.put(`/api/services/${currentId}`, formData);
      } else {
        await api.post('/api/services', formData);
      }
      resetForm();
      fetchServices();
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };

  const handleEdit = (service) => {
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon || '',
      serviceType: service.serviceType
    });
    setCurrentId(service._id);
    setEditMode(true);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await api.delete(`/api/services/${id}`);
        fetchServices();
      } catch (err) {
        setError('Failed to delete service');
        console.error(err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: '',
      serviceType: 'Study Abroad'
    });
    setEditMode(false);
    setCurrentId(null);
    setShowForm(false);
  };

  if (loading) return <div className="admin-loading">Loading services...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-manage-page">
      <div className="admin-page-header">
        <h1>Manage Services</h1>
        <button 
          className="admin-button admin-button-primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Service'}
        </button>
      </div>

      {showForm && (
        <div className="admin-card admin-form-container">
          <h2>{editMode ? 'Edit Service' : 'Add New Service'}</h2>
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
              <label htmlFor="serviceType">Service Type</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
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
                {editMode ? 'Update Service' : 'Add Service'}
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
              <th>Icon</th>
              <th>Title</th>
              <th>Type</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.length > 0 ? (
              services.map((service) => (
                <tr key={service._id}>
                  <td>
                    <span className="admin-service-icon">{service.icon}</span>
                  </td>
                  <td>{service.title}</td>
                  <td>{service.serviceType}</td>
                  <td>
                    <div className="admin-truncate-text">
                      {service.description}
                    </div>
                  </td>
                  <td>
                    <button
                      className="admin-button admin-button-small"
                      onClick={() => handleEdit(service)}
                    >
                      Edit
                    </button>
                    <button
                      className="admin-button admin-button-small admin-button-danger"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="admin-no-data">No services found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServices;