import React, { useState } from "react";
import "./style/tours.css";
import { Link } from "react-router-dom";

const toursData = [
  {
    id: 1,
    name: "petra",
    info: "ffffff",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160914152344-jordan-petra-83259680.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280",
    price: 10,
  },
  {
    id: 1,
    name: "petra",
    info: "ffffff",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160914152344-jordan-petra-83259680.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280",
    price: 10,
  },
  {
    id: 1,
    name: "petra",
    info: "ffffff",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160914152344-jordan-petra-83259680.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280",
    price: 10,
  },
  {
    id: 1,
    name: "abood",
    info: "aaaaaaaaaaaa",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160914152344-jordan-petra-83259680.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280",
    price: 10,
  },
  {
    id: 1,
    name: "petra",
    info: "ffffff",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160914152344-jordan-petra-83259680.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280",
    price: 10,
  },
  {
    id: 1,
    name: "petra",
    info: "ffffff",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160914152344-jordan-petra-83259680.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280",
    price: 10,
  },
  {
    id: 1,
    name: "petra",
    info: "ffffff",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160914152344-jordan-petra-83259680.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280",
    price: 10,
  },
  {
    id: 1,
    name: "petra",
    info: "ffffff",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160914152344-jordan-petra-83259680.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280",
    price: 10,
  },
];

function Tours() {
  const [details, setdetails] = useState("");

  function Showmore(index) {
    if (details == "") {
      setdetails(toursData[index]);
    } else {
      setdetails("");
    }
  }

  return (
    <>
      <div className="card">
        {toursData.map((item, index) => {
          return (
            <>
              <div className="subcard">
                <img src={item.image} />
                <h3> {item.name}</h3>
                <button onClick={() => Showmore(index)}>Show more</button>
                {
                toursData[index] === details ? <><p>{details.info} <p>{details.price} </p></p></> : <><p> </p></>
                }
                
                
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Tours;
