/*
 * @Description:  
 * @Author: zhang yumei
 * @Date: 2021-02-03 10:24:45
 * @LastEditTime: 2021-02-05 20:33:46
 * @LastEditors: zhang yumei
 */
import React from "react"
import "./Game.less"
import Board from "./component/Board.js"
// import "./Game.css"
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: Array(9).fill(null),
            route: true,
            all: Array(9).fill(null),
            last: 1,
            total: 0,
        }
    }
    handleClick(i) {
        this.setState({ total: this.state.total + 1 })
        this.setState({ route: !this.state.route })
        let all = this.state.all.slice()
        const squares = this.state.square.slice();
        if (this.state.route) { squares[i] = "X" } else { squares[i] = "O" }
        this.setState({ square: squares })
        all = all.concat(squares)
        this.setState({ all: all })
    }
    friststep() {
        let all = this.state.all.slice()
        let total = this.state.total
        let last = this.state.last
        this.setState({ last: this.state.last + 1 })
        console.log(last, "s")
        console.log(total, "s")
        if (last < (total + 1)) {
            this.setState({ route: !this.state.route });
            this.setState({ square: all.slice(all.length - 9 * (last + 1), all.length - 9 * last) })
        } else {
            alert("非法操作")
            return
        }
    }
    laststep() {
        let last = this.state.last
        let all = this.state.all.slice()
        let total = this.state.total
        console.log(last)
        console.log(total)
        if (0 < last && last <= (total + 1)) {
            this.setState({ last: this.state.last - 1 })
            this.setState({ route: !this.state.route });
            this.setState({ square: all.slice(all.length - 9 * (last - 1), all.length - 9 * (last - 2)) })
        } else {
            alert("非法操作")
            return
        }


    }
    render() {
        const winner = calculateWinner(this.state.square);
        if (winner === "X") {
            setTimeout(() => {
                alert("X获胜")
                this.setState({ square: Array(9).fill(null) })
                this.setState({ all: Array(9).fill(null) })
                this.setState({ last: [] })
            }, 0);
        } else if (winner === "O") {
            setTimeout(() => {
                alert("O获胜")
                this.setState({ square: Array(9).fill(null) })
                this.setState({ all: Array(9).fill(null) })
                this.setState({ last: [] })
            }, 0)
        }
        return (
            <div className="game" >
                <div className="game-board">
                    <Board
                        square={this.state.square}
                        route={this.state.route}
                        onClick={(i) => this.handleClick(i)}
                        status={this.state.status} />
                </div>
                <div className="game-info">
                    <div><button
                        onClick={() => this.friststep()}>显示上一步</button></div>
                    <div><button
                        onClick={() => this.laststep()}>显示下一步</button></div>
                </div>
            </div>
        );
    }
}

// ========================================
function calculateWinner(squares) {
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            console.log(squares[a], "8888");
            return squares[a];
        }
    }
    return null;
}
export default Game