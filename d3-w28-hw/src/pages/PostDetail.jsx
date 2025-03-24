import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/NavBar";

export default function ProjectDetail() {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await fetch("/projects.json"); // Жобалар тізімін жүктеу
        if (!response.ok) {
            throw new Error("New error")
        }
        const data = await response.json();

        
        let selectedProject = null;
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === parseInt(id)) {
            selectedProject = data[i];
            break; 
          }
        }

        setProject(selectedProject);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProject();
  }, [id]);

  if (!project) return <p>Жүктелуде...</p>;

  return (
    <div>
      <Navbar />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}

