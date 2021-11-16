import React, { useEffect, useRef, useState } from "react";
import styles from "./ProjectDetail.module.scss";
import { AiFillApple } from "react-icons/Ai";
import { FaGooglePlay } from "react-icons/Fa";
import { useRouter } from "next/router";
import { projects } from "../../DUMMY_DATA/DUMMY_ITEMS";

const ProjectDetail = ({ project }) => {
  const { push, query, asPath } = useRouter();
  const curImgRef = useRef();
  const [curImg, setCurImg] = useState(project.images[0]);

  const navigateImgHandler = (img) => {
    curImgRef.current.style.opacity = "0";
    setTimeout(() => {
      setCurImg(img);
    }, 400);
  };

  useEffect(() => {
    setCurImg(project.images[0]);
  }, [query, project]);

  const navigationList = project.images.map((img, i) => {
    return (
      <span
        onClick={() => navigateImgHandler(img)}
        className={`${styles.navigationList} ${
          img === curImg && styles.activeImg
        }`}
        key={i}
      ></span>
    );
  });

  useEffect(() => {
    curImgRef.current.style.transition = "all .4s";
    setTimeout(() => {
      curImgRef.current.style.opacity = "1";
    }, 700);
  }, [curImg]);

  const showNextProjectHandler = () => {
    const rn = Math.floor(Math.random() * projects.length);
    const route = projects[rn].secondTitle.toLowerCase("").split(" ").join("-");
    push(`/work/${route}`);
  };

  let sameRoute;
  if (
    asPath === `/work/${project.secondTitle.toLowerCase().split(" ").join("-")}`
  ) {
    //Responsible for css animation rerunning on every rerender
    sameRoute = true;
  }

  return (
    <div
      key={!sameRoute && Math.random() * 100}
      className={`${styles.project} `}
    >
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
                <p key={kf} className={styles.keyFeaturesList}>
                  {kf}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.projectDisplayImgs}>
          <div className={styles.background}></div>
          <img
            ref={curImgRef}
            className={styles.projectDisplayImg}
            src={curImg}
          />
          <div className={styles.navigation}>{navigationList}</div>
        </div>
      </div>
      <div className={styles.btns}>
        <div
          onClick={showNextProjectHandler}
          className={`${styles.btn} ${styles.prevBtn}`}
        >
          &larr;
        </div>
        <div
          onClick={showNextProjectHandler}
          className={`${styles.btn} ${styles.nextBtn}`}
        >
          &rarr;
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
