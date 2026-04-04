"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".glass-nav", {y: -100, opacity: 0, duration: 0.8, ease: "power3.out"})
      .from(".sys-init", {opacity: 0, x: -20, duration: 0.5, ease: "power3.out"}, "-=0.4")
      .from(".char", {opacity: 0, y: 20, stagger: 0.03, duration: 0.4, ease: "back.out(2)"}, "-=0.2")
      .from(".char-name", {opacity: 0, scale: 0.8, rotationY: 90, stagger: 0.04, duration: 0.6, ease: "back.out(3)"}, "-=0.2")
      .from(".hero-tagline", {opacity: 0, y: 30, duration: 0.8}, "-=0.2")
      .from(".cta-buttons .btn", {y: 20, opacity: 0, stagger: 0.2, duration: 0.5}, "-=0.5")
      .from(".image-glass-card", {scale: 0.8, opacity: 0, rotation: 5, duration: 1, ease: "power4.out"}, "-=1");

    const sections = gsap.utils.toArray('.section');
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    gsap.fromTo(".timeline-item", {
      x: -50,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: ".timeline",
        // refresh priorities or simple triggers
        start: "top 75%",
      },
      x: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    gsap.fromTo(".skill-tag", {
      scale: 0,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 85%",
      },
      scale: 1,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(2)"
    });
    
    // ensure scroll triggers are recalculated after dom shifts
    setTimeout(() => ScrollTrigger.refresh(), 500);

  }); // Omitted scoped ref so that .glass-nav can be found securely

  return (
    <main ref={container}>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h2 className="hero-subtitle sys-init" style={{display: 'inline-block'}}>SYSTEM.INIT(...)</h2>
          <h1 className="hero-title">
            <span className="user-name inline-block">
              {"Hello, ".split("").map((c,i)=><span key={i} className="char" style={{display:'inline-block'}}>{c === " " ? "\u00A0" : c}</span>)}
              {"I'm".split("").map((c,i)=><span key={i+10} className="char" style={{display:'inline-block'}}>{c}</span>)}
            </span><br/>
            <span className="gradient-text type-effect inline-block">
              {"Freya Jayant Vora".split("").map((c,i)=><span key={i} className="char-name" style={{display:'inline-block'}}>{c === " " ? "\u00A0" : c}</span>)}
            </span>
          </h1>
          <p className="hero-tagline">Full-stack developer with 5+ years building and automating software solutions across consulting, SaaS, and enterprise environments.</p>
          <div className="cta-buttons">
            <a href="#about" className="btn primary-btn">Initialize_Profile</a>
            <a href="#contact" className="btn secondary-btn">Contact_Me</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="image-glass-card">
            {/* Make sure to save the attached image as public/profile.jpg! */}
            <img src="/profile.jpg" alt="Freya Jayant Vora Profile" className="profile-img placeholder-glow" />
            <div className="img-badge">FULL-STACK ENGINEER</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section glass-section">
        <div className="section-header">
           <h2 className="section-title">01. About_Me</h2>
           <div className="line"></div>
        </div>
        <div className="about-content">
          <div className="about-card glass-panel flex-row">
            <div className="about-icon">🪐</div>
            <div className="about-text">
               <h3>Professional Philosophy</h3>
               <p>I focus on blending modern frameworks, reliable back-end architecture, and scalable design to build high-quality solutions. This portfolio itself is a dynamic React application developed to load fast and perform seamlessly.</p>
            </div>
          </div>
          <div className="about-card glass-panel flex-row mt-4">
             <div className="about-icon">⚡</div>
             <div className="about-text">
               <h3>Professional Summary</h3>
               <p>Experience in React.js, Java, Python API development, SQL-based back-end systems, MongoDB, CI/CD pipelines, and SDLC-driven delivery. I collaborate with stakeholders to improve software quality, reduce repetitive work, and implement robust technical solutions.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-header">
           <h2 className="section-title">02. Experience</h2>
           <div className="line"></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>Technical Consultant</h3>
              <span className="timeline-date">Feb 2025 – Present</span>
              <h4>Content Bloom • Bedford, NS</h4>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li style={{ marginBottom: "8px" }}>Owned end-to-end feature development: created Python automation scripts to structure Excel content into the system and Java services generating comprehensive Excel reports, eliminating weekly manual effort.</li>
                <li style={{ marginBottom: "8px" }}>Built Java backend services for automated value updates for custom fields in frontend.</li>
                <li>Maintained Bitbucket CI/CD, Atlassian Jira/Confluence, and SonarQube ensuring reliable delivery.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>Software Engineer Intern</h3>
              <span className="timeline-date">Sep 2024 – Dec 2024</span>
              <h4>Dash Hudson • Halifax, NS</h4>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li style={{ marginBottom: "8px" }}>Built SaaS features using React.js/TypeScript and Python REST APIs with MongoDB/Redis cache for scalable data services.</li>
                <li style={{ marginBottom: "8px" }}>Owned quality through Jest/JUnit testing, debugging, and JIRA-managed Agile sprints.</li>
                <li>Contributed to Bitbucket CI/CD and used Mixpanel analytics driving iterative improvements.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>Technology Consultant</h3>
              <span className="timeline-date">Oct 2022 – Aug 2023</span>
              <h4>NTT Data • Mumbai, India</h4>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li style={{ marginBottom: "8px" }}>Created optimized SQL Views from tables, minimizing data transfer and eliminating nested SELECTs via efficient JOINs.</li>
                <li style={{ marginBottom: "8px" }}>Implemented indexing strategies and set-based query logic, reducing report generation from 15min to 5min (67% faster).</li>
                <li>Avoided implicit type casting and row-by-row processing, enabling parallel query execution for enterprise-scale data workflows.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>Technology Consultant</h3>
              <span className="timeline-date">Jul 2019 – Apr 2022</span>
              <h4>PricewaterhouseCoopers • Mumbai, India</h4>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li style={{ marginBottom: "8px" }}>Owned SAP ABAP automation across financial modules, reducing manual processing 70%.</li>
                <li style={{ marginBottom: "8px" }}>Developed custom business logic ensuring stability/maintainability for enterprise applications.</li>
                <li style={{ marginBottom: "8px" }}>Collaborated cross-functionally delivering high-quality client solutions.</li>
                <li style={{ marginBottom: "8px" }}>Developed reliable data integration services for cross-platform enterprise exchange.</li>
                <li>Managed project delivery including SLA tracking, task delegation, and ServiceNow ticket resolution.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-header">
           <h2 className="section-title">03. Projects</h2>
           <div className="line"></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>EduHub-Learning Management System</h3>
              <span className="timeline-date">React, Spring Boot, MongoDB, AWS S3</span>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li style={{ marginBottom: "8px" }}>Architected a full-stack course management platform with Java Spring Boot backend and React front-end.</li>
                <li style={{ marginBottom: "8px" }}>Integrated AWS S3 for secure, scalable content storage and MongoDB for NoSQL data management.</li>
                <li>Applied SDLC best practices, testing, and debugging to ensure maintainability and performance.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>Strangely</h3>
              <span className="timeline-date">Spring Boot, MySQL, SOLID Principles, TDD</span>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li style={{ marginBottom: "8px" }}>Developed a social networking platform with Spring Boot and MySQL, covering the complete software lifecycle.</li>
                <li style={{ marginBottom: "8px" }}>Implemented SOLID principles and TDD (JUnit) for higher code quality and reliability.</li>
                <li>Maintained stability through proactive debugging and preventive maintenance.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>ToDoApp</h3>
              <span className="timeline-date">React, Docker, AWS EC2, RDS, S3, VPC, Load Balancer</span>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li style={{ marginBottom: "8px" }}>Developed a cloud-native task management system integrating multiple AWS services.</li>
                <li style={{ marginBottom: "8px" }}>Ensured availability and fault tolerance with VPC, Elastic Load Balancer, and IaC via CloudFormation.</li>
                <li>Optimized performance and applied security best practices in a DevOps environment.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-header">
           <h2 className="section-title">04. Education</h2>
           <div className="line"></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>Dalhousie University</h3>
              <span className="timeline-date">Sep 2023 - Dec 2024</span>
              <h4>Master of Applied Computer Science (GPA: 4.0/4.0)</h4>
              <p>Halifax, NS, Canada</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>Mumbai University</h3>
              <span className="timeline-date">Jul 2016 - Jun 2019</span>
              <h4>Bachelors in Information Technology (GPA: 8.51/10.0)</h4>
              <p>Mumbai, MH, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section glass-section">
        <div className="section-header">
           <h2 className="section-title">05. Tech_Stack</h2>
           <div className="line"></div>
        </div>
        <div className="skills-grid">
           <div className="skill-tag" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
              <span style={{color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px'}}>Full-stack</span>
              React.js, TypeScript, JavaScript, Python, Java REST APIs, SQL backends
           </div>
           <div className="skill-tag" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
              <span style={{color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px'}}>Frontend</span>
              React.js, TypeScript, HTML, CSS
           </div>
           <div className="skill-tag" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
              <span style={{color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px'}}>Backend</span>
              Python APIs/scripts, Java services, MongoDB, Redis cache, RESTful services
           </div>
           <div className="skill-tag" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
              <span style={{color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px'}}>Databases</span>
              MongoDB, MySQL
           </div>
           <div className="skill-tag" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
              <span style={{color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px'}}>DevOps/CI/CD</span>
              Bitbucket, Git, CI/CD Pipelines, Atlassian Jira/Confluence, Docker
           </div>
           <div className="skill-tag" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
              <span style={{color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px'}}>Tools</span>
              AEM, Postman, Mixpanel
           </div>
           <div className="skill-tag" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
              <span style={{color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px'}}>Testing</span>
              TDD (Jest, JUnit), Integration Testing
           </div>
           <div className="skill-tag" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
              <span style={{color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px'}}>Soft Skills</span>
              Cross-Functional Collaboration, Agile/Scrum, Technical Design, Process Automation, Stakeholder Communication, Team Leadership
           </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="section">
        <div className="section-header">
           <h2 className="section-title">06. Awards_&_Recognitions</h2>
           <div className="line"></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>Recipient of the 2021 Client Appreciation Award</h3>
              <p style={{ marginTop: "10px" }}>Recognized for exceptional contributions to diverse domestic and international projects.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <h3>Featured in the Dec 2020 edition of the prestigious PwC UK bulletin</h3>
              <p style={{ marginTop: "10px" }}>Acknowledged for significant contributions to the Fyffes UK project.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Contact Section */}
       <section id="contact" className="section flex-col-center">
         <h2 className="section-title gradient-text glow-text">07. Initialize_Connection</h2>
         <p className="contact-desc">Ready to build the future? Let's chat.</p>
         <a href="mailto:freya.vora@dal.ca" className="btn primary-btn large-btn">Send Transmission</a>
         <div style={{marginTop: '25px', display: 'flex', gap: '20px', fontSize: '1.2rem'}}>
            <a href="https://linkedin.com/in/freya-vora/" target="_blank" rel="noreferrer" className="gradient-text" style={{textDecoration: 'none'}}>LinkedIn</a>
            <a href="https://github.com/Freya02" target="_blank" rel="noreferrer" className="gradient-text" style={{textDecoration: 'none'}}>GitHub</a>
         </div>
       </section>
    </main>
  );
}
