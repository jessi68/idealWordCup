import { Component } from "react";
import vs from "../image/vs.png";
import React from 'react';

export default class Tournament extends Component {

    
    constructor(props) {
        super(props);
        
        this.props = props;
        this.state = {leftImage: this.props.leftImage, rightImage: this.props.rightImage,
                     leftImageAnimation: this.props.defaultAnimation, 
                     rightImageAnimation: this.props.defaultAnimation,
                     isChosen: false};
      console.log(this.state.leftImage);
    }

    
    chooseIdealImage = (event) => {
        let id = event.target.id
        let newAnimationForLeft;
        let newAnimationForRight;
        if(id === "left") {
            newAnimationForLeft = "focused";
            newAnimationForRight = "disappear"
        }
        if(id === "right") {
            newAnimationForLeft = "disappear";
            newAnimationForRight = "focused";
        }
      
        let animationAddedState = {
            ...this.state,
            rightImageAnimation: this.state.rightImageAnimation.concat(newAnimationForRight),
            leftImageAnimation: this.state.leftImageAnimation.concat(newAnimationForLeft),
        };
        
          this.setState((prevState) => animationAddedState, () => {
            setTimeout(() => {
                this.props.changeToNextCompetition();
                this.setState({
                    ...this.state,
                    rightImageAnimation: this.props.defaultAnimation,
                    leftImageAnimation: this.props.defaultAnimation,
                });
            }, 300);
          })

        
    }


    render() {
       console.log("rendered occur");
        console.log(this.state);
        return (
            <article onClick={this.chooseIdealImage}>
                <img src={this.props.leftImage} className={this.state.leftImageAnimation}  height={200} width={200} id="left"/>
                <img src={vs}               className="vs" height={150} width={150}/>
                <img src={this.props.rightImage} className={this.state.rightImageAnimation} height={200} width={200} id="right"/>
            </article>
        )
    }
}