import React, { useState } from 'react';
import '../App.css';
import Stack from './content/Stack';
import Desktop from './content/Desktop';
import Thing from './content/Thing';
import Project from './content/Project';
import me from './me.jpeg';

function firstPanel(){
  var Things = [];
  
  for (var i=0; i < 4; i++) {
    Things.push(<Thing it={i}/>);
  }

  return (
    <>
      {Things}
      <img src={me} id="me" />
    </>
  );
}

function secondPanel(){
  return <></>;
}

function thirdPanel(){
  return <><Stack /><Desktop /></>;
}

const titles = ["/home/nick","Projects","Technicalities","Find me on"];
const panels = [firstPanel(), secondPanel(), thirdPanel()];

function Panel() {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(titles[index]);

  return (
      <>
        <h4>{title}</h4>
        <div className="Panel">
          <div className="SubPanel">
            {
              titles.map( (title,index) => (
                <h5 onClick={()=>{
                  setIndex(index);
                  setTitle(title)
                }}>
                  {title}
                </h5>
              ))
            }
          </div>
          {panels[index]}
        </div>
      </>
  );
}

export default Panel;
