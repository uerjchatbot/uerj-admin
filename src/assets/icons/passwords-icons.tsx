import { IconInterface } from "@/types/interface/icons/icons.interface";
import React from "react";

export const EyesOpen: React.FC<IconInterface> = ({ color, size, onClick }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}>
      <path
        d="M1 9C1 9 4.6 1 13 1C21.4 1 25 9 25 9C25 9 21.4 17 13 17C4.6 17 1 9 1 9Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 12.4286C14.9882 12.4286 16.6 10.8935 16.6 9C16.6 7.10645 14.9882 5.57143 13 5.57143C11.0118 5.57143 9.4 7.10645 9.4 9C9.4 10.8935 11.0118 12.4286 13 12.4286Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyesClosed: React.FC<IconInterface> = ({ color, size, onClick }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}>
      <path
        d="M10.456 10.456C10.1023 10.7856 9.81861 11.183 9.62185 11.6246C9.42509 12.0662 9.31929 12.5429 9.31076 13.0263C9.30223 13.5097 9.39115 13.9898 9.57221 14.4381C9.75327 14.8863 10.0228 15.2935 10.3646 15.6354C10.7065 15.9772 11.1137 16.2467 11.5619 16.4278C12.0102 16.6089 12.4903 16.6978 12.9737 16.6892C13.4571 16.6807 13.9338 16.5749 14.3754 16.3781C14.817 16.1814 15.2144 15.8977 15.544 15.544M11.476 4.696C11.9816 4.63301 12.4905 4.60095 13 4.6C21.4 4.6 25 13 25 13C24.4635 14.1485 23.7907 15.2283 22.996 16.216M6.532 6.532C4.1455 8.15755 2.23585 10.3903 1 13C1 13 4.6 21.4 13 21.4C15.2991 21.4062 17.5489 20.7341 19.468 19.468M1 1L25 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
