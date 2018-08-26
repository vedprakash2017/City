import React, { Component } from "react";
import "./city.css";
import ved from "../data/city.json";
import Kolkata from "../Landing/img/Kolkata.jpg";
import Bangalore from "../Landing/img/Bangalore.jpg";
import Bhopal from "../Landing/img/Bhopal.jpg";
import Mumbai from "../Landing/img/Mumbai.jpg";
import Delhi from "../Landing/img/Delhi.jpg";
import Ranchi from "../Landing/img/Ranchi.jpg";
import Vizag from "../Landing/img/Vizag.jpg";
import Pune from "../Landing/img/Pune.png";
import Bhubaneshwar from "../Landing/img/Bhubhaneshwar.jpg";
import Hyderabad from "../Landing/img/Hyderabad.jpg";

class City extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
  }

  show(value) {
    this.props.show(value);
  }

  render() {
    var i = 10;
    var city = this.props.cityName;
    var image_name;
    if (city === "New Delhi") {
      i = 0;
      image_name = Delhi;
    }
    if (city === "Kolkata") {
      i = 1;
      image_name = Kolkata;
    }
    if (city === "Bhubaneshwar") {
      i = 2;
      image_name = Bhubaneshwar;
    }
    if (city === "Ranchi") {
      i = 3;
      image_name = Ranchi;
    }
    if (city === "Bangalore") {
      i = 4;
      image_name = Bangalore;
    }
    if (city === "Bhopal") {
      i = 5;
      image_name = Bhopal;
    }
    if (city === "Vizag") {
      i = 6;
      image_name = Vizag;
    }
    if (city === "Hyderabad") {
      i = 7;
      image_name = Hyderabad;
    }
    if (city === "Mumbai") {
      i = 8;
      image_name = Mumbai;
    }
    if (city === "Pune") {
      i = 9;
      image_name = Pune;
    }
    return (
      <div className="CityPage">
        <div className="city-extra" />
        <div className="city-image">
          <img src={image_name} alt="" />
        </div>
        <div className="city-events">
          {ved[ved["city"][i]].event.map(ta => (
            <a className="ved" onClick={() => this.show(ta)}>
              {" "}
              {ta}
            </a>
          ))}
        </div>
        <div className="main">
          <div className="city-city">{ved["city"][i]}</div>
          <br />
          <div className="city-desc">{ved[ved["city"][i]].desc}</div>
        </div>
      </div>
    );
  }
}

export default City;
