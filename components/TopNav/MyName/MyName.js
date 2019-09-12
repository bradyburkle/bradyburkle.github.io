import React from "react";

const myName = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="326"
    height="58"
    viewBox="0 0 326 58"
  >
    <defs>
      <filter
        id="brady_burkle"
        x="0"
        y="0"
        width="182"
        height="58"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="10" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodOpacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Component_1_1" data-name="Component 1 – 1" transform="translate(9)">
      <g transform="matrix(1, 0, 0, 1, -9, 0)" filter="url(#brady_burkle)">
        <text
          id="brady_burkle-2"
          data-name="brady burkle"
          transform="translate(9 31)"
          fill="#000000"
          fontSize="30"
          fontFamily="Roboto-Regular, Roboto"
        >
          <tspan x="0" y="0">
            brady burkle
          </tspan>
        </text>
      </g>
    </g>
  </svg>
);

export default myName;
