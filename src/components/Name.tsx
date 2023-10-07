import Typewriter from "typewriter-effect";

function Name() {
  const roles = ["Web ", "App ", "Backend "];
  return (
    <div className="intro-box">
      {/* <div className="intro-line">Hi, My name is</div> */}
      <div className="name">Anay Dongre</div>
      <div className="i-am">
        <Typewriter
          options={{
            strings: roles,
            deleteSpeed: 10,
            delay: 100,
            autoStart: true,
            loop: true,
            cursor: "",
          }}
        />
        <span className="intro-space">Developer</span>
      </div>
    </div>
  );
}

export default Name;
