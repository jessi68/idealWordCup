import { Component } from "react";
import path from "../../src/image/fruits/사과.jpg";
import Tournament from "./Tournament";

export class Tournaments extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.images);
        this.state = {index: 0};
    }
    
    isFinished = () => {
        return this.state.index >= this.props.numberOfParticipants;
    }

    changeToNextCompetition = () => {
        let newIndex = this.state.index + 2;

        if(this.isFinished(newIndex)) {
            return;
        }
        this.setState({
            index: newIndex
        });      
    
    }

    render() {
        console.log(this.state.index);
        console.log(this.props.images[this.state.index]);
        return(
        <div>
        <header className="head">{this.props.numberOfParticipants} 강전</header>
        <Tournament leftImage={this.props.images[this.state.index]} rightImage={this.props.images[this.state.index + 1]}
        changeToNextCompetition={this.changeToNextCompetition}/>
        </div>
        );
    }
}