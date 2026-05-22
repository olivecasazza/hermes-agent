type PageLoadingBarProps = {
  label?: string;
};

export function PageLoadingBar({
  label = "Loading",
}: PageLoadingBarProps) {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-0.5"
      role="status"
    >
      <span className="sr-only">{label}</span>
      <div className="loading-bar-rainbow h-full w-full" />
    </div>
  );
}
