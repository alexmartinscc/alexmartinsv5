export const HOME_PRIORITY_EVENT = "home:priority-selected";

export function selectHomePriority(priority: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<string>(HOME_PRIORITY_EVENT, { detail: priority }));
}
