import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import About from "./About";
import Experience from "./Experience";

function Content() {
  const activeTab = useSelector((state: RootState) => state.activeTab);
  const getContent = () => {
    switch (activeTab.name) {
      case "Experience":
        return <Experience />;
      case "Projects":
        return <About />;
    }
  };
  return <div>{getContent()}</div>;
}

export default Content;
