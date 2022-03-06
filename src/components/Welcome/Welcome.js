import React from "react";
import "./Welcome.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function Welcome() {
  return (
    <div>
      <nav className="nav">
        <MusicNoteIcon className="gif" />
        <h1 className="WebsiteName">Itunes</h1>
      </nav>
      <div className="main">
        <div className="left">
          <div className="OnlineMarket">
            <h4 className="underline">Welcome</h4> <h3> &nbsp; TO Itunes</h3>
          </div>
          <p>
            The Hyphenate does a detailed stop by step tutorial on how to remove
            a background/single color (such as a green screen) in Adobe
            Photoshop. This quick and easy tutorial shows you how to delete a
            background using the color range tool.
          </p>
          <div className="ButtonsDiv">
            <button
              className="Customer"
              type=""
              onClick={() => {
                window.location.assign("/Pracipal");
              }}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
