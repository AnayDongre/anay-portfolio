import Typewriter from "typewriter-effect";

function Name() {
  const roles = [
    "Web Developer",
    "Biker",
    "Software Engineer",
    "Backend developer",
  ];
  return (
    <div className="intro-box">
      <div className="intro-line">Hi, My name is</div>
      <div className="name">Anay Dongre</div>
      <div className="i-am">
        <span className="intro-space">I am a</span>

        <Typewriter
          options={{
            strings: roles,
            deleteSpeed: 10,
            delay: 100,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}

export default Name;
