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
        <div class="uk-flex uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
          <div class="uk-width-1-2">
            <img src="pictures/me2.jpg" width="100%" height="100%" alt="" uk-img/>
          </div>
                <div style={{"zIndex":"2", "width":"50%"}}class="uk-width-1-2 uk-card uk-card-default uk-card-body uk-box-shadow-medium">
                  <h3 class="uk-card-title">Hi! I'm Brian...</h3>
                  <p>I am a Full Stack Developer with a focus on innovative solutions to design and UX.</p>
                  <p>My profound appreciation for design and finite details is what drove me to development. Prior to finding my passion in CS - I was the Co-founder of a architectural and contracting company,
                  designing and building in the Bay Area; as well as Project Manager in Finance overseeing web development at a corporate bank.
                  </p>
                  <p>Outside of coding, my interests include: Culinary Arts, Design, Architecture</p>
                </div>
          </div>


      {/*  <div style={{"display":"flex"}} uk-scrollspy="cls: uk-animation-slide-left-small; target: > div > .uk-card; delay: 500; repeat: true">
          <div style={{"width":"50%"}}>
            <div class="uk-card uk-card-default uk-card-body uk-box-shadow-medium" style={{"zIndex":"1","position":"absolute","width":"410px","height":"100%","backgroundColor":"#84a3ff"}}></div>
            <div
              style={{"zIndex":"1","marginLeft":"100px","position":"absolute","background":"rgba(0,0,0,0)","box-shadow":"0 0px 0px rgba(0,0,0,0)"}}
              class="uk-card uk-card-default uk-card-body uk-box-shadow-medium"
            >
                <img src="pictures/me2.jpg" width="42%" height="42%" alt="" uk-img/>
            </div>
          </div>
          <div style={{"height":"400px","width":"40%","marginTop":"200px","textAlign":"center","paddingRight":"100px"}}>
            <div class="uk-card uk-card-default uk-card-body uk-box-shadow-medium" style={{"marginLeft":"70px","position":"absolute","width":"540px","height":"35%","backgroundColor":"#84a3ff","marginTop":"-30px","zIndex":"1"}}></div>
            <div class="uk-card uk-card-default uk-card-body uk-box-shadow-medium" style={{"marginLeft":"130px","position":"absolute","width":"400px","height":"50%","backgroundColor":"#79889c","marginTop":"30px","zIndex":"1"}}></div>

            <div style={{"zIndex":"2","marginLeft":"20%"}}class="uk-card uk-card-default uk-card-body uk-box-shadow-medium">
                <h3 class="uk-card-title">Hi! I'm Brian...</h3>
                <p>I am a Full Stack Developer with a focus on innovative solutions to design and UX.</p>
                <p>My profound appreciation for design and finite details is what drove me to development. Prior to finding my passion in CS - I was the Co-founder of a architectural and contracting company,
                designing and building in the Bay Area; as well as Project Manager in Finance overseeing web development at a corporate bank.
                </p>
                <p>Outside of coding, my interests include: Culinary Arts, Design, Architecture</p>
          </div>

        </div>
      </div>*/}
    </div>
    );
  }
}

export default Profile;
