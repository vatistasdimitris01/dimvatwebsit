
import React from 'react';

const PlayIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="53.5901" cy="53.5901" r="53.5901" fill={color}></circle>
    <path d="M75.5273 53.3379L42.5273 72.3905L42.5273 34.2853L75.5273 53.3379Z" fill="black"></path>
  </svg>
);

export default PlayIcon;
