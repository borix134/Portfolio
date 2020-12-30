import React, { useState } from 'react';
import '../App.css';
import Stack from './content/Stack';
import Desktop from './content/Desktop';
import Thing from './content/Thing';
import Project from './content/Project';
import Place from './content/Place';
import me from './me.jpeg';

const titles = ["/home/nick","Projects","Technicalities","Find me on"];

function Panel() {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(titles[index]);

  var panels = [];
  var things = [];
  var projects = [];
  var places = [];
  
  for (var i=0; i < 4; i++) {
    things.push(<Thing it={i}/>);
  }
 
  for (var i=0; i < 3; i++) {
    projects.push(<Project it={i}/>);
    places.push(<Place it={i}/>);
  }

  panels.push(<>{things}<img src={me} id="me" /></>);
  panels.push(<>{projects}</>);
  panels.push(<><Stack /><Desktop /></>);
  panels.push(<>{places}</>);

  return (
      <>
        <div className="SubPanel">
          {
            titles.map( (title,i) => (
              index != i ? 
              <h5 onClick={()=>{
                setIndex(i);
                setTitle(title)
              }}>
                {title}
              </h5> :
              <h4 onClick={()=>{
                setIndex(i);
                setTitle(title)
              }}>
                {title}
              </h4>
            ))
          }
        </div>
        <div className="Panel">
          {panels[index]}
        </div>
      </>
  );
}

export default Panel;
