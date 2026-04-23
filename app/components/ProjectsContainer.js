/*Mahika Bagri*/
/*April 22 2026*/

import Link from "next/link";
import Image from "next/image";

export default function ProjectContainer({projects, title, h2Color, cardColor, cardHeadColor, raw, alive}) {
  return (
    <div className="projects-container">
      <h2 style={{color:h2Color}}>{title}</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ "--hover-color": h2Color}}>
            <div className="card-header" style={{backgroundColor:cardHeadColor}}>
              <img src={project.image} />
            </div>

            <div className="card-body" style={{backgroundColor:cardColor}}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="card-links">
                {project.alive && (
                  <Link href={project.alive} className="btn btn-primary" target="_blank">
                    {alive}
                  </Link>
                )}

                {project.raw && (
                  <Link href={project.raw} className="btn btn-outline" target="_blank">
                    {raw}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}