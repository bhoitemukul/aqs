export const defaultStyle = {
  transition: ` all 1s cubic-bezier(0.645, 0.045, 0.355, 1)`,
  opacity: 1,
  // transitionDelay: "0.5s",
};
export const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
export const timeOut = {
  appear: 600,
  enter: 300,
  exit: 300,
};
