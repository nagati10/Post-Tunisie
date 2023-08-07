//CreateStagiaire.js 0
import React, { Component } from "react";

class CreateStagiaire extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      img: "",
      name: "",
      position: "",
      phone: "",
      email: "",
      stagiairestate: "Waiting",
      feedbackMessage: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleVerification = () => {
    const { id, email } = this.state;

    // Add your verification conditions here
    if (!id || !email) {
      this.setState({
        feedbackMessage: "Please fill in all required fields.",
      });
      return Promise.resolve(false);
    }

    // Check if the ID or Email already exists in the database
    // Send a POST request to the server to verify the uniqueness
    return fetch("http://localhost:3001/verifyStagiaire", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          this.setState({
            feedbackMessage: data.error,
          });
          return false;
        } else {
          this.setState({
            feedbackMessage: "Stagiaire is valid.",
          });
          return true;
        }
      })
      .catch((error) => {
        console.error("Error verifying Stagiaire:", error);
        this.setState({
          feedbackMessage: "Error verifying Stagiaire.",
        });
        return false;
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Verify the input before sending to the server
    this.handleVerification().then((isValid) => {
      if (!isValid) {
        return;
      }

      // Send a POST request to the server to create a new Stagiaire
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("New Stagiaire created:", data);
          // Optionally, you can reset the form after successfully creating the Stagiaire
          this.setState({
            id: "",
            img: "",
            name: "",
            position: "",
            phone: "",
            email: "",
            stagiairestate: "Waiting",
            feedbackMessage: "Stagiaire is added.", // Set feedback message for green alert
          });
        })
        .catch((error) => console.error("Error creating Stagiaire:", error));
    });
  };

  handleQuickTest = () => {
    // Fill all the input boxes with sample data
    this.setState({
      id: 123,
      img: "/images/01.jpg",
      name: "John Doe",
      position: "Software Engineer",
      phone: "+1 123-456-7890",
      email: "johndoe@example.com",
      stagiairestate: "Waitting",
    });
  };

  handleImageUpload = (event) => {
    const file = event.target.files[0];

    // Validate the file type
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      // Read the file as a data URL and set the img state with the data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          img: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      // Invalid file type, reset the image state
      this.setState({
        img: "",
      });
    }
  };

  render() {
    return (
      <div>
        <div className="navbar bg-dark rounded text-white d-flex justify-content-center align-items-center">
          <h2>Create New Stagiaire</h2>
        </div>
        <div className="container">
          {this.state.feedbackMessage && (
            <div
              className={`alert ${
                this.state.feedbackMessage.includes("Error")
                  ? "alert-danger"
                  : "alert-success"
              }`}
            >
              {this.state.feedbackMessage}
            </div>
          )}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Cin:</label>
              <input
                type="number"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
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
                value={this.state.position}
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
                value={this.state.phone}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Img:</label>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                name="img"
                onChange={this.handleImageUpload}
                className="form-control"
              />
              {this.state.img && (
                <img style={{ maxWidth: "100%", marginBottom: "10px" , marginTop: "10px" }} src={this.state.img} alt="Uploaded Preview" />
              )}
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
              <span style={{ marginLeft: "5px" }}></span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.handleQuickTest}
              >
                Quick Test
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateStagiaire;
