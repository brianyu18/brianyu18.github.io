import { Menu, Icon } from 'antd';

import React, { Component } from 'react';

class NavBottom extends Component {
  render() {
    return (
      <div style={{"width":"100%","bottom":"0", "position":"fixed","zIndex":"10","textAlign":"center"}}>
        <footer>
          <nav class="uk-navbar-container uk-navbar-transparent uk-light" data-uk-navbar>
            <div class="uk-navbar-center">
              <ul class="uk-navbar-nav">
                <li>
                    <a href="/github">
                        <span class="uk-icon uk-margin-small-right" uk-icon="icon: github"></span>
                        GitHub
                    </a>
                </li>
                <li>
                  <a>/</a>
                </li>
                <li>
                    <a href="/linkedin">
                        <span class="uk-icon uk-margin-small-right" uk-icon="icon: linkedin"></span>
                        LinkedIn
                    </a>
                </li>
                <li>
                  <a>/</a>
                </li>
                <li>
                    <a href="/instagram">
                        <span class="uk-icon uk-margin-small-right" uk-icon="icon: instagram"></span>
                        INSTAGRAM
                    </a>
                </li>
                <li>
                  <a>/</a>
                </li>
                <li>
                    <a href="mailto:yu.brian.dp@gmail.com">
                        <span class="uk-icon uk-margin-small-right" uk-icon="icon: mail"></span>
                        GMAIL
                    </a>
                </li>
              </ul>
            </div>
          </nav>
        </footer>




            </div>
    );
  }
}

export default NavBottom;
