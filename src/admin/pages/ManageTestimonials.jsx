import { useState, useEffect } from 'react';
import '../styles/ManagePage.css';
import api from '../utils/axiosConfig';

const ManageTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5,
    avatarUrl: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/api/testimonials');
      setTestimonials(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch testimonials');
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await api.put(`/api/testimonials/${currentId}`, formData);
      } else {
        await api.post('/api/testimonials', formData);
      }
      resetForm();
      fetchTestimonials();
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };

  const handleEdit = (testimonial) => {
    setFormData({
      name: testimonial.name,
      role: testimonial.role,
      content: testimonial.content,
      rating: testimonial.rating,
      avatarUrl: testimonial.avatarUrl || ''
    });
    setCurrentId(testimonial._id);
    setEditMode(true);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await api.delete(`/api/testimonials/${id}`);
        fetchTestimonials();
      } catch (err) {
        setError('Failed to delete testimonial');
        console.error(err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      role: '',
      content: '',
      rating: 5,
      avatarUrl: ''
    });
    setEditMode(false);
    setCurrentId(null);
    setShowForm(false);
  };

  if (loading) return <div className="admin-loading">Loading testimonials...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-manage-page">
      <div className="admin-page-header">
        <h1>Manage Testimonials</h1>
        <button 
          className="admin-button admin-button-primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Testimonial'}
        </button>
      </div>

      {showForm && (
        <div className="admin-card admin-form-container">
          <h2>{editMode ? 'Edit Testimonial' : 'Add New Testimonial'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="admin-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="role">Role/Position</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="content">Testimonial Content</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="rating">Rating (1-5)</label>
              <input
                type="number"
                id="rating"
                name="rating"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="avatarUrl">Avatar URL (optional)</label>
              <input
                type="text"
                id="avatarUrl"
                name="avatarUrl"
                value={formData.avatarUrl}
                onChange={handleInputChange}
              />
            </div>
            <div className="admin-form-buttons">
              <button type="submit" className="admin-button admin-button-success">
                {editMode ? 'Update Testimonial' : 'Add Testimonial'}
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
              <th>Avatar</th>
              <th>Name</th>
              <th>Role</th>
              <th>Content</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <tr key={testimonial._id}>
                  <td>
                    {testimonial.avatarUrl ? (
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={`${testimonial.name}`} 
                        className="admin-avatar-thumbnail" 
                        width="40"
                        height="40"
                      />
                    ) : (
                      <div className="admin-avatar-placeholder">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </td>
                  <td>{testimonial.name}</td>
                  <td>{testimonial.role}</td>
                  <td>
                    <div className="admin-truncate-text">
                      {testimonial.content}
                    </div>
                  </td>
                  <td>{testimonial.rating} ⭐</td>
                  <td>
                    <button
                      className="admin-button admin-button-small"
                      onClick={() => handleEdit(testimonial)}
                    >
                      Edit
                    </button>
                    <button
                      className="admin-button admin-button-small admin-button-danger"
                      onClick={() => handleDelete(testimonial._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="admin-no-data">No testimonials found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTestimonials;