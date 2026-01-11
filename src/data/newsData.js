export const newsArticles = [
    {
        id: 1,
        title: "New Eye Care Unit Expansion Complete",
        excerpt: "Venus Hospital expands optical services with advanced diagnostic equipment and larger product showroom.",
        date: "December 15, 2024",
        image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678730/IMG_5603_gwk6xh.jpg",
        category: "Facilities",
        author: "Dr. Sarah Johnson",
        content: `
      <p>We are thrilled to announce the completion of our state-of-the-art Eye Care Unit expansion at Venus Hospital. This significant milestone represents our commitment to providing world-class optical services to our community.</p>
      
      <h3>Advanced Diagnostic Equipment</h3>
      <p>The new facility features cutting-edge diagnostic equipment including:</p>
      <ul>
        <li>Latest generation OCT (Optical Coherence Tomography) scanners for detailed retinal imaging</li>
        <li>Advanced corneal topography systems for precise measurements</li>
        <li>Digital refraction systems for accurate prescription determination</li>
        <li>Automated visual field analyzers for comprehensive eye health assessment</li>
      </ul>
      
      <h3>Expanded Product Showroom</h3>
      <p>Our larger product showroom now offers an extensive selection of eyewear options, including designer frames, specialized sports eyewear, and the latest in lens technology. Our experienced opticians are available to help you find the perfect eyewear solution.</p>
      
      <h3>Enhanced Patient Experience</h3>
      <p>The expansion includes comfortable waiting areas, private consultation rooms, and streamlined patient flow to ensure a pleasant and efficient visit. We've designed every aspect of the new facility with patient comfort and care quality in mind.</p>
      
      <p>Visit our Eye Care Unit to experience the difference that modern facilities and expert care can make in your vision health.</p>
    `,
    },
    {
        id: 2,
        title: "Dental Facilities Available",
        excerpt: "Upgraded emergency department with faster response times and expanded medical staff availability.",
        date: "December 10, 2024",
        image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678732/IMG_5778_h08sjs.jpg",
        category: "Services",
        author: "Dr. Michael Chen",
        content: `
      <p>Venus Hospital is proud to introduce our comprehensive dental care facilities, designed to provide exceptional oral health services to patients of all ages.</p>
      
      <h3>Complete Dental Services</h3>
      <p>Our dental department offers a full range of services including:</p>
      <ul>
        <li>Preventive care and routine check-ups</li>
        <li>Cosmetic dentistry including teeth whitening and veneers</li>
        <li>Restorative procedures such as fillings, crowns, and bridges</li>
        <li>Orthodontic treatments for children and adults</li>
        <li>Oral surgery and wisdom teeth extraction</li>
        <li>Emergency dental care available 24/7</li>
      </ul>
      
      <h3>Modern Technology</h3>
      <p>We utilize the latest dental technology to ensure precise diagnoses and comfortable treatments. Our facilities include digital X-ray systems, intraoral cameras, and advanced sterilization equipment to maintain the highest standards of safety and care.</p>
      
      <h3>Expert Dental Team</h3>
      <p>Our team of experienced dentists and dental hygienists is dedicated to providing personalized care in a comfortable, welcoming environment. We take the time to understand your concerns and develop treatment plans tailored to your needs.</p>
      
      <p>Schedule your appointment today and experience quality dental care at Venus Hospital.</p>
    `,
    },
    {
        id: 3,
        title: "Free Health Camp This Weekend",
        excerpt: "Join us for complimentary health screenings, consultations, and wellness education for the community.",
        date: "December 5, 2024",
        image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_6052_csduat.jpg",
        category: "Community",
        author: "Community Outreach Team",
        content: `
      <p>Venus Hospital is organizing a Free Health Camp this weekend as part of our ongoing commitment to community health and wellness. This event is open to all community members and their families.</p>
      
      <h3>Event Details</h3>
      <p><strong>Date:</strong> Saturday & Sunday, December 7-8, 2024<br>
      <strong>Time:</strong> 9:00 AM - 5:00 PM<br>
      <strong>Location:</strong> Venus Hospital Main Campus</p>
      
      <h3>Free Services Offered</h3>
      <ul>
        <li>Blood pressure and diabetes screening</li>
        <li>BMI and general health assessment</li>
        <li>Eye examination and vision testing</li>
        <li>Dental check-ups and oral health counseling</li>
        <li>Nutritional counseling and diet planning</li>
        <li>Consultations with specialist doctors</li>
        <li>Health education sessions on various topics</li>
      </ul>
      
      <h3>Special Programs</h3>
      <p>Throughout the day, we'll be conducting educational sessions on important health topics including:</p>
      <ul>
        <li>Managing chronic conditions like diabetes and hypertension</li>
        <li>Heart health and cardiovascular wellness</li>
        <li>Nutrition and healthy eating habits</li>
        <li>Exercise and physical fitness</li>
        <li>Mental health and stress management</li>
      </ul>
      
      <h3>Registration</h3>
      <p>No prior registration is required. Simply walk in during the event hours. However, early arrival is recommended to avoid long wait times.</p>
      
      <p>We look forward to serving our community and helping you take the first step toward better health. Bring your family and friends!</p>
    `,
    },
];

export const getArticleById = (id) => {
    return newsArticles.find(article => article.id === parseInt(id));
};

export const getRelatedArticles = (currentId, category, limit = 2) => {
    return newsArticles
        .filter(article => article.id !== parseInt(currentId) && article.category === category)
        .slice(0, limit);
};
