/** 节流 */
export function throttle<T extends any>(fn: T, delay: number) {
  let timer:number
  return function () {
    //@ts-ignore
    const context = this
    const args = arguments
    if (!timer) {
      timer = window.setTimeout(() => {
        fn.apply(context, args)
        clearTimeout(timer)
        timer = 0
      }, delay)
    }
  }
}