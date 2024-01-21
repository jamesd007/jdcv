import React, { useEffect, useState, useRef } from 'react'
import "./styles/Modals.css"
import ClickOutsideDetector from './utils/ClickOutsideDetector'
import Draggable from 'react-draggable';


const Modals = (props) => {
  const [hover, setHover] = useState(false)
  const [OKToHover, setOKToHover] = useState(false)
  const titleW = useRef(null)
 const [scrnHgt, setScrnHgt] = useState();
 const [scrnWidth, setScrnWidth] = useState();
 const [showModal, setShowModal] = useState(true);

 const [calculatedMaxHeight, setCalculatedMaxHeight] = useState("auto");
 const [calculatedMaxWidth, setCalculatedMaxWidth] = useState("auto");

 useEffect(() => {
  function handleResize() {
   setScrnHgt(window.innerHeight);
   setScrnWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);
  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, []);

//  useEffect(() => {
//   const headerHeight = document.getElementById("modalHeader")?.offsetHeight;
//   const footerHeight = document.getElementById("modalFooter")?.offsetHeight;
//   const windowHeight = window.innerHeight;
//   const calculatedMaxHeight =
//    windowHeight -
//    headerHeight -
//    footerHeight -
//    Math.round(windowHeight * 0.03, 0) -
//    50;
//   if (props.theMaxHgtBody) props.theMaxHgtBody(calculatedMaxHeight);
//   setCalculatedMaxHeight(calculatedMaxHeight);
//  }, [scrnHgt]);

 useEffect(() => {
  const calcMaxWidth = scrnWidth * 0.9;
  setCalculatedMaxWidth(calcMaxWidth);
 }, [scrnWidth]);

 const styleBody = {
  ...props.styleBody, // Keep existing styles
  maxHeight:"90vh"
  // maxHeight: calculatedMaxHeight // Add the calculated max-height
 };

 useEffect(() => {
  if (titleW.current?.offsetWidth < titleW.current?.scrollWidth)
   setOKToHover(true);
  else setOKToHover(false);
  return () => {};
 }, []);

 const toggleHover = () => {
  setHover(!hover);
 };

 const hoverStyle = props.title
  ? { marginLeft: (-props.title.length * 1).toString() + "px" }
  : { marginLeft: "0px" };

 const handleCloseModal = () => {
  // Apply the fadeout animation over a specified duration
  setShowModal(false); // This starts the fadeout animation

  // After the animation duration, actually close the modal
  // setTimeout(() => {
  props.onClose(); // This should be within your `props.onClose()` function
  if (props.setclickOutsideActive) props.setclickOutsideActive(true);
  // }, 500); // Adjust the delay to match your animation duration
 };

 return (
  <div>
   <div
    className={showModal ? "modals modal-new" : "modal-fadeout"}
    style={props.mainStyle}
   >
    <Draggable
     handle=".handle"
     defaultPosition={
      props.unConventional !== "image" ? { x: 0, y: 50 } : {}
     }
    >
     <ClickOutsideDetector
      caller="Modals"
      listen
      onClickOutside={() => {
       props.onClickOutside();
       props.clickOutsideActive && props.onClose();
      }}
      onClick={() => {}}
     >
      <div
       className={props.overWritemncn ? {} : "modal-content-new"}
       style={props.style}
      >
       <div
        className="modal-header-new"
        id="modalHeader"
        style={
         props.noBckgrnd ? { backgroundColor: "transparent" } : {}
        }
       >
        <div
         className="handle"
         style={{
          width: "100%",
          textAlign: "left"
         }}
        >
         {props.title &&
         <h2
          ref={titleW}
          className="modal-title-new"
          style={hover ? (OKToHover ? hoverStyle : {}) : {}}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
         >
          {props.title}
         </h2>}
        </div>
        <button
         type="button"
         className="close-modal"
         style={props.buttonStyle}
         data-dismiss="modal" //bootstrap??
         aria-label="Close"
         onClick={() => {
          handleCloseModal();
         }}
         title="Close Modal"
        >
         <span aria-hidden="true">&times; </span>
        </button>
       </div>

       <div
        className={
         props.switchScrollOff
          ? "modal-body-new hide-scrollbar"
          : "modal-body-new"
        }
        style={styleBody}
       >
        {/* this is modal content */}
        {props.children}
       </div>
       <div
        className="modal-footer-new"
        id="modalFooter"
        style={
         props.footer
          ? props.noBckgrnd
           ? {
             minHeight: "2.58rem",
             backgroundColor: "transparent"
            }
           : { minHeight: "2.58rem" }
          : {}
        }
       >
        {/* style={props.noBckgrnd ? { backgroundColor: "transparent" } : {}}> */}
        {props.footer}
       </div>
      </div>
     </ClickOutsideDetector>
    </Draggable>
   </div>
  </div>
 );
}

export default Modals
