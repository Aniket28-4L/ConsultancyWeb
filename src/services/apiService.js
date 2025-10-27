import axios from 'axios';
import mockDataService from './mockDataService';

// Determine if we should use mock data (for development without backend)
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

// Base URL for API requests
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// API service functions
const apiService = {
  // Auth endpoints
  login: (credentials) => USE_MOCK_DATA ? mockDataService.login(credentials) : api.post('/users/login', credentials),
  register: (userData) => USE_MOCK_DATA ? mockDataService.register(userData) : api.post('/users/register', userData),
  
  // Countries endpoints
  getCountries: () => USE_MOCK_DATA ? mockDataService.getCountries() : api.get('/countries'),
  getCountry: (id) => USE_MOCK_DATA ? mockDataService.getCountry(id) : api.get(`/countries/${id}`),
  createCountry: (countryData) => USE_MOCK_DATA ? mockDataService.createCountry(countryData) : api.post('/countries', countryData),
  updateCountry: (id, countryData) => USE_MOCK_DATA ? mockDataService.updateCountry(id, countryData) : api.put(`/countries/${id}`, countryData),
  deleteCountry: (id) => USE_MOCK_DATA ? mockDataService.deleteCountry(id) : api.delete(`/countries/${id}`),
  
  // Universities endpoints
  getUniversities: () => USE_MOCK_DATA ? mockDataService.getUniversities() : api.get('/universities'),
  getUniversity: (id) => USE_MOCK_DATA ? mockDataService.getUniversity(id) : api.get(`/universities/${id}`),
  createUniversity: (universityData) => USE_MOCK_DATA ? mockDataService.createUniversity(universityData) : api.post('/universities', universityData),
  updateUniversity: (id, universityData) => USE_MOCK_DATA ? mockDataService.updateUniversity(id, universityData) : api.put(`/universities/${id}`, universityData),
  deleteUniversity: (id) => USE_MOCK_DATA ? mockDataService.deleteUniversity(id) : api.delete(`/universities/${id}`),
  
  // Testimonials endpoints
  getTestimonials: () => USE_MOCK_DATA ? mockDataService.getTestimonials() : api.get('/testimonials'),
  getTestimonial: (id) => USE_MOCK_DATA ? mockDataService.getTestimonial(id) : api.get(`/testimonials/${id}`),
  createTestimonial: (testimonialData) => USE_MOCK_DATA ? mockDataService.createTestimonial(testimonialData) : api.post('/testimonials', testimonialData),
  updateTestimonial: (id, testimonialData) => USE_MOCK_DATA ? mockDataService.updateTestimonial(id, testimonialData) : api.put(`/testimonials/${id}`, testimonialData),
  deleteTestimonial: (id) => USE_MOCK_DATA ? mockDataService.deleteTestimonial(id) : api.delete(`/testimonials/${id}`),
  
  // Inquiries endpoints
  getInquiries: () => USE_MOCK_DATA ? mockDataService.getInquiries() : api.get('/inquiries'),
  getInquiry: (id) => USE_MOCK_DATA ? mockDataService.getInquiry(id) : api.get(`/inquiries/${id}`),
  createInquiry: (inquiryData) => USE_MOCK_DATA ? mockDataService.createInquiry(inquiryData) : api.post('/inquiries', inquiryData),
  updateInquiry: (id, inquiryData) => USE_MOCK_DATA ? mockDataService.updateInquiry(id, inquiryData) : api.put(`/inquiries/${id}`, inquiryData),
  deleteInquiry: (id) => USE_MOCK_DATA ? mockDataService.deleteInquiry(id) : api.delete(`/inquiries/${id}`),
};

export default apiService;