import React from 'react';
import { StyledBackgroundImage } from './BackgroundImage.styles';

function BackgroundImage({ props }) {
  return (
    <div>
      <StyledBackgroundImage src={props}></StyledBackgroundImage>
    </div>
  );
}

export default BackgroundImage;
