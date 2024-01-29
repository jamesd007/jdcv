import React, { useState, useEffect } from "react";
import Modals from "../Modals";
import "../styles/Gallery.css";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const GalleryY = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dogsThumbnail = require("../images/dogs-thumbnail.jpg");
  const dogsImage = require("../images/dogs.jpg");
  const fruitclothThumbnail = require("../images/fruitcloth-thumbnail.jpg");
  const fruitclothImage = require("../images/fruitcloth.jpg");
  const fruits1Thumbnail = require("../images/fruits1-thumbnail.jpg");
  const fruits1Image = require("../images/fruits1.jpg");
  const fruits2Thumbnail = require("../images/fruits2-thumbnail.jpg");
  const fruits2Image = require("../images/fruits2.jpg");
  const fruits3Thumbnail = require("../images/fruits3-thumbnail.jpg");
  const fruits3Image = require("../images/fruits3.jpg");
  const fruits4Thumbnail = require("../images/fruits4-thumbnail.jpg");
  const fruits4Image = require("../images/fruits4.jpg");
  const lemonsThumbnail = require("../images/lemons-thumbnail.jpg");
  const lemonsImage = require("../images/lemons.jpg");
  const Mandela1Thumbnail = require("../images/Mandela1-thumbnail.jpg");
  const Mandela1Image = require("../images/Mandela1.png");
  const Mandela2Thumbnail = require("../images/Mandela2-thumbnail.jpg");
  const Mandela2Image = require("../images/Mandela2.jpg");
  const protea1Thumbnail = require("../images/protea1-thumbnail.jpg");
  const protea1Image = require("../images/protea1.jpg");
  const protea2Thumbnail = require("../images/protea2-thumbnail.jpg");
  const protea2Image = require("../images/protea2.jpg");
  const protea3Thumbnail = require("../images/protea3-thumbnail.jpg");
  const protea3Image = require("../images/protea3.jpg");
  const protea4Thumbnail = require("../images/protea4-thumbnail.jpg");
  const protea4Image = require("../images/protea4.jpg");
  const strawberryThumbnail = require("../images/strawberry-thumbnail.jpg");
  const strawberryImage = require("../images/strawberry.jpg");
  const tulipsThumbnail = require("../images/tulips-thumbnail.jpg");
  const tulipsImage = require("../images/tulips.jpg");
  const carousel1Thumbnail = require("../images/carousel1-thumbnail.jpg");
  const carousel1Image = require("../images/carousel1.jpg");
  const muizThumbnail = require("../images/muiz-thumbnail.jpg");
  const muizImage = require("../images/muiz.jpg");
  const smallfruitsThumbnail = require("../images/smallfruits-thumbnail.jpg");
  const smallfruitsImage = require("../images/smallfruits.jpg");
  const [picStyle, setPicStyle] = useState({});
  const [zoomCountIn, setZoomCountIn] = useState(0);
  const [zoomCountOut, setZoomCountOut] = useState(0);
  const [zoomFctr, setZoomFctr] = useState(1);
  const [dimensions, setDimensions] = useState({});

  const images = [
    { thumbnailSrc: dogsThumbnail, highResSrc: dogsImage },
    { thumbnailSrc: fruitclothThumbnail, highResSrc: fruitclothImage },
    { thumbnailSrc: fruits1Thumbnail, highResSrc: fruits1Image },
    { thumbnailSrc: fruits2Thumbnail, highResSrc: fruits2Image },
    { thumbnailSrc: fruits3Thumbnail, highResSrc: fruits3Image },
    { thumbnailSrc: fruits4Thumbnail, highResSrc: fruits4Image },
    { thumbnailSrc: lemonsThumbnail, highResSrc: lemonsImage },
    { thumbnailSrc: Mandela1Thumbnail, highResSrc: Mandela1Image },
    { thumbnailSrc: Mandela2Thumbnail, highResSrc: Mandela2Image },
    { thumbnailSrc: protea1Thumbnail, highResSrc: protea1Image },
    { thumbnailSrc: protea2Thumbnail, highResSrc: protea2Image },
    { thumbnailSrc: protea3Thumbnail, highResSrc: protea3Image },
    { thumbnailSrc: protea4Thumbnail, highResSrc: protea4Image },
    { thumbnailSrc: strawberryThumbnail, highResSrc: strawberryImage },
    { thumbnailSrc: tulipsThumbnail, highResSrc: tulipsImage },
    { thumbnailSrc: carousel1Thumbnail, highResSrc: carousel1Image },
    { thumbnailSrc: muizThumbnail, highResSrc: muizImage },
    { thumbnailSrc: smallfruitsThumbnail, highResSrc: smallfruitsImage },
  ];

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <div style={{ display: "flex" }}>
        <button className="button_gallery" onClick={() => zoomIn()}>
          Zoom In
        </button>
        <button className="button_gallery" onClick={() => zoomOut()}>
          Zoom Out
        </button>
        <button className="button_gallery" onClick={() => resetTransform()}>
          Reset
        </button>
      </div>
    );
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const heightStyle = (h) => {
    return {
      maxHeight: "80vh",
      maxWidth: "95vw",
      height: h * 1 + "px",
      width: "auto",
      resizeMode: "cover",
      objectFit: "contain",
      borderRadius: "var(--border_radius_large)",
      transform: `scale(${zoomFctr})`,
      aspectRatio: "null",
    };
  };

  const widthStyle = (w) => {
    return {
      width: w * 1 + "px",
      height: "auto",
      maxWidth: "95vw",
      maxHeight: "80vh",
      resizeMode: "cover",
      objectFit: "contain",
      borderRadius: "var(--border_radius_large)",
      transform: `scale(${zoomFctr})`,
    };
  };

  const handleImageSize = () => {
    let w = 0;
    let h = 0;
    let imgwid = dimensions.wdth;
    let imghgt = dimensions.hgt;
    const ratio = imgwid / imghgt;
    const sameType = () => {
      w = window.innerWidth;
      h = window.innerWidth / ratio;
      if (h > window.innerHeight) {
        h = window.innerHeight;
        w = h * ratio;
      }
    };
    if (imgwid > imghgt) {
      if (window.innerWidth > window.innerHeight) {
        sameType();
      } else {
        w = window.innerWidth;
        h = w / ratio;
      }
    } else {
      if (window.innerWidth > window.innerHeight) {
        // h = window.innerHeight * 0.75;
        h = window.innerHeight;
        w = h * ratio;
      } else {
        sameType();
      }
    }
    if (w > h) setPicStyle(heightStyle(h));
    else setPicStyle(widthStyle(w));
  };

  useEffect(() => {
    window.addEventListener("resize", handleImageSize);
    return () => {
      window.removeEventListener("resize", handleImageSize);
    };
  }, [dimensions, selectedImage?.highResSrc, zoomCountIn]);

  useEffect(handleImageSize, [selectedImage?.highResSrc, dimensions]);

  useEffect(() => {
    let i = new Image();
    i.onload = function () {
      setDimensions({
        wdth: i.width,
        hgt: i.height,
      });
    };
    i.src = selectedImage?.highResSrc;
    return () => {};
  }, [selectedImage?.highResSrc]);

  return (
    <div>
      <h3>Image Gallery</h3>
      <p>some of my paintings</p>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            className="gallery_img"
            src={image.thumbnailSrc} // Use thumbnail source initially
            alt={`Thumbnail ${index}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
        {selectedImage && (
          <div>
            <TransformWrapper>
              <Modals
                unConventional="image"
                onClose={() => handleClose()}
                onClickOutside={() => handleClose()}
                clickOutsideActive={true}
                footer={
                  <>
                    <Controls />
                  </>
                }
              >
                <TransformComponent>
                  <img
                    style={picStyle}
                    src={selectedImage.highResSrc}
                    alt="High Resolution"
                  />
                </TransformComponent>
              </Modals>
            </TransformWrapper>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryY;
