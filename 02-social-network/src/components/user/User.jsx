import PropTypes from "prop-types";

export default function User({ src, alt, userName }) {
  return (
    <div className="user">
      <img src={src} alt={alt} />
      <h4>{userName}</h4>
    </div>
  );
}

User.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
