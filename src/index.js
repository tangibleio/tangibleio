import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";

// a component to display loading  at z index -1  until the app is ready
function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        // color light grey
        color: "#929292",
      
        fontSize: "1rem",
        zIndex: -1,
      }}
    >
      Loading...
    </div>
  );
}

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
    <Loading />
    <App />
    <Overlay />
  </>
);
