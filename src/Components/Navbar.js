import { Menu, Icon } from 'antd';

import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <nav class="uk-navbar-container uk-navbar-transparent uk-light" style={{position:"fixed", top:"0px", zIndex:"5"}} data-uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                  <li>
                      <a href="#home">
                          <span npmclass="uk-icon uk-margin-small-right" uk-icon="icon: home"></span>
                          HOME
                      </a>
                  </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Navbar;
