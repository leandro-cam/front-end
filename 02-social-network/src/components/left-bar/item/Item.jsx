import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function Item({ to, className, src, alt, title }) {
  return (
    <Link to={to}>
      <div className={className}>
        <img src={src} alt={alt} />
        <h4>{title}</h4>
      </div>
    </Link>
  );
}

Item.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
