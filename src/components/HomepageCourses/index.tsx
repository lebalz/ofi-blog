import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import siteConfig from '@generated/docusaurus.config';
const { DOCS_ONLY } = siteConfig.customFields as { DOCS_ONLY?: boolean };

interface Klass {
  label: string;
  uri: string;
}

interface Course {
  title: string;
  classes: (string | Klass)[];
}

const CourseList: Course[] = [
  
];

if (!DOCS_ONLY) {
  CourseList.push({
    title: 'Gym 2',
    classes: [
      '26e',
      '26P'
    ]
  }); 
}

// const CourseComponent = (course: Course) => {
const CourseComponent = ({ course }: {course: Course}) => {
  return (
    <div className={clsx('card margin--md shadow--md')}>
      <div className="card__header">
        <h3>{course.title}</h3>
      </div>
      <div className="card__body" >
        {course.classes.map((cl, idx) => {
          const isString = typeof cl === 'string';
          const to = isString ? `${cl}/home` : cl.uri;
          const label = isString ? cl : cl.label;
          return (
            <Link
              key={idx}
              to={to}
              className="button button--outline button--secondary margin--xs"
            >
              {label}
            </Link>
          )
        })}
      </div>
    </div>
  );
}



export default function HomepageCourses() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {(DOCS_ONLY || process.env.NODE_ENV === 'development') && (
            <CourseComponent course={{title: 'All Docs', classes: [{label: 'Docs', uri: '/home'}]}} />
          )}
          {CourseList.map((course, idx) => (
            <CourseComponent key={idx} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
