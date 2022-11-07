import "./App.css";
import Menu from "./Menu/Menu";
import { Outlet } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   const option = document.querySelectorAll(".option");

  //   const onClick = () => {
  //     console.log("clicked");
  //   };

  //   option.forEach((currOption) => {
  //     currOption.addEventListener("click", onClick);
  //   });

  //   return () => {
  //     option.forEach((currOption) => {
  //       currOption.removeEventListener("click", onClick);
  //     });
  //   };
  // }, []);

  return (
    <div className="App">
      <Menu />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
