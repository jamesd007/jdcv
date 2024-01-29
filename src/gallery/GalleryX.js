import React from "react";
import "../index.css";
import ImageGallery from "react-image-gallery";
// import dthumb from require("../images/dogs-thumbnail.jpg")
// import dpic from require("../images/dogs.jpg")

const dogsImage = require("../images/dogs.jpg");
const dogsThumbnail = require("../images/dogs-thumbnail.jpg");
// import fruitcloth from "../images/fruitcloth.jpg"
// import fruits1 from "../images/fruits1.jpg"
// import fruits2 from "../images/fruits2.jpg"
// import fruits3 from "../images/fruits3.jpg"
// import fruits4 from "../images/fruits4.jpg"
// import lemons from '../images/lemons.jpg'
// import Mandela1 from '../images/Mandela1.png'
// import Mandel2 from '../images/Mandela2.jpg'
// import protea1 from '../images/protea1.jpg'
// import protea2 from '../images/protea2.jpg'
// import protea3 from '../images/protea3.jpg'
// import protea4 from '../images/protea4.jpg'
// import strawberry from '../images/strawberry.jpg'
// import tulips from '../images/tulips.jpg'

const images = [
  {
    original: dogsImage.default, // Accessing the path using .default
    thumbnail: dogsThumbnail.default,
  },
  {
    original: dogsImage,
    thumbnail: dogsThumbnail,
  },
  // {
  //   original: "../images/dogs.jpg",
  //   thumbnail: "../images/dogs.jpg",
  // },
  {
    original: "https://picsum.photos/id/1018/1000/400/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/400/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1026/1000/400/",
    thumbnail: "https://picsum.photos/id/1026/250/150/",
  },
];

const thumbnailWidth = 150; // Set custom width for thumbnails
const thumbnailHeight = 100;
const galleryStyles = {
  // Override thumbnail styles
  ".image-gallery-thumbnail": {
    width: `${thumbnailWidth}px !important`,
    height: `${thumbnailHeight}px !important`,
  },
};
const thumbnailStyles = {
  width: `${thumbnailWidth}px`,
  height: `${thumbnailHeight}px`,
};

const GalleryX = () => {
  return (
    <div>
      {/* <style>{galleryStyles}</style> */}
      <ImageGallery
        showPlayButton={false}
        items={images}
        thumbnailWidth={thumbnailWidth}
        thumbnailHeight={thumbnailHeight}
        thumbnailStyle={thumbnailStyles}
      />
    </div>
  );
};
export default GalleryX;
