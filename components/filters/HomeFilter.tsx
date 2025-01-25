"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFormUrlQuery } from "@/lib/url";

const filters = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Unanswered",
    value: "unanswered",
  },
  {
    name: "Answered",
    value: "answered",
  },
  {
    name: "Most Voted",
    value: "most-voted",
  },
  {
    name: "Least Voted",
    value: "least-voted",
  },
  {
    name: "Most Answered",
    value: "most-answered",
  },
  {
    name: "Least Answered",
    value: "least-answered",
  },
  {
    name: "Recommended",
    value: "recommended",
  },
  {
    name: "Popular",
    value: "popular",
  },
];

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const [active, setActive] = useState(filter || "");

  const handleTypeClick = (filter: string) => {
    let newUrl = "";

    if (filter === active) {
      setActive("");

      newUrl = removeKeysFormUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            `body-medium rounded-lg px-6 py-3 capitalize shadow-none transition-all duration-300 ease-out`,
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-primary-100 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400 hover:text-primary-500 dark:hover:text-primary-500"
          )}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
