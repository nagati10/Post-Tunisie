//Stagiere_list.js 3
import React, { Component } from "react";
import TeamMember from "./Database";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      searchQuery: "",
      sortOption: "name", // Default sort option is by name
    };
  }

  fetchUpdatedData = () => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ members: data });
      })
      .catch((error) =>
        console.error("Error fetching member information:", error)
      );
  };

  componentDidMount() {
    this.fetchUpdatedData();
  }

  handleSearchChange = (event) => {
    const { value } = event.target;
    this.setState({ searchQuery: value });
  };

  handleSortChange = (event) => {
    const { value } = event.target;
    this.setState({ sortOption: value });
  };

  render() {
    const { members, searchQuery, sortOption } = this.state;
  
    // Filter and sort the members based on searchQuery and sortOption
    const filteredMembers = members.filter((member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Sort the filteredMembers based on sortOption
    filteredMembers.sort((a, b) => {
      const aValue = a[sortOption].toLowerCase();
      const bValue = b[sortOption].toLowerCase();
      return aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
    });
  
    return (
      <div>
      <div className="navbar bg-dark rounded text-white d-flex">
        <div className="container-fluid d-flex justify-content-between ">
          <h2 style={{ marginLeft: "35%" }}>List of Stagiaires</h2>
          {/* Search Bar */}
          <div className="input-group ml-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              value={searchQuery}
              onChange={this.handleSearchChange}
            />
          </div>
        </div>
      </div>
  
        <div className="row">
          <div className="col-md-12">
            {/* Search Bar */}
  
            {/* Sort Options */}
            <div className="form-group">
              <label>Sort By:</label>
              <select
                className="form-control"
                value={sortOption}
                onChange={this.handleSortChange}
              >
                <option value="name">Name</option>
                <option value="position">Position</option>
                <option value="stagiairestate">State</option>
              </select>
            </div>
          </div>
        </div>
  
        <div className="row">
          {filteredMembers.map((member) => (
            <TeamMember
              key={member._id}
              _id={member._id}
              img={member.img}
              name={member.name}
              position={member.position}
              phone={member.phone}
              email={member.email}
              stagiairestate={member.stagiairestate}
              fetchUpdatedData={this.fetchUpdatedData}
            />
          ))}
        </div>
      </div>
    );
  }
  }

export default Team;
