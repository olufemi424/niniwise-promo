import React, { lazy, Suspense } from "react";

const Image = lazy(() => import("./Image"));

const LazyLoadedImage = ({ src, alt, imageClass }) => {
    return (
      <Suspense fallback={<p>Loading image...</p>}>
        <Image src={src} alt={alt} imageClass={imageClass} />
      </Suspense>
    );
};

export default LazyLoadedImage;
