import {GameView, clickToTail, canvas} from "./gameview.js"
import {move} from "./game.js"

const initialState = [
    [4, 1, 3],
    [7, 2, 5],
    [8, 0, 6]]

let sl = initialState
new GameView(sl)

canvas.addEventListener('click', moveView)


function moveView(event)
{
    const [i, j] = clickToTail(event.offsetX, event.offsetY)
    sl = move(sl, i, j)
    new GameView(sl)
}