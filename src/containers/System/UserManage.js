import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { connect } from "react-redux";
import { handleGetAllUserAPI } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    let response = await handleGetAllUserAPI(null);
    console.log(">>errCode", response.data.errCode);
    if (response.data.errCode === 0) {
      this.setState({ users: response.data.user }, () => {
        console.log(">>check users", this.state.users);
      });
    }
  }

  render() {
    console.log(">>users in render", this.state.users);

    return (
      <>
        <div className="text-center">Manage users</div>
        <div className="user-table text-center">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users &&
                this.state.users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn btn-primary">Edit</button> &nbsp;
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
