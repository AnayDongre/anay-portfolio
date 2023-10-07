import Typewriter from "typewriter-effect";

function Name() {
  const roles = ["Web Developer", "App Developer", "Full-Stack Developer"];
  return (
    <div className="intro-box">
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
      </div>
    </div>
  );
}

export default Name;
