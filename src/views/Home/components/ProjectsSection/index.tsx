import SectionTitle from "@components/SectionTitle";
import React from "react";
import ProjectCards from "../ProjectCards";

const ProjectsSection = () => {
  return (
    <section className="mt-20">
      <div className="container-md">
        <SectionTitle title="AUSGEWÄHLTE PROJEKTE" />

        <div className="flex flex-wrap justify-between items-center mt-2">
          <h1 className="text-[30px] lg:text-[85px] font-black text-black">
            Referenzen
          </h1>
          <p className="max-w-[470px] lg:shrink-0 text-base text-[#707070] mt-[22px] lg:mt-0">
            Was macht uns besonders? Unsere umfassende Kompetenz in den
            Bereichen Design, Programmierung und Marketing. Wir bieten alle
            Leistungen rund um Programmierung & Design an - und das aus einer
            Hand.
          </p>
        </div>

        <ProjectCards />
      </div>
    </section>
  );
};

export default ProjectsSection;
