/*
 * @Description:  Board
 * @Author: zhang yumei
 * @Date: 2021-02-05 17:54:30
 * @LastEditTime: 2021-02-05 20:27:28
 * @LastEditors: zhang yumei
 */
import React from "react"
function Square(props) {
    return (
        <button className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}
export default class Board extends React.Component {
    renderSquare(i) {
        return <Square
            value={this.props.square[i]}
            onClick={() => this.props.onClick(i)} />;
    }

    render() {
        const status = `Next player: ${this.props.route ? "X" : "O"}`;
        return (
            <div className="index">
                <div className="status">{status}</div>
                <div className="border">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}
