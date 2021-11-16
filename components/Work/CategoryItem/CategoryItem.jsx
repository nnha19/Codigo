import React from "react";
import { useRouter } from "next/router";

import styles from "./CategoryItem.module.scss";

const CategoryItem = ({ projects }) => {
  const { push } = useRouter();
  const navigateToWorkDetailHandler = (project) => {
    const nextRoute = `/work/${project.secondTitle
      .toLowerCase()
      .split(" ")
      .join("-")}`;
    push(nextRoute);
  };
  const projectsList = projects.map((project) => {
    return (
      <div
        onClick={() => navigateToWorkDetailHandler(project)}
        className={styles.project}
      >
        <img className={styles.projectImg} src={project.img} alt="" />
        <div className={styles.projectTitle}>
          <p>{project.title}</p>
          <p className={styles.boldHeader}>{project.secondTitle}</p>
        </div>
        <div className={styles.projectIcons}>
          {project.icons.map((icon) => {
            return (
              <div className={styles.projectIconContainer}>
                <img className={styles.svgIcon} src={icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return <div className={`${styles.projects} `}>{projectsList}</div>;
};

export default CategoryItem;
