export function debounce<T extends (...args: any[]) => void>(
  func: T,
  duration: number,
) {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return function (this: any, ...args: any[]) {
    if (!timeout) {
      func.apply(this, args);

      timeout = setTimeout(() => {
        timeout = undefined;
      }, duration);
    }
  } as T;
}
