import React from 'react';

// ImageComponent renders each image
const ReactMemoImage = React.memo(({ src, alt }) => {
  return <img src={src} alt={alt} loading="lazy" className='size-full' />;
});

export default ReactMemoImage;
