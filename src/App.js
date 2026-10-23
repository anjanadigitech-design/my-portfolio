import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Anjana.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="home">
        <div className="home-content">
          <p className="hello">Hello, I'm</p>

          <h1>Anjana</h1>

          <h2>Python Full Stack Developer</h2>

          <p>
            I am a Python Full Stack Developer and Data Science enthusiast
            interested in building web applications and machine learning
            projects.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile">
          <div className="profile-circle">
              <img src="/anjana.jpg" alt="Anjana" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I recently completed Python Full Stack Development with Django and
          React. I have experience working with Python, Django, Django REST
          Framework, React, SQL and Machine Learning. I enjoy creating
          practical projects and learning new technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-container">
          <div className="skill">Python</div>
          <div className="skill">Django</div>
          <div className="skill">Django REST API</div>
          <div className="skill">React</div>
          <div className="skill">JavaScript</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Machine Learning</div>
          <div className="skill">SQL</div>
          <div className="skill">Git & GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <div className="project-icon">🏥</div>

            <h3>Hospital Management System</h3>

            <p>
              Hospital ERP application developed using React and Django REST
              API with role-based access for Admin, Doctor, Receptionist,
              Pharmacist and Patient.
            </p>

            <span>React</span>
            <span>Django</span>
            <span>REST API</span>
          </div>

          <div className="project-card">
            <div className="project-icon">🛒</div>

            <h3>Django E-commerce</h3>

            <p>
              E-commerce website developed using Django with product
              management, categories, cart, wishlist, orders and user
              authentication.
            </p>

            <span>Django</span>
            <span>Python</span>
            <span>SQLite</span>
          </div>

          <div className="project-card">
            <div className="project-icon">🌱</div>

            <h3>Soil Quality Prediction</h3>

            <p>
              Machine learning project that predicts soil quality using soil
              parameters such as pH, nitrogen, phosphorus, potassium,
              moisture and temperature.
            </p>

            <span>Python</span>
            <span>Machine Learning</span>
            <span>Streamlit</span>
          </div>

          <div className="project-card">
            <div className="project-icon">🚗</div>

            <h3>CO₂ Emission Prediction</h3>

            <p>
              Machine learning project for predicting vehicle CO₂ emissions
              using vehicle and fuel-related features.
            </p>

            <span>Python</span>
            <span>ML</span>
            <span>Scikit-learn</span>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Contact Me</h2>

        <p>
          Interested in working together? Feel free to contact me.
        </p>

        <div className="contact-links">
          <a href="mailto:anjanadigitech@gmail.com">
            📧 Email
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Anjana. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;






