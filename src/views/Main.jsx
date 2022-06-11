import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import top from '../assets/media/top.jpg';
import middle from '../assets/media/middle.jpg';
import bottom from '../assets/media/bottom.jpg';
import React from 'react';
import BackgroundImage from '../components/BackgroundImage/BackgroundImage';

function Main() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1.5}
          style={{
            backgroundImage: `url(${top})`,
            backgroundSize: 'cover',
          }}
        >
          <h1>This is a thing</h1>
          {/* <BackgroundImage props={top} /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.5} factor={1}>
          <BackgroundImage props={middle} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8}>
          <BackgroundImage props={bottom} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Main;
