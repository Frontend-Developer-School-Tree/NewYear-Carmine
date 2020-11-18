import React, { Component } from "react";

export class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>
            {this.props.year} <br />
            <span>
              20<i>21</i>
            </span>
          </h2>
        </div>
    );
  }
}

export default Title;
