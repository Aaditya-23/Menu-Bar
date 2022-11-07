import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Tooltip from "../Tooltip/Tooltip";

export default function Menu() {
  const { pathname } = useLocation();

  const [activeRoute, setActiveRoute] = useState(0);

  useEffect(() => {
    const path = pathname.slice(1);
    let currRoute;

    switch (path) {
      case "":
        currRoute = 0;
        break;
      case "commit":
        currRoute = 1;
        break;
      case "progress":
        currRoute = 2;
        break;
      case "code":
        currRoute = 3;
        break;
      default:
        currRoute = -1;
    }

    setActiveRoute(currRoute);
  }, [pathname]);

  return (
    <div className="menu">
      {/* <div className="menu-label">Custom Menu</div> */}

      <div className="menu-container">
        <div
          className="current-option"
          style={{
            top: `calc(${activeRoute} * 5.5rem)`,
          }}
        ></div>

        <div className="options">
          <Link
            to="/"
            style={{
              fill: activeRoute === 0 ? "antiquewhite" : "white",
            }}
            className="option-wrapper"
          >
            <div className="option">
              <Tooltip
                props={{
                  label: "directory",
                  content: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                    </svg>
                  ),
                }}
              />
            </div>
          </Link>

          <Link
            to="commit"
            style={{
              fill: activeRoute === 1 ? "antiquewhite" : "white",
            }}
            className="option-wrapper"
          >
            <div className="option">
              <Tooltip
                props={{
                  label: "commit",
                  content: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M320 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H163.2C178 151 242.6 96 320 96s142 55 156.8 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H476.8z" />
                    </svg>
                  ),
                }}
              />
            </div>
          </Link>

          <Link
            to="progress"
            style={{
              fill: activeRoute === 2 ? "antiquewhite" : "white",
            }}
            className="option-wrapper"
          >
            <div className="option">
              <Tooltip
                props={{
                  label: "progress",
                  content: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z" />
                    </svg>
                  ),
                }}
              />
            </div>
          </Link>

          <Link
            to="code"
            style={{
              fill: activeRoute === 3 ? "antiquewhite" : "white",
            }}
            className="option-wrapper"
          >
            <div className="option">
              <Tooltip
                props={{
                  label: "code",
                  content: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                    </svg>
                  ),
                }}
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="menu-actions"></div>
    </div>
  );
}
