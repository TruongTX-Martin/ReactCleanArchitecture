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
        <div className="footer_div">
          <div className="footer_div_left">
            <img
              src={Images.img_footer_logo}
              alt="footer"
              className="img_footer"
            />
          </div>
          <div className="footer_div_center">
            <div>
              <p
                className="footer_text"
              >
                About us
              </p>
            </div>
            <div>
              <p
                className="footer_text"
              >
                Privacy Policy
              </p>
              <p
                className="footer_text"
              >
                Terms of Use
              </p>
            </div>
          </div>
          <div className="footer_div_right">
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DefaultHeader;
