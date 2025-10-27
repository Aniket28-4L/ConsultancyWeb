import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ManagePage.css';

const ManageCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    flagUrl: '',
    continent: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const fetchCountries = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const { data } = await axios.get('/api/countries', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCountries(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch countries');
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      if (editMode) {
        await axios.put(`/api/countries/${currentId}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post('/api/countries', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      resetForm();
      fetchCountries();
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };

  const handleEdit = (country) => {
    setFormData({
      name: country.name,
      code: country.code,
      flagUrl: country.flagUrl,
      continent: country.continent || ''
    });
    setCurrentId(country._id);
    setEditMode(true);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this country?')) {
      try {
        const token = localStorage.getItem('adminToken');
        await axios.delete(`/api/countries/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchCountries();
      } catch (err) {
        setError('Failed to delete country');
        console.error(err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      code: '',
      flagUrl: '',
      continent: ''
    });
    setEditMode(false);
    setCurrentId(null);
    setShowForm(false);
  };

  if (loading) return <div className="admin-loading">Loading countries...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-manage-page">
      <div className="admin-page-header">
        <h1>Manage Countries</h1>
        <button 
          className="admin-button admin-button-primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Country'}
        </button>
      </div>

      {showForm && (
        <div className="admin-card admin-form-container">
          <h2>{editMode ? 'Edit Country' : 'Add New Country'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="admin-form-group">
              <label htmlFor="name">Country Name</label>
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
              <label htmlFor="code">Country Code</label>
              <input
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="flagUrl">Flag URL</label>
              <input
                type="text"
                id="flagUrl"
                name="flagUrl"
                value={formData.flagUrl}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="continent">Continent</label>
              <input
                type="text"
                id="continent"
                name="continent"
                value={formData.continent}
                onChange={handleInputChange}
              />
            </div>
            <div className="admin-form-buttons">
              <button type="submit" className="admin-button admin-button-success">
                {editMode ? 'Update Country' : 'Add Country'}
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
              <th>Flag</th>
              <th>Name</th>
              <th>Code</th>
              <th>Continent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {countries.length > 0 ? (
              countries.map((country) => (
                <tr key={country._id}>
                  <td>
                    {country.flagUrl && (
                      <img 
                        src={country.flagUrl} 
                        alt={`${country.name} flag`} 
                        className="admin-flag-thumbnail" 
                      />
                    )}
                  </td>
                  <td>{country.name}</td>
                  <td>{country.code}</td>
                  <td>{country.continent || '-'}</td>
                  <td>
                    <button
                      className="admin-button admin-button-small"
                      onClick={() => handleEdit(country)}
                    >
                      Edit
                    </button>
                    <button
                      className="admin-button admin-button-small admin-button-danger"
                      onClick={() => handleDelete(country._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="admin-no-data">No countries found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCountries;