import React from 'react';
function VideoArea() {
  return (
    <div className="video-area video-bg pt-200 pb-200"  data-background="assets/img/service/video-bg.jpg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="video-caption text-center">
              <div className="video-icon">
                {/* Replace the link below with your actual video link */}
                <a className="popup-video" href="https://www.youtube.com/watch?v=1aP-TXUpNoU" tabindex="0"><i className="fas fa-play"></i></a>
              </div>
              <p className="pera1">Love where you're going in the perfect time</p>
              <p className="pera2">Tripo is a World Leading Online</p>
              <p className="pera3"> Tour Booking Platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoArea;
