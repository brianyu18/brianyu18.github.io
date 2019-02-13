import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

import ReactVivus from 'react-vivus';
import technology from '../SVG/technology.svg'
import all from '../SVG/ALL.svg'

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

class Tech extends Component {
  render() {
    return (

        <div style={{"width":"100%","height":"100vh","backgroundColor":"#152239", "textAlign":"center"}}>
          <div>
            <ReactVivus
              id="technology"
              option={{
                file: technology,
              }}
              style={{ height: '50%', width:"30%", margin:"0 auto", paddingTop:"100px"}}
              callback={console.log}
            />
          </div>
          <div>
            <ReactVivus
              id="all"
              option={{
                file: all,
              }}
              style={{ height: '80%%', width: '80%', margin: "0 auto", position:"relative", top:"-60px"}}
              callback={console.log}
            />
          </div>

        </div>
    )
  }
}

export default Tech;
