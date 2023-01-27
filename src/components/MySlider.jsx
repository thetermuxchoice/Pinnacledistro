import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one'
import React from 'react';
import ReactDOM from 'react-dom/client';


import img1 from '../data/Artisan-Treats-Banner-1.png'
import img2 from '../data/Gummy-Sample-Pack-Announcement-Banner.png'
import img3 from '../data/Pinnacle-Hemp-Delta-8-Pre-Rolls-2pk-Banner.png'
import img4 from '../data/Popular_Brand-Reviews_Pinnacle.jpg'


const { Element } = BannerAnim;
const BgElement = Element.BgElement;
function MySlider() {
  return (
    <BannerAnim
      autoPlay
      autoPlaySpeed={3000}
      autoPlayEffect={false}
    >
      <Element key="aaa"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: 'url({img1})',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Pinnacle hemp</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>
      <Element key="bbb"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage:'url(https://imgur.com/QIOojAO)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Pinnacle Hemp</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>

      

    </BannerAnim>
  );
}
export default MySlider


