import { useCallback, useMemo } from "react";
import { atom, useAtom } from "jotai";
import { Service, Tag } from "@config/types";
import { projectCards } from "@config/constants";

const filtersAtom = atom<Tag[]>([]);
const pageAtom = atom(1);
const pageSize = 8;

const useProjectCards = () => {
  const [filters, setFilters] = useAtom(filtersAtom);
  const [page, setPage] = useAtom(pageAtom);

  const toggleFilter = useCallback(
    (filter: Tag) => {
      setPage(1);
      setFilters((prevFilters) => {
        if (prevFilters.find((f) => f.value === filter.value)) {
          return prevFilters.filter(
            (_filter) => _filter.value !== filter.value,
          );
        }

        return [...prevFilters, filter];
      });
    },
    [setFilters, setPage],
  );

  const cards = useMemo(() => {
    if (filters.length <= 0) return projectCards;

    return projectCards.filter((card) => {
      return filters.some((filter) => card.categories.indexOf(filter) >= 0);
    });
  }, [filters]);

  return {
    cards,
    paginatedCards: cards.slice((page - 1) * pageSize, pageSize * page),
    toggleFilter,
    filters,
    page,
    setPage,
    pageSize,
  };
};

export default useProjectCards;
