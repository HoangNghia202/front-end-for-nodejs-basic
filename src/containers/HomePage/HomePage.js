import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HeaderHomePage from "./Session/HeaderHomePage";
import "./homePage.scss";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free-webfonts";
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <HeaderHomePage />
        <div className="home-banner">
          <div className="banner-content">
            <h2>NỀN TẢNG Y TẾ</h2>
            <h2>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</h2>
          </div>
          <div className=" banner-search">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Tìm chuyên khoa khám bệnh"
              ></input>
            </div>
          </div>
          <div className="banner-option">
            <div className="option-content">
              <div className="option-item-up">
                <ul>
                  <li>
                    {" "}
                    <i class="fas fa-solid fa-hospital"></i>
                    <p>Khám chuyên khoa</p>
                  </li>
                  <li>
                    <i class="fas fa-solid fa-mobile"></i>
                    <p>Khám từ xa</p>
                  </li>
                  <li>
                    <i class="fas fa-solid fa-passport"></i>
                    <p>Khám tổng quát</p>
                  </li>
                  <li>
                    <i class="fas fa-microscope"></i>
                    <p>Xét nghiệm y học</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-brain"></i>
                    <p>Sức khỏe tinh thần</p>
                  </li>
                </ul>
              </div>

              <div className="option-item-down">
                <ul>
                  <li>
                    {" "}
                    <i class="fa-solid fa-tooth"></i>
                    <p>Khám nha khoa</p>
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-bed"></i>
                    <p>Gói Phẫu thuật</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-truck-medical"></i>
                    <p>Sản phẩm y tế</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-hands-holding-circle"></i>
                    <p>Sức khỏe doanh nghiệp</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapDispatchToProps, mapStateToProps)(HomePage);
