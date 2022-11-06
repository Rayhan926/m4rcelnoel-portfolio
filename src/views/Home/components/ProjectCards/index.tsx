import useProjectCards from "@hooks/useProjectCards";
import React from "react";
import ProjectCard from "../ProjectCard";
import ProjectCardsFilters from "../ProjectCardsFilters";
import ProjectCardsPagination from "../ProjectCardsPagination";

const ProjectCards = () => {
  const { paginatedCards } = useProjectCards();
  return (
    <div>
      {/** Filters --Start-- */}
      <ProjectCardsFilters />
      {/** Filters --End-- */}

      {/** Project Cards --Start-- */}
      <div className="grid grid-cols-2 gap-[50px]">
        {paginatedCards.map((card, i) => (
          <ProjectCard {...card} key={i} />
        ))}
      </div>
      {/** Project Cards --End-- */}

      {/** Pagination --Start-- */}
      <ProjectCardsPagination />
      {/** Pagination --End-- */}
    </div>
  );
};

export default ProjectCards;
