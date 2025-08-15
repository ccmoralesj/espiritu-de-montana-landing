import { Image as ImageIcon } from "lucide-react";
import React from "react";

interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = 300,
  height = 200,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center bg-primary/50 rounded-lg ${className}`}
      style={{ width, height }}
    >
      <ImageIcon className="w-12 h-12 text-primary" strokeWidth={1.5} />
    </div>
  );
};
