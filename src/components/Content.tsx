import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Experience from "./Experience";
import ProfileData from "../ProfileData.json";

function Content() {
  const activeTab = useSelector((state: RootState) => state.activeTab);
  const getContent = () => {
    switch (activeTab.name) {
      case "Experience":
        return <Experience experiences={ProfileData.workExperience} key={1} />;
      case "Projects":
        return <Experience experiences={ProfileData.projects} key={2} />;
    }
  };
  return <div>{getContent()}</div>;
}

export default Content;
