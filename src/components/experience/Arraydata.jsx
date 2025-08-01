import React from 'react';
import Expblock from './Expblock';
import Edublock from './Edublock';

const exp = [
  {
    date: "May 2024 - June 2024",
    org: "Forth Smart Service Public Co., Ltd.",
    position: "Web Developer (Intern)",
    cardIcon: "/assets/icons/forth-logo.png",
    detail: "Designed the database system and customized both the front-end and back-end of the website using HTML, CSS, JavaScript and PHP. Ensured that data added by the admin was dynamically displayed on the user interface for seamless user access. Modified and improved the system based on requests from other departments, including fetching data to display on the UI and adding new menus and features to the website."
  },
  {
    date: "June 2025 - July 2025",
    org: "Freelance",
    position: "Web Developer",
    detail: "Freelance Project using React, React-Native, and Nextjs. Includes creating demo app such as ride-hailing. Also developed web platforms for car rental,lawyer landing page and backoffice systems for mentioned apps and websites."
  }
  
  // เพิ่มได้อีก
];

const edu = [
  {
    date: "June 2021 - March 2025",
    org: "Naresuan University",
    position: "Bachelor Degree of Computer Engineering",
    cardIcon: "/assets/icons/nu-en-logo.png",
  },
  // เพิ่มได้อีก
];

const Arraydata = () => (
  <div className="w-full flex flex-col md:flex-row gap-8 mt-8">
    <Expblock
      icon="/assets/icons/exp.png"
      title="WORK EXPERIENCE"
      items={exp}
    />
    <Edublock
      icon="/assets/icons/edu.png"
      title="EDUCATION"
      items={edu}
    />
  </div>
);

export default Arraydata;
