import React, { Component } from "react";
import { Consumer } from "../../Context";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import profile from "../../img/avatar-circle.png";
import "../../App.css";
class Contact extends Component {
  state = {
    showContactInfo: false // used for show identity of each contact
  };
  deleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact; //pass to Contacts component
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div style={{ cursor: "pointer" }}
              className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-10 offset-1 col-sm-10 offset-sm-1">
                    
              <div className="card mb-3 p-card-hover mt-3">
                <div className="row no-gutters">
                  <div
                    className="col-md-4 d-flex justify-content-center"
                    onClick={() =>
                      this.setState({
                        showContactInfo: !this.state
                          .showContactInfo /*toggle the state*/
                      })
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={profile}
                      className="card-img img-fluid rounded-circle p-1 p-img-profile"
                      alt="profile"
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body d-flex justify-content-between pl-0">
                      <div className="contact-name d-flex align-items-baseline ml-3 pl-1">
                        <span className="card-title mr-1">{name}</span>
                        <i
                          onClick={() =>
                            this.setState({
                              showContactInfo: !this.state
                                .showContactInfo /*toggle the state*/
                            })
                          }
                          className="card-text fa fa-caret-down"
                          style={styles.caret}
                        >
                          {" "}
                        </i>
                      </div>
                      <div className="contact-edit">
                        <Link
                          to={`contact/edit/${id}`}
                          className="mr-1 float-left"
                        >
                          {" "}
                          <i
                            className="card-text fa fa-pencil mr-2"
                            style={styles.pencil}
                          />{" "}
                        </Link>
                        <i
                          onClick={this.deleteClick.bind(this, id, dispatch)}
                          className="card-text fa fa-times"
                          style={styles.times}
                        />
                      </div>
                    </div>
                  </div>

                  {showContactInfo ? (
                    <ul className="list-group p-tran w-100">
                      <li className="list-group-item">
                        {" "}
                        <i className="fa fa-envelope" /> Email: {email}
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="fa fa-phone" /> Phone: {phone}
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;

const styles = {
  // just little styling
  caret: {
    color: "#555",
    cursor: "pointer"
  },
  times: {
    color: "rgb(220, 0, 0)",
    cursor: "pointer"
  },
  pencil: {
    color: "#777"
  }
};

Contact.defaultProps = {
  // if we have'nt any state we need default values
  contact: {
    name: "no name",
    email: "no email",
    phone: "no number"
  }
};

Contact.propTypes = {
  // check the propstypes
  contact: PropTypes.object.isRequired
};
