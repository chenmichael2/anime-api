import React, { Component } from 'react';

class Season extends Component {
    componentDidMount() {
        axios('')
        .then((response) => {
            console.log('response', response);
        })
        .catch((err) => {
            console.log('error', err);
        })
    }
}