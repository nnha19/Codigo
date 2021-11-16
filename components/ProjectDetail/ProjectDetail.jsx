import React from "react";
import styles from "./ProjectDetail.module.scss";
import { AiFillApple } from "react-icons/Ai";
import { FaGooglePlay } from "react-icons/Fa";

const ProjectDetail = ({ project }) => {
  return (
    <div className={`${styles.project} `}>
      <div className={`${styles.btn} ${styles.prevBtn}`}>&larr;</div>
      <div className={`${styles.btn} ${styles.nextBtn}`}>&rarr;</div>
      <div className={styles.projectDisplay}>
        <div className={styles.projectDisplayBody}>
          <h1>{project.secondTitle}</h1>
          <div className={styles.download}>
            <a>
              <AiFillApple />
              <div>
                <p>Available On</p>
                <span>App Store</span>
              </div>
            </a>
            <a>
              <FaGooglePlay />
              <div>
                <p>Available On</p>
                <span>Google play</span>
              </div>
            </a>
          </div>
          <p>{project.description}</p>
          <div className={styles.keyFeatures}>
            <h4>Key Features</h4>
            <div className={styles.keyFeaturesLists}>
              {project.keyFeatures.map((kf) => (
                <p className={styles.keyFeaturesList}>{kf}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.projectDisplayImgs}>
          <div className={styles.background}></div>
          <img
            src="https://cdn.codigo.co/uploads/2021/04/PAO-5@2x.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
