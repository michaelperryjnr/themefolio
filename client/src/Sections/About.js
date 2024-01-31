import React from "react";
import Roadmap from "../Components/RoadMap";


const roadmapTexts = [{
  title : "The MeFolio",
  text : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
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
            mollitia, quod numquam. Nesciunt, beatae?`
}]

const roadmapText = roadmapTexts[0].text
 const roadmapTextTitle = roadmapTexts[0].title


export default function About() {
  return (
    <>
      <section
        className="mx-auto relative px-6 py-6 flex justify-center items-start flex-col "
        id="about"
      >
        <h1 className="text-blue-500 text-4xl font-semibold text-center py-4">
          About
        </h1>
        {Roadmap(roadmapTextTitle,roadmapText)}
        {Roadmap(roadmapTextTitle,roadmapText)}
        {Roadmap(roadmapTextTitle,roadmapText)}
        {Roadmap(roadmapTextTitle,roadmapText)}
        {Roadmap(roadmapTextTitle,roadmapText)}
        {Roadmap(roadmapTextTitle,roadmapText)}
        {Roadmap(roadmapTextTitle,roadmapText)}
        {Roadmap(roadmapTextTitle,roadmapText)}
        {Roadmap(roadmapTextTitle,roadmapText)}
      </section>
    </>
  );
}
