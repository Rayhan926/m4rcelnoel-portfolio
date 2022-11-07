import { tags } from "@config/constants";
import useProjectCards from "@hooks/useProjectCards";
import { cx } from "@utils";
import React from "react";

const ProjectCardsFilters = () => {
  const { toggleFilter, filters } = useProjectCards();
  return (
    <div className="mb-5 mt-8 lg:mt-16">
      {/* <div className="flex justify-end">
        <button className="bg-red-600">Filter</button>
      </div> */}
      <div className="flex gap-3 overflow-x-auto">
        {tags.map((service, i) => {
          const isActive = filters.find((s) => s.value === service.value);
          return (
            <button
              className={cx(
                isActive ? "bg-primary text-white" : "bg-gray-100 text-black",
                "px-5 py-2 outline-non whitespace-nowrap scrollbar-hidden",
              )}
              onClick={() => toggleFilter(service)}
              key={i}
            >
              {service.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCardsFilters;
