import React, { Component } from "react";
import "./city.css";
import ved from "./city.json";
class App extends Component {
  render() {
    var i = 10;
    var city = "New Delhi";
    {
      if (city == "New Delhi") i = "0";
      if (city == "Kolkata") i = 1;
      if (city == "Bhubaneshwar") i = 2;
      if (city == "Ranchi") i = 3;
      if (city == "Bangalore") i = 4;
      if (city == "Bhopal") i = 5;
      if (city == "Vizag") i = 6;
      if (city == "Hyderabad") i = 7;
      if (city == "Mumbai") i = 8;
      if (city == "Pune") i = 9;
    }

    return (
      <div className="App">
        <div className="extra" />
        <div className="image">
          <img src={ved[ved["city"][i]].image} />
        </div>
        <div className="events">
          {ved[ved["city"][i]].event.map(ta => (
            <div className="event">
              {" "}
              <span>
                <a key={ta}>{ta}</a>
              </span>
            </div>
          ))}
        </div>
        <div className="main">
          <div className="city">{ved["city"][i]}</div>

          <br />
          <div className="desc">{ved[ved["city"][i]].desc}</div>
        </div>
      </div>
    );
  }
}

export default App;
