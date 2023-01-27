import { RealTimeField } from "./compoents/real-time";
// import "./App.css";

function App() {
  return (
    <>
      <RealTimeField />
      {/* <div className="loginBox">
        <form id="jsLogin">
          <input placeholder="Whats your nickname" type="text" />
        </form>
      </div> */}
      {/* <div className="gameContainer" id="jsGame">
        <div className="main">
          <div id="jsNotifs" />
          <canvas className="canvas" id="jsCanvas" />
          <div className="controls" id="jsControls">
            <button id="jsMode">Fill</button>
            <div className="colors">
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(0, 0, 0)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(255,255,255)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(255,59,48)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(255,149,0)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(255,204,0)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(76,217,100)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(90,200,250)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(0,122,255)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(88,86,214)" }}
              />
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="player__board" id="jsPBoard" />
          <ul className="chat__messages" id="jsMessages" />
          <form className="chat__form" id="jsSendMsg">
            <input placeholder="Write a message" type="text" />
          </form>
        </div>
      </div> */}
    </>
  );
}

export default App;
