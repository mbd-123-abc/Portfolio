/*Mahika Bagri*/
/*April 22 2026*/

import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {

  const professional_projects = JSON.parse(
    process.env.NEXT_PUBLIC_PROFESSIONAL_PROJECTS || "[]"
  );
  const personal_projects = JSON.parse(
    process.env.NEXT_PUBLIC_PERSONAL_PROJECTS || "[]"
  );

  return (
    <div className="projects-container">
      <h2>Professional Projects</h2>
            <div className="project-grid">
        {professional_projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-header">
                <img
                  src={project.image}
                />
            </div>
            
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="card-links">
                <Link href={project.live} className="btn btn-primary">
                  View Live
                </Link>
                <Link href={project.github} className="btn btn-outline">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Personal Projects</h2>
      
      <div className="project-grid">
        {personal_projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-header">
              <span>
                <img
                  src={project.image}
                />
              </span>
            </div>
            
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="card-links">
                <Link href={project.live} className="btn btn-primary">
                  View Live
                </Link>
                <Link href={project.github} className="btn btn-outline">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
