'use strict';

import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <div className="banner-wrapper wrapper">
        <div>
          <img className="responsive-img banner-image" src="http://4.bp.blogspot.com/-q4fs9VuLt70/VFlEs3ao8jI/AAAAAAAA-pA/iAVvy5_MofE/s1600/colores%2Bpara%2Bmi%2Bblog.png"/>
          <div><i className="material-icons angle-down">keyboard_arrow_down</i></div>
        </div>
        <h3 className="banner-title">Paste</h3>
      </div>
    );
  }
}

export default Banner;
