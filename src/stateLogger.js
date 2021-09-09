// Tool for tracking and labeling animation/component state
const log = console.log;
export const framerLogger = (label) => log(`%c${label}: animation complete`, "color: red");
export const stateLogger = (label, mounted) => {
  mounted
    ? log(`%c${label}: mounted`, "color: green")
    : log(`%c${label}: unmounted`, "color: orange");
};
