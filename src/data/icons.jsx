const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconWindow(props) {
  return (
    <svg viewBox="0 0 48 48" {...common} {...props}>
      <rect x="6" y="6" width="36" height="36" rx="2" />
      <line x1="24" y1="6" x2="24" y2="42" />
      <line x1="6" y1="24" x2="42" y2="24" />
    </svg>
  )
}

export function IconDoor(props) {
  return (
    <svg viewBox="0 0 48 48" {...common} {...props}>
      <rect x="12" y="5" width="24" height="38" rx="1.5" />
      <line x1="20" y1="5" x2="20" y2="43" />
      <circle cx="17" cy="24" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconShower(props) {
  return (
    <svg viewBox="0 0 48 48" {...common} {...props}>
      <path d="M8 8h20a10 10 0 0 1 10 10v22" />
      <line x1="8" y1="8" x2="8" y2="40" />
      <line x1="38" y1="40" x2="8" y2="40" />
      <line x1="16" y1="20" x2="16" y2="40" />
      <path d="M8 22c4 2 8-2 8-2" />
    </svg>
  )
}

export function IconRailing(props) {
  return (
    <svg viewBox="0 0 48 48" {...common} {...props}>
      <line x1="6" y1="40" x2="42" y2="40" />
      <line x1="6" y1="14" x2="42" y2="14" />
      {[10, 16, 22, 28, 34, 40].map((x) => (
        <line key={x} x1={x} y1="14" x2={x} y2="40" />
      ))}
    </svg>
  )
}

export function IconMirror(props) {
  return (
    <svg viewBox="0 0 48 48" {...common} {...props}>
      <rect x="9" y="6" width="30" height="36" rx="15" />
      <path d="M16 16c3-2 13-2 16 0" opacity="0.6" />
    </svg>
  )
}

export function IconPartition(props) {
  return (
    <svg viewBox="0 0 48 48" {...common} {...props}>
      <rect x="6" y="9" width="16" height="30" rx="1.5" />
      <rect x="26" y="9" width="16" height="30" rx="1.5" />
      <line x1="14" y1="9" x2="14" y2="39" opacity="0.5" />
      <line x1="34" y1="9" x2="34" y2="39" opacity="0.5" />
    </svg>
  )
}

export function IconBalcony(props) {
  return (
    <svg viewBox="0 0 48 48" {...common} {...props}>
      <path d="M6 40V16l14-10 22 10v24" />
      <line x1="6" y1="40" x2="42" y2="40" />
      <line x1="20" y1="16" x2="20" y2="40" />
      <line x1="20" y1="16" x2="42" y2="16" />
    </svg>
  )
}

export function IconTool(props) {
  return (
    <svg viewBox="0 0 48 48" {...common} {...props}>
      <path d="M31 9a8 8 0 0 0-10.8 9.2L8 30.4V40h9.6l12.2-12.2A8 8 0 0 0 39 17l-6 6-5-5 6-6a8 8 0 0 0-3-3z" />
    </svg>
  )
}

export function IconWhatsapp(props) {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M16.02 3C9.4 3 4 8.38 4 15c0 2.35.64 4.53 1.85 6.4L4 29l7.8-1.8A11.94 11.94 0 0 0 16.02 27C22.63 27 28 21.62 28 15S22.63 3 16.02 3Zm6.9 17.1c-.29.82-1.63 1.55-2.24 1.6-.6.06-1.15.27-3.86-.8-3.26-1.3-5.36-4.58-5.52-4.8-.16-.22-1.33-1.77-1.33-3.38 0-1.6.85-2.4 1.15-2.72.29-.32.64-.4.86-.4h.62c.2 0 .47-.08.73.56.29.7.98 2.4 1.06 2.58.09.18.14.38.02.6-.11.22-.17.36-.34.55-.17.2-.36.44-.51.6-.17.17-.35.36-.15.7.2.35.9 1.5 1.94 2.43 1.34 1.2 2.46 1.57 2.8 1.75.35.17.55.15.76-.08.2-.24.87-1 1.1-1.35.24-.35.47-.29.78-.17.32.11 2.02.95 2.36 1.13.35.17.58.26.66.4.09.15.09.85-.2 1.67Z"
      />
    </svg>
  )
}

export function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M5 4h3.2l1.4 4.2-2 1.6a11 11 0 0 0 5.6 5.6l1.6-2L19 14.8V18a1.6 1.6 0 0 1-1.7 1.6A15.4 15.4 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4Z" />
    </svg>
  )
}
