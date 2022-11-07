import { useState } from "react";
import "./styles.css";

export default function Tooltip({ props }) {
  const { label, content } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tooltip-content">{content}</div>

      <div
        className="tooltip"
        style={{
          transform: `scale(${isHovered ? 1 : 0})`,
        }}
      >
        {label}
      </div>
    </div>
  );
}
