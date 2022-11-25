import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          fontSize: "25px",
        }}
      >
        <b>Tangible</b>

        <div
          style={{
            fontSize: "15px",
          }}
        >
          coming soon.
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Overlay />
  </>
);
