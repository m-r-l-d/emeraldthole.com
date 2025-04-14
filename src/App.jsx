import { useState } from "react";

function App() {
  const [hideContact, setHideContact] = useState(false);
  const [hideSkills, setHideSkills] = useState(false);
  const [hideEducation, setHideEducation] = useState(false);
  const [hideExperience, setHideExperience] = useState(false);

  return (
    <>
      <div className="window standard-dialog" style={{marginBottom: 0}}>
        <h1 className="heading center">Emerald Thole</h1>
        <p className="desc center">
          Web developer, artist, gem cutter based in Saint Paul, MN
        </p>
      </div>

      <div className="layout">
        <div className="col-sidebar">
          <div className="window left">
            <div className="title-bar">
              {/* <button aria-label="Close" className="close"></button> */}
              <h1 className="title">Contact</h1>
              <button aria-label="Resize" className="resize" onClick={() => setHideContact(!hideContact)}></button>
            </div>
            <div className="separator" style={{ display: hideContact ? "none" : "block" }}></div>

            <div className="modeless-dialog" style={{ display: hideContact ? "none" : "block" }}>
              <p>
                emeraldbay53@gmail.com (until I get an email server set up at
                this domain!)
              </p>
              <p>651-354-4209</p>
              <div>
                <a
                  href="https://github.com/m-r-l-d"
                  target="_blank"
                  class="button"
                  className="btn"
                >
                  Github
                </a>
                <button
                  className="btn portfolio"
                  style={{ marginLeft: 6 }}
                  disabled
                >
                  <span>Portfolio</span>
                </button>
              </div>
            </div>
          </div>

          <div className="window left">
            <div className="title-bar">
              {/* <button aria-label="Close" className="close"></button> */}
              <h1 className="title">Skills</h1>
              <button aria-label="Resize" className="resize" onClick={() => setHideSkills(!hideSkills)}></button>
            </div>
            <div className="separator" style={{ display: hideSkills ? "none" : "block" }}></div>

            <div className="modeless-dialog" style={{ display: hideSkills ? "none" : "block" }}>
              <ul>
                <li>HTML/CSS</li>
                <li>Javascript/Typescript</li>
                <li>React + Redux</li>
                <li>Node</li>
                <li>CI/CD (Jenkins, GHA)</li>
                <li>User experience monitoring</li>
                <li>SPA web app development</li>
                <li>Component library development</li>
                <li>Test automation</li>
                <li>Java/Groovy</li>
                <li>Spring Framework</li>
                <li>REST API development</li>
                <li>Database development</li>
                <li>Microservice architecture</li>
                <li>Technical & User facing documentation</li>
              </ul>
            </div>
          </div>

          <div className="window left">
            <div className="title-bar">
              {/* <button aria-label="Close" className="close"></button> */}
              <h1 className="title">Education</h1>
              <button aria-label="Resize" className="resize" onClick={() => setHideEducation(!hideEducation)}></button>
            </div>
            <div className="separator" style={{ display: hideEducation ? "none" : "block" }}></div>

            <div className="modeless-dialog" style={{ display: hideEducation ? "none" : "block" }}>
              <h2>Macalester College — Bachelor of Arts, Computer Science</h2>
              <p className="desc">St. Paul, MN 2015-2019</p>
            </div>
          </div>
        </div>

        <div className="col-main">
          <div className="window main">
            <div className="title-bar">
              {/* <button aria-label="Close" className="close"></button> */}
              <h1 className="title">Job Experience</h1>
              <button
                aria-label="Resize"
                className="resize"
                onClick={() => setHideExperience(!hideExperience)}
              ></button>
            </div>
            <div className="separator" style={{ display: hideExperience ? "none" : "block" }}></div>

            <div className="modeless-dialog" style={{ display: hideExperience ? "none" : "block" }}>
              <h2>Best Buy — Full Stack Engineer</h2>
              <p className="desc">Richfield, MN 2019-2025</p>
              <p>Key Responsibilities:</p>
              <ul>
                <li>
                  Developed and maintained internal-facing platforms for
                  multiple interconnected micro services, including user
                  interfaces, API gateways, RESTful APIs, Node and Tomcat
                  servers, databases, caches, and messaging queues.
                </li>
                <li>
                  Specialized in single-page application development with React.
                  This includes experience with libraries such as Ag-Grid,
                  Axios, Next.js, React Native, Tailwind, and Webpack. I also
                  have node.js experience using Express.js.
                </li>
                <li>
                  Working closely with product and design to build frontends
                  with a strong design system. Experience working from Figma
                  wireframes and development with component libraries such as
                  Material UI and React Bootstrap, as well as Storybook
                  experience for component library development, maintenance, and
                  documentation.
                </li>
                <li>
                  Implemented robust testing strategies, including unit tests
                  with Jest and Spock, integration tests with Cypress and
                  SauceLabs, and performance tests with Gatling to ensure code
                  quality, reliability and CI/CD pipeline efficiency.
                </li>
                <li>
                  Presented new features to stakeholders, conducted user
                  training and office hours, and wrote comprehensive user-facing
                  and technical documentation to improve adoption and
                  maintainability. Experience mentoring junior developers.
                </li>
                <li>
                  Utilized monitoring and analytics tools Splunk and Dynatrace
                  to troubleshoot issues, track user activity, and measure the
                  success of key initiatives.
                </li>
              </ul>
              <p>Notable Projects:</p>
              <ul>
                <li>
                  <b>Self-Service Permission Management Platform:</b> Designed
                  and developed an internal tool that enables teams to
                  autonomously request and manage access, which reduced
                  administrative overhead and improved security compliance.
                </li>
                <li>
                  <b>Self-Service JSON Configuration Platform:</b> Built a
                  microservice-based platform which allows teams to manage
                  JSON-based configurations dynamically to improve developer
                  flexibility. Served as technical lead on a number of
                  initiatives.
                </li>
                <li>
                  <b>Site Preview Platform:</b> Prototyped a new platform that
                  allows users to preview site content before publishing. By
                  replacing an outdated platform that was difficult to both use
                  and maintain, we enhanced the company's content validation.
                </li>
                <li>
                  <b>Internal Tools Component Library:</b> Developed and
                  maintained a small component library to create a cohesive
                  experience across internal platforms and enforce accessibility
                  standards, which we then utilized in our own platforms.
                </li>
                <li>
                  <b>Comprehensive UX Audit:</b> Performed and documented a
                  comprehensive UX audit of our configuration management
                  platform that was instrumental in designing the next phase of
                  the platform.
                </li>
                <li>
                  <b>Legacy System Migration & Decommissioning:</b> Led and
                  coordinated the effort across multiple teams to migrate a
                  legacy configuration system to our new scalable solution,
                  ensuring long-term maintainability. This enabled the
                  decommissioning of outdated infrastructure and drove
                  significant operational cost savings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="standard-dialog window" style={{marginTop: 0}}>
        <h2 className="center">About this page</h2>
        <p className="desc center">
          Style based on{" "}
          <a href="https://github.com/sakofchit/system.css" target="_blank">
            System OS theme
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
