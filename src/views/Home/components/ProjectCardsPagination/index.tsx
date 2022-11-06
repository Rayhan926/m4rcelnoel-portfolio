import useProjectCards from "@hooks/useProjectCards";
import { cx } from "@utils";
import React from "react";

const ProjectCardsPagination = () => {
  const { cards, setPage, pageSize, page } = useProjectCards();

  return (
    <div className="flex justify-center gap-5 mt-10">
      {[...new Array(Math.ceil(cards.length / pageSize))].map((_, i) => (
        <button
          className={cx(
            "aspect-square flex items-center justify-center px-4",
            i + 1 === page ? "bg-primary text-white" : "bg-gray-100",
          )}
          onClick={() => setPage(i + 1)}
          key={i}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default ProjectCardsPagination;
