/*Mahika Bagri*/
/*April 22 2026*/

import ProjectContainer from "../components/ProjectsContainer";

export default function ProjectsPage() {

  const poetry_projects = JSON.parse(
    process.env.NEXT_PUBLIC_POETRY_PROJECTS || "[]"
  );

  const hindi_projects = JSON.parse(
    process.env.NEXT_PUBLIC_HINDI_PROJECTS || "[]"
  );

  const short_projects = JSON.parse(
    process.env.NEXT_PUBLIC_SHORT_PROJECTS || "[]"
  );

  const book_projects = JSON.parse(
    process.env.NEXT_PUBLIC_BOOK_PROJECTS || "[]"
  );


  return (
    <div
      style={{
          backgroundColor:"#614531"
      }}
    >
    {book_projects?.length > 0 && (
      <ProjectContainer
        projects={book_projects}
        title="Books"
        h2Color="#ffb5df"
        cardColor="rgb(243, 193, 228)"
        cardHeadColor= "#rgb(243, 193, 228)"
        alive="View Published"
        raw="Draft"
      />  
    )}
      <ProjectContainer
        projects={short_projects}
        title="Short Stories"
        h2Color="#edac70"
        cardColor="#ffc997"
        cardHeadColor= "#ffc997"
        alive="View Published"
        raw="Draft"
      />  
      <ProjectContainer
        projects={poetry_projects}
        title="Poetry"
        h2Color="#b3d4eb"
        cardColor="#d0e0eb"
        cardHeadColor= "#d0e0eb"
        alive="View Published"
        raw="Draft"
      />
      <ProjectContainer
        projects={hindi_projects}
        title="Hindi Poetry"
        h2Color="#e97474"
        cardColor="#ffbbbb"
        cardHeadColor= "#ffbbbb"
        alive="View Published"
        raw="Draft"
      />
    </div>
  );
}
