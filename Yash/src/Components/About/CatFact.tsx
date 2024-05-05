import { useCallback, useEffect, useState } from "react";
import { CatFactResponse, FetchFactFunction } from "./AboutTyoes";

export default function CatFact() {
  const [fact, setFact] = useState("Loading...");

  const fetchFact: FetchFactFunction = useCallback(() => {
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
      <p style={{ color: "blue" }}>{fact}</p>
    </div>
  );
}
