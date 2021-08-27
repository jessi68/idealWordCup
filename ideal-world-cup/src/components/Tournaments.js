import { Component } from "react";
import path from "../../src/image/fruits/사과.jpg";
import Tournament from "./Tournament";

export class Tournaments extends Component {
    constructor(props) {
        super(props);
        this.defaultAnimation = "competition-image ";
        this.state = {index: 0, nextTournamentParticipants: [], numberOfParticipants: this.props.numberOfParticipants,
                      currentParticipants: this.props.currentParticipants};
    }

    addWinner = (winner) => {
        this.setState({
            ...this.state,
            nextTournamentParticipants: this.state.nextTournamentParticipants.concat(winner)
        });
        
    }
    
    isFinishedThisRound = (newIndex) => {
        return newIndex >= this.state.numberOfParticipants;
    }

    changeToNextCompetition = () => {
        let newIndex = this.state.index + 2;

        if(this.isFinishedThisRound(newIndex)) {
            
            this.state.numberOfParticipants = this.state.numberOfParticipants / 2;
            this.setState({
                ...this.state,
                currentParticipants: [...this.state.nextTournamentParticipants],
                nextTournamentParticipants: [],
                index: 0
            });
            return;
        }
        this.setState({
            index: newIndex
        });      
    
    }

    render() {
        return(
        <>
       
        {this.state.numberOfParticipants >= 2 ? 
        <div>
        <header className="head">{this.state.numberOfParticipants} 강전</header>
        <Tournament leftImage={this.state.currentParticipants[this.state.index]} 
        rightImage={this.state.currentParticipants[this.state.index + 1]} 
        defaultAnimation={this.defaultAnimation}
        changeToNextCompetition={this.changeToNextCompetition}
        addWinner={this.addWinner}/>
        </div> : 
        <div>
        <h1>이상형 월드컵이 종료되었습니다.</h1>
        <img src={this.state.currentParticipants[0]} className={this.defaultAnimation}></img>
        <figcaption>최종 이상형</figcaption>
        </div>
        }
       
        </>
        );
    }
}