import '../../App.css';

const text = [
"I publish and maintain code on Github.",
"I have a presence on LinkedIn. (Link requires login)",
"I semi-frequent the Arch Linux forums. (Link requires login)",
]
const titles = [
"Github",
"LinkedIn",
"Arch Forums",
]
const links = [
"https://github.com/borix134",
"https://www.linkedin.com/in/nickpanagakis/",
"https://bbs.archlinux.org/profile.php?id=104367",
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
