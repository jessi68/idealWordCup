import { Component } from "react";
import vs from "../image/vs.png";
import React from 'react';

export default class Competition extends Component {

    
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {leftImage: this.props.leftImage, rightImage: this.props.rightImage,
                     leftImageAnimation: "competition-image ", rightImageAnimation: "competition-image "};
      
    }

    addDisappearAnimation(style) {
        style += " disappear";
    }

    addSizeBiggerAnimation(style) {
        style += " focused";
    }

    chooseAsIdeal = (event) => {
        // animation: assetAnim 2s 1 forwards;
        let id = event.target.id
        console.log(id);
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

        this.setState({
            ...this.state,
            rightImageAnimation: this.state.rightImageAnimation.concat(newAnimationForRight),
            leftImageAnimation: this.state.leftImageAnimation.concat(newAnimationForLeft)
          })
    }

    render() {
        return (
            <article onClick={this.chooseAsIdeal}>
                <img src={this.state.leftImage} className={this.state.leftImageAnimation}  height={200} width={200} id="left"/>
                <img src={vs}               className="vs" height={150} width={150}/>
                <img src={this.state.rightImage} className={this.state.rightImageAnimation} height={200} width={200} id="right"/>
            </article>
        )
    }
}