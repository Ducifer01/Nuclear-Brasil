import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Radiation trefoil — used for the Emergência mode and nuclear-scenario rows. */
export function TrefoilIcon(props: IconProps) {
  const blade =
    "M7.15,2.69 A10.5,10.5 0 0,1 16.85,2.69 L13.53,9.07 A3.3,3.3 0 0,0 10.47,9.07 Z";
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...props}>
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <path d={blade} fill="currentColor" />
      <path d={blade} fill="currentColor" transform="rotate(120 12 12)" />
      <path d={blade} fill="currentColor" transform="rotate(240 12 12)" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...stroke} {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...stroke} {...props}>
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5V5.5Z" />
      <path d="M20 5.5C20 4.67 19.33 4 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5V5.5Z" />
    </svg>
  );
}

export function ToolboxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...stroke} {...props}>
      <rect x="3" y="9" width="18" height="10" rx="1.5" />
      <path d="M8 9V6.5A1.5 1.5 0 0 1 9.5 5h5A1.5 1.5 0 0 1 16 6.5V9" />
      <path d="M3 13.5h18" />
      <path d="M10.5 13.5v1.6a1.5 1.5 0 0 0 3 0v-1.6" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...stroke} {...props}>
      <path d="M12 4v11" />
      <path d="M7.5 11.5 12 16l4.5-4.5" />
      <path d="M5 19.5h14" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 13l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} {...stroke} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function BatteryLowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...stroke} {...props}>
      <rect x="3" y="8" width="15" height="8" rx="1.5" />
      <path d="M20 10.5v3" />
      <rect x="5.5" y="10.5" width="2.5" height="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </svg>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...stroke} {...props}>
      <path d="M12 3s6.5 7.1 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10.1 12 3 12 3Z" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      {...props}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function RadioIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...stroke} {...props}>
      <rect x="3" y="10" width="18" height="10" rx="1.5" />
      <path d="M7 10V7a5 5 0 0 1 9.8-1.5" />
      <circle cx="8" cy="15" r="1.6" fill="currentColor" stroke="none" />
      <path d="M12.5 15h5" />
    </svg>
  );
}

export function PrintIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...stroke} {...props}>
      <path d="M7 8V4h10v4" />
      <rect x="4" y="8" width="16" height="8" rx="1" />
      <path d="M7 16h10v5H7z" />
    </svg>
  );
}

export function ArchiveIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...stroke} {...props}>
      <rect x="4" y="4" width="16" height="5" rx="1" />
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M10 13h4" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...stroke} {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <path d="M9 9.5 6.8 12l2.2 2.5" />
      <path d="M15 9.5 17.2 12 15 14.5" />
    </svg>
  );
}

export function TextLinesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...stroke} {...props}>
      <path d="M5 6h14" />
      <path d="M5 12h14" />
      <path d="M5 18h8" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...stroke} {...props}>
      <path d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4" />
    </svg>
  );
}

export function XMarkSmallIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={14}
      height={14}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      {...props}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="currentColor"
      stroke="none"
      {...props}
    >
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...stroke} {...props}>
      <path d="M12 2.5c1.2 3 .3 4.6-1 6.2-1.6 1.9-3 3.6-3 6a4 4 0 0 0 8 0c0-1-.3-1.8-.8-2.6.9.6 1.8 1.8 1.8 3.6a5 5 0 0 1-10 0c0-4.8 5-6.4 5-13.2Z" />
    </svg>
  );
}

export function StormIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...stroke} {...props}>
      <path d="M6 10a4 4 0 1 1 1.2 7.8" />
      <path d="M3 14h9" />
      <path d="M9 18h7a3 3 0 1 0-1-5.8" />
    </svg>
  );
}
