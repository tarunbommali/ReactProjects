import { useState } from "react";
import "./index.css";

export default function RandomColorGenerator() {
  const [typeofcolor, setTypeOfColor] = useState("hex");
  const [selected, setSelected] = useState("#DE5BE1");

  function handleCreateRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setSelected(color);
  }

  function handleCreateRandomRgbColor() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * 256));
    }
    setSelected(`rgb(${rgb.join(", ")})`);
  }

  return (
    <div
      className="color-generator-container"
      style={{ backgroundColor: selected }}
    >
      <a href={"url"} target="_blank" rel="noopener noreferrer">
        <h1 className="header">Random Color Generator</h1>
      </a>
      <div className="color-type-btns">
        <button onClick={() => setTypeOfColor("hex")}>Hex</button>
        <button onClick={() => setTypeOfColor("rgb")}>RGB</button>
        <button
          onClick={
            typeofcolor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Color
        </button>
      </div>
      <div
        className="selected-color"
        style={{ backgroundColor: selected }}
      ></div>
      <h1 className="color-code">{selected}</h1>
    </div>
  );
}
