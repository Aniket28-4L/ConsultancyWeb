import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    mobileNumber: '',
    pincode: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries = [
    { code: '+93', name: 'Afghanistan', flag: 'https://flagcdn.com/af.svg' },
    { code: '+355', name: 'Albania', flag: 'https://flagcdn.com/al.svg' },
    { code: '+213', name: 'Algeria', flag: 'https://flagcdn.com/dz.svg' },
    { code: '+376', name: 'Andorra', flag: 'https://flagcdn.com/ad.svg' },
    { code: '+244', name: 'Angola', flag: 'https://flagcdn.com/ao.svg' },
    { code: '+1', name: 'Antigua and Barbuda', flag: 'https://flagcdn.com/ag.svg' },
    { code: '+54', name: 'Argentina', flag: 'https://flagcdn.com/ar.svg' },
    { code: '+374', name: 'Armenia', flag: 'https://flagcdn.com/am.svg' },
    { code: '+61', name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
    { code: '+43', name: 'Austria', flag: 'https://flagcdn.com/at.svg' },
    { code: '+994', name: 'Azerbaijan', flag: 'https://flagcdn.com/az.svg' },
    { code: '+1', name: 'Bahamas', flag: 'https://flagcdn.com/bs.svg' },
    { code: '+973', name: 'Bahrain', flag: 'https://flagcdn.com/bh.svg' },
    { code: '+880', name: 'Bangladesh', flag: 'https://flagcdn.com/bd.svg' },
    { code: '+1', name: 'Barbados', flag: 'https://flagcdn.com/bb.svg' },
    { code: '+375', name: 'Belarus', flag: 'https://flagcdn.com/by.svg' },
    { code: '+32', name: 'Belgium', flag: 'https://flagcdn.com/be.svg' },
    { code: '+501', name: 'Belize', flag: 'https://flagcdn.com/bz.svg' },
    { code: '+229', name: 'Benin', flag: 'https://flagcdn.com/bj.svg' },
    { code: '+975', name: 'Bhutan', flag: 'https://flagcdn.com/bt.svg' },
    { code: '+591', name: 'Bolivia', flag: 'https://flagcdn.com/bo.svg' },
    { code: '+387', name: 'Bosnia and Herzegovina', flag: 'https://flagcdn.com/ba.svg' },
    { code: '+267', name: 'Botswana', flag: 'https://flagcdn.com/bw.svg' },
    { code: '+55', name: 'Brazil', flag: 'https://flagcdn.com/br.svg' },
    { code: '+673', name: 'Brunei', flag: 'https://flagcdn.com/bn.svg' },
    { code: '+359', name: 'Bulgaria', flag: 'https://flagcdn.com/bg.svg' },
    { code: '+226', name: 'Burkina Faso', flag: 'https://flagcdn.com/bf.svg' },
    { code: '+257', name: 'Burundi', flag: 'https://flagcdn.com/bi.svg' },
    { code: '+855', name: 'Cambodia', flag: 'https://flagcdn.com/kh.svg' },
    { code: '+237', name: 'Cameroon', flag: 'https://flagcdn.com/cm.svg' },
    { code: '+1', name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
    { code: '+238', name: 'Cape Verde', flag: 'https://flagcdn.com/cv.svg' },
    { code: '+236', name: 'Central African Republic', flag: 'https://flagcdn.com/cf.svg' },
    { code: '+235', name: 'Chad', flag: 'https://flagcdn.com/td.svg' },
    { code: '+56', name: 'Chile', flag: 'https://flagcdn.com/cl.svg' },
    { code: '+86', name: 'China', flag: 'https://flagcdn.com/cn.svg' },
    { code: '+57', name: 'Colombia', flag: 'https://flagcdn.com/co.svg' },
    { code: '+269', name: 'Comoros', flag: 'https://flagcdn.com/km.svg' },
    { code: '+242', name: 'Congo', flag: 'https://flagcdn.com/cg.svg' },
    { code: '+506', name: 'Costa Rica', flag: 'https://flagcdn.com/cr.svg' },
    { code: '+385', name: 'Croatia', flag: 'https://flagcdn.com/hr.svg' },
    { code: '+53', name: 'Cuba', flag: 'https://flagcdn.com/cu.svg' },
    { code: '+357', name: 'Cyprus', flag: 'https://flagcdn.com/cy.svg' },
    { code: '+420', name: 'Czech Republic', flag: 'https://flagcdn.com/cz.svg' },
    { code: '+45', name: 'Denmark', flag: 'https://flagcdn.com/dk.svg' },
    { code: '+253', name: 'Djibouti', flag: 'https://flagcdn.com/dj.svg' },
    { code: '+1', name: 'Dominica', flag: 'https://flagcdn.com/dm.svg' },
    { code: '+1', name: 'Dominican Republic', flag: 'https://flagcdn.com/do.svg' },
    { code: '+670', name: 'East Timor', flag: 'https://flagcdn.com/tl.svg' },
    { code: '+593', name: 'Ecuador', flag: 'https://flagcdn.com/ec.svg' },
    { code: '+20', name: 'Egypt', flag: 'https://flagcdn.com/eg.svg' },
    { code: '+503', name: 'El Salvador', flag: 'https://flagcdn.com/sv.svg' },
    { code: '+240', name: 'Equatorial Guinea', flag: 'https://flagcdn.com/gq.svg' },
    { code: '+291', name: 'Eritrea', flag: 'https://flagcdn.com/er.svg' },
    { code: '+372', name: 'Estonia', flag: 'https://flagcdn.com/ee.svg' },
    { code: '+251', name: 'Ethiopia', flag: 'https://flagcdn.com/et.svg' },
    { code: '+679', name: 'Fiji', flag: 'https://flagcdn.com/fj.svg' },
    { code: '+358', name: 'Finland', flag: 'https://flagcdn.com/fi.svg' },
    { code: '+33', name: 'France', flag: 'https://flagcdn.com/fr.svg' },
    { code: '+241', name: 'Gabon', flag: 'https://flagcdn.com/ga.svg' },
    { code: '+220', name: 'Gambia', flag: 'https://flagcdn.com/gm.svg' },
    { code: '+995', name: 'Georgia', flag: 'https://flagcdn.com/ge.svg' },
    { code: '+49', name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
    { code: '+233', name: 'Ghana', flag: 'https://flagcdn.com/gh.svg' },
    { code: '+30', name: 'Greece', flag: 'https://flagcdn.com/gr.svg' },
    { code: '+1', name: 'Grenada', flag: 'https://flagcdn.com/gd.svg' },
    { code: '+502', name: 'Guatemala', flag: 'https://flagcdn.com/gt.svg' },
    { code: '+224', name: 'Guinea', flag: 'https://flagcdn.com/gn.svg' },
    { code: '+245', name: 'Guinea-Bissau', flag: 'https://flagcdn.com/gw.svg' },
    { code: '+592', name: 'Guyana', flag: 'https://flagcdn.com/gy.svg' },
    { code: '+509', name: 'Haiti', flag: 'https://flagcdn.com/ht.svg' },
    { code: '+504', name: 'Honduras', flag: 'https://flagcdn.com/hn.svg' },
    { code: '+36', name: 'Hungary', flag: 'https://flagcdn.com/hu.svg' },
    { code: '+354', name: 'Iceland', flag: 'https://flagcdn.com/is.svg' },
    { code: '+91', name: 'India', flag: 'https://flagcdn.com/in.svg' },
    { code: '+62', name: 'Indonesia', flag: 'https://flagcdn.com/id.svg' },
    { code: '+98', name: 'Iran', flag: 'https://flagcdn.com/ir.svg' },
    { code: '+964', name: 'Iraq', flag: 'https://flagcdn.com/iq.svg' },
    { code: '+353', name: 'Ireland', flag: 'https://flagcdn.com/ie.svg' },
    { code: '+972', name: 'Israel', flag: 'https://flagcdn.com/il.svg' },
    { code: '+39', name: 'Italy', flag: 'https://flagcdn.com/it.svg' },
    { code: '+1', name: 'Jamaica', flag: 'https://flagcdn.com/jm.svg' },
    { code: '+81', name: 'Japan', flag: 'https://flagcdn.com/jp.svg' },
    { code: '+962', name: 'Jordan', flag: 'https://flagcdn.com/jo.svg' },
    { code: '+7', name: 'Kazakhstan', flag: 'https://flagcdn.com/kz.svg' },
    { code: '+254', name: 'Kenya', flag: 'https://flagcdn.com/ke.svg' },
    { code: '+686', name: 'Kiribati', flag: 'https://flagcdn.com/ki.svg' },
    { code: '+850', name: 'North Korea', flag: 'https://flagcdn.com/kp.svg' },
    { code: '+82', name: 'South Korea', flag: 'https://flagcdn.com/kr.svg' },
    { code: '+965', name: 'Kuwait', flag: 'https://flagcdn.com/kw.svg' },
    { code: '+996', name: 'Kyrgyzstan', flag: 'https://flagcdn.com/kg.svg' },
    { code: '+856', name: 'Laos', flag: 'https://flagcdn.com/la.svg' },
    { code: '+371', name: 'Latvia', flag: 'https://flagcdn.com/lv.svg' },
    { code: '+961', name: 'Lebanon', flag: 'https://flagcdn.com/lb.svg' },
    { code: '+266', name: 'Lesotho', flag: 'https://flagcdn.com/ls.svg' },
    { code: '+231', name: 'Liberia', flag: 'https://flagcdn.com/lr.svg' },
    { code: '+218', name: 'Libya', flag: 'https://flagcdn.com/ly.svg' },
    { code: '+423', name: 'Liechtenstein', flag: 'https://flagcdn.com/li.svg' },
    { code: '+370', name: 'Lithuania', flag: 'https://flagcdn.com/lt.svg' },
    { code: '+352', name: 'Luxembourg', flag: 'https://flagcdn.com/lu.svg' },
    { code: '+389', name: 'North Macedonia', flag: 'https://flagcdn.com/mk.svg' },
    { code: '+261', name: 'Madagascar', flag: 'https://flagcdn.com/mg.svg' },
    { code: '+265', name: 'Malawi', flag: 'https://flagcdn.com/mw.svg' },
    { code: '+60', name: 'Malaysia', flag: 'https://flagcdn.com/my.svg' },
    { code: '+960', name: 'Maldives', flag: 'https://flagcdn.com/mv.svg' },
    { code: '+223', name: 'Mali', flag: 'https://flagcdn.com/ml.svg' },
    { code: '+356', name: 'Malta', flag: 'https://flagcdn.com/mt.svg' },
    { code: '+692', name: 'Marshall Islands', flag: 'https://flagcdn.com/mh.svg' },
    { code: '+222', name: 'Mauritania', flag: 'https://flagcdn.com/mr.svg' },
    { code: '+230', name: 'Mauritius', flag: 'https://flagcdn.com/mu.svg' },
    { code: '+52', name: 'Mexico', flag: 'https://flagcdn.com/mx.svg' },
    { code: '+691', name: 'Micronesia', flag: 'https://flagcdn.com/fm.svg' },
    { code: '+373', name: 'Moldova', flag: 'https://flagcdn.com/md.svg' },
    { code: '+377', name: 'Monaco', flag: 'https://flagcdn.com/mc.svg' },
    { code: '+976', name: 'Mongolia', flag: 'https://flagcdn.com/mn.svg' },
    { code: '+382', name: 'Montenegro', flag: 'https://flagcdn.com/me.svg' },
    { code: '+212', name: 'Morocco', flag: 'https://flagcdn.com/ma.svg' },
    { code: '+258', name: 'Mozambique', flag: 'https://flagcdn.com/mz.svg' },
    { code: '+95', name: 'Myanmar', flag: 'https://flagcdn.com/mm.svg' },
    { code: '+264', name: 'Namibia', flag: 'https://flagcdn.com/na.svg' },
    { code: '+674', name: 'Nauru', flag: 'https://flagcdn.com/nr.svg' },
    { code: '+977', name: 'Nepal', flag: 'https://flagcdn.com/np.svg' },
    { code: '+31', name: 'Netherlands', flag: 'https://flagcdn.com/nl.svg' },
    { code: '+64', name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg' },
    { code: '+505', name: 'Nicaragua', flag: 'https://flagcdn.com/ni.svg' },
    { code: '+227', name: 'Niger', flag: 'https://flagcdn.com/ne.svg' },
    { code: '+234', name: 'Nigeria', flag: 'https://flagcdn.com/ng.svg' },
    { code: '+47', name: 'Norway', flag: 'https://flagcdn.com/no.svg' },
    { code: '+968', name: 'Oman', flag: 'https://flagcdn.com/om.svg' },
    { code: '+92', name: 'Pakistan', flag: 'https://flagcdn.com/pk.svg' },
    { code: '+680', name: 'Palau', flag: 'https://flagcdn.com/pw.svg' },
    { code: '+507', name: 'Panama', flag: 'https://flagcdn.com/pa.svg' },
    { code: '+675', name: 'Papua New Guinea', flag: 'https://flagcdn.com/pg.svg' },
    { code: '+595', name: 'Paraguay', flag: 'https://flagcdn.com/py.svg' },
    { code: '+51', name: 'Peru', flag: 'https://flagcdn.com/pe.svg' },
    { code: '+63', name: 'Philippines', flag: 'https://flagcdn.com/ph.svg' },
    { code: '+48', name: 'Poland', flag: 'https://flagcdn.com/pl.svg' },
    { code: '+351', name: 'Portugal', flag: 'https://flagcdn.com/pt.svg' },
    { code: '+974', name: 'Qatar', flag: 'https://flagcdn.com/qa.svg' },
    { code: '+40', name: 'Romania', flag: 'https://flagcdn.com/ro.svg' },
    { code: '+7', name: 'Russia', flag: 'https://flagcdn.com/ru.svg' },
    { code: '+250', name: 'Rwanda', flag: 'https://flagcdn.com/rw.svg' },
    { code: '+1', name: 'Saint Kitts and Nevis', flag: 'https://flagcdn.com/kn.svg' },
    { code: '+1', name: 'Saint Lucia', flag: 'https://flagcdn.com/lc.svg' },
    { code: '+1', name: 'Saint Vincent', flag: 'https://flagcdn.com/vc.svg' },
    { code: '+685', name: 'Samoa', flag: 'https://flagcdn.com/ws.svg' },
    { code: '+378', name: 'San Marino', flag: 'https://flagcdn.com/sm.svg' },
    { code: '+239', name: 'Sao Tome and Principe', flag: 'https://flagcdn.com/st.svg' },
    { code: '+966', name: 'Saudi Arabia', flag: 'https://flagcdn.com/sa.svg' },
    { code: '+221', name: 'Senegal', flag: 'https://flagcdn.com/sn.svg' },
    { code: '+381', name: 'Serbia', flag: 'https://flagcdn.com/rs.svg' },
    { code: '+248', name: 'Seychelles', flag: 'https://flagcdn.com/sc.svg' },
    { code: '+232', name: 'Sierra Leone', flag: 'https://flagcdn.com/sl.svg' },
    { code: '+65', name: 'Singapore', flag: 'https://flagcdn.com/sg.svg' },
    { code: '+421', name: 'Slovakia', flag: 'https://flagcdn.com/sk.svg' },
    { code: '+386', name: 'Slovenia', flag: 'https://flagcdn.com/si.svg' },
    { code: '+677', name: 'Solomon Islands', flag: 'https://flagcdn.com/sb.svg' },
    { code: '+252', name: 'Somalia', flag: 'https://flagcdn.com/so.svg' },
    { code: '+27', name: 'South Africa', flag: 'https://flagcdn.com/za.svg' },
    { code: '+211', name: 'South Sudan', flag: 'https://flagcdn.com/ss.svg' },
    { code: '+34', name: 'Spain', flag: 'https://flagcdn.com/es.svg' },
    { code: '+94', name: 'Sri Lanka', flag: 'https://flagcdn.com/lk.svg' },
    { code: '+249', name: 'Sudan', flag: 'https://flagcdn.com/sd.svg' },
    { code: '+597', name: 'Suriname', flag: 'https://flagcdn.com/sr.svg' },
    { code: '+268', name: 'Eswatini', flag: 'https://flagcdn.com/sz.svg' },
    { code: '+46', name: 'Sweden', flag: 'https://flagcdn.com/se.svg' },
    { code: '+41', name: 'Switzerland', flag: 'https://flagcdn.com/ch.svg' },
    { code: '+963', name: 'Syria', flag: 'https://flagcdn.com/sy.svg' },
    { code: '+886', name: 'Taiwan', flag: 'https://flagcdn.com/tw.svg' },
    { code: '+992', name: 'Tajikistan', flag: 'https://flagcdn.com/tj.svg' },
    { code: '+255', name: 'Tanzania', flag: 'https://flagcdn.com/tz.svg' },
    { code: '+66', name: 'Thailand', flag: 'https://flagcdn.com/th.svg' },
    { code: '+228', name: 'Togo', flag: 'https://flagcdn.com/tg.svg' },
    { code: '+676', name: 'Tonga', flag: 'https://flagcdn.com/to.svg' },
    { code: '+1', name: 'Trinidad and Tobago', flag: 'https://flagcdn.com/tt.svg' },
    { code: '+216', name: 'Tunisia', flag: 'https://flagcdn.com/tn.svg' },
    { code: '+90', name: 'Turkey', flag: 'https://flagcdn.com/tr.svg' },
    { code: '+993', name: 'Turkmenistan', flag: 'https://flagcdn.com/tm.svg' },
    { code: '+688', name: 'Tuvalu', flag: 'https://flagcdn.com/tv.svg' },
    { code: '+256', name: 'Uganda', flag: 'https://flagcdn.com/ug.svg' },
    { code: '+380', name: 'Ukraine', flag: 'https://flagcdn.com/ua.svg' },
    { code: '+971', name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg' },
    { code: '+44', name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
    { code: '+1', name: 'United States', flag: 'https://flagcdn.com/us.svg' },
    { code: '+598', name: 'Uruguay', flag: 'https://flagcdn.com/uy.svg' },
    { code: '+998', name: 'Uzbekistan', flag: 'https://flagcdn.com/uz.svg' },
    { code: '+678', name: 'Vanuatu', flag: 'https://flagcdn.com/vu.svg' },
    { code: '+379', name: 'Vatican City', flag: 'https://flagcdn.com/va.svg' },
    { code: '+58', name: 'Venezuela', flag: 'https://flagcdn.com/ve.svg' },
    { code: '+84', name: 'Vietnam', flag: 'https://flagcdn.com/vn.svg' },
    { code: '+967', name: 'Yemen', flag: 'https://flagcdn.com/ye.svg' },
    { code: '+260', name: 'Zambia', flag: 'https://flagcdn.com/zm.svg' },
    { code: '+263', name: 'Zimbabwe', flag: 'https://flagcdn.com/zw.svg' }
  ];

  const handleCountrySelect = (country) => {
    setFormData({ ...formData, countryCode: country.code });
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      fullName: '',
      email: '',
      mobileNumber: '',
      pincode: ''
    });
    alert('Thank you for booking a consultation. We will contact you shortly!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="home">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Transform Your Future with<br />GLOBAL EDUCATION</h1>
          <p className="hero-subtitle">Your Gateway to World-Class Universities and Life-Changing Opportunities</p>
          <ul className="features-list">
            <li>Personalized Guidance from Expert Counselors</li>
            <li>Access to 500+ Top-Ranked Universities Worldwide</li>
            <li>Courses starting from ₹8 Lakhs with Scholarships up to ₹10,00,000*</li>
            <li>Fast-Track Processing - Offer Letters within 48 Hours*</li>
            <li>Comprehensive Support - From Application to Visa</li>
            <li>95% Visa Success Rate with Expert Documentation*</li>
          </ul>
          <div className="hero-buttons">
            <Link to="/universities" className="button primary">Explore Universities</Link>
            <Link to="/scholarships" className="button secondary">View Scholarships</Link>
          </div>
        </motion.div>

        <motion.div 
          className="form-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-card">
            <h2>Start your Study Abroad Journey</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Full Name*"
                  required
                />
              </div>
              <div className="form-group">
                <label>Enter Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email Address*"
                  required
                />
              </div>
              <div className="form-group">
                <label>Mobile number*</label>
                <div className="mobile-input">
                  <div 
                    className="country-selector"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <img 
                      src={countries.find(c => c.code === formData.countryCode)?.flag} 
                      alt="country flag" 
                      className="flag-icon"
                    />
                    <span>{formData.countryCode}</span>
                    <span className="dropdown-arrow">▼</span>
                    
                    {isDropdownOpen && (
                      <div className="country-dropdown">
                        {countries.map((country) => (
                          <div 
                            key={`${country.code}-${country.name}`}
                            className="country-option"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCountrySelect(country);
                            }}
                          >
                            <img src={country.flag} alt={country.name} className="flag-icon" />
                            <span className="country-name">{country.name}</span>
                            <span className="country-code">{country.code}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode*"
                  pattern="[0-9]{6}"
                  required
                />
              </div>
              <div className="form-group checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I have read and agreed to <a href="/terms">terms</a> & <a href="/privacy-policy">privacy policy</a>
                </label>
              </div>
              <button type="submit" className="submit-button">Book your free consultation</button>
            </form>
          </div>
        </motion.div>
      </div>

      <motion.section 
        className="services"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Study Abroad</h3>
            <p>Find the perfect university and program for your educational journey</p>
            <Link to="/study-abroad">Learn More</Link>
          </div>
          <div className="service-card">
            <h3>Work Abroad</h3>
            <p>Discover international career opportunities and work permits</p>
            <Link to="/work-abroad">Learn More</Link>
          </div>
          <div className="service-card">
            <h3>Documentation</h3>
            <p>Complete assistance with visa and permit applications</p>
            <Link to="/documentation">Learn More</Link>
          </div>
        </div>
      </motion.section>

      <section className="statistics">
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Students Placed</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Partner Universities</p>
        </div>
        <div className="stat-item">
          <h3>30+</h3>
          <p>Countries</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"The guidance I received was invaluable for my studies in Canada."</p>
            <h4>Sarah Johnson</h4>
            <p>University of Toronto</p>
          </div>
          <div className="testimonial-card">
            <p>"Found my dream job in Germany thanks to their expert support."</p>
            <h4>Michael Chen</h4>
            <p>Software Engineer, Berlin</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;