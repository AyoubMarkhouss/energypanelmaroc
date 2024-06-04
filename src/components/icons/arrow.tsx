import React from "react";

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      baseProfile="tiny"
      version="1.2"
      viewBox="0 0 24 24"
    >
      <path d="M13.293 7.293a.999.999 0 000 1.414L15.586 11H8a1 1 0 000 2h7.586l-2.293 2.293a.999.999 0 101.414 1.414L19.414 12l-4.707-4.707a.999.999 0 00-1.414 0z"></path>
    </svg>
  );
}

export default Arrow;
