import React, { Component } from 'react';
import NavBottom from '../Components/NavBottom'
import Navbar from '../Components/Navbar'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import ReactVivus from 'react-vivus';
import ball2 from '../SVG/ball2.svg';
import projects from '../SVG/project.svg';
import profile from '../SVG/profile.svg';
import skills from '../SVG/skills.svg';
import left from '../SVG/left.svg';
import right from '../SVG/right.svg';


class Landing extends Component {
  render() {
    return (
      <div style={{"width":"100%","height":"100vh","backgroundColor":"#152239", "textAlign":"center"}}>
      <div class="uk-flex uk-flex-center uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid-center>
        <div class="uk-width-1-6" style={{"borderColor":"0, 0, 0, 0", "marginTop":"230px"}}>
        <ReactVivus
          id="left"
          option={{
            file: left,
          }}
          style={{ height: '100%%', width: '100%'}}
          callback={console.log}
        />
        </div>
        <div class="uk-width-1-6"style={{"borderColor":"0, 0, 0, 0", "marginTop":"230px"}}>
        <a href='#about'>
        <ReactVivus
          id="profile"
          option={{
            file: profile,
          }}
          style={{ height: '100%%', width: '100%'}}
          callback={console.log}
        />
        </a>
        </div>
        <div class="uk-width-1-6"style={{"borderColor":"0, 0, 0, 0", "marginTop":"230px"}}>
        <a href='#projects'>
        <ReactVivus
          id="project"
          option={{
            file: projects,
          }}
          style={{ height: '100%%', width: '100%'}}
          callback={console.log}
        />
        </a>
        </div>
        <div class="uk-width-1-6"style={{"borderColor":"0, 0, 0, 0", "marginTop":"230px"}}>
        <a href='#tech'>
        <ReactVivus
          id="skills"
          option={{
            file: skills,
          }}
          style={{ height: '100%%', width: '100%'}}
          callback={console.log}
        />
        </a>
        </div>
        <div class="uk-width-1-6"style={{"borderColor":"0, 0, 0, 0", "marginTop":"230px"}}>
        <ReactVivus
          id="right"
          option={{
            file: right,
          }}
          style={{ height: '100%%', width: '100%'}}
          callback={console.log}
        />
        </div>

      </div>
      <NavBottom />

      </div>
    )
  }
}

export default Landing;
