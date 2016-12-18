'use strict';

import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return(
      <div className="footer-wrapper text-center">
        <div className="social-wrapper">
          <a href="https://www.facebook.com/jesusmarco.delcarmen">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <div className="social-wrapper">
          <a href="https://github.com/jmdelcarmen">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="social-wrapper">
          <a href="mailto:jmdc@my.codergv.org">
            <i className="fa fa-google"></i>
          </a>
        </div>
        <p>&copy; 2017 J.M. WebDev</p>
      </div>
    );
  }
}

export default Footer;
