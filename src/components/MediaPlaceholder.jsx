import { useState } from "react";
import { ImageOff } from "lucide-react";

export default function MediaPlaceholder({ src, alt, className = "", loading = "lazy", objectFit = "cover" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`group relative isolate overflow-hidden bg-surface-soft ${className}`}>
      <div className="absolute inset-0 grid place-items-center p-6 text-center text-muted-foreground">
        <span className="flex flex-col items-center gap-3">
          <ImageOff className="size-5 text-primary/60" aria-hidden="true" />
          <span className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase">Project preview coming soon</span>
        </span>
      </div>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onError={() => setFailed(true)}
          className={`relative z-10 size-full object-${objectFit} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
        />
      )}
    </div>
  );
}
