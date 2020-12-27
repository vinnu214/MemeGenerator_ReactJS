import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../../StateManagement/Actions/Actions";
import * as ActionTypes from "../../StateManagement/Actions/Types";

import Header from "./Header/Header";
import Meme from "./MemeDispaly/Meme";
import Spinner from "../Spinner/Spinner";
import MGCls from "./MemeGenerator.module.css";

export class MemeGenerator extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  inputHandler = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    this.props.setInputText(name, value);
  };
  generateMeme = (e) => {
    e.preventDefault();
    const memeImgIndex = parseInt(Math.random() * 100);
    const memeImg = this.props.allMemeImgs[memeImgIndex];
    this.props.setMemeImage(memeImg);
  };
  render() {
    return (
      <div>
        <Header />
        {this.props.isLoading ? <Spinner /> : null}
        <form
          className={MGCls.form}
          onSubmit={(event) => this.generateMeme(event)}
        >
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.props.topText}
            onChange={this.inputHandler}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.props.bottomText}
            onChange={this.inputHandler}
          />
          <button>Generate MEME</button>
        </form>
        {this.props.randomImg ? <Meme {...this.props} /> : null}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    topText: state.memes.topText,
    bottomText: state.memes.bottomText,
    randomImg: state.memes.randomImg,
    allMemeImgs: state.memes.allMemeImgs,
    isLoading: state.memes.loading,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setMemeImage: (image) => dispatch(Actions.setMemeImage(image)),
    fetchImages: () => Actions.fetchMemeImages(dispatch),
    setInputText: (name, value) => {
      const dispatchActionType =
        name === "topText"
          ? ActionTypes.SET_TOP_TEXT
          : ActionTypes.SET_BOTTOM_TEXT;
      dispatch({ type: dispatchActionType, payload: value });
    },
  };
};

export default connect(mapState, mapDispatch)(MemeGenerator);
