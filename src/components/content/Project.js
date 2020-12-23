import '../../App.css';

const text = [
"While studying at the KU Edwards campus, I had completed numerous full-stack \
and full-stack related projects. All finished work is a part of a collection.",
"Lunar 2 is a game engine written in C++ that allows for the development of \
simple videogames in the Lua interpereted language.",
"This site, a project on it's own is hosted on Github and Heroku." 
]
const titles = [
"Kansas Unviersity Projects",
"Lunar 2",
"This site",
]

function Project(props){ 
  return (
    <div className="SubPanel">
      <h5>{titles[props.it]}</h5> 
      <p>
        {text[props.it]}
      </p>
    </div>
  );
}

export default Project;
