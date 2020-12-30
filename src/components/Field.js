import React, { useState, useEffect } from "react";

const Field = ({ horse, name }) => {
  const [total, setTotal] = useState(0);
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);

  const handleChange = (event) => {
    const mytarget = event.target;
    if (mytarget.validity.valid) {
      const value = mytarget.value === "" ? 0 : parseInt(mytarget.value);
      if (mytarget.name === "one") {
        setOne(value);
      } else if (mytarget.name === "two") {
        setTwo(value);
      } else {
        setThree(value);
      }
    }
  };

  useEffect(() => {
    setTotal(one + two + 2 * three);
  }, [one, two, three]);

  return (
    <div className="field">
      {Object.keys(horse).map((item, i) => (
        <div className="container" key={i}>
          <div className="title">{horse[item].name}</div>
          <div className="counter">
            <img alt="" src={horse[item].url} />
            <input
              name={item}
              onChange={handleChange}
              type="number"
              autoComplete="off"
              min="0"
            />
          </div>
        </div>
      ))}
      <div className="result">Total: {total}</div>
    </div>
  );
};

export default Field;
