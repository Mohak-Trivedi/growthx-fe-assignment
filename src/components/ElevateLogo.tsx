import "./ElevateLogo.css";

function ElevateLogo() {
  return (
    <div className="logo-container">
      <svg
        viewBox="0 0 300 180"
        className="logo-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definitions for glow effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 4-pointed star - centered, wider horizontally */}
        <g className="star-group">
          <path
            className="star-shape"
            d="M150 8 
               C154 26 172 32 200 36 
               C172 40 154 46 150 64 
               C146 46 128 40 100 36 
               C128 32 146 26 150 8 Z"
            fill="#fff"
            filter="url(#glow)"
          />
        </g>

        {/* Wing horizontal line - thin stroke */}
        <line
          className="wing-line"
          x1="35"
          y1="78"
          x2="265"
          y2="78"
          stroke="#fff"
          strokeWidth="0.75"
        />

        {/* Wing curves - concave (bent inward toward center) */}
        <path
          className="wing-curve-left"
          d="M150 145 Q115 95 35 78"
          fill="none"
          stroke="#fff"
          strokeWidth="0.75"
        />
        <path
          className="wing-curve-right"
          d="M150 145 Q185 95 265 78"
          fill="none"
          stroke="#fff"
          strokeWidth="0.75"
        />

        {/* Wing fill - curved V shape with inward curves */}
        <path
          className="wing-fill"
          d="M35 78 
             Q115 95 150 145 
             Q185 95 265 78 
             L265 76
             L35 76 
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
