import React, { Component } from 'react';
import ProShow from '../Components/ProShow'
import Title from '../SVG/projecttitle.svg';
import '../../node_modules/uikit/dist/css/uikit.min.css'


class Projects extends Component {
  render() {
    return (
        <div style={{"width":"100%","height":"100vh","background-color":"#A6C4E0","textAlign":"center","position":"relative"}}>
          <div style={{"paddingTop":"50px"}}>
              <div style={{"width":"20%","margin":"auto"}}>
                <svg width="796px" height="219px" viewBox="0 0 796 219" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>Group</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="RIGHT">
                            <g id="Group">
                                <rect id="Rectangle" fill="#A6C4E0" x="0" y="0" width="796" height="219"></rect>
                                <text id="PROJECTS" stroke="#33466B" fill="#FFFFFF" font-family="Phosphate-Inline, Phosphate" font-size="165" font-weight="normal">
                                    <tspan x="49.355" y="167">PROJECTS</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </svg>
              </div>
              <div style={{"height":"80%","width":"80%","margin":"auto",
                "position": "absolute",
                "top": "50%",
                "left": "50%",
                "-ms-transform": "translate(-50%, -50%)",
                "transform": "translate(-50%, -50%)",
                "paddingTop": "50px"}}>
                <ProShow />
              </div>
            </div>
          </div>


    )
  }
}

export default Projects;
