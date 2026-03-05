import React from "react";

import "./watermark.css";

type WatermarkProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

export const Watermark: React.FC<WatermarkProps> = ({ children, ...props }) => {
  return (
    <div className="watermark" {...props}>
      <div>{children}</div>
      <div className="background" />
    </div>
  );
};
