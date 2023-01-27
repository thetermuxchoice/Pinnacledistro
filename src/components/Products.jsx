import React from 'react'
import p1 from '../data/p1.png'
import p2 from '../data/p2.png'
import p3 from '../data/p3.png'
const Products = () => {
  return (
    <div>
    <div className="container text-center">
      <h1>Best Selling Alternative Cannabinoids</h1>
    </div>
    <div className="shell">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="wsk-cp-product">
              <div className="wsk-cp-img">
                <img src={p1} alt="Product" className="img-responsive" />
              </div>
              <div className="wsk-cp-text">
                <div className="category">
                  <span>ARTISAN</span>
                </div>
                <div className="title-product">
                  <h3>Delta 9 THC</h3>
                </div>
                <div className="description-prod">
                  <p>Pinnacle Hemp Chocolate 125 mg </p>
                </div>
                <div className="card-footer">
                  <div className="wcf-left"><span className="price" />Price: 12$-39$</div>
                  <div className="wcf-right"><a href="#" className="buy-btn"><i className="zmdi zmdi-shopping-basket" /></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wsk-cp-product">
              <div className="wsk-cp-img"><img src={p2} alt="Product" className="img-responsive" /></div>
              <div className="wsk-cp-text">
                <div className="category">
                  <span>RIFT</span>
                </div>
                <div className="title-product">
                  <h3>THC Gummies</h3>
                </div>
                <div className="description-prod">
                  <p>RIFT THC 300mg</p>
                </div>
                <div className="card-footer">
                  <div className="wcf-left"><span className="price" />Price :9.99$ - 24.99$</div>
                  <div className="wcf-right"><a href="#" className="buy-btn"><i className="zmdi zmdi-shopping-basket" /></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wsk-cp-product">
              <div className="wsk-cp-img"><img src={p3} alt="Product" className="img-responsive" /></div>
              <div className="wsk-cp-text">
                <div className="category">
                  <span>NXT GEM</span>
                </div>
                <div className="title-product">
                  <h3>Boost,Snooze,Inspire</h3>
                </div>
                <div className="description-prod">
                  <p>Pinnacle 1g Cartride</p>
                </div>
                <div className="card-footer">
                  <div className="wcf-left"><span className="price" />Price: 4.99$ - 19.99$</div>
                  <div className="wcf-right"><a href="#" className="buy-btn"><i className="zmdi zmdi-shopping-basket" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Products