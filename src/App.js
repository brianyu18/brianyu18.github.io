import React, { Component } from 'react';
import Profile from './Container/Profile'
import Navbar from './Components/Navbar'
import ScrollableAnchor from 'react-scrollable-anchor'

import Skills from './Container/Skills'
import Landing from './Container/Landing'
import Projects from './Container/Projects'
import Tech from './Container/Tech'

import Antd from 'antd/dist/antd.css'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css'

import './App.css';

// loads the Icon plugin
UIkit.use(Icons);

class App extends Component {
  render() {
    return (
      <div style={{"width":"100%", "height":"100%","margin":"auto"}}>
      {/*<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="animation: push">

          <ul class="uk-slideshow-items">
              <li>
                  <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                      <Landing />
                  </div>
                  <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
                  <div class="uk-position-center uk-position-medium uk-text-center">
                      <div uk-slideshow-parallax="scale: 1,1,0.8">
                          <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                          <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet.</p>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                      <Profile />
                  </div>
                  <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
                  <div class="uk-position-center uk-position-medium uk-text-center">
                      <div uk-slideshow-parallax="scale: 1,1,0.8">
                          <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                          <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet.</p>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                      <Projects />
                  </div>
                  <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
                  <div class="uk-position-center uk-position-medium uk-text-center">
                      <div uk-slideshow-parallax="scale: 1,1,0.8">
                          <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                          <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet.</p>
                      </div>
                  </div>
              </li>
          </ul>

          <a data-uk-icon="chevron-left" class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
          <a data-uk-icon="chevron-right"class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>

        </div>
      </div>*/}
        <Navbar />
        <ScrollableAnchor id={'home'}>
          <Landing />
        </ScrollableAnchor>
        <ScrollableAnchor id={'about'}>
          <Profile />
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Projects />
        </ScrollableAnchor>
        <ScrollableAnchor id={'tech'}>
          <Tech />
        </ScrollableAnchor>

      </div>
    );
  }
}

export default App;
