import { ImageOff } from "lucide-react";

interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  text?: string;
  className?: string;
}

export default function ImageFallBack({
  width = 300,
  height = 200,
  text = "Image not available",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-slate-100 rounded-lg ${className}`}
      style={{ width, height }}
      role="img"
      aria-label={text}
    >
      <div className="absolute inset-0 bg-gradient-radial from-slate-200 to-transparent" />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-16 h-16 mb-3 rounded-full bg-white shadow-md">
          <ImageOff className="w-8 h-8 text-slate-400" />
        </div>
        <p className="text-sm font-medium text-slate-500">{text}</p>
      </div>
    </div>
  );
}
