import { useCallback, useEffect, useState } from "react";

import { CatFactResponse } from "./AboutCustomTypes";
import { TheVoid } from "../../GlobalCustomTypes";

export default function CatFact() {
  const [fact, setFact] = useState<string>("Loading...");

  const fetchFact: TheVoid = useCallback(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data: CatFactResponse) => setFact(data.fact))
      .catch(() => setFact("Failed to load fact!"));
  }, [setFact]);

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div>
      <p style={{ color: "brown" }}>{fact}</p>
    </div>
  );
}
