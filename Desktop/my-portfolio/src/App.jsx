import { useState } from 'react';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "30 Days Travel Planner (Self-taught Android App)",
      description: "A mobile app built with Android Studio & Kotlin",
      tech: ["Kotlin", "Android Studio"],
      link: "https://github.com/blankirito/Trip_to_Japan_Android_App",
      media: [
        { type: "video", src: "/videos/Android_App.mp4" }
      ]
    },
    {
      title: "Genre Predict (NLP Project)",
      description: "Build an NLP model to predict the movie or tv show genre from text description",
      tech: ["Python"],
      link: "https://github.com/blankirito/Genre_Prediction"
    },
    {
      title: "Future Predict (ML Project)",
      description: "Developed a model to predict the future popular movie or tv show from multiple feature",
      tech: ["Python"],
      link: "https://github.com/blankirito/Future_Prediction"
    },
    {
      title: "Student Performance (Full Stack)",
      description: "Designed and developed a full stack web app to track and visualize student performance",
      tech: ["HTML/CSS", "PHP", "JavaScripts", "MYSQL"],
      link: "https://github.com/blankirito/Student_Performance",
      media: [
        { type: "image", src: "/photos/homepage.png", row: 1 },

        { type: "image", src: "/photos/student_profile_academic_status.png", row: 2 },
        { type: "image", src: "/photos/student_profile_program_requirement.png", row: 2 },

        { type: "image", src: "/photos/program_leader_academic_performance.png", row: 3 },
        { type: "image", src: "/photos/program_leader_student_status.png", row: 3 },
        
        { type: "image", src: "/photos/student_management.png", row: 4 },
        { type: "image", src: "/photos/course_management.png", row: 4 }
      ]
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div className="intro-card">
        <h1>Lee Chong Yu</h1>
        <h3>Software Engineer | Seeking Summer 2026 Internship</h3>
        <p>Bachelor of Software Engineering (Hons), University of Wollongong Malaysia, Expected Sep 2026</p>
        <p>
          I am a software engineer passionate about Android, full-stack, and ML projects, currently seeking internship opportunities to apply my skills in real-world projects.
        </p>
        <div className="contact-links">
          <a href="mailto:leechongyu99@gmail.com">Email</a> | 
          <a href="https://github.com/blankirito" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/lee-chongyu-609b9131b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <h1>Chong Yu's Portfolio</h1>
      <div className="grid-container">
        {projects.map((proj, idx) => (
          <section
            key={idx}
            className="project-card"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedProject(proj)}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <ul>
              {proj.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </section>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            {selectedProject.media && selectedProject.media.length > 0 ? (
              <div className="media-container">
                {selectedProject.media
                  .filter(item => item.type === "video")
                  .map((item, index) => (
                    <video
                      key={index}
                      controls
                      autoPlay
                      muted
                      style={{
                        width: "100%",
                        maxHeight: "400px",
                        marginBottom: "10px"
                      }}
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ))}

                {[1, 2, 3, 4].map(rowNum => (
                  <div key={rowNum} className="media-row" style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                    {selectedProject.media
                      .filter(item => item.type === "image" && item.row === rowNum)
                      .map((item, index, arr) => {
                        const widthPercent = 100 / arr.length - 2;
                        return (
                          <img
                            key={index}
                            src={item.src}
                            alt=""
                            style={{
                              width: `${widthPercent}%`,
                              maxHeight: "300px",
                              objectFit: "contain",
                              margin: "0 5px"
                            }}
                          />
                        );
                      })}
                  </div>
                ))}
              </div>
            ) : (
              <p>No media available</p>
            )}
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
