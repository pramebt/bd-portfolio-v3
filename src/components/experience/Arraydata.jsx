import React from 'react';
import Expblock from './Expblock';
import Edublock from './Edublock';

const exp = [
  {
    date: "May 2024 - June 2024",
    org: "Forth Smart Service Public Co., Ltd.",
    position: "Web Developer (Intern)",
  },
  {
    date: "May 2024 - June 2024",
    org: "Forth Smart Service Public Co., Ltd.",
    position: "Web Developer (Intern)",
  },
  // เพิ่มได้อีก
];

const edu = [
  {
    date: "June 2021 - March 2025",
    org: "Naresuan University",
    position: "Bachelor Degree of Computer Engineering",
  },
  // เพิ่มได้อีก
];

const Arraydata = () => (
  <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 mt-8 px-2 sm:px-4">
    <Expblock
      icon="/assets/icons/exp.svg"
      title="WORK EXPERIENCE"
      items={exp}
    />
    <Edublock
      icon="/assets/icons/education.svg"
      title="EDUCATION"
      items={edu}
    />
  </div>
);

export default Arraydata;
