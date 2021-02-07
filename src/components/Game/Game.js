/*
 * @Description:  
 * @Author: zhang yumei
 * @Date: 2021-02-03 10:24:45
 * @LastEditTime: 2021-02-07 11:11:18
 * @LastEditors: zhang yumei
 */
import React, { useState } from "react"
import "./Game.less"
import Board from "./component/Board.js"
function calculateWinner(square) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            console.log(square[a], "8888");
            return square[a];
        }
    }
    return null;
};
function Game(props) {
    const [square, setsquare] = useState(Array(9).fill(null));
    const [route, setroute] = useState(true);
    const [all, setall] = useState(Array(9).fill(null));
    const [last, setlast] = useState(1);
    const [total, settotal] = useState(0);
    const winner = calculateWinner(square);

    const handleClick = (i) => {
        settotal(total + 1);
        setroute(!route);
        const squares = square.slice();
        if (route) { squares[i] = "X" } else { squares[i] = "O" };
        setsquare(squares);
        setall(all.concat(squares));
    };
    const friststep = () => {
        setlast(last + 1);
        console.log(last, "s");
        console.log(total, "s");
        if (last < (total + 1)) {
            setroute(!route);
            setsquare(all.slice(all.length - 9 * (last + 1), all.length - 9 * last));
        } else {
            alert("非法操作");
            return;
        }
    };
    const laststep = () => {
        console.log(last)
        console.log(total)
        if (0 < last && last <= (total + 1)) {
            setlast(last - 1)
            setroute(!route);
            setsquare(all.slice(all.length - 9 * (last - 1), all.length - 9 * (last - 2)))
        } else {
            alert("非法操作")
            return
        }
    };
    if (winner === "X") {
        setTimeout(() => {
            alert("X获胜")
            setsquare(Array(9).fill(null))
            setall(Array(9).fill(null))
            setlast([])
        }, 0);
    } else if (winner === "O") {
        setTimeout(() => {
            alert("O获胜")
            setsquare(Array(9).fill(null))
            setall(Array(9).fill(null))
            setlast([])
        }, 0)
    };
    return (
        <div className="game" >
            <div className="game-board">
                <Board
                    square={square}
                    route={route}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div><button
                    onClick={() => friststep()}>显示上一步</button></div>
                <div><button
                    onClick={() => laststep()}>显示下一步</button></div>
            </div>
        </div>
    );
}


export default Game