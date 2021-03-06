import React, { Component } from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../../node_modules/uikit/dist/css/uikit.min.css'
import '../../node_modules/uikit/dist/js/uikit.min.js'
import '../../node_modules/uikit/dist/js/uikit-core.min.js'



class ProShow extends Component {
  render() {
    return (

        <div  style={{"width":"100%","margin":"auto"}}>
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true">

        {/*<ul class="uk-slideshow-items">
            <li>
                <img src="pictures/roadtrip.gif" alt="" data-uk-cover/>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">ROADTRIP</h3>
                </div>
            </li>
            <li>
                <img src="pictures/whitepaper.gif" alt="" data-uk-cover/>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">Bottom</h3>
                    <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </li>
            <li>
                <img src="pictures/ESCPE.gif" alt="" data-uk-cover/>
                <div class="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
                    <h3 class="uk-margin-remove">Left</h3>
                    <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </li>
            <li>
                <img src="pictures/beatxmaniax.gif" alt="" data-uk-cover/>
                <div class="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
                    <h3 class="uk-margin-remove">Left</h3>
                    <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </li>

        </ul>*/}

            <ul class="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
                <li class="uk-width-3-4 ">
                    <div class="uk-cover-container uk-transition-toggle">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VRAkbfLuQ6Q?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen uk-cover></iframe>
                      <div class="uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-top">
                        <h3 class="uk-margin-remove">ROADTRIP</h3>
                      </div>
                    </div>
                </li>
                <li class="uk-width-3-4 ">
                    <div class="uk-cover-container uk-transition-toggle">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FsRSWsnIZtc?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen uk-cover></iframe>
                      <div class="uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-top">
                        <h3 class="uk-margin-remove">WHITEPAPER</h3>
                      </div>
                    </div>
                </li>
                <li class="uk-width-3-4 ">
                    <div class="uk-cover-container uk-transition-toggle">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zLg85UkP-qQ?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen uk-cover></iframe>
                      <div class="uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-top">
                        <h3 class="uk-margin-remove">BEATxMANIAx</h3>
                      </div>
                    </div>
                </li>
                <li class="uk-width-3-4 ">
                    <div class="uk-cover-container uk-transition-toggle">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1-hvckCd4kM?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen uk-cover></iframe>
                      <div class="uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-top">
                        <h3 class="uk-margin-remove">ESCAPE</h3>
                      </div>
                    </div>
                </li>
            </ul>

            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

            <a style={{"textShadow": "0 0 10px black", "color":"black"}} data-uk-icon="chevron-left" class="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a style={{"textShadow": "0 0 10px black", "color":"black"}} data-uk-icon="chevron-right" class="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>


          </div>
        </div>
    );
  }
}

export default ProShow;
