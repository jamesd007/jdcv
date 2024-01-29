import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash"; // Import debounce from lodash

const Loadshedding = () => {
  const API_KEY_LDSHED = process.env.REACT_APP_X_RapidAPI_Key;
  const X_RapidAPI_Host = "mzansi-loadshedding-api.p.rapidapi.com";
  const [suburb, setSuburb] = useState("");
  const [ldSched, setLdSched] = useState([]);
  const [suburbChanged, setSuburbChanged] = useState(true);
  const [colWidth, setColWidth] = useState(0);
  const maxGridColWidth = 90;
  const colRef = useRef(null);

  const debouncedFetchData = debounce(async (suburb) => {
    const options = {
      method: "GET",
      url: `https://mzansi-loadshedding-api.p.rapidapi.com/schedule/${suburb}`,
      headers: {
        "X-RapidAPI-Key": API_KEY_LDSHED,
        "X-RapidAPI-Host": X_RapidAPI_Host,
      },
    };
    try {
      const response = await axios.request(options);
      if (response.data) setLdSched(response.data);
      else setLdSched(null);
    } catch (error) {
      console.error(error);
    }
  }, 300); // 300ms debounce delay

  useEffect(() => {
    if (suburbChanged && suburb.length > 2) {
      // Add a minimum length check
      setSuburbChanged(false);
      debouncedFetchData(suburb); // Call the debounced function with the suburb
    }
  }, [suburbChanged, suburb]);

  // useEffect(() => {
  //   if (suburbChanged) {
  //     setSuburbChanged(false);
  //     const fetchData = async () => {
  //       const options = {
  //         method: "GET",
  //         url: `https://mzansi-loadshedding-api.p.rapidapi.com/schedule/${suburb}`,
  //         headers: {
  //           "X-RapidAPI-Key": API_KEY_LDSHED,
  //           "X-RapidAPI-Host": X_RapidAPI_Host,
  //         },
  //       };
  //       try {
  //         const response = await axios.request(options);
  //         if (response.data) setLdSched(response.data);
  //         else setLdSched(null);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [suburbChanged]);

  const handleSuburbChange = (e) => {
    setSuburb(e.target.value);
  };

  useEffect(() => {
    const storedSuburb = localStorage.getItem("suburb");
    if (storedSuburb && storedSuburb.length > 0) {
      setSuburb(storedSuburb);
    }
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Save the complete suburb to localStorage
      localStorage.setItem("suburb", suburb);
    }
    setSuburbChanged(true);
  };

  useEffect(() => {
    if (colRef.current) {
      if (colRef?.current?.clientWidth / 5 > maxGridColWidth)
        setColWidth(maxGridColWidth);
      else setColWidth(colRef?.current?.clientWidth / 5);
    }
  }, [colRef?.current?.clientWidth]);

  const getFormatDate = (date) => {
    const parts = date?.split(" ");
    const monthDay = parts[1] + " " + parts[2];
    return monthDay;
  };

  const getFormatDays = (date) => {
    const parts = date?.split(" ");
    const days = parts[0];
    return days;
  };
  return (
    <div ref={colRef}>
      <h3>Loadshedding</h3>

      <label className="label">Your suburb</label>
      <input
        className="input_box"
        list="places"
        type="text"
        id="suburb"
        name="suburb"
        onChange={handleSuburbChange}
        onKeyDown={handleKeyPress}
        value={suburb}
        required
        autoComplete="off"
      />
      {/* <div>{ldSched?.schedule[0].date}</div> */}
      {ldSched && ldSched.schedule && ldSched.schedule.length > 0 ? (
        <div
          style={{
            display: "grid",
            // gridTemplateColumns:"repeat(5,1fr)"
            gridTemplateColumns: `repeat(5, ${colWidth}px)`,
            gridAutoColumns: `${colWidth}px`,
            fontSize: "0.8rem",
          }}
        >
          {ldSched.schedule.slice(0, 5).map((scheduleItem, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  justifyContent: "center",
                }}
              >
                <p>{getFormatDate(scheduleItem.date)}</p>
                <p>{getFormatDays(scheduleItem.date)}</p>
                {scheduleItem.outages.map((item, i) => (
                  <p
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      fontSize: "0.8rem",
                      justifyContent: "center",
                    }}
                  >
                    <span>{item[0]}</span> to <span>{item[1]}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Suburb not found</p>
      )}

      {/* <div>{ldSched?.schedule[0].date}</div>
      {ldSched && ldSched?.length > 0 ? (
        Array.from({ length: 2 }, (_, index) => (
          <div key={index}>
            <p>{ldSched?.schedule[index]?.date}</p>
            {ldSched?.schedule[index]?.outages.map((item) => (
              <p key={item.id}>
                <span>{item[0]}</span> to <span>{item[1]}</span>
              </p>
            ))}
          </div>
        ))
      ) : (
        <p>Suburb not found</p>
      )} */}
    </div>
  );
};
export default Loadshedding;
