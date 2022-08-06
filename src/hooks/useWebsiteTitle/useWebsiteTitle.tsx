import { useEffect } from "react";

export default function useWebsiteTitle(title: string) {
  //return [];
  useEffect(() => {
    document.title = title;
  }, [title]);
};