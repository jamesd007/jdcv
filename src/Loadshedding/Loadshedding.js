import React, { useEffect, useState } from "react";
import axios from "axios";

const Loadshedding = () => {
  const X_RapidAPI_Key = "623dded1camsh231cac6b2d12dc3p1041cdjsn149da3ea6663";
  const X_RapidAPI_Host = "mzansi-loadshedding-api.p.rapidapi.com";
  const [suburb, setSuburb] = useState("");
  const [ldSched, setLdSched] = useState([]);
  const [suburbChanged, setSuburbChanged] = useState(true);

  useEffect(() => {
    if (suburbChanged) {
      setSuburbChanged(false);
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://mzansi-loadshedding-api.p.rapidapi.com/schedule/boskruin",
          headers: {
            "X-RapidAPI-Key": X_RapidAPI_Key,
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
      };
      fetchData();
    }
  }, [suburbChanged]);

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

  return (
    <div>
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
      {ldSched && ldSched.length > 0 ? (
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
      )}
    </div>
  );
};
export default Loadshedding;
