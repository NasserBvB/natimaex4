import React from "react";
import { EmptyStar } from "../icons/emptyStar";
import { FullStar } from "../icons/fullStar";
import { HalfFullStar } from "../icons/halfFullStar";
import { IRating } from "../types";
import { RatingWrapper } from "./styles/rating";

export default function Rating({ count, rate }: IRating) {
  const full = Math.floor(rate);
  const half = rate % 1;
  const empty = 5 - full - (half > 0 ? 1 : 0);
  return (
    <RatingWrapper>
      {new Array(full).fill(0).map((_, i) => (
        <FullStar key={i} />
      ))}
      {half > 0 && <HalfFullStar />}
      {new Array(empty).fill(0).map((_, i) => (
        <EmptyStar key={i} />
      ))}
    </RatingWrapper>
  );
}
