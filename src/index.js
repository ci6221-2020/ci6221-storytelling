import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './timeline/Timeline';

class Content extends React.Component {
    render() {
        return (
            <Timeline />
        );
    }
}

ReactDOM.render(<Content />, document.getElementById('content'));