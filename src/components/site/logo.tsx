import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const title = variant === "light" ? "text-white" : "text-[#353895]";
  const sub = variant === "light" ? "text-white/70" : "text-[#333333]";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-11 w-11 items-center justify-center">
        <svg
          viewBox="0 0 64 64"
          className="h-11 w-11"
          fill="none"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="10" fill="#353895" />
          <path
            d="M32 13 L50 44 L14 44 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <path d="M23.5 44 L32 30.5 L40.5 44 Z" fill="#a886cd" />
          <text
            x="32"
            y="56"
            textAnchor="middle"
            fontFamily="Roboto, Arial, sans-serif"
            fontSize="11"
            fontWeight="700"
            fill="#ffffff"
            letterSpacing="0.5"
          >
            SH
          </text>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[17px] font-extrabold tracking-tight",
            title
          )}
        >
          SH Event
        </span>
        <span
          className={cn(
            "mt-0.5 font-heading text-[9px] font-bold uppercase tracking-[0.3em]",
            sub
          )}
        >
          Event Management
        </span>
      </span>
    </div>
  );
}
