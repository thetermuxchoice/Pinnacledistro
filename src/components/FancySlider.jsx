import React from 'react'
import bg1 from "../data/header1.jpg";
import bg2 from "../data/header2.jpg";
import bg3 from "../data/header3.png";
import bg4 from "../data/header4.jpg";

const FancySlider = () => {
  return (
    <div className="demo-cont">
  {/* slider start */}
  <div className="fnc-slider example-slider" >
    <div className="fnc-slider__slides">
      {/* slide start */}
      <div className="fnc-slide m--blend-green m--active-slide" >
        <div className="fnc-slide__inner" style={{backgroundImage:`url(${bg1})`}}>
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner" />
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>Black</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>Widow</span>
              </div>
            </h2>
            <button type="button" className="fnc-slide__action-btn">
              Credits
              <span data-text="Credits"></span>
            </button>
          </div>
        </div>
      </div>
      {/* slide end */}
      {/* slide start */}
      <div className="fnc-slide m--blend-dark">
        <div className="fnc-slide__inner" style={{backgroundImage:`url(${bg2})`}}>
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner" />
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>Captain</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>America</span>
              </div>
            </h2>
            <button type="button" className="fnc-slide__action-btn">
              Credits
              <span data-text="Credits"></span>
            </button>
          </div>
        </div>
      </div>
      {/* slide end */}
      {/* slide start */}
      <div className="fnc-slide m--blend-red">
        <div className="fnc-slide__inner" style={{backgroundImage:`url(${bg3})`}}>
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner" />
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>Iron</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>Man</span>
              </div>
            </h2>
            <button type="button" className="fnc-slide__action-btn">
              Credits
              <span data-text="Credits"></span>
            </button>
          </div>
        </div>
      </div>
      {/* slide end */}
      {/* slide start */}
      <div className="fnc-slide m--blend-blue">
        <div className="fnc-slide__inner" style={{backgroundImage:`url(${bg4})`}}>
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner" />
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>Thor</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>Just Thor</span>
              </div>
            </h2>
            <button type="button" className="fnc-slide__action-btn">
              Credits
              <span data-text="Credits"></span>
            </button>
          </div>
        </div>
      </div>
      {/* slide end */}
    </div>
    <nav className="fnc-nav">
      <div className="fnc-nav__bgs">
        <div className="fnc-nav__bg m--navbg-green m--active-nav-bg" />
        <div className="fnc-nav__bg m--navbg-dark" />
        <div className="fnc-nav__bg m--navbg-red" />
        <div className="fnc-nav__bg m--navbg-blue" />
      </div>
      <div className="fnc-nav__controls">
        <button className="fnc-nav__control">
          Black Widow
          <span className="fnc-nav__control-progress" />
        </button>
        <button className="fnc-nav__control">
          Captain America
          <span className="fnc-nav__control-progress" />
        </button>
        <button className="fnc-nav__control">
          Iron Man
          <span className="fnc-nav__control-progress" />
        </button>
        <button className="fnc-nav__control">
          Thor
          <span className="fnc-nav__control-progress" />
        </button>
      </div>
    </nav>
  </div>
  {/* slider end */}
</div>

  )
}

export default FancySlider