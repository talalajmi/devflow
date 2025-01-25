"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFormUrlQuery } from "@/lib/url";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface LocalSearchProps {
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
  route: string;
}

const LocalSearch = (props: LocalSearchProps) => {
  const { imgSrc, placeholder, otherClasses, route } = props;

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFormUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image
        width={24}
        height={24}
        alt="Search"
        src={imgSrc}
        className="cursor-pointer"
      />
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder={placeholder}
        className="parapgrapgh-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
