import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

/* Creates a <div> element with the following style rules */
const ChevronWrapper = styled.div`
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${props => (props.rotate ? `rotate(180deg)` : "")};
`;

class Chevron extends Component {
  constructor(props) {
    super(props);
    this.state = { rotate: false };
  }

  /* Arrow function used here in order to use lexical scoping which binds
"this" to it's surrounding function*/
  handleChevronDoneRotating = () => {
    this.setState(prevState => ({ rotate: !prevState.rotate }));
  };

  render() {
    return (
      <ChevronWrapper
        rotate={this.state.rotate}
        onClick={this.handleChevronDoneRotating}
      >
        <FontAwesomeIcon
          id="toggler"
          className="chevron-down"
          icon="chevron-down"
          size="lg"
        />
      </ChevronWrapper>
    );
  }
}

export default Chevron;
