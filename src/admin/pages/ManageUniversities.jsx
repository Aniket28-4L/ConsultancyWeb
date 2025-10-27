import { useState, useEffect } from 'react';
import api from '../utils/axiosConfig';
import '../styles/ManagePage.css';

const ManageUniversities = () => {
  const [universities, setUniversities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    location: '',
    description: '',
    logoUrl: '',
    websiteUrl: '',
    ranking: '',
    programs: []
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [universitiesRes, countriesRes] = await Promise.all([
        api.get('/api/universities'),
        api.get('/api/countries')
      ]);
      setUniversities(universitiesRes.data);
      setCountries(countriesRes.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch data');
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await api.put(`/api/universities/${currentId}`, formData);
      } else {
        await api.post('/api/universities', formData);
      }
      resetForm();
      fetchData();
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };

  const handleEdit = (university) => {
    setFormData({
      name: university.name,
      country: university.country._id || university.country,
      location: university.location || '',
      description: university.description || '',
      logoUrl: university.logoUrl || '',
      websiteUrl: university.websiteUrl || '',
      ranking: university.ranking || '',
      programs: university.programs || []
    });
    setCurrentId(university._id);
    setEditMode(true);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this university?')) {
      try {
        await api.delete(`/api/universities/${id}`);
        fetchData();
      } catch (err) {
        setError('Failed to delete university');
        console.error(err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      country: '',
      location: '',
      description: '',
      logoUrl: '',
      websiteUrl: '',
      ranking: '',
      programs: []
    });
    setEditMode(false);
    setCurrentId(null);
    setShowForm(false);
  };

  if (loading) return <div className="admin-loading">Loading universities...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-manage-page">
      <div className="admin-page-header">
        <h1>Manage Universities</h1>
        <button 
          className="admin-button admin-button-primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New University'}
        </button>
      </div>

      {showForm && (
        <div className="admin-card admin-form-container">
          <h2>{editMode ? 'Edit University' : 'Add New University'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="admin-form-group">
              <label htmlFor="name">University Name</label>
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
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country._id} value={country._id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="admin-form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="logoUrl">Logo URL</label>
              <input
                type="text"
                id="logoUrl"
                name="logoUrl"
                value={formData.logoUrl}
                onChange={handleInputChange}
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="websiteUrl">Website URL</label>
              <input
                type="text"
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleInputChange}
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="ranking">Ranking</label>
              <input
                type="text"
                id="ranking"
                name="ranking"
                value={formData.ranking}
                onChange={handleInputChange}
              />
            </div>
            <div className="admin-form-buttons">
              <button type="submit" className="admin-button admin-button-success">
                {editMode ? 'Update University' : 'Add University'}
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
              <th>Logo</th>
              <th>Name</th>
              <th>Country</th>
              <th>Location</th>
              <th>Ranking</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {universities.length > 0 ? (
              universities.map((university) => (
                <tr key={university._id}>
                  <td>
                    {university.logoUrl ? (
                      <img 
                        src={university.logoUrl} 
                        alt={`${university.name} logo`} 
                        className="admin-logo-thumbnail" 
                        width="40"
                        height="40"
                      />
                    ) : (
                      <div className="admin-logo-placeholder">
                        {university.name.charAt(0)}
                      </div>
                    )}
                  </td>
                  <td>{university.name}</td>
                  <td>{university.country?.name || 'Unknown'}</td>
                  <td>{university.location || '-'}</td>
                  <td>{university.ranking || '-'}</td>
                  <td>
                    <button
                      className="admin-button admin-button-small"
                      onClick={() => handleEdit(university)}
                    >
                      Edit
                    </button>
                    <button
                      className="admin-button admin-button-small admin-button-danger"
                      onClick={() => handleDelete(university._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="admin-no-data">No universities found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUniversities;