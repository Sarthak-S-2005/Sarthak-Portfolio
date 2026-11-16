import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, BrainCircuit, Check, ChevronDown, Code2, Download, Github,
  Layers3, Linkedin, Mail, Menu, MessageCircle, Monitor, MoveRight, Send,
  ScanFace, Terminal, X, Zap
} from 'lucide-react';
import './styles.css';

const profile = {
  github: 'https://github.com/Sarthak-S-2005',
  linkedin: 'https://www.linkedin.com/in/sarthak-s-247127293/',
  email: 'sarthak.saravana2005@gmail.com'
};

const projects = [
  {
    title: 'RE-SHARP',
    subtitle: 'AI-powered image super-resolution & restoration',
    description: 'A Streamlit app that uses pretrained Real-ESRGAN RRDBNet models for 2× and 4× enhancement, with side-by-side results, a before/after slider, bicubic comparison and downloads.',
    tags: ['Python', 'PyTorch', 'Streamlit', 'Real-ESRGAN'],
    href: 'https://github.com/Sarthak-S-2005/Re-Sharp-DL-Project',
    featured: true,
    icon: BrainCircuit,
    accent: 'blue'
  },
  {
    title: 'Campus Voice',
    subtitle: 'Role-based campus announcements',
    description: 'A Flask and MongoDB campus announcement platform for Admin, Department and Student users, with announcement management, category and department filtering, comments and notifications.',
    tags: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Sarthak-S-2005/Campus-Voice',
    icon: MessageCircle,
    accent: 'violet'
  },
  {
    title: 'Student Performance Predictor',
    subtitle: 'Linear regression score prediction',
    description: 'A student score prediction application with inputs for study hours, attendance percentage and class participation, combining a Flask prediction API, Streamlit frontend, SQLite history and data visualizations.',
    tags: ['Python', 'Scikit-learn', 'Flask', 'Streamlit', 'SQLite', 'Pandas', 'Matplotlib'],
    href: 'https://github.com/Sarthak-S-2005/student-performance-predictor',
    icon: Layers3,
    accent: 'cyan'
  },
  {
    title: 'Stress Level Detection using Machine Learning & Image Processing',
    subtitle: 'Real-time facial expression-based stress monitoring',
    description: 'A real-time prototype that uses webcam input, face detection, image processing and machine learning to estimate stress levels as Low, Medium or High, with history tracking, trend visualizations and guided breathing exercises. It is not a medical diagnostic tool.',
    tags: ['Python', 'Flask', 'OpenCV', 'NumPy', 'Scikit-learn', 'Chart.js'],
    href: 'https://github.com/Sarthak-S-2005',
    icon: ScanFace,
    accent: 'orange',
    profileLink: true
  }
];

const skillGroups = [
  { title: 'Programming', icon: Terminal, items: ['Python', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Frontend', icon: Monitor, items: ['React', 'Responsive UI', 'Accessibility'] },
  { title: 'AI / ML', icon: BrainCircuit, items: ['Machine Learning', 'Image Processing', 'Deep Learning'] },
  { title: 'Tools & Data', icon: Code2, items: ['Git', 'GitHub', 'VS Code', 'SQL'] }
];

function ImageFrame({ src, label, className = '' }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`image-frame ${className}`}>
      {!failed && <img src={src} alt={label} onError={() => setFailed(true)} />}
      {failed && <div className="image-placeholder"><span>Image placeholder</span><strong>{src.split('/').pop()}</strong></div>}
      <div className="image-corner image-corner-top" />
      <div className="image-corner image-corner-bottom" />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}><span>S</span> SARTHAK</a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((link, index) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}><small>0{index + 1}</small>{link}</a>)}
      </nav>
      <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-grid" id="home">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="status-dot" /> Available for learning & collaboration</div>
        <p className="kicker">HELLO, I'M</p>
        <h1>Sarthak S<span>.</span></h1>
        <p className="hero-role">Aspiring Developer <i>/</i> AI/ML Enthusiast</p>
        <p className="hero-description">I enjoy transforming ideas into practical digital experiences through software development, machine learning and creative problem-solving.</p>
        <div className="button-row">
          <a className="button button-primary" href="#projects">View my projects <MoveRight size={17} /></a>
          <a className="button button-ghost" href="/resume.pdf" download="Sarthak-S-Resume.pdf">Download resume <Download size={16} /></a>
        </div>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <span className="line" />
          <span className="scroll-hint">Scroll to explore <ChevronDown size={15} /></span>
        </div>
      </div>
      <div className="hero-visual reveal reveal-delay">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="hero-grid-pattern" />
        <ImageFrame src="/images/sarthak-profile.jpg" label="Sarthak S's professional portrait" className="hero-image" />
        <div className="floating-card card-top"><Zap size={15} /><span>Building with<br /><strong>curiosity</strong></span></div>
        <div className="floating-card card-bottom"><span className="code-symbol">&lt;/&gt;</span><span>code +<br /><strong>create</strong></span></div>
        <div className="hero-index">01 <span>/ 06</span></div>
      </div>
    </section>
  );
}

