// Mock data for development and testing

const mockData = {
  // Countries mock data
  countries: [
    {
      _id: '1',
      name: 'United States',
      description: 'Land of opportunity with world-class universities.',
      image: '/images/countries/usa.jpg',
      studyInfo: 'The US hosts over 4,000 accredited institutions offering diverse programs.',
      workInfo: 'Optional Practical Training (OPT) allows students to work for up to 3 years after graduation.',
      visaRequirements: 'F-1 student visa requires proof of admission and financial capability.',
      costOfLiving: 'Average monthly expenses range from $1,000-$2,500 depending on location.',
      popularCities: ['New York', 'Boston', 'San Francisco', 'Chicago', 'Los Angeles']
    },
    {
      _id: '2',
      name: 'United Kingdom',
      description: 'Rich academic heritage with prestigious institutions.',
      image: '/images/countries/uk.jpg',
      studyInfo: 'UK degrees are typically shorter, helping reduce overall study costs.',
      workInfo: 'Graduate Route visa allows students to work for 2 years after graduation.',
      visaRequirements: 'Tier 4 student visa requires CAS from university and proof of funds.',
      costOfLiving: 'Average monthly expenses range from £800-£1,500 depending on location.',
      popularCities: ['London', 'Manchester', 'Edinburgh', 'Oxford', 'Cambridge']
    },
    {
      _id: '3',
      name: 'Canada',
      description: 'Safe, multicultural environment with excellent quality of life.',
      image: '/images/countries/canada.jpg',
      studyInfo: 'Canadian institutions offer high-quality education at lower costs than the US.',
      workInfo: 'Post-Graduation Work Permit allows work for up to 3 years after graduation.',
      visaRequirements: 'Study permit requires acceptance letter and proof of financial support.',
      costOfLiving: 'Average monthly expenses range from CAD 800-1,500 depending on location.',
      popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary']
    }
  ],
  
  // Universities mock data
  universities: [
    {
      _id: '1',
      name: 'Harvard University',
      country: '1',
      ranking: 1,
      description: 'One of the most prestigious universities in the world.',
      image: '/images/universities/harvard.jpg',
      website: 'https://www.harvard.edu',
      courses: ['Business', 'Law', 'Medicine', 'Engineering']
    },
    {
      _id: '2',
      name: 'University of Oxford',
      country: '2',
      ranking: 2,
      description: 'The oldest university in the English-speaking world.',
      image: '/images/universities/oxford.jpg',
      website: 'https://www.ox.ac.uk',
      courses: ['Arts', 'Humanities', 'Sciences', 'Social Sciences']
    },
    {
      _id: '3',
      name: 'University of Toronto',
      country: '3',
      ranking: 18,
      description: 'Canada\'s leading institution of learning, discovery and knowledge creation.',
      image: '/images/universities/toronto.jpg',
      website: 'https://www.utoronto.ca',
      courses: ['Computer Science', 'Business', 'Engineering', 'Medicine']
    }
  ],
  
  // Testimonials mock data
  testimonials: [
    {
      _id: '1',
      name: 'John Smith',
      content: 'The consultancy helped me secure admission to my dream university in the UK. Their guidance throughout the process was invaluable.',
      rating: 5,
      image: '/images/testimonials/john.jpg',
      serviceType: 'Study Abroad'
    },
    {
      _id: '2',
      name: 'Sarah Johnson',
      content: 'I got my work visa for Canada thanks to the excellent documentation support. Highly recommended!',
      rating: 4,
      image: '/images/testimonials/sarah.jpg',
      serviceType: 'Work Abroad'
    },
    {
      _id: '3',
      name: 'Raj Patel',
      content: 'The team provided exceptional guidance for my US student visa application. The process was smooth and stress-free.',
      rating: 5,
      image: '/images/testimonials/raj.jpg',
      serviceType: 'Documentation'
    }
  ],
  
  // Inquiries mock data
  inquiries: [
    {
      _id: '1',
      fullName: 'Michael Brown',
      email: 'michael@example.com',
      countryCode: '+1',
      mobileNumber: '5551234567',
      pincode: '10001',
      message: 'I\'m interested in studying Computer Science in Canada. Can you help with university selection?',
      inquiryType: 'Study Abroad',
      status: 'New',
      createdAt: '2023-06-15T10:30:00Z'
    },
    {
      _id: '2',
      fullName: 'Emma Wilson',
      email: 'emma@example.com',
      countryCode: '+44',
      mobileNumber: '7700900123',
      pincode: 'SW1A 1AA',
      message: 'Looking for work opportunities in the tech sector in the US. Need guidance on visa requirements.',
      inquiryType: 'Work Abroad',
      status: 'In Progress',
      createdAt: '2023-06-10T14:45:00Z'
    }
  ]
};

// Mock service functions
const mockDataService = {
  // Countries
  getCountries: () => Promise.resolve({ data: mockData.countries }),
  getCountry: (id) => Promise.resolve({ data: mockData.countries.find(c => c._id === id) }),
  createCountry: (data) => Promise.resolve({ data: { ...data, _id: Date.now().toString() } }),
  updateCountry: (id, data) => Promise.resolve({ data: { ...data, _id: id } }),
  deleteCountry: (id) => Promise.resolve({ data: { message: 'Country deleted successfully' } }),
  
  // Universities
  getUniversities: () => Promise.resolve({ data: mockData.universities }),
  getUniversity: (id) => Promise.resolve({ data: mockData.universities.find(u => u._id === id) }),
  createUniversity: (data) => Promise.resolve({ data: { ...data, _id: Date.now().toString() } }),
  updateUniversity: (id, data) => Promise.resolve({ data: { ...data, _id: id } }),
  deleteUniversity: (id) => Promise.resolve({ data: { message: 'University deleted successfully' } }),
  
  // Testimonials
  getTestimonials: () => Promise.resolve({ data: mockData.testimonials }),
  getTestimonial: (id) => Promise.resolve({ data: mockData.testimonials.find(t => t._id === id) }),
  createTestimonial: (data) => Promise.resolve({ data: { ...data, _id: Date.now().toString() } }),
  updateTestimonial: (id, data) => Promise.resolve({ data: { ...data, _id: id } }),
  deleteTestimonial: (id) => Promise.resolve({ data: { message: 'Testimonial deleted successfully' } }),
  
  // Inquiries
  getInquiries: () => Promise.resolve({ data: mockData.inquiries }),
  getInquiry: (id) => Promise.resolve({ data: mockData.inquiries.find(i => i._id === id) }),
  createInquiry: (data) => Promise.resolve({ data: { ...data, _id: Date.now().toString() } }),
  updateInquiry: (id, data) => Promise.resolve({ data: { ...data, _id: id } }),
  deleteInquiry: (id) => Promise.resolve({ data: { message: 'Inquiry deleted successfully' } }),
  
  // Auth
  login: (credentials) => Promise.resolve({ 
    data: { 
      token: 'mock-jwt-token', 
      user: { id: '1', name: 'Admin User', email: credentials.email, role: 'admin' } 
    } 
  }),
};

export default mockDataService;