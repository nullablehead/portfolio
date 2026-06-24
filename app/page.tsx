import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "1COOP Marketplace",
    type: "Agricultural commerce",
    link: "https://play.google.com/store/apps/details?id=com.coopmarketplace",
    icon: "/icon-1coop.webp",
    summary:
      "A farmer-focused marketplace that helps agricultural producers publish products, manage availability, and connect directly with buyers.",
    contribution:
      "Contributed to production mobile features for marketplace browsing, seller workflows, product publishing, order details, API integration, and reliability improvements for real-world connectivity.",
    impact: [
      "Digital commerce for farmers",
      "1K+ downloads",
      "Published Android app",
    ],
    palette: "market",
  },
  {
    name: "ABCCA Streaming App",
    type: "Education streaming",
    link: "https://play.google.com/store/apps/details?id=com.abcca.app",
    icon: "/icon-abcca.webp",
    summary:
      "A learning platform that gives students access to educational programs and study content beyond the classroom.",
    contribution:
      "Worked on mobile app experiences for streaming, content access, responsive UI flows, API-backed data, and user-friendly learning journeys across Android and iOS targets.",
    impact: [
      "Flexible learning access",
      "1K+ downloads",
      "Published Android app",
    ],
    palette: "education",
  },
  {
    name: "MCWS App",
    type: "Water service operations",
    link: "https://play.google.com/store/apps/details?id=com.mcws.app",
    icon: "/icon-mcws.webp",
    summary:
      "An operations app for water service customers to request line connections, track water trucking, manage billing, and handle account services.",
    contribution:
      "Built and maintained transaction-heavy mobile flows, request tracking screens, billing-related interfaces, REST API integrations, error handling, and performance-focused UI updates.",
    impact: [
      "Customer self-service",
      "Operational workflows",
      "Published Android app",
    ],
    palette: "water",
  },
];

const skills = [
  "Flutter",
  "Dart",
  "React Native",
  "React.js",
  "Next.js",
  "JavaScript",
  "REST APIs",
  "Provider",
  "Bloc",
  "GetX",
  "Redux",
  "Firebase",
  "CI/CD",
  "Agile/Scrum",
];

const stats = [
  { value: "3+", label: "Years building mobile apps" },
  { value: "3+", label: "Full-scale apps delivered" },
  { value: "25%", label: "Improved delivery efficiency" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const resumeHref = `${basePath}/ricky-jostaga-resume.pdf`;
const assetPath = (path: string) => `${basePath}${path}`;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Ricky Jostaga home">
          R
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <Smartphone size={16} />
            Flutter Mobile Developer
          </p>
          <h1>Ricky Jostaga</h1>
          <p className="hero-lede">
            Frontend Software Engineer building high-performance Flutter and
            React Native applications for Android and iOS, with a focus on
            reliable API-driven product experiences.
          </p>
          <div className="hero-actions" aria-label="Contact links">
            <a className="button primary" href="mailto:nullablehead@gmail.com">
              <Mail size={18} />
              Email me
            </a>
            <a
              className="button secondary"
              href="https://linkedin.com/in/ricky-jostaga"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a className="button secondary" href={resumeHref}>
              <FileText size={18} />
              Resume
            </a>
          </div>
          <div className="quick-info" aria-label="Profile details">
            <span>
              <MapPin size={16} />
              Philippines
            </span>
            <span>
              <Phone size={16} />
              +63 975 564 8589
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Mobile app portfolio preview">
          {/* <div className="avatar-card">
            <Image
              src={assetPath("/ricky-jostaga-avatar.jpeg")}
              alt="Ricky Jostaga"
              width={188}
              height={188}
              priority
            />
            <div>
              <span>Ricky Jostaga</span>
              <strong>Mobile app engineer</strong>
            </div>
          </div> */}
          <div className="phone-shell">
            <div className="phone-status">
              <span />
              <span />
            </div>
            <div className="app-preview">
              <div className="preview-top">
                <Sparkles size={22} />
                <span>Production Apps</span>
              </div>
              {projects.map((project) => (
                <a
                  className={`mini-app ${project.palette}`}
                  href={project.link}
                  key={project.name}
                >
                  <span className="mini-icon">
                    <Image
                      src={assetPath(project.icon)}
                      alt={`${project.name} icon`}
                      width={46}
                      height={46}
                    />
                  </span>
                  <span>
                    <strong>{project.name}</strong>
                    <small>{project.type}</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Career highlights">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">
            <Code2 size={16} />
            Project Moonshot contributions
          </p>
          <h2>Published mobile apps with real operational use.</h2>
          <p>
            These projects show Ricky&apos;s work across marketplace, education,
            and service management products: feature delivery, REST
            integrations, resilient UI states, and production maintenance.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className={`project-art ${project.palette}`}>
                <div className="screen-card">
                  <Image
                    src={assetPath(project.icon)}
                    alt={`${project.name} app icon`}
                    width={92}
                    height={92}
                  />
                  <span>{project.type}</span>
                  <strong>{project.name}</strong>
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="project-body">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.summary}</p>
                <p className="contribution">{project.contribution}</p>
                <ul className="impact-list">
                  {project.impact.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a className="text-link" href={project.link}>
                  View on Google Play
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="experience">
        <div className="experience-panel">
          <p className="eyebrow">
            <Zap size={16} />
            Experience
          </p>
          <h2>Frontend Software Engineer</h2>
          <p className="company">Project Moonshot | Nov 2022 - Present</p>
          <ul>
            <li>
              Built and maintained cross-platform mobile applications for iOS
              and Android.
            </li>
            <li>
              Delivered end-to-end features from polished UI to backend API
              integration.
            </li>
            <li>
              Implemented error handling, retries, and edge-case handling for
              unstable networks.
            </li>
            <li>
              Improved rendering performance, responsiveness, and
              maintainability.
            </li>
            <li>
              Collaborated with product, design, and backend teams in
              Agile/Scrum workflows.
            </li>
          </ul>
        </div>

        <div className="skills-panel">
          <h2>Technical toolkit</h2>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="education">
            <span>Education</span>
            <strong>Bachelor of Science in Information Technology</strong>
            <p>Bukidnon State University | 2019 - 2022</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">
            <Mail size={16} />
            Contact
          </p>
          <h2>Available for mobile product work.</h2>
          <p>
            Reach out for Flutter, React Native, API integration, app
            maintenance, or production mobile feature development.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="mailto:nullablehead@gmail.com">
            <Mail size={18} />
            nullablehead@gmail.com
          </a>
          <a
            className="button secondary"
            href="https://linkedin.com/in/ricky-jostaga"
          >
            <Linkedin size={18} />
            LinkedIn profile
          </a>
          <a className="button secondary" href={resumeHref}>
            <FileText size={18} />
            Resume
          </a>
          <a className="button secondary" href="https://github.com/rrickyzz">
            <Github size={18} />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
