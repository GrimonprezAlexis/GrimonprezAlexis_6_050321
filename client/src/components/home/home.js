import React, { Component } from 'react';
import FisheyeDataFR from '../../data/FisheyeDataFR.json';

class Home extends Component {
    render() {
        return ( 
            <div> 
                <h1> Hello There </h1>
                {FisheyeDataFR.photographes.map((photographer, index) => { 
                    return <div> 
                        <h1>{index}</h1> 
                        <h1>{photographer.id}</h1> 
                        <h1>{photographer.name}</h1> 
                        <h1>{photographer.tags}</h1>                         
                        </div> 
                })} 
            </div> 
        )
    }
};

export default Home;
