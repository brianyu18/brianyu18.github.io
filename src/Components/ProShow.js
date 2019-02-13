import React, { Component } from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../../node_modules/uikit/dist/css/uikit.min.css'
import '../../node_modules/uikit/dist/js/uikit.min.js'
import '../../node_modules/uikit/dist/js/uikit-core.min.js'



class ProShow extends Component {
  render() {
    return (

        <div style={{"width":"100%","margin":"auto"}}>
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true">

            <ul class="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
                <li class="uk-width-3-4">
                    <div class="uk-cover-container uk-transition-toggle">
                        <img src="pictures/roadtrip.gif" alt="" data-uk-cover/>
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                            <h3 class="uk-margin-remove">ROADTRIP</h3>
                        </div>
                    </div>
                </li>
                <li class="uk-width-3-4">
                    <div class="uk-cover-container uk-transition-toggle">
                        <img src="pictures/whitepaper.gif" alt="" data-uk-cover/>
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                            <h3 class="uk-margin-remove">WHITEPAPER</h3>
                        </div>
                    </div>
                </li>
                <li class="uk-width-3-4">
                    <div class="uk-cover-container uk-transition-toggle">
                        <img src="pictures/ESCPE.gif" alt="" data-uk-cover/>
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                            <h3 class="uk-margin-remove">ESCPE</h3>
                        </div>
                      </div>
                </li>
                <li class="uk-width-3-4">
                    <div class="uk-cover-container uk-transition-toggle">
                      <img src="pictures/beatxmaniax.gif" alt="" data-uk-cover/>
                      <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                          <h3 class="uk-margin-remove">BEATXMANIAX</h3>
                      </div>
                    </div>
                </li>
            </ul>

            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

            <a data-uk-icon="chevron-left" class="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a data-uk-icon="chevron-right" class="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>


          </div>
        </div>
    );
  }
}

export default ProShow;
