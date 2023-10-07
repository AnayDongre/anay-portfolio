import { NavButtonInterface } from "../types";

interface NavButtonProps {
  navButton: NavButtonInterface;
  onNavButtonClick: (navButton: NavButtonInterface) => void;
  isActive: boolean;
}
function NavButton(props: NavButtonProps) {
  const { navButton, isActive, onNavButtonClick } = { ...props };
  return (
    <div
      className={isActive ? "active nav-button" : "nav-button"}
      onClick={() => onNavButtonClick(navButton)}
    >
      {navButton.name}
    </div>
  );
}

export default NavButton;
