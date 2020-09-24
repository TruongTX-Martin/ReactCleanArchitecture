import React, { Component, Fragment } from "react";
import Images from '../../../../assets/images';

interface Iprops {
}

class DefaultHeader extends Component<Iprops, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="header_parrent color_home">
          <img
            width="140"
            height="35"
            alt=""
            src={Images.img_logo}
          />
        </div>
      </Fragment>
    );
  }
}

export default DefaultHeader;
