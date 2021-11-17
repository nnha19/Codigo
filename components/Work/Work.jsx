import { useEffect, useState } from "react";
import styles from "./Work.module.scss";
import { useRouter } from "next/router";
import { projects as categoryProjects } from "../../DUMMY_DATA/DUMMY_ITEMS";
import CategoryItem from "./CategoryItem/CategoryItem";
import Image from "next/image";

const Work = () => {
  const { push } = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(categoryProjects);
  }, []);

  const categories =
    "all,food & beverage,media,transport & logistics,banking & finance,lifestyle,co-incubation,healthcare,retail & entertainment,telco,others,start-ups".split(
      ","
    );

  const [activeCategory, setActiveCategory] = useState("all");

  const handleNavigateHandler = (active) => {
    setActiveCategory(active);

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    setProjects(shuffleArray(projects));
    setProjects(projects);
  };

  const categoryList = categories.map((c) => {
    return (
      <div
        onClick={() => handleNavigateHandler(c)}
        className={styles.categoryItem}
        key={c}
      >
        <span
          className={`${styles.categoryItemActive} ${
            activeCategory === c && styles.active
          }`}
        ></span>
        <span>{c}</span>
      </div>
    );
  });

  return (
    <>
      <section className={`${styles.home} wrapper`}>
        <h1 className={`${styles.homeHeader}`}>
          <span className={`${styles.homePrimaryHeader}`}>
            <p>Here’s 5% of</p>
            <p>our published work.</p>
          </span>
          <span className={styles.homeSecondaryHeader}>
            See 100% of our power.
          </span>
        </h1>
        <section className={styles.container}>
          <section className={styles.category}>{categoryList}</section>
          <div className={styles.rightSide}>
            <h2>Legend</h2>
            <ul className={styles.services}>
              <li>
                <img src="https://www.codigo.co/img/ui/ico-app.svg" />
                <span>App</span>
              </li>
              <li>
                <img src="https://www.codigo.co/img/ui/ico-web.svg" />
                <span>Web</span>
              </li>
              <li>
                <img src="https://www.codigo.co/img/ui/ico-cms.svg" />
                <span>CMS</span>
              </li>
              <li>
                <img src="https://www.codigo.co/img/ui/ico-uiux.svg" />
                <span>UI/UX</span>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <CategoryItem projects={projects} />
    </>
  );
};

export default Work;
