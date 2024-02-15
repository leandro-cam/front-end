import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

import "./dark-mode.css";

export default function DarkMode() {
  const onClickIcon = () => {
    document.querySelector("body").classList.toggle("dark-mode");
  };

  return (
    <div className="dark-mode-icon">
      <FontAwesomeIcon icon={faLightbulb} onClick={onClickIcon} />
    </div>
  );
}
