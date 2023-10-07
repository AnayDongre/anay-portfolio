import ProfileData from "../ProfileData.json";
function About() {
  return (
    <div className="about-me-container">
      <div className="about-me-heading">About Me</div>
      <div className="about-me">{ProfileData.aboutMe}</div>
    </div>
  );
}

export default About;
