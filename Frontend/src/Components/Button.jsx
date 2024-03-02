import React from "react";
import PropTypes from "prop-types";
import '../css/Button.css';

const Button = (props) => {
  const { name, onClick } = props;
    return (
      <div>
        <button className="button-1" onClick={onClick}>
          {name}
        </button>
      </div>
    );
};

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.string,
};

export default Button;
