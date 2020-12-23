import '../../App.css';

const text = [
"Hi all, Nick here. I enjoy writing music and source code. When I'm not doing \
so you may find me counting sheep because it seems it's all I do anymore. \
This is my personal portfolio page where I share my strengths and thoughts.",
"After finishing college with a certification in full stack web development, \
my knowledge on programming was extended to much more than compiled \
graphical/cli programs and this consequently led to the very React.js app you \
are currently viewing.",
"I strongly prefer minimalist installations of Linux and use nothing more  \
than a window manager when I compute. For programming I strictly use the Vim \
editor. I've learned that the more I love the tools I use, the more I love \
what it is that I do.",
"Minimalism weasles into my coding style as well. My belief that 'less \
is more' correleates with more efficient and readable code. My preference for \
ground-up coding has provided better practices and understanding."
]
const titles = [
"A thing or two",
"Uni",
"Minimalism",
"Style"
]

function Thing(props){ 
  return (
    <div className="SubPanel">
      <h5>{titles[props.it]}</h5> 
      <p>
        {text[props.it]}
      </p>
    </div>
  );
}

export default Thing;
