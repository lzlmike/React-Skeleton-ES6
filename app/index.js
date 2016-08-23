/**
 * Created by Mike on 8/23/16.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Count from './components/count';

const App = () => {
    return (
        <div>
            <p>Hi this is a React-Skeleton with ES6</p>
            <Count />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));