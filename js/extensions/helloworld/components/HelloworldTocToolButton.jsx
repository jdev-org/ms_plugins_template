import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {Button, Glyphicon, Tooltip} from 'react-bootstrap';

export class HelloworldTocToolButton extends React.Component {
    static propTypes = {
        contextLayers : PropTypes.array,
        selectedLayer: PropTypes.object,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        contextLayers: null,
        selectedLayer: null,
        onClick: () =>{}
    };

    constructor(props) {
        super(props);
        console.log("Layer tool button created");
    }

    render() {
        return (
            <Button key="helloworld-button" className="square-button-md" onClick={() => alert('Hello World!')}>
                <Glyphicon glyph="comment" />
            </Button>
        )
    }
}