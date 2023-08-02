// Database.js 4
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class TeamMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      updatedData: { ...props }, // Copy the props to initialize the updatedData
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      updatedData: {
        ...prevState.updatedData,
        [name]: value,
      },
    }));
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    // Send a PUT request to update the Stagiaire in the database
    fetch(`http://localhost:3001/users/${this.props._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Stagiaire updated:", data);
        this.setState({ isEditing: false });
      })
      .catch((error) => console.error("Error updating Stagiaire:", error));
  };

  handleDelete = () => {
    const { _id } = this.props;

    // Send a DELETE request to remove the Stagiaire from the database
    fetch(`http://localhost:3001/users/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Stagiaire deleted:", data);

        // Fetch updated data after successful deletion
        this.props.fetchUpdatedData();
      })
      .catch((error) => console.error("Error deleting Stagiaire:", error));
  };

  handleImageUpload = (event) => {
    const file = event.target.files[0];

    // Validate the file type
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      // Read the file as a data URL and set the img state with the data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState((prevState) => ({
          updatedData: {
            ...prevState.updatedData,
            img: reader.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    } else {
      // Invalid file type, reset the image state
      this.setState((prevState) => ({
        updatedData: {
          ...prevState.updatedData,
          img: "",
        },
      }));
    }
  };

  render() {
    const { isEditing, updatedData } = this.state;
    const { img, name, position, phone, email, stagiairestate } = updatedData;

    let borderStyle = "none";
    let borderColor = "";

    if (stagiairestate === "Accepted") {
      borderStyle = "solid";
      borderColor = "#085a00"; // Green
    } else if (stagiairestate === "Refused") {
      borderStyle = "dashed";
      borderColor = "#860000"; // Red
    }

    return (
      <div className="col-md-3 col-sm-4">
        <div
          className="card"
          style={{
            borderStyle: borderStyle,
            borderColor: borderColor,
            borderWidth: "3px",
          }}
        >
          <div className="card-header">
            {isEditing ? (
              <div>
                <img
                  style={{ maxWidth: "100%", marginBottom: "10px" }}
                  src={img}
                  alt={name}
                />
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  name="img"
                  onChange={this.handleImageUpload}
                  className="form-control"
                />
              </div>
            ) : (
              <img style={{ maxWidth: "100%" }} src={img} alt={name} />
            )}
          </div>

          <div className="card-body">
            {isEditing ? (
              <div>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Position:</label>
                  <input
                    type="text"
                    name="position"
                    value={position}
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State:</label>
                  <select
                    name="stagiairestate"
                    value={stagiairestate}
                    onChange={this.handleChange}
                    className="form-control"
                  >
                    <option value="Waiting">Waiting</option>
                    <option value="Refused">Refused</option>
                    <option value="Accepted">Accepted</option>
                  </select>
                </div>
              </div>
            ) : (
              <div>
                <h2>{name}</h2>
                <h5>{position}</h5>
                <div>{phone}</div>
                <div>{email}</div>
                <div>{stagiairestate}</div>
              </div>
            )}
          </div>
          <div className="card-footer">
            {isEditing ? (
              <button className="btn btn-primary" onClick={this.handleSave}>
                Save
              </button>
            ) : (
              <>
                <button
                  className="btn btn-primary mr-2"
                  onClick={this.handleEdit}
                >
                  <FontAwesomeIcon icon={faPen} /> Edit
                </button>
                <span style={{ marginLeft: "5px" }}></span>
                <button className="btn btn-danger" onClick={this.handleDelete}>
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
