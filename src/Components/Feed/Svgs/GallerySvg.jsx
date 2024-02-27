import React from 'react'

const GallerySvg = () => {
  return (
    <div>
      <svg
        className="h-8 w-8 text-blue-500" // Adjust the height and width as needed
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="image-medium"
        aria-hidden="true"
        role="none"
        data-supported-dps="24x24"
        fill="currentColor"
      >
        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z" />
      </svg>
    </div>
  );
}

export default GallerySvg;
