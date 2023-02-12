import React from 'react';

const Image = ({ src, alt, imageClass }) => {
  return (
    <img src={src} alt={alt} className={imageClass} />
  );
};

export default Image;
