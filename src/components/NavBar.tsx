import { NavButtonInterface } from "../types";
import NavButton from "./NavButton";

interface NavBarProps {
  navButtons: NavButtonInterface[];
  onNavButtonClick: (id: number) => void;
}
function NavBar(props: NavBarProps) {
  const { navButtons, onNavButtonClick } = { ...props };
  return (
    <div className="nav-bar">
      {navButtons.map((navButton) => {
        return <NavButton {...navButton} onNavButtonClick={onNavButtonClick} />;
      })}
    </div>
  );
}

export default NavBar;
