import React, { useEffect, useState } from "react";
import "../styles/Gallery.css";
import dogs from "../images/dogs.jpg";
import fruitcloth from "../images/fruitcloth.jpg";
import fruits1 from "../images/fruits1.jpg";
import fruits2 from "../images/fruits2.jpg";
import fruits3 from "../images/fruits3.jpg";
import fruits4 from "../images/fruits4.jpg";
import lemons from "../images/lemons.jpg";
import Mandela1 from "../images/Mandela1.png";
import Mandel2 from "../images/Mandela2.jpg";
import protea1 from "../images/protea1.jpg";
import protea2 from "../images/protea2.jpg";
import protea3 from "../images/protea3.jpg";
import protea4 from "../images/protea4.jpg";
import strawberry from "../images/strawberry.jpg";
import tulips from "../images/tulips.jpg";
import Modals from "../Modals";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [picStyle, setPicStyle] = useState({});
  const [zoomCountIn, setZoomCountIn] = useState(0);
  const [zoomCountOut, setZoomCountOut] = useState(0);
  const [zoomFctr, setZoomFctr] = useState(1);
  const [dimensions, setDimensions] = useState({});
  const dogsThumbnail = require("../images/dogs-thumbnail.jpg");
  const dogsImage = require("../images/dogs.jpg");
  const fruitclothThumbnail = require("../images/fruitcloth-thumbnail.jpg");
  const fruitclothImage = require("../images/fruitcloth.jpg");
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    dogs,
    fruitcloth,
    fruits1,
    fruits2,
    fruits3,
    fruits4,
    lemons,
    Mandela1,
    Mandel2,
    protea1,
    protea2,
    protea3,
    protea4,
    strawberry,
    tulips,
    // Add more image URLs as needed
  ];
  const imagesNew = [
    { thumbnailSrc: dogsThumbnail, highResSrc: dogsImage },
    { thumbnailSrc: fruitclothThumbnail, highResSrc: fruitclothImage },
  ];

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
        h = window.innerHeight * 0.75;
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
  }, [dimensions, selectedImage, zoomCountIn]);

  useEffect(handleImageSize, [selectedImage, dimensions]);

  useEffect(() => {
    handleImageSize();
  }, [zoomFctr]);

  useEffect(() => {
    let i = new Image();
    i.onload = function () {
      setDimensions({
        wdth: i.width,
        hgt: i.height,
      });
    };
    i.src = selectedImage;
    return () => {};
  }, [selectedImage]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setCurrentImage(null);
  };

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div>
      <h3>Image Gallery</h3>
      <p>some of my paintings</p>
      <div className="gallery">
        {/* {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => openLightbox(image)}
            />
          );
        })} */}
        <br />
        {imagesNew.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailSrc} // Use thumbnail source initially
            alt={`Thumbnail ${index}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
      {/* {selectedImage && (
        <div>
          <Modals
            // title="Image"
            unConventional="image"
            onClose={() => handleClose()}
            onClickOutside={() => handleClose()}
            clickOutsideActive={true}
            footer={<></>}
          >
            <img style={picStyle} alt={"selected"} src={selectedImage} />
          </Modals>
        </div>
      )} */}
      {currentImage && (
        <div>
          <Modals
            // title="Image"
            unConventional="image"
            onClose={() => handleClose()}
            onClickOutside={() => handleClose()}
            clickOutsideActive={true}
            footer={<></>}
          >
            <img
              style={picStyle}
              src={selectedImage.highResSrc}
              alt="High Resolution"
            />
            {/* <img style={picStyle} alt={"selected"} src={selectedImage} /> */}
          </Modals>
        </div>
      )}
    </div>
  );
};

export default Gallery;
