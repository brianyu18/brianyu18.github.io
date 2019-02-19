import React, { Component } from 'react';
import '../Projects.css'
import {Doughnut} from 'react-chartjs-2';
import Navbar from '../Components/Navbar'
import ReactVivus from 'react-vivus';
import rectangle from '../SVG/rectangle.svg'
import hi from '../SVG/hi.svg'


const data={
  labels: ["JavaScript", "Python", "Ruby"],
  datasets: [
    {
      label: "My Skills",
      backgroundColor: ["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],
      borderColor: 'white',
      data: [50, 50, 50],
  }]
}

class Profile extends Component {
  render() {
    return (
      <div style={{"width":"100%","height":"100vh","backgroundColor":"#33466b"}}>



        {/* <div style={{"width":"100%","height":"100%","position":"absolute"}}>
          <div className="skew"></div>
          <div className="skew2"></div>
        </div>*/}
        <div class="uk-flex uk-flex-center uk-grid uk-child-width-expand@s" uk-scrollspy="cls: uk-animation-slide-left-small; target: > div > .uk-card; delay: 500; repeat: true">
          <div class="uk-width-1-2" style={{"height":"100%","position":"relative"}}>
            <div class="uk-card uk-card-default uk-card-body uk-box-shadow-medium" style={{"zIndex":"1","position":"absolute","width":"50%","height":"100vh","backgroundColor":"#84a3ff"}}></div>
            <div
              style={{"zIndex":"1","position":"absolute","background":"rgba(0,0,0,0)","box-shadow":"0 0px 0px rgba(0,0,0,0)"}}
              class="uk-card uk-card-default uk-card-body uk-box-shadow-medium uk-text-center"
            >
                <img style={{"marginTop":"50px"}} src="pictures/me2.jpg" width="75%" alt="" uk-img/>
            </div>
          </div>
          <div class="uk-width-1-2" style={{"height":"100%","position":"relative"}}>
            <div class="uk-card uk-card-default uk-card-body uk-box-shadow-medium" style={{"zIndex":"1","position":"absolute","width":"50%","height":"100vh","backgroundColor":"#84a3ff"}}></div>
              <div
              id="blurb"
                style={{"zIndex":"1","width":"70%","position":"absolute","box-shadow":"0 0px 0px rgba(0,0,0,0)","marginLeft":"10%", "marginTop":"30%"}}
                class="uk-card uk-card-default uk-card-body uk-box-shadow-medium uk-text-center"
              >
                <div>
                  <h3 class="uk-card-title">Hi! I'm Brian...</h3>
                  <p>I am a Full Stack Developer with a focus on innovative solutions to design and UX.</p>
                  <p>My profound appreciation for design and finite details is what drove me to development. Prior to finding my passion in CS - I was the Co-founder of a architectural and contracting company,
                  designing and building in the Bay Area; as well as Project Manager in Finance overseeing web development at a corporate bank.
                  </p>
                  <p>Outside of coding, my interests include: Culinary Arts, Design, Architecture</p>
                </div>
                </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Profile;
