import { useEffect, useState } from "react";

const useMediaMatch = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const listener = () => setMatches(window.matchMedia(query).matches);
    window.matchMedia(query).addEventListener("change", listener);
    return () => {
      window.matchMedia(query).removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

export default useMediaMatch;
