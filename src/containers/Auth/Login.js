import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { path } from "../../utils/constant";

import * as actions from "../../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../../utils";

import userIcon from "../../assets/images/user.svg";
import passIcon from "../../assets/images/pass.svg";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

import adminService from "../../services/adminService";

import { handleLoginAPI } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: false,
      errCode: -1,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = async (event) => {
    event.preventDefault();
    try {
      let response = await handleLoginAPI(
        this.state.email,
        this.state.password
      );
      console.log(">>success", response.data.errCode);
      this.setState({ errCode: response.data.errCode });
      this.props.userLoginSuccess(response.data.user);
    } catch (error) {
      console.log(">>>err: ", error.response);
      this.setState({ errCode: error.response.data.errCode });
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="login-background">
          <div className="login-container row justify-content-center align-items-center h-100  ">
            <div className="login-content mx-auto bg-white pb-5 pt-2  ">
              <h3 className="text-center">Login System</h3>
              <form
                onSubmit={(event) => {
                  this.handleLogin(event);
                }}
              >
                <div className="form-row mb-4">
                  <div className="form-group">
                    <label htmlFor="email">
                      {" "}
                      <h6>Email</h6>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                      value={this.state.email}
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                    />
                  </div>
                  <p>{this.state.errCode !== 1 ? "" : "User not found"}</p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="password">
                      {" "}
                      <h6>Password</h6>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      name="password"
                      value={this.state.password}
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                    />
                  </div>
                  <p>{this.state.errCode !== 2 ? "" : "Wrong password"}</p>
                </div>

                <div className="form-row mb-4">
                  <div className="form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onClick={() => {
                        this.setState({ remember: !this.state.remember });
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember password
                    </label>
                  </div>
                </div>

                <div className="form-row d-flex justify-content-between my-2">
                  <button type="submit" className="btn btn-primary">
                    <h5>Login</h5>
                  </button>
                  <a className="float-right "> Forgot password?</a>
                </div>

                <div className="col-12 text-center">
                  <div>
                    <h4>Login via</h4>
                  </div>
                  <div className="social-icon">
                    <i className="fab fa-brands fa-facebook-f fa"></i> &nbsp;
                    <i className="fab fa-brands fa-google go"></i>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) => {
      dispatch(actions.userLoginSuccess(userInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
