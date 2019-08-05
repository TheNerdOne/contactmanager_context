import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
// import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  pOnChange = e => this.setState({ [e.target.name]: e.target.value });

  pOnSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required!" } });
      return null;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required!" } });
      return null;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required!" } });
      return null;
    }

    const newContact = {
      //  id: uuid(),  we dont need uuid in here because the all database and backends has a autoincrement id
      name,
      email,
      phone
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    //Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="col col-md-6 offset-md-3 col-sm-12">
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.pOnSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      value={name}
                      placeholder="Enter Name..."
                      onChange={this.pOnChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Email"
                      name="email"
                      value={email}
                      type="email"
                      placeholder="Enter Email..."
                      onChange={this.pOnChange}
                      error={errors.email}
                    />
                    <TextInputGroup
                      label="Phone"
                      name="phone"
                      value={phone}
                      placeholder="Enter Phone..."
                      onChange={this.pOnChange}
                      error={errors.phone}
                    />
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-success btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
