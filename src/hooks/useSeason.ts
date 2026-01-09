import { useEffect } from 'react';
import { NEXT_SPRING_MONTH, NEXT_SPRING_DAY, seasons } from "../lib/utils.ts";

export function useSeason() {
  const d = new Date();
  const month = d.getMonth();
  const day = d.getDate();

  useEffect(() => {
    const className = (NEXT_SPRING_MONTH === month && day >= NEXT_SPRING_DAY ? 'spring' : seasons[month]);
    document.body.classList.add('season-' + className);
  }, []);
}

