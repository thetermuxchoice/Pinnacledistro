import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Styl from './Header.css'
import t1 from '../data/header1.jpg'
import t2 from '../data/header2.jpg'
import t3 from '../data/header3.png'
import t4 from '../data/header4.jpg'

const Header = (
  <AwesomeSlider animation="cubeAnimation">
  media={[
      {
        source:{t1} ,
      },
      {
        source:{t2} ,
      },
      {
        source:{t3} ,
      },
      {
        source:{t4} ,
      },
    ]}
   
  </AwesomeSlider>
);



export default Header