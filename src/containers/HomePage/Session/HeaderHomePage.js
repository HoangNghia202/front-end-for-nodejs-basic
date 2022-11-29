import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./headerHomePage.scss";
class HeaderHomePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <div className="header-homepage">
          <div className="header-content">
            <div className="left-content">
              <div className="menu-bar my-auto mx-1">
                <i class="fas fa-duotone fa-bars fa-lg"></i>
              </div>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-center-content">
                <h6>Chuyên Khoa</h6>
                <p className="small">Tìm bác sĩ theo chuyên khoa</p>
              </div>
              <div className="child-center-content">
                <h6>Cơ sở y tế</h6>
                <p className="small">Chọn bệnh viện phòng khám</p>
              </div>
              <div className="child-center-content">
                <h6>bác sĩ</h6>
                <p className="small">Tìm bác sĩ giỏi</p>
              </div>
              <div className="child-center-content">
                <h6>Gói khám</h6>
                <p className="small">Khám sức khoe tổng quát</p>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i class="fas fa-duotone fa-headset fa-lg"></i>
                <h5>Hỗ trợ</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default HeaderHomePage;
