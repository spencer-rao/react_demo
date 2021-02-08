/*
 * @Description:  Home
 * @Author: zhang yumei
 * @Date: 2021-02-03 10:23:11
 * @LastEditTime: 2021-02-08 10:20:05
 * @LastEditors: zhang yumei
 */
import React from "react"
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.welcome = React.createRef();
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        const node=this.welcome.current;
        console.log(node)
    };
    render() {
        return (
            <div ref={this.welcome}>
                <button onClick={() => this.handleClick()}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}
