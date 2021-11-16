import { useRouter } from "next/router";
import { projects } from "../../DUMMY_DATA/DUMMY_ITEMS";
import { useEffect, useState } from "react";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";

const ProjectDetailPage = () => {
  const [project, setProject] = useState();
  const {
    query: { projectDetail },
  } = useRouter();

  useEffect(() => {
    const project =
      projectDetail &&
      projects.find(
        (p) =>
          p.secondTitle.replaceAll(" ", "").toLowerCase() ===
          projectDetail.replaceAll("-", "").toLowerCase()
      );
    setProject(project);
  }, [projectDetail]);
  return <>{project && <ProjectDetail project={project} />}</>;
};

export default ProjectDetailPage;
