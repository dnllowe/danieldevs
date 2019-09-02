import { runAtEndOfEventLoop } from "../events/runAtEndOfEventLoop"

export const scrollToTop = () => runAtEndOfEventLoop(() => window.scroll(0,0))