// src/app/_components/Ring.jsx
export const Ring = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size - 1) / 2}
        stroke="rgba(180,180,180,0.2)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
};
