
 import React, { Component } from 'react'
 import './App.css'
 import logo from './assets/section-1.jpg'
 import image from './assets/img-1.jpg'
 import image2 from './assets/img-2.jpg'
 import image3 from './assets/img-3.jpg'
 import icon1 from './assets/fb.svg'
 import icon2 from './assets/insta.svg'
 import icon3 from './assets/tw.svg'
 import icon4 from './assets/Linkedin.svg'
 
 export default class App extends Component {
   render() {
     return (
      <div>
        <header className="header">
          <ul>
            <li><a className='header-ul-li-a-1' href="#"><b>Works</b></a></li>
            <li><a className='header-ul-li-a-2' href="#"><b>Blog</b></a></li>
            <li><a className='header-ul-li-a-3' href="#"><b>Contact</b></a></li>
          </ul>
        </header>
        <section className="section-1">
          <div className="section-1_div-1">
            <h1>Hi, I am John,<br></br>Creative Technologist</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button>Download Resume</button>
          </div>
          <div className="section-1_div-2">
            <img src={logo} alt="" />
          </div>
        </section>
        <section className="section-2">
          <div className="section-2_div-1">
            <p>Recent posts</p>
            <h3>View all</h3>
          </div>
          <div className="section-2_div-2">
            <div className="div-1">
              <h2>Making a design system from scratch</h2>
              <span>
                <h4 className="p1">12 Feb 2020</h4>
                <hr />
                <p className="p2">Design, Pattern</p>
              </span>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="div-1">
              <h1>Creating pixel perfect icons in Figma</h1>
              <span>
                <h4 className="p1">12 Feb 2020</h4>
                <hr />
                <p className="p2">Design, Pattern</p>
              </span>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </section>
        <section className="section-3">
          <p>Featured works</p>
          <div className="cards">
            <div className="card-1">
              <div className="img">
                <img src={image} alt="" />
              </div>
              <div className="texts">
                <h1>Designing Dashboards</h1>
                <span>
                  <div className="year">2020</div>
                  <p>Dashboard</p>
                </span>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
            <hr className='hr' />
            <div className="card-1">
              <div className="img">
                <img src={image2} alt="" />
              </div>
              <div className="texts">
                <h1>Vibrant Portraits of 2020</h1>
                <span>
                  <div className="year">2018</div>
                  <p>Illustration</p>
                </span>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
            <hr className='hr' />
            <div className="card-1">
              <div className="img">
                <img src={image3} alt="" />
              </div>
              <div className="texts">
                <h1>36 Days of Malayalam type</h1>
                <span>
                  <div className="year">2018</div>
                  <p>Typography</p>
                </span>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
            <hr className='hr' /> 
          </div>
        </section>
        <footer>
          <div className="icons">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
          </div>
        </footer>
      </div>
     )
   }
 }
 