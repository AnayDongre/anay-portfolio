import { NavButtonInterface } from "../types";
import NavButton from "./NavButton";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../store/activeTabSlice";
const NAV_BUTTONS = [
  {
    id: 1,
    name: "Experience",
  },
  {
    id: 2,
    name: "Projects",
  },
];

function NavBar() {
  const activeTab = useSelector((state: RootState) => state.activeTab);
  const dispatch = useDispatch();

  const onNavButtonClick = (navButton: NavButtonInterface) => {
    dispatch(setActiveTab(navButton));
  };
  return (
    <div className="nav-bar">
      {NAV_BUTTONS.map((navButton) => {
        return (
          <NavButton
            key={navButton.id}
            navButton={navButton}
            onNavButtonClick={onNavButtonClick}
            isActive={navButton.id === activeTab.id}
          />
        );
      })}
    </div>
  );
}

export default NavBar;
