import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div
      style={{
        bottom: "2%",
        fontSize: "28px",
        position: "absolute",
        cursor: "default",
        zIndex: 10,
        color: "white",
        marginLeft: "25px",
        display: "flex",
        backgroundColor: "transparent",
        textShadow: "1px 1px 5px black",
        backdropFilter: "blur(8px)",
      }}
    >
      Controls: <br />
      A, W, D, S Move Airplane <br />R Restart
    </div>
    <Canvas shadows>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
  </>
);
