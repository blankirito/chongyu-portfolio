import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const projects = [
  {
    title: "30 Days Travel Planner (Self-taught Android App)",
    description: "A mobile app built with Android Studio & Kotlin",
    tech: ["Kotlin", "Android Studio"],
    link: "https://github.com/blankirito/Trip_to_Japan_Android_App"
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
    link: "https://github.com/blankirito/Student_Performance"
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
          <section key={idx} className="project-card">
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <ul>
              {proj.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </section>
        ))}
      </div>
    </div>
  );

}

export default App;
