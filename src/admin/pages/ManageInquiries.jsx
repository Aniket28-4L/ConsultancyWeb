import { useState, useEffect } from 'react';
import api from '../utils/axiosConfig';
import '../styles/ManagePage.css';

const ManageInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/api/inquiries');
      setInquiries(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch inquiries');
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleViewDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      try {
        await api.delete(`/api/inquiries/${id}`);
        fetchInquiries();
      } catch (err) {
        setError('Failed to delete inquiry');
        console.error(err);
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div className="admin-loading">Loading inquiries...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-manage-page">
      <div className="admin-page-header">
        <h1>Manage Inquiries</h1>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Country</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.length > 0 ? (
              inquiries.map((inquiry) => (
                <tr key={inquiry._id}>
                  <td>{inquiry.fullName}</td>
                  <td>{inquiry.email}</td>
                  <td>{inquiry.countryCode} {inquiry.mobileNumber}</td>
                  <td>{inquiry.country?.name || '-'}</td>
                  <td>{formatDate(inquiry.createdAt)}</td>
                  <td>
                    <button
                      className="admin-button admin-button-small"
                      onClick={() => handleViewDetails(inquiry)}
                    >
                      View
                    </button>
                    <button
                      className="admin-button admin-button-small admin-button-danger"
                      onClick={() => handleDelete(inquiry._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="admin-no-data">No inquiries found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && selectedInquiry && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <button 
              className="admin-modal-close" 
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2>Inquiry Details</h2>
            <div className="admin-inquiry-details">
              <div className="admin-detail-row">
                <span className="admin-detail-label">Full Name:</span>
                <span className="admin-detail-value">{selectedInquiry.fullName}</span>
              </div>
              <div className="admin-detail-row">
                <span className="admin-detail-label">Email:</span>
                <span className="admin-detail-value">{selectedInquiry.email}</span>
              </div>
              <div className="admin-detail-row">
                <span className="admin-detail-label">Mobile:</span>
                <span className="admin-detail-value">
                  {selectedInquiry.countryCode} {selectedInquiry.mobileNumber}
                </span>
              </div>
              <div className="admin-detail-row">
                <span className="admin-detail-label">Country:</span>
                <span className="admin-detail-value">
                  {selectedInquiry.country?.name || '-'}
                </span>
              </div>
              <div className="admin-detail-row">
                <span className="admin-detail-label">Pincode:</span>
                <span className="admin-detail-value">{selectedInquiry.pincode || '-'}</span>
              </div>
              <div className="admin-detail-row">
                <span className="admin-detail-label">Message:</span>
                <span className="admin-detail-value">{selectedInquiry.message || '-'}</span>
              </div>
              <div className="admin-detail-row">
                <span className="admin-detail-label">Date:</span>
                <span className="admin-detail-value">{formatDate(selectedInquiry.createdAt)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageInquiries;