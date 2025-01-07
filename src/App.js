import { useState } from "react";
import Tabs from "./Components/Tabs";
import { ReactComponent as BodySvg } from './music-and-code.svg';
import Intro from './Components/Intro';
import Work from './Components/Work';
import About from './Components/About';
import Contact from "./Components/Contact";
import { PageNames } from './AppConsts'
import './App.scss';

/**
 * Per Page Info
 */

function App() {

  /**
   * Page States
   */
  const [introRead, setIntroRead] = useState(false);
  const [workRead, setWorkRead] = useState(false);
  const [aboutRead, setAboutRead] = useState(false);
  const [contactRead, setContactRead] = useState(false);

  /**
   * Audio Player
   */

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    var audioPlayer = document.getElementById('audio-player')
    isChecked ? audioPlayer.play() : audioPlayer.pause();
    var audioSVG = document.getElementById('audio-svg');
    isChecked ? audioSVG.style.fill = "#58A446" : audioSVG.style.fill = "#E6E6E6";
  };

  return (
    <div>
      <audio loop id="audio-player">
        <source src="https://do-dah-bucket.s3.ca-central-1.amazonaws.com/Good_Night-FASSounds.mp3" type="audio/mpeg"></source>
        Your browser does not support audio.
      </audio>
      <div className="container">
        <nav id="horizontal-bar" className="navbar fixed-top navbar-expand-lg navbar-dark">
          <div className="container">
            <ul className="navbar-nav ms-auto flex-nowrap">
              <li className="nav-item me-3">
                <label htmlFor="audio-on">
                  <input type="checkbox" checked={isChecked} onChange={handleOnChange} name="rating" className="happy" id="audio-on" value="audio-on" />
                  <svg id="audio-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />
                  </svg>
                </label>
              </li>
              <li className="nav-item">

              </li>
            </ul>
          </div>
        </nav>
        <div id="main-svg" className="row mx-auto">
          <BodySvg />
        </div>
        <div id="vs-app" className="row mx-auto">
            <div className="vs-app-window mx-auto col-sm-12 col-md-10 col-lg-8 col-xl-8 col-xxl-6">
              <div className="vs-app-toolbar">
                <div className="row">
                  <div className="vs-app-dots col">
                    <span className="vs-app-dot vs-app-red"></span>
                    <span className="vs-app-dot vs-app-yellow"></span>
                    <span className="vs-app-dot vs-app-green"></span>
                  </div>
                  <div className="col text-center">
                    <span className="vs-app-title"></span>
                  </div>
                  <div className="col">
                  </div>
                </div>
              </div>
              <Tabs>
                <div label={PageNames[0]}>
                  <p className="vs-app-info-bar">
                    &nbsp; src &gt; {PageNames[0]}
                  </p>
                  <Intro introRead={introRead} setIntroRead={setIntroRead}></Intro>
                </div>
                <div label={PageNames[1]}>
                  <p className="vs-app-info-bar">
                    &nbsp; src &gt; {PageNames[1]}
                  </p>
                  <Work workRead={workRead} setWorkRead={setWorkRead}></Work>
                </div>
                <div label={PageNames[2]}>
                  <p className="vs-app-info-bar">
                    &nbsp; src &gt; {PageNames[2]}
                  </p>
                  <About aboutRead={aboutRead} setAboutRead={setAboutRead}></About>
                </div>
                <div label={PageNames[3]}>
                  <p className="vs-app-info-bar">
                    &nbsp; src &gt; {PageNames[3]}
                  </p>
                  <Contact contactRead={contactRead} setContactRead={setContactRead}></Contact>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalTitle" aria-hidden="true">
          <div className="modal-dialog bg-dark text-white" role="document">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header bg-dark text-white">
                <h4 className="modal-title bg-dark text-white" id="exampleModalTitle">...</h4>
              </div>
              <div className="modal-body bg-dark text-white">
                <p id="exampleModalDescription"></p>
                <strong><p id="exampleModalTool"></p></strong>
                <p id="exampleModalContext"></p>
              </div>
              <div className="modal-footer">
                <a id="exampleModalLink" rel="noreferrer" target="_blank" href="https://bitstobreath.com" className="btn btn-primary">...</a>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
