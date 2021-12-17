import React from "react";
import ReactImageGallery from "react-image-gallery";
import { categoriesImages } from "../data/products";

export const Categories = ({ filter = "all" }: { filter?: "all" | "some" }) => {
  return (
    <ReactImageGallery
      items={categoriesImages}
      // renderItem={(item) => ()}
      showBullets={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showNav={false}
    />
  );
};
