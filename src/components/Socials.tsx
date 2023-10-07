import GithubIcon from "../assets/Github.svg";
import LinkedIcon from "../assets/Linkedin.svg";
import ProfileData from "../ProfileData.json";
function Socials() {
  const handleGit = () => {
    window.open(ProfileData.githubUrl, "_blank");
  };

  const handleLinkedin = () => {
    window.open(ProfileData.linkedinUrl, "_blank");
  };
  return (
    <>
      <img
        src={GithubIcon}
        alt="GithubIcon"
        className="social-icon"
        onClick={handleGit}
      />
      <img
        src={LinkedIcon}
        alt="LinkedinIcon"
        className="social-icon"
        onClick={handleLinkedin}
      />
    </>
  );
}

export default Socials;
