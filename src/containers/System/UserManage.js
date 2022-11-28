import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { connect } from "react-redux";
import {
  handleGetAllUserAPI,
  handleCreateNewUserAPI,
  handleDeleteUserAPI,
} from "../../services/userService";
import { toast } from "react-toastify";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      modal: false,
      newUser: {
        email: "",
        password: "",
        fname: "",
        lname: "",
        phoneNum: "",
        address: "",
        role: "1",
        gender: 1,
      },
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleAddNewUSer = () => {
    alert("add new user");
  };

  async componentDidMount() {
    let response = await handleGetAllUserAPI(null);
    console.log(">>errCode", response.data.errCode);
    if (response.data.errCode === 0) {
      this.setState({ users: response.data.user }, () => {
        console.log(">>check users", this.state.users);
      });
    }
  }

  handleChangeInput = (event) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [event.target.name]: event.target.value,
      },
    });
  };

  checkValidInput = () => {
    let isValid = true;
    let arrInput = Object.keys(this.state.newUser);

    console.log(">>arrInput", arrInput);

    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state.newUser[arrInput[i]]) {
        isValid = false;
        alert("Please fill: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleCreateNewUser = async (event) => {
    event.preventDefault();
    if (this.checkValidInput()) {
      try {
        await handleCreateNewUserAPI(this.state.newUser);
        await this.componentDidMount();
        toast.success("Create new user successfully!");
      } catch (error) {
        toast.error("Create new user failed!");
        console.log(">>err create new user: ", error.response);
      }
      await this.toggle();
    }
  };

  handleDeleteUser = async (userId) => {
    try {
      await handleDeleteUserAPI(userId);
      await this.componentDidMount();
      toast.success("Delete user successfully!");
    } catch (error) {
      console.log("err delete user: ", error.response);
      toast.error("Delete user failed!");
    }
  };

  render() {
    console.log(">>newUser", this.state.newUser);
    return (
      <>
        <div className="text-center">Manage users</div>
        <div className="user-table text-center">
          <div className="text-left my-2">
            <button
              className="btn btn-primary float-left"
              onClick={this.toggle}
            >
              <i className="fas fa-plus"> Add New User</i>{" "}
            </button>
          </div>

          <table className="table table-striped table-bordered rounded table-hover">
            <thead className="bg-dark text-white">
              <tr>
                <th>id</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {this.state.users &&
                this.state.users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td className="text-center">
                        <button className="btn btn-primary">Edit</button> &nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.handleDeleteUser(item.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={"modal-create-user"}
            size="lg"
            centered={true}
          >
            <ModalHeader className="modal-header" toggle={this.toggle}>
              Create new user
            </ModalHeader>
            <ModalBody>
              <div class="">
                <div class="row">
                  <div class="col-md">
                    <form onSubmit={(event) => this.handleCreateNewUser(event)}>
                      <div class="form-row d-flex my-3" style={{ gap: "10px" }}>
                        <div class="form-group col-6">
                          <label for="email">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="mail"
                            name="email"
                            placeholder="Enter email "
                            value={this.state.newUser.email}
                            onChange={(event) => this.handleChangeInput(event)}
                          />
                        </div>

                        <div class="form-group col-6">
                          <label for="password">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter password "
                            value={this.state.newUser.password}
                            onChange={(event) => this.handleChangeInput(event)}
                          />
                        </div>
                      </div>

                      <div class="form-row d-flex my-3" style={{ gap: "10px" }}>
                        <div class="form-group col-6">
                          <label for="fname">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="fname"
                            name="fname"
                            placeholder="Enter first name"
                            value={this.state.newUser.fname}
                            onChange={(event) => this.handleChangeInput(event)}
                          />
                        </div>
                        <div class="form-group col-6">
                          <label for="lname">Last Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="lname"
                            name="lname"
                            placeholder="Enter last name"
                            value={this.state.newUser.lname}
                            onChange={(event) => this.handleChangeInput(event)}
                          />
                        </div>
                      </div>

                      <div class="form-row d-flex my-3" style={{ gap: "10px" }}>
                        <div class="form-group col-12">
                          <label for="address">Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="address"
                            name="address"
                            placeholder="Enter Address"
                            value={this.state.newUser.address}
                            onChange={(event) => this.handleChangeInput(event)}
                          />
                        </div>
                      </div>

                      <div class="form-row d-flex my-3" style={{ gap: "5px" }}>
                        <div class="form-group col-6">
                          <label for="phoneNum">Phone Number</label>
                          <input
                            type="text"
                            class="form-control"
                            id="phoneNum"
                            name="phoneNum"
                            placeholder="Enter phone Number"
                            value={this.state.newUser.phoneNum}
                            onChange={(event) => this.handleChangeInput(event)}
                          />
                        </div>

                        <div class="form-group col-3">
                          <label for="gender">Gender</label>
                          <select
                            name="gender"
                            id="gender"
                            class="form-control"
                            onChange={(event) => this.handleChangeInput(event)}
                          >
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                          </select>
                        </div>
                        <div class="form-group col-3">
                          <label for="role">Role</label>
                          <select
                            name="role"
                            id="role"
                            class="form-control"
                            onChange={(event) => this.handleChangeInput(event)}
                          >
                            <option value="1">Admin</option>
                            <option value="2">Doctor</option>
                            <option value="3">Patient</option>
                          </select>
                        </div>
                      </div>
                      <div className="text-right" style={{ gap: "10px" }}>
                        <button type="submit" class="btn btn-primary my-2 mx-1">
                          Submit
                        </button>

                        <button type="reset" className="btn btn-danger mx-1">
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </ModalBody>
            {/* <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter> */}
          </Modal>
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
