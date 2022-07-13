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
    title: 'Gym 1',
    classes: [
      '26e',
      '26P'
    ]
  },
  {
    title: 'Gym 2',
    classes: [
      '25h',
    ]
  },
  {
    title: 'Gym 3',
    classes: [
      {
        uri: '24ef/home',
        label: 'EF'
      },
    ]
  },
  {
    title: 'Ehemalige',
    classes: [
      {
        uri: 'https://ofi.24.gbsl.website',
        label: '24er'
      }
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
