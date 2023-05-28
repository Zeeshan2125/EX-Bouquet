import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerFourSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className={`single-banner banner-shape banner-green-color ${spaceBottomClass ? spaceBottomClass : ""
          }`}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          flexWrap: "wrap"
        }}
      >
        <Link to={`/shop`}>
          <img src={process.env.PUBLIC_URL + data.image} style={{ maxWidth: "220px", minWidth: "220px" }} alt="category" />
        </Link>
        <div className="banner-content">
          <h3>{data.title}</h3>
          <h4>
            {data.subtitle}<br></br> <span>{data.price}</span>
          </h4>
          <Link to={`/shop`}>
            <i className="fa fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

BannerFourSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerFourSingle;
