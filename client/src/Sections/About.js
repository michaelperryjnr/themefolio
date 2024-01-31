import React from "react";
import Roadmap from "../Components/RoadMap";

const age =
  new Date() !== "Sun Mar 31 2024 24:00:00 GMT+0000 (Greenwich Mean Time)"
    ? 17
    : 18;

const roadmapTexts = [
  {
    title: "Introduction",
    text: `Michael Perry Tettey, ${age}, Computer Science Major, University of Ghana. `,
  },
  {
    title: "Education",
    text: [
      {
        school: "King's College",
        yearAttended: "2008 - 2010",
      },
      {
        school: "RCS",
        yearAttended: "2010 - 2012",
      },
      {
        school: "Queens Court Intl.",
        yearAttended: "2012 -  2015",
      },
      {
        school: "GCIS",
        yearAttended: "2015 - 2018",
      },
      {
        school: "Achimota School",
        yearAttended: "2018   -   2021",
      },
      {
        school: "University of Ghana",
        yearAttended: "2023 - Present",
      },
    ],
  },
  {
    title: "Work Profile",
    text: [
      {
        company: "Quiver's IT Solutions",
        role: "Junior Dev",
        duration: "2023 - Present",
      },
    ],
  },
  {
    title: "Hobbies",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            placeat aspernatur reiciendis debitis rem? Necessitatibus suscipit
            illum, sit iusto amet atque porro sunt asperiores provident
            mollitia, quod numquam. Nesciunt, beatae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Distinctio placeat aspernatur
            reiciendis debitis rem? Necessitatibus suscipit illum, sit iusto
            amet atque porro sunt asperiores provident mollitia, quod numquam.
            Nesciunt, beatae? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Distinctio placeat aspernatur reiciendis debitis rem?
            Necessitatibus suscipit illum, sit iusto amet atque porro sunt
            asperiores provident mollitia, quod numquam. Nesciunt, beatae? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            placeat aspernatur reiciendis debitis rem? Necessitatibus suscipit
            illum, sit iusto amet atque porro sunt asperiores provident
            mollitia, quod numquam. Nesciunt, beatae?`,
  },
  {
    title: "Achievements",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            placeat aspernatur reiciendis debitis rem? Necessitatibus suscipit
            illum, sntsit iusto amet atque porro sunt asperiores provident
            mollitia, quod numquam. Nesciunt, beatae? Lorem ipsum dolor sit amentst
            consectetur adipisicing elit. Distinctio placeat aspernatur
            reiciendis debitis rem? Necessitatibus suscipit illum, sit iusto
            amet atque porro sunt asperiores provident mollitia, quod numquam.
            Nesciunt, beatae? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Distinctio placeat aspernatur reiciendis debitis rem?
            Necessitatibus suscipit illum, sit iusto amet atque porro sunt
            asperiores provident mollitia, quod numquam. Nesciunt, beatae? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            placeat aspernatur reiciendis debitis rem? Necessitatibus suscipit
            illum, sit iusto amet atque porro sunt asperiores provident
            mollitia, quod numquam. Nesciunt, beatae?`,
  },
];

function RoadMaps() {
  return roadmapTexts.map((index) => {
    return Roadmap(index.title, index.text);
  });
}

export default function About() {
  return (
    <>
      <section
        className="mx-auto relative px-6 py-6 flex justify-center items-start flex-col max-sm:pr-0 max-sm:pl-2"
        id="about"
      >
        <h1 className="text-blue-500 text-4xl font-semibold text-center py-4 max-sm:pl-1">
          About
        </h1>
        <RoadMaps />
      </section>
    </>
  );
}
