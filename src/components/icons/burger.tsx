import React from "react";

function Burger({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_105_1724)">
        <path
          stroke="#292929"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 6.001h18m-18 6h18m-18 6h18"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_105_1724">
          <path
            fill="#fff"
            d="M0 0H24V24H0z"
            transform="translate(0 .001)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Burger;
