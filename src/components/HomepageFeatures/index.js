import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kunst i verdensklasse',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Med en stadig voksende kollektion af kunst i verdensklasse,
        tilbyder vi en topmoderne udstilling.
      </>
    ),
  },
  {
    title: 'Plads til eftertanke',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Hos os er du næsten garanteret noget at tænke over - hvad end det er et mærkeligt billede, et overvæld af farver, eller bare en grammatisk fejl.
      </>
    ),
  },
  {
    title: 'Har du en skjult kunstner gemt i maven?',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ønsker du lige præcis DIT mesterværk udstillet her? Kontakt Museumsdirektør Mathias M. Lauridsen, og hør mere.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
