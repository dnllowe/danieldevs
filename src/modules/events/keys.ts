export const keyMap = {
    ARROW_DOWN: 'ArrowDown',
    ARROW_UP: 'ArrowUp',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    DOWN: 'Down',
    UP: 'Up',
    LEFT: 'Left',
    RIGHT: 'Right',
    ENTER: 'Enter',
    ESC: 'Esc',
    ESCAPE: 'Escape'
}

export class KeyDetector {
    isDownPressed = (event: KeyboardEvent) => event.key === keyMap.ARROW_DOWN || event.key === keyMap.DOWN
    isUpPressed = (event: KeyboardEvent) => event.key === keyMap.ARROW_UP || event.key === keyMap.UP
    isLeftPressed = (event: KeyboardEvent) => event.key === keyMap.ARROW_LEFT || event.key === keyMap.LEFT
    isRightPressed = (event: KeyboardEvent) => event.key === keyMap.ARROW_RIGHT || event.key === keyMap.RIGHT
    isEnterPressed = (event: KeyboardEvent) => event.key === keyMap.ENTER
    isEscapePressed = (event: KeyboardEvent) => event.key === keyMap.ESC || event.key === keyMap.ESCAPE
}