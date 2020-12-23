import '../../App.css';

const text = [
"I publish and maintain code on Github.",
"I have a presence on LinkedIn.",
"I semi-frequent the Arch Linux forums.",
]
const titles = [
"Github",
"LinkedIn",
"Arch Forums",
]
const links = [
"https://github.com/borix134",
"https://www.linkedin.com/in/nickpanagakis/",
"https://bbs.archlinux.org/search.php?search_id=772013391",
]

function Place(props){ 
  return (
    <div className="SubPanel">
      <h5>{titles[props.it]}</h5> 
      <p>
        {text[props.it]} <br />
        <a href={links[props.it]}>
          Link
        </a>
      </p>
    </div>
  );
}

export default Place;
