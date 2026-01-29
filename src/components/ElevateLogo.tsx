import { forwardRef } from "react";
import "./ElevateLogo.css";

const ElevateLogo = forwardRef<HTMLDivElement>(function ElevateLogo(_, ref) {
  return (
    <div ref={ref} className="logo-container animating">
      <div className="logo-wrapper">
        <svg
          viewBox="0 0 300 180"
          className="logo-svg"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Elevate logo with decorative wings and star"
        >
          {/* Wing horizontal line - thin stroke */}
          <line
            className="wing-line"
            x1="70"
            y1="78"
            x2="230"
            y2="78"
            stroke="#fff"
            strokeWidth="0.75"
          />

          {/* Wing curves - quarter-circle arcs */}
          <path
            className="wing-curve-left"
            d="M70 78 A 80 80 0 0 1 150 158"
            fill="none"
            stroke="#fff"
            strokeWidth="0.75"
          />
          <path
            className="wing-curve-right"
            d="M230 78 A 80 80 0 0 0 150 158"
            fill="none"
            stroke="#fff"
            strokeWidth="0.75"
          />

          {/* Wing fill - V shape with quarter-circle arcs */}
          <path
            className="wing-fill"
            d="M70 78 
               A 80 80 0 0 1 150 158 
               A 80 80 0 0 1 230 78
               Z"
            fill="#fff"
          />

          {/* 4-point star - animates from top-left to center above wing 
              Final size: 65 units (3.5cm), centered at (150, 40) */}
          <path
            className="star"
            d="M150,7.5 Q154.875,35.125 182.5,40 Q154.875,44.875 150,72.5 Q145.125,44.875 117.5,40 Q145.125,35.125 150,7.5 Z"
            fill="#fff"
          />
        </svg>
        <span className="logo-text">ELEVATE</span>
      </div>
    </div>
  );
});

export default ElevateLogo;
