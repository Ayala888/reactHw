import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  async function fetchProjects() {
    try {
      const response = await fetch("/projects.json"); 
      if (!response.ok) {
        throw new Error("Деректерді жүктеу кезінде қате пайда болды");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Жобалар тізімі</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <Link to={`/projects/${project.id}`}>Толығырақ</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
