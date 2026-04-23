/*Mahika Bagri*/
/*April 22 2026*/

import ProjectContainer from "../components/ProjectsContainer";

export default function ProjectsPage() {

  const professional_projects = JSON.parse(
    process.env.NEXT_PUBLIC_PROFESSIONAL_PROJECTS || "[]"
  );
  const personal_projects = JSON.parse(
    process.env.NEXT_PUBLIC_PERSONAL_PROJECTS || "[]"
  );

  return (
    <div
      style={{
          backgroundColor:"#000000"
      }}
    >

      <ProjectContainer
        projects={professional_projects}
        title="Professional Projects"
        h2Color="#ff2f28e1"
        cardColor="rgba(255, 255, 255, 0.968)"
        cardHeadColor= "#2e2a2a"
        alive="View Live"
        raw="GitHub"
      />

      <ProjectContainer
        projects={personal_projects}
        title="Personal Projects"
        h2Color="#45ff28e1"
        cardColor="rgba(255, 255, 255, 0.968)"
        cardHeadColor= "#2e2a2a"
        alive="View Live"
        raw="GitHub"
      />
    </div>
  );
}