function About() {
  return <section className="section about" id="about">
    <div className="section-heading reveal"><span className="section-number">02 — ABOUT</span><h2>A little about<br /><em>me.</em></h2></div>
    <div className="about-layout">
      <ImageFrame src="/images/sarthak-about.jpg" label="Sarthak S outdoors" className="about-image reveal" />
      <div className="about-copy reveal reveal-delay">
        <p className="lead">I’m a developer who likes to stay curious, learn by building, and turn rough ideas into things people can actually use.</p>
        <p>My interests sit at the intersection of software development and artificial intelligence. Whether I’m shaping a web interface or exploring a machine-learning idea, I care about making the result practical, clear and thoughtfully designed.</p>
        <p>This portfolio is a living record of that process — the projects I build, the technologies I explore, and the questions that keep me moving forward.</p>
        <div className="signature"><span>Currently exploring</span><strong>better ways to build.</strong></div>
      </div>
    </div>
  </section>;
}

function Skills() {
  return <section className="section skills" id="skills">
    <div className="section-heading split-heading reveal"><div><span className="section-number">03 — TOOLKIT</span><h2>Things I work<br /><em>with.</em></h2></div><p>A growing toolkit shaped by hands-on projects, experimentation and a willingness to learn what comes next.</p></div>
    <div className="skill-grid">{skillGroups.map(({ title, icon: Icon, items }, index) => <article className="skill-card reveal" key={title} style={{ '--delay': `${index * 70}ms` }}><div className="skill-icon"><Icon size={20} /></div><h3>{title}</h3><div className="skill-items">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
  </section>;
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  return <article className={`project-card ${project.featured ? 'featured-project' : ''} accent-${project.accent} reveal`}>
    <div className="project-art"><div className="art-glow" /><Icon size={project.featured ? 67 : 48} strokeWidth={1} /><span className="art-label">0{projects.indexOf(project) + 1}</span><div className="art-lines" /></div>
    <div className="project-details"><div className="project-meta"><span>{project.featured ? 'Flagship project' : 'Selected project'}</span><span>GitHub</span></div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="button button-ghost project-button" href={project.href} target="_blank" rel="noopener noreferrer"><Github size={16} /> {project.profileLink ? 'Visit GitHub Profile' : 'View on GitHub'} <ArrowUpRight size={16} /></a></div>
  </article>;
}

function Projects() {
  return <section className="section projects" id="projects">
    <div className="section-heading split-heading reveal"><div><span className="section-number">04 — SELECTED WORK</span><h2>Ideas made<br /><em>real.</em></h2></div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">See all on GitHub <ArrowUpRight size={17} /></a></div>
    <div className="project-grid">{projects.map(project => <ProjectCard project={project} key={project.title} />)}</div>
  </section>;
}

function Experience() {
  return <section className="section experience" id="experience">
    <div className="section-heading reveal"><span className="section-number">05 — THE JOURNEY</span><h2>Learning by<br /><em>doing.</em></h2></div>
    <div className="timeline reveal">
      <div className="timeline-line" />
      <div className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">NOW</span><div><h3>Building & exploring</h3><p>Developing practical projects across software development, AI and machine learning while continuing to grow the fundamentals.</p></div></div>
      <div className="timeline-item muted"><span className="timeline-dot" /><span className="timeline-date">NEXT</span><div><h3>Your next chapter</h3><p>This space is ready for education, experience, certifications and milestones as they take shape.</p></div></div>
    </div>
  </section>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <section className="section contact" id="contact">
    <div className="contact-intro reveal"><span className="section-number">06 — CONTACT</span><h2>Let's build<br /><em>something.</em></h2><p>Recruiters, developers and curious builders are welcome to connect. If you have an opportunity, an idea, or just want to say hello, my inbox is open.</p><a className="email-link" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a></div></div>
    <form className="contact-form reveal reveal-delay" onSubmit={submit}>{sent ? <div className="form-success"><div><Check size={26} /></div><h3>Thanks for reaching out.</h3><p>Your message is ready to be sent. Connect the form to an email service to enable delivery.</p><button type="button" className="button button-ghost" onClick={() => setSent(false)}>Send another</button></div> : <><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Message<textarea name="message" required rows="4" placeholder="Tell me a little about your idea..." /></label><button className="button button-primary" type="submit">Send message <Send size={16} /></button><small className="form-note">This form is a front-end interaction until an email provider is connected.</small></>}</form>
  </section>;
}

function Footer() {
  return <footer><a className="brand" href="#home"><span>S</span> SARTHAK S</a><p>Designed & built with curiosity.</p><div><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a></div><small>© {new Date().getFullYear()} Sarthak S. All rights reserved.</small></footer>;
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<App />);
