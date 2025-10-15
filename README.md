# Consultancy Website

A modern, responsive website for an international education and career consultancy service, built with React and Vite.

## Overview

This website serves as a comprehensive platform for a consultancy firm specializing in study abroad and work abroad services. It provides detailed information about various educational opportunities, work prospects in different countries, documentation processes, and direct contact options for potential clients.

## Pages and Features

### Home (/)
- **Description**: The landing page that introduces the consultancy services and provides an overview of what the company offers.
- **UI Components**:
  - Hero section with animated elements
  - Service highlights
  - Testimonials
  - Quick contact form
  - Featured universities/countries
- **Dynamic Content**: 
  - Hero banner text and images
  - Featured services
  - Testimonial cards
  - Statistics/numbers

### Study Abroad (/study-abroad)
- **Description**: Detailed information about study opportunities in different countries, universities, courses, and admission requirements.
- **UI Components**:
  - Country filters
  - University listings
  - Course information cards
  - Admission requirement details
  - Success stories
- **Dynamic Content**:
  - Country information
  - University listings and details
  - Course offerings
  - Admission deadlines

### Work Abroad (/work-abroad)
- **Description**: Information about work opportunities, visa requirements, job markets, and career prospects in different countries.
- **UI Components**:
  - Country-specific job market information
  - Visa requirement cards
  - Salary expectation guides
  - Industry demand charts
- **Dynamic Content**:
  - Job market statistics
  - Visa requirement updates
  - Industry demand data
  - Success stories

### Process (/process)
- **Description**: Step-by-step guide explaining the consultation, application, and migration processes.
- **UI Components**:
  - Interactive process timeline
  - Step cards with detailed explanations
  - Document checklists
  - FAQ accordion
- **Dynamic Content**:
  - Process steps and requirements
  - Document checklists
  - FAQ items

### Documentation (/documentation)
- **Description**: Information about required documents, authentication processes, and preparation guidelines for various applications.
- **UI Components**:
  - Document category filters
  - Document requirement cards
  - Authentication process guides
  - Document templates
- **Dynamic Content**:
  - Document requirements by country
  - Authentication process updates
  - Template downloads

### Universities (/universities)
- **Description**: Comprehensive database of partner universities, their rankings, courses, and admission criteria.
- **UI Components**:
  - University search and filters
  - University profile cards
  - Course listings
  - Admission requirement details
- **Dynamic Content**:
  - University profiles
  - Course offerings
  - Ranking updates
  - Admission criteria

### Contact (/contact)
- **Description**: Contact information, inquiry form, and office location details.
- **UI Components**:
  - Contact form with validation
  - Office location map with Jamnagar address
  - Contact method cards (email, phone, address)
  - Social media links
  - FAQ section
- **Dynamic Content**:
  - Office addresses and contact details
  - Business hours
  - FAQ items

## Admin Panel (Future Implementation)

### Main Controls
- **Content Management**:
  - Update text content across all pages
  - Manage image galleries and media
  - Add/edit/remove testimonials
  - Update university and course information
  - Manage FAQ items

- **User Management**:
  - View and manage user inquiries
  - Track consultation appointments
  - Manage user accounts (if applicable)

- **Analytics Dashboard**:
  - View website traffic statistics
  - Track form submissions
  - Monitor page performance

### Live Website Reflection
- Changes made in the admin panel will be immediately reflected on the live website
- Content versioning system to track changes and allow rollbacks
- Preview functionality to review changes before publishing

## Frontend-Backend Interaction

### API Endpoints (Planned)
- `/api/inquiries` - Handle contact form submissions
- `/api/universities` - Fetch and manage university data
- `/api/countries` - Fetch and manage country-specific information
- `/api/testimonials` - Manage client testimonials
- `/api/users` - User authentication and management (for admin access)

### Data Flow
1. React frontend components fetch data from backend APIs
2. Form submissions are validated client-side before being sent to the backend
3. Admin panel changes update the database, which is then reflected in API responses
4. Real-time updates using websockets for admin dashboard notifications

## Project Structure

```
consultancy-web/
├── public/
│   ├── images/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   └── shared/
│   │       ├── Button.css
│   │       └── Button.jsx
│   ├── pages/
│   │   ├── Contact/
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   ├── Documentation/
│   │   │   ├── Documentation.css
│   │   │   └── Documentation.jsx
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   ├── Process/
│   │   │   ├── Process.css
│   │   │   └── Process.jsx
│   │   ├── StudyAbroad/
│   │   │   ├── StudyAbroad.css
│   │   │   └── StudyAbroad.jsx
│   │   ├── Universities/
│   │   │   ├── Universities.css
│   │   │   └── Universities.jsx
│   │   └── WorkAbroad/
│   │       ├── WorkAbroad.css
│   │       └── WorkAbroad.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Installation and Usage

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps
1. Clone the repository:
   ```
   git clone <repository-url>
   cd consultancy-web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

5. Preview production build:
   ```
   npm run preview
   ```

## Technologies Used

- **Frontend**:
  - React 19
  - React Router 7
  - Framer Motion 12.12.1 (for animations)
  - CSS3 (with custom properties)
  - Vite 6.3.5 (build tool)

- **Development Tools**:
  - ESLint 9.25.0
  - Git version control

## Future Improvements

1. **Backend Integration**:
   - Develop a Node.js/Express backend with MongoDB database
   - Implement user authentication and authorization
   - Create RESTful APIs for data management

2. **Admin Dashboard**:
   - Build a comprehensive admin panel for content management
   - Implement analytics and reporting features
   - Add user management capabilities

3. **Enhanced Features**:
   - Live chat support
   - University application tracking system
   - Document upload and verification system
   - Appointment scheduling system
   - Multi-language support

4. **Performance Optimizations**:
   - Implement lazy loading for images and components
   - Add service workers for offline functionality
   - Optimize for mobile devices and low bandwidth connections

5. **Integrations**:
   - Payment gateway for service fees
   - Calendar integration for appointments
   - Email notification system
   - Social media integration
