import React from "react";
import { emptyStar } from "../icons/emptyStar";
import { fullStar } from "../icons/fullStar";
import { halfFullStar } from "../icons/halfFullStar";
import { IRating } from "../types";
import { RatingWrapper } from "./styles/rating";

export default function Rating({ count, rate }: IRating) {
  const full = Math.floor(rate);
  const half = rate % 1;
  const empty = 5 - full - (half > 0 ? 1 : 0);
  return (
    <RatingWrapper>
      {new Array(full).fill(0).map((_, i) => fullStar)}
      {half > 0 && halfFullStar}
      {new Array(empty).fill(0).map((_, i) => emptyStar)}
    </RatingWrapper>
  );
}
