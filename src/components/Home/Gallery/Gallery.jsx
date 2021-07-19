import React, { useState } from "react";
import PT from "prop-types";

import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

import "./Gallery.css";

const GROUP1 = [
  ["/assets/Home/Gallery/1.jpg", "/assets/Home/Gallery/1.jpg"],
  ["/assets/Home/Gallery/2.jpg", "/assets/Home/Gallery/2.jpg"],
  ["/assets/Home/Gallery/3.jpg", "/assets/Home/Gallery/3.jpg"],
  ["/assets/Home/Gallery/4.jpg", "/assets/Home/Gallery/4.jpg"],
];

const GROUP2 = [
  "/assets/Home/Gallery/5.jpg",
  "/assets/Home/Gallery/6.jpg",
  "/assets/Home/Gallery/7.jpg",
  "/assets/Home/Gallery/9.jpg",
];

const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ maxWidth: "300px", width: "300px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img
        src={image}
        className="ImageOne"
        style={{ width: "100%" }}
        alt="Incubation images"
      />
    </LightgalleryItem>
  </div>
);
PhotoItem.propTypes = {
  image: PT.string.isRequired,
  thumb: PT.string,
  group: PT.string.isRequired,
};

function Gallery() {
  const [visible] = useState(true);
  return (
    <div className="content">
      {/* <button
        className="button is-light"
        style={{
          position: "absolute",
        }}
        onClick={() => setVisible(!visible)}
      >
        {visible ? (
          <i className="fas fa-eye-slash" />
        ) : (
          <i className="fas fa-eye" />
        )}
      </button> */}

      <div>
        {visible ? (
          <LightgalleryProvider
            onBeforeOpen={() => console.info("onBeforeOpen")}
            onAfterOpen={() => console.info("onAfterOpen")}
            onSlideItemLoad={() => console.info("onSlideItemLoad")}
            onBeforeSlide={() => console.info("onBeforeSlide")}
            onAfterSlide={() => console.info("onAfterSlide")}
            onBeforePrevSlide={() => console.info("onBeforePrevSlide")}
            onBeforeNextSlide={() => console.info("onBeforeNextSlide")}
            onDragstart={() => console.info("onDragstart")}
            onDragmove={() => console.info("onDragmove")}
            onDragend={() => console.info("onDragend")}
            onSlideClick={() => console.info("onSlideClick")}
            onBeforeClose={() => console.info("onBeforeClose")}
            onCloseAfter={() => console.info("onCloseAfter")}
          >
            <div className="Gallery-section text-center">
              <h1 style={{ textAlign: "center" }}>Gallery</h1>
              <p>Have a look into REVA Incubation Center Photos Gallery</p>
            </div>
            <div className="GalleryImages">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {GROUP1.map((p, idx) => (
                  <PhotoItem
                    key={idx}
                    image={p[0]}
                    thumb={p[1]}
                    group="group1"
                  />
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {GROUP2.map((p, idx) => (
                  <PhotoItem key={idx} image={p} group="group2" />
                ))}
              </div>
            </div>
          </LightgalleryProvider>
        ) : null}
      </div>
    </div>
  );
}

export default Gallery;
