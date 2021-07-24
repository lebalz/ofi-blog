import React from 'react';
import clsx from 'clsx';
import styles from './HomepageCourses.module.scss';
import Link from '@docusaurus/Link';

interface Course {
  title: string;
  classes: string[];
}

const CourseList: Course[] = [
  {
    title: 'Gym 1',
    classes: [
      '25h'
    ]
  },
  {
    title: 'Gym 2',
    classes: [
      '24f',
      '24i',
      '24K',
      '24L',
      '24o',
    ]
  }
];

// const CourseComponent = (course: Course) => {
const CourseComponent = ({ course }) => {
  return (
    <div className={clsx('card margin--md shadow--md')}>
      <div className="card__header">
        <h3>{course.title}</h3>
      </div>
      <div className="card__body" >
        {course.classes.map((cl, idx) => {
          return (
            <Link
              key={idx}
              to={`${cl}/home`}
              className="button button--outline button--secondary margin--xs"
            >
              {cl}
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
