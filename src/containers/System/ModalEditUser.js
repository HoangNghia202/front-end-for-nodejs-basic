import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { handleUpdateUserAPI } from "../../services/userService";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      fname: "",
      lname: "",
      phoneNum: "",
      address: "",
    };
  }

  handleChangeInput = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleUpdateUser = async (event) => {
    try {
      console.log(">>> info user will update", this.state);

      event.preventDefault();
      await handleUpdateUserAPI(this.state);
      toast.success("Update user successfully");
      this.props.toggle();
    } catch (err) {
      toast.error("Update user failed");
      console.log("error update user", err);
    }
  };
  checkValidInput = () => {
    let isValid = true;
    let arrInput = Object.keys(this.props.newUser);

    console.log(">>arrInput", arrInput);

    for (let i = 0; i < arrInput.length; i++) {
      if (!this.props.newUser[arrInput[i]]) {
        isValid = false;
        alert("Please fill: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  toggle = () => {
    this.props.toggle();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.userEdit !== this.props.userEdit) {
      this.setState({
        id: this.props.userEdit.id,
        fname: this.props.userEdit.fname,
        lname: this.props.userEdit.lname,
        phoneNum: this.props.userEdit.phoneNum,
        address: this.props.userEdit.address,
      });
    }
  }

  render() {
    console.log(">>> props", this.props.userEdit);
    console.log(">>edit user", this.state);
    let user = this.props.userEdit;
    return (
      <>
        <div>
          <Modal
            isOpen={this.props.modal}
            toggle={this.toggle}
            className={"modal-create-user"}
            size="lg"
            centered={true}
          >
            <ModalHeader className="modal-header" toggle={this.toggle}>
              Edit User
            </ModalHeader>
            <ModalBody>
              <div class="">
                <div class="row">
                  <div class="col-md">
                    <form onSubmit={(event) => this.handleUpdateUser(event)}>
                      <div class="form-row d-flex my-3" style={{ gap: "10px" }}>
                        <div class="form-group col-6">
                          <label for="fname">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="fname"
                            name="fname"
                            placeholder="Enter first name"
                            defaultValue={user.firstName}
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
                            defaultValue={user.lastName}
                            onChange={(event) => this.handleChangeInput(event)}
                          />
                        </div>
                      </div>

                      <div class="form-row d-flex my-3" style={{ gap: "10px" }}>
                        <div class="form-group col-6">
                          <label for="address">Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="address"
                            name="address"
                            placeholder="Enter Address"
                            defaultValue={user.address}
                            onChange={(event) => this.handleChangeInput(event)}
                          />
                        </div>
                        <div class="form-group col-6">
                          <label for="phoneNum">Phone Number</label>
                          <input
                            type="text"
                            class="form-control"
                            id="phoneNum"
                            name="phoneNum"
                            placeholder="Enter phone Number"
                            defaultValue={user.phoneNumber}
                            onChange={(event) => this.handleChangeInput(event)}
                          />
                        </div>
                      </div>

                      <div
                        class="form-row d-flex my-3"
                        style={{ gap: "5px" }}
                      ></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
