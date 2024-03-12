import React from 'react';

class ClassCounte extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }

    }
    render() {
        return (
            <div>
                <h1>{this.state.likes}</h1>
                <button onClick={() => this.setState({likes: this.state.likes + 1})}>TRUE</button>
                <button onClick={() => this.setState({likes: this.state.likes - 1})}>FALSE</button>
            </div>
        )
    }  
};

export default ClassCounte;