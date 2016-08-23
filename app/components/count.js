/**
 * Created by Mike on 8/23/16.
 */
import React, {Component} from 'react';

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    handleClick (e) {
        const count = this.state.count + 1;
        this.setState({count});
    }

    resetClick (e) {
        this.setState({
            count : 0
        });
    }


    render () {
        const resetStyle = {
            marginLeft: '10px'
        };
        return (
            <div>
                <p>You Clicked {this.state.count} Times</p>
                <button onClick={this.handleClick}>Like Me!</button>
                <button onClick={this.resetClick} style={resetStyle}>Reset</button>
            </div>
        );
    }
}
