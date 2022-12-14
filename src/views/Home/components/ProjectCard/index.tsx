import { ProjectCard } from "@config/types";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ tags, imgSrc, title }: ProjectCard) => {
  return (
    <div className="bg-gray-100 relative">
      {/** Tags And Title --Start-- */}
      <div className="absolute top-0 left-0 w-full">
        {/** Tags --Start-- */}
        <div className="flex justify-end gap-3 p-4 lg:p-7 pb-0">
          {tags.map((tag, i) => (
            <button
              key={i}
              className="bg-white rounded-lg text-black py-1.5 lg:py-2 px-3 lg:px-4 cursor-default text-sm lg:text-base"
            >
              {tag.name}
            </button>
          ))}
        </div>
        <h4 className="text-[20px] lg:text-[42px] font-black text-white mt-4 px-7 pr-[60px] lg:px-[58px]">
          {title}
        </h4>
        {/** Tags --End-- */}
      </div>
      {/** Tags And Title --End-- */}

      <Image
        quality={100}
        width={570 * 1.5}
        height={730 * 1.5}
        alt={title}
        src={imgSrc}
      />
    </div>
  );
};

export default ProjectCard;
