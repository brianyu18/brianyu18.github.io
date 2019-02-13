import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

const data={
  labels: ["JavaScript", "Python", "Ruby"],
  datasets: [
    {
      label: "My Skills",
      backgroundColor: ["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],
      borderColor: 'white',
      data: [50, 20, 30],
  }]
}
class Skills extends Component {
  render() {
    return (
      <div style={{"width":"100%","height":"50vh","display":"flex","backgroundColor":"#33466b"}}>
        <div style={{"height":"500px","width":"50%"}}>
          <Doughnut data={data}/>
        </div>
        <div style={{"height":"500px","width":"50%"}}>
          <Doughnut data={data}/>
        </div>

      </div>
    );
  }
}

export default Skills;
