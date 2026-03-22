import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Self / Academic Projects</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed multiple self and academic projects, including clone websites focusing mainly on frontend development using React.js, HTML, CSS, and JavaScript. Implemented responsive and user-friendly UI designs. On the backend, worked with Node.js and used REST APIs for handling data and basic functionality. Also utilized AI tools in some parts of development for learning and improving efficiency, while ensuring a clear understanding of core concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Trainee</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Learned and worked on various technologies including React.js, Node.js, MongoDB, and Express.js. Developed multiple projects using these technologies and gained hands-on experience in full-stack development. Also learned about software development life cycle and agile methodologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>At Chetan's Royal Webtech Pvt. Ltd.</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Worked on real-time client projects involving frontend and backend integration. Developed dynamic and responsive user interfaces while handling backend logic, APIs, and database operations. Collaborated with team members to deliver project requirements, fixed bugs, and contributed to improving overall application performance and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
