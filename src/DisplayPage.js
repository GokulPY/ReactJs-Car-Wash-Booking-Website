import React, { useState, useEffect } from "react";
import "./displaypage.css"; // import the CSS file


function DisplayPage(props) {
  const [data, setData] = useState([]);
  const buttonValue = localStorage.getItem('buttonValue');
  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data")) || [];
    setData(savedData);
  }, []);

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Booking Date</th>
            <th>Phone No</th>
            <th>Order Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td>{buttonValue}</td>
              <td>{item.phone}</td>
              <td>
              Pending
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>*</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { DisplayPage };


