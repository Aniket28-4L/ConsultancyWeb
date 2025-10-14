import { useState } from 'react';
import { motion } from 'framer-motion';
import './Universities.css';
import { Link } from 'react-router-dom';

const Universities = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');

  const universities = [
    {
      id: 1,
      name: 'University of Oxford',
      country: 'UK',
      image: '/images/oxford.svg',
      fallbackImage: '/images/oxford.svg',
      description: 'One of the oldest and most prestigious universities in the world, offering generous scholarships for international students and full support for study visa applications. Oxford provides world-class education across a wide range of disciplines.',
      scholarships: true,
      scholarshipUrl: 'https://www.ox.ac.uk/admissions/graduate/fees-and-funding/fees-funding-and-scholarship-search',
      visaSupport: true
    },
    {
      id: 2,
      name: 'University of Cambridge',
      country: 'UK',
      image: '/images/cambridge.svg',
      fallbackImage: '/images/cambridge.svg',
      description: 'A collegiate research university with a rich history of academic excellence, providing various scholarship opportunities and comprehensive visa guidance for international applicants. Cambridge is renowned for its rigorous academic programs and innovative research.',
      scholarships: true,
      scholarshipUrl: 'https://www.cambridgetrust.org/scholarships/',
      visaSupport: true
    },
    {
      id: 3,
      name: 'Imperial College London',
      country: 'UK',
      image: '/images/imperial.svg',
      fallbackImage: '/images/imperial.svg',
      description: 'A world-class university specializing in science, engineering, medicine, and business, with dedicated international student support and scholarship programs. Imperial College is at the forefront of addressing global challenges through multidisciplinary research and innovation.',
      scholarships: true,
      scholarshipUrl: 'https://www.imperial.ac.uk/study/fees-and-funding/scholarships-search/',
      visaSupport: false,
      manualVisa: true
    },
    {
      id: 4,
      name: 'Technical University of Munich',
      country: 'Germany',
      image: '/images/tum.svg',
      fallbackImage: '/images/tum.svg',
      description: 'One of Germany\'s top technical universities offering tuition-free education for all students regardless of nationality. Students need to apply for visa manually through German consulates. TUM is recognized for its excellence in engineering, natural sciences, and technology-focused programs.',
      scholarships: true,
      scholarshipUrl: 'https://www.tum.de/en/studies/fees-and-financial-aid/scholarships',
      visaSupport: false,
      manualVisa: true
    },
    {
      id: 5,
      name: 'Heidelberg University',
      country: 'Germany',
      image: '/images/heidelberg.svg',
      fallbackImage: '/images/heidelberg.svg',
      description: 'Germany\'s oldest university with a strong international focus, providing scholarship opportunities for exceptional students from around the world. Students need to apply for visa through German consulates. Heidelberg offers a wide range of academic programs in humanities, social sciences, and natural sciences.',
      scholarships: true,
      scholarshipUrl: 'https://www.uni-heidelberg.de/en/study/scholarships-and-grants',
      visaSupport: false,
      manualVisa: true
    },
    {
      id: 6,
      name: 'Humboldt University of Berlin',
      country: 'Germany',
      image: '/images/humboldt.svg',
      fallbackImage: '/images/humboldt.svg',
      description: 'A prestigious university in Germany\'s capital with minimal tuition fees and a rich academic tradition. Students must apply for visa independently through German embassies. Humboldt University is known for its research excellence and interdisciplinary approach to education.',
      scholarships: true,
      scholarshipUrl: 'https://www.hu-berlin.de/en/studies/admission/financing-your-studies-en',
      visaSupport: false,
      manualVisa: true
    },
    {
      id: 7,
      name: 'University of Melbourne',
      country: 'Australia',
      image: '/images/melbourne.svg',
      fallbackImage: '/images/melbourne.svg',
      description: 'Australia\'s leading university offering numerous scholarship programs for international students and dedicated visa application support services. Melbourne University is consistently ranked among the world\'s top universities for research and teaching excellence.',
      scholarships: true,
      scholarshipUrl: 'https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships',
      visaSupport: true
    },
    {
      id: 8,
      name: 'University of Sydney',
      country: 'Australia',
      image: '/images/sydney.svg',
      fallbackImage: '/images/sydney.svg',
      description: 'One of Australia\'s first universities with a strong commitment to international education, offering scholarships for outstanding students. Students must apply for visa through Australian immigration. Sydney University provides a diverse range of programs across various disciplines.',
      scholarships: true,
      scholarshipUrl: 'https://www.sydney.edu.au/scholarships/international/postgraduate-research.html',
      visaSupport: false,
      manualVisa: true
    },
    {
      id: 9,
      name: 'Australian National University',
      country: 'Australia',
      image: '/images/anu.svg',
      fallbackImage: '/images/anu.svg',
      description: 'Australia\'s highest-ranked university with generous scholarship opportunities for international students. Visa must be applied for separately through Australian government. ANU is renowned for its research intensity and offers a wide range of programs with a global perspective.',
      scholarships: true,
      scholarshipUrl: 'https://www.anu.edu.au/study/scholarships/find-a-scholarship',
      visaSupport: false,
      manualVisa: true
    }
  ];

  const filteredUniversities = selectedCountry === 'all' 
    ? universities 
    : universities.filter(uni => uni.country === selectedCountry);

  return (
    <div className="universities-page">
      <motion.div
        className="universities-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Explore Top Universities</h1>
        <p>Discover universities offering scholarships and study visa support for international students</p>
      </motion.div>

      <div className="filter-container">
        <h3>Filter by Country:</h3>
        <div className="filter-buttons">
          <button 
            className={selectedCountry === 'all' ? 'active' : ''}
            onClick={() => setSelectedCountry('all')}
          >
            All Countries
          </button>
          <button 
            className={selectedCountry === 'UK' ? 'active' : ''}
            onClick={() => setSelectedCountry('UK')}
          >
            United Kingdom
          </button>
          <button 
            className={selectedCountry === 'Germany' ? 'active' : ''}
            onClick={() => setSelectedCountry('Germany')}
          >
            Germany
          </button>
          <button 
            className={selectedCountry === 'Australia' ? 'active' : ''}
            onClick={() => setSelectedCountry('Australia')}
          >
            Australia
          </button>
        </div>
      </div>

      <motion.div 
        className="universities-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {filteredUniversities.map((university) => (
          <motion.div 
            key={university.id} 
            className="university-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
          >
            <div className="university-image">
              <img 
                src={university.image} 
                alt={university.name} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = university.fallbackImage;
                }}
              />
            </div>
            <div className="university-content">
              <h3>{university.name}</h3>
              <p className="university-country">{university.country}</p>
              <p className="university-description">{university.description}</p>
              <div className="university-features">
                {university.scholarships && (
                  <a 
                    href={university.scholarshipUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="feature scholarship"
                  >
                    Scholarships Available
                  </a>
                )}
                {university.visaSupport && (
                  <span className="feature visa">Visa Support</span>
                )}
                {university.manualVisa && (
                  <span className="feature manual-visa">Manual Visa Application</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Universities;