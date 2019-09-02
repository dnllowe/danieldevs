export const runAtEndOfEventLoop = (action: () => void) => {
    setTimeout(action)
}