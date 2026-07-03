import "./Videos.css";

import reel1 from "../../assets/videos/reel1.mp4";
import reel2 from "../../assets/videos/reel2.mp4";
import reel3 from "../../assets/videos/reel3.mp4";

function Videos() {
  return (
    <section className="videos" id="videos">

      {/* TITLE */}
      <div className="video-heading">
        <h2>Video Edits</h2>
      </div>

      {/* REELS GRID */}
      <div className="reel-grid">

        <div className="reel-box">
          <video src={reel1} autoPlay muted loop playsInline />
        </div>

        <div className="reel-box">
          <video src={reel2} autoPlay muted loop playsInline />
        </div>

        <div className="reel-box">
          <video src={reel3} autoPlay muted loop playsInline />
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="video-desc">

        <h3>VISUAL STORIES</h3>

        <p>
          Short-form cinematic edits inspired by <br />
          nature, travel, and minimal aesthetics.
        </p>

      </div>

    </section>
  );
}

export default Videos;