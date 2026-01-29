import "./ElevateLogo.css";

function ElevateLogo() {
  return (
    <div className="logo-container">
      <svg
        viewBox="0 0 300 180"
        className="logo-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wing horizontal line - thin stroke */}
        <line
          className="wing-line"
          x1="85"
          y1="78"
          x2="215"
          y2="78"
          stroke="#fff"
          strokeWidth="0.75"
        />

        {/* Wing curves - deep concave like circle quadrants */}
        <path
          className="wing-curve-left"
          d="M85 78 Q150 78 150 145"
          fill="none"
          stroke="#fff"
          strokeWidth="0.75"
        />
        <path
          className="wing-curve-right"
          d="M215 78 Q150 78 150 145"
          fill="none"
          stroke="#fff"
          strokeWidth="0.75"
        />

        {/* Wing fill - V shape with deep quadrant-like concave curves */}
        <path
          className="wing-fill"
          d="M85 78 
             Q150 78 150 145 
             Q150 78 215 78
             Z"
          fill="#fff"
        />
      </svg>

      {/* ELEVATE text */}
      <div className="logo-text">ELEVATE</div>
    </div>
  );
}

export default ElevateLogo;
