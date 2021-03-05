import React, { Component } from 'react';

//Return header with list of tags
class TagByPhotographerId extends Component {
    render(){
        return (
            <ul className="photographer__tag">
                {this.props.photographer.tags.map((tag,index) => {
                    return (
                        <li key={index}>
                            <a href="todo.html" title={`Tag ${tag}`} aria-label={`Tag ${tag}`}>
                            <span aria-hidden="false">{`#${tag}`}</span></a>
                        </li>
                    );
                })}
            </ul>
        );

    }
}

export default TagByPhotographerId;