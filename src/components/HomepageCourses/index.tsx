import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

interface Klass {
  label: string;
  uri: string;
}

interface Course {
  title: string;
  classes: (string | Klass)[];
}

const CourseList: Course[] = [
  {
    title: 'Abschlussjahrgang 2025',
    classes: [
      '25h',
    ]
  },
  {
    title: 'WMS',
    classes: [
      '24w'
    ]
  }
];

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
          {CourseList.map((course, idx) => (
            <CourseComponent key={idx} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
