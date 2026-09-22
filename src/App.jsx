import "./App.css";
import profileImage from "./assets/thoufeek.jpg";

const projects = [
  {
    number: "01",
    type: "AI • MERN • FULL STACK",
    title: "AI-Powered",
    highlight: "MERN Application",
    description:
      "A full-stack AI platform combining multiple AI-powered development and productivity tools into one modern web application.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Gemini API",
      "CodeLLaMA",
      "Tailwind CSS",
      "Monaco Editor",
    ],
    features: [
      "AI Code Debugger",
      "SQL Query Generator",
      "Text Summarization",
      "Grammar Correction",
      "AI Chatbot",
      "Words-to-Paragraph Converter",
    ],
  },

  {
    number: "02",
    type: "GOVERNMENT • WEB APPLICATION",
    title: "IT Mission",
    highlight: "Manpower Portal",
    description:
      "A government-oriented manpower management platform designed to support employee and workforce-related processes through a structured web interface.",
    technologies: [
      "React",
      "Node.js",
      "REST API",
      "Database",
      "Authentication",
      "Web Application",
    ],
    features: [
      "Employee Management",
      "Manpower Information",
      "Administrative Workflows",
      "User Management",
      "Data Management",
      "Web Dashboard",
    ],
  },

  {
    number: "03",
    type: "AI • CHATBOT • KNOWLEDGE SYSTEM",
    title: "AI Government",
    highlight: "Chatbot",
    description:
      "An AI chatbot designed to provide government-related information through an integrated knowledge source and conversational user experience.",
    technologies: [
      "Artificial Intelligence",
      "Knowledge Source",
      "Chatbot",
      "REST API",
      "Web UI",
      "Natural Language",
    ],
    features: [
      "AI Conversation",
      "Knowledge-Based Answers",
      "Government Information",
      "Natural Language Queries",
      "Chat Interface",
      "Information Retrieval",
    ],
  },

  {
    number: "04",
    type: "ANDROID • ATTENDANCE • GOVERNMENT",
    title: "Government",
    highlight: "Attendance System",
    description:
      "A government-oriented attendance and public issue management system combining employee attendance, face verification, office location validation and QR-based issue reporting.",
    technologies: [
      "Android",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST API",
    ],
    features: [
      "Employee Punch In / Out",
      "Face Verification",
      "Office Geolocation",
      "QR Issue Reporting",
      "Manager Dashboard",
      "District Officer View",
    ],
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MongoDB Atlas", "PostgreSQL"],
  },
  {
    title: "AI / Tools",
    items: [
      "Google Gemini API",
      "CodeLLaMA",
      "Monaco Editor",
      "Git",
      "GitHub",
    ],
  },
];

const education = [
  {
    year: "CURRENT",
    title: "BA Sociology",
    place: "Indira Gandhi National Open University",
  },
  {
    year: "PROFESSIONAL TRAINING",
    title: "MERN Stack Development",
    place: "ICT Academy Kerala",
  },
  {
    year: "DIPLOMA",
    title: "Computer Hardware Engineering",
    place: "Government Polytechnic College, Nedumangad",
  },
  {
    year: "+2",
    title: "Higher Secondary — Bioscience",
    place: "PHMKM VHSS",
  },
];

function ArrowUpRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6-.01c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.98 1.98 0 1 0 5.25 7a1.98 1.98 0 0 0 0-4ZM20.44 13.4c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.38v-6.39c0-1.68.32-3.31 2.4-3.31 2.04 0 2.06 1.92 2.06 3.42V20h3.24v-6.6Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-mark">TT</span>

          <span className="logo-name">
            THOUFEEK<span>.</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk
          <ArrowUpRight />
        </a>
      </header>

      {/* ================= HERO ================= */}

      <main id="home">

        <section className="hero">

          <div className="hero-background-glow glow-one"></div>
          <div className="hero-background-glow glow-two"></div>

          <div className="hero-content">

            <div className="hero-left">

              <div className="availability">
                <span className="availability-dot"></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <p className="hero-overline">
                IT & SOFTWARE ENGINEER
              </p>

              <h1 className="hero-title">
                BUILDING
                <span>DIGITAL</span>
                <span className="gradient-text">EXPERIENCES.</span>
              </h1>

              <p className="hero-description">
                I build modern web applications, AI-powered solutions
                and government-focused digital systems using modern
                full-stack technologies.
              </p>

              <div className="hero-buttons">

                <a href="#projects" className="primary-button">
                  Explore Projects
                  <ArrowUpRight />
                </a>

                <a href="#contact" className="secondary-button">
                  Contact Me
                </a>

              </div>

              <div className="hero-tech-row">
                <span>REACT</span>
                <span>NODE.JS</span>
                <span>EXPRESS</span>
                <span>MONGODB</span>
                <span>POSTGRESQL</span>
              </div>

            </div>

            <div className="hero-right">

              <div className="photo-orbit orbit-one"></div>
              <div className="photo-orbit orbit-two"></div>

              <div className="profile-card">

                <img
                  src={profileImage}
                  alt="Thoufeek T"
                  className="profile-image"
                />

                <div className="profile-overlay"></div>

                <div className="profile-info">
                  <p>SOFTWARE ENGINEER</p>
                  <h2>THOUFEEK T</h2>
                </div>

                <div className="profile-corner">
                  <ArrowUpRight />
                </div>

              </div>

              <div className="floating-card floating-card-one">
                <span className="floating-number">04</span>
                <span>FEATURED<br />PROJECTS</span>
              </div>

              <div className="floating-card floating-card-two">
                <span className="floating-icon">✦</span>
                <span>AI + WEB<br />DEVELOPMENT</span>
              </div>

            </div>

          </div>

          <a href="#about" className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown />
          </a>

        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">

          <div className="section-label">
            <span>01</span>
            ABOUT ME
          </div>

          <div className="about-grid">

            <div className="about-heading">
              <p className="small-label">WHO I AM</p>

              <h2>
                Turning ideas into
                <span> digital products.</span>
              </h2>
            </div>

            <div className="about-content">

              <p className="large-text">
                I am an IT & Software Engineer focused on building
                practical, modern and scalable software solutions.
              </p>

              <p>
                My primary development focus is the MERN stack, with
                experience working across frontend interfaces, backend
                services, APIs, databases and AI-powered applications.
              </p>

              <p>
                I am particularly interested in technology projects
                that solve real-world problems and improve digital
                services for users.
              </p>

              <div className="about-stats">

                <div>
                  <strong>04</strong>
                  <span>Major Projects</span>
                </div>

                <div>
                  <strong>MERN</strong>
                  <span>Primary Stack</span>
                </div>

                <div>
                  <strong>AI</strong>
                  <span>Development Focus</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="section experience-section">

          <div className="section-label">
            <span>02</span>
            EXPERIENCE
          </div>

          <div className="experience-card">

            <div className="experience-top">

              <div>
                <p className="small-label">PROFESSIONAL EXPERIENCE</p>

                <h2>
                  Kerala State
                  <span> IT Mission</span>
                </h2>
              </div>

              <div className="experience-date">
                JULY 2026 — PRESENT
              </div>

            </div>

            <div className="experience-bottom">

              <div className="experience-role">
                <span className="role-dot"></span>
                APPRENTICE DEVELOPER
              </div>

              <p>
                Working in a government-oriented technology environment
                and contributing to software development projects using
                modern web technologies. Working with React, Node.js,
                Express.js, databases and API-driven applications.
              </p>

            </div>

          </div>

        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section skills-section">

          <div className="section-label">
            <span>03</span>
            TECHNOLOGIES
          </div>

          <div className="skills-heading">

            <div>
              <p className="small-label">MY TOOLKIT</p>

              <h2>
                Technologies I
                <span> work with.</span>
              </h2>
            </div>

            <p>
              A practical technology stack covering frontend,
              backend, databases, APIs and AI-powered development.
            </p>

          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.title}>

                <div className="skill-number">
                  0{index + 1}
                </div>

                <h3>{skill.title}</h3>

                <div className="skill-items">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section projects-section">

          <div className="section-label">
            <span>04</span>
            SELECTED WORK
          </div>

          <div className="projects-heading">

            <div>
              <p className="small-label">PROJECTS</p>

              <h2>
                Things I have
                <span> built.</span>
              </h2>
            </div>

            <p>
              Selected applications and systems covering AI,
              full-stack development and government technology.
            </p>

          </div>

          <div className="projects-list">

            {projects.map((project) => (

              <article className="project-card" key={project.number}>

                <div className="project-header">

                  <div className="project-number">
                    {project.number}
                  </div>

                  <span className="project-type">
                    {project.type}
                  </span>

                  <div className="project-arrow">
                    <ArrowUpRight />
                  </div>

                </div>

                <div className="project-main">

                  <div className="project-title">

                    <h3>{project.title}</h3>

                    <h3 className="project-highlight">
                      {project.highlight}
                    </h3>

                  </div>

                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>

                </div>

                <div className="project-details">

                  <div className="project-block">

                    <span className="detail-title">
                      TECHNOLOGIES
                    </span>

                    <div className="technology-tags">

                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="project-block">

                    <span className="detail-title">
                      KEY FEATURES
                    </span>

                    <div className="feature-grid">

                      {project.features.map((feature) => (
                        <div key={feature}>
                          <span className="feature-check">+</span>
                          {feature}
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* ================= EDUCATION ================= */}

        <section id="education" className="section education-section">

          <div className="section-label">
            <span>05</span>
            EDUCATION
          </div>

          <div className="education-heading">

            <p className="small-label">ACADEMIC BACKGROUND</p>

            <h2>
              Learning,
              <span> building, growing.</span>
            </h2>

          </div>

          <div className="education-list">

            {education.map((item, index) => (

              <div className="education-item" key={item.title}>

                <div className="education-index">
                  0{index + 1}
                </div>

                <div className="education-info">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>

                <div className="education-arrow">
                  <ArrowUpRight />
                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ================= TECHNOLOGY BANNER ================= */}

        <section className="technology-banner">

          <div className="banner-glow"></div>

          <div className="banner-content">

            <p>FULL STACK • AI • GOVERNMENT TECHNOLOGY</p>

            <h2>
              BUILD.
              <span> LEARN.</span>
              <br />
              <strong>CREATE.</strong>
            </h2>

            <div className="banner-line"></div>

            <p className="banner-description">
              Focused on building useful software with modern
              technologies and meaningful user experiences.
            </p>

          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact-section">

          <div className="contact-glow"></div>

          <div className="contact-label">
            <span>06</span>
            CONTACT
          </div>

          <div className="contact-content">

            <p className="small-label">
              HAVE A PROJECT OR OPPORTUNITY?
            </p>

            <h2>
              LET'S
              <span> TALK.</span>
            </h2>

            <p className="contact-description">
              If you would like to discuss a project, development
              opportunity or collaboration, feel free to reach out.
            </p>

            <a
              href="mailto:thoufeekthoufeek599@gmail.com"
              className="email-button"
            >
              <MailIcon />
              thoufeekthoufeek599@gmail.com
              <ArrowUpRight />
            </a>

          </div>

          <div className="contact-links">

            <a
              href="https://github.com/Thoufeek599"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />

              <span>
                <small>GITHUB</small>
                <strong>Thoufeek599</strong>
              </span>

              <ArrowUpRight />
            </a>

            <a
              href="https://www.linkedin.com/in/thoufeekthoufee"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />

              <span>
                <small>LINKEDIN</small>
                <strong>Thoufeek Thoufee</strong>
              </span>

              <ArrowUpRight />
            </a>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-left">
          <span className="footer-logo">TT</span>

          <div>
            <strong>THOUFEEK T</strong>
            <span>IT & SOFTWARE ENGINEER</span>
          </div>
        </div>

        <p>
          © {new Date().getFullYear()} Thoufeek T. All rights reserved.
        </p>

        <a href="#home" className="back-top">
          BACK TO TOP
          <ArrowUpRight />
        </a>

      </footer>

    </div>
  );
}

export default App;