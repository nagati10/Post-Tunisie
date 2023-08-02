// App.js
import React, { Component } from "react";
import CreateStagiaire from "./CreateStagiaire";
import StagiaireList from "./Stagiaire_List";
import Accueil from "./Accueil";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarOpen: false,
      currentView: localStorage.getItem("currentView") || "accueil",
    };
    this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleSidebarToggle() {
    this.setState((prevState) => ({
      sidebarOpen: !prevState.sidebarOpen,
    }));
  }

  handleViewChange(view) {
    this.setState({
      currentView: view,
    });
    localStorage.setItem("currentView", view); // Save the current view in local storage
  }

  render() {
    const { sidebarOpen, currentView } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className={`bg-warning p-0 col-md-2 sidebar ${
              sidebarOpen ? "open" : ""
            }`}
          >
            <div className="d-flex flex-column h-100">
              <div className="menu-icon" onClick={this.handleSidebarToggle}>
                <div className={`bar ${sidebarOpen ? "open" : ""}`}></div>
                <div className={`bar ${sidebarOpen ? "open" : ""}`}></div>
                <div className={`bar ${sidebarOpen ? "open" : ""}`}></div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ maxWidth: "40%" ,marginTop:"5px"}}
                  src={"/images/PostLogo.png"}
                  alt={"test"}
                />
              </div>
              <div className="sidebar-links">
                <a
                  href="#"
                  onClick={() => this.handleViewChange("accueil")}
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/Home.ico"}
                    alt={"test"}
                    className="icon"
                  />
                  Accueil
                </a>
                <a
                  href="#"
                  onClick={() => this.handleViewChange("NewStagiaire")}
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/New.ico"}
                    alt={"test"}
                    className="icon"
                  />
                  Add Stagiaire
                </a>
                <a
                  href="#"
                  onClick={() => this.handleViewChange("stagiere")}
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/Stag_DB.ico"}
                    alt={"test"}
                    className="icon"
                  />
                  Stagieretna
                </a>
                <a
                  href="https://www.poste.tn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/PostLogo.png"}
                    alt={"test"}
                    className="icon"
                  />
                  Poste Officiel
                </a>
                <a
                  href="https://www.facebook.com/TunisianPost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/Fb.png"}
                    alt={"test"}
                    className="icon"
                  />
                  Facebook
                </a>
                <a
                  href="https://twitter.com/Poste_Tn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/Twitter.ico"}
                    alt={"test"}
                    className="icon"
                  />
                  Twitter
                </a>
                <a
                  href="https://www.youtube.com/@LaPosteTunisienne2021"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/images/Youtube.ico"}
                    alt={"test"}
                    className="icon"
                  />
                  Youtube
                </a>
                {/* Add more links here */}
              </div>
            </div>
          </div>

          <div
            className={`main-content col-md-${sidebarOpen ? "10" : "12"} ${
              sidebarOpen ? "content-open" : ""
            }`}
          >
            <div className="menu-icon" onClick={this.handleSidebarToggle}>
              <div className={`bar ${sidebarOpen ? "open" : ""}`}></div>
              <div className={`bar ${sidebarOpen ? "open" : ""}`}></div>
              <div className={`bar ${sidebarOpen ? "open" : ""}`}></div>
            </div>
            {sidebarOpen && <div></div>}
            {currentView === "accueil" && <Accueil />}
            {currentView === "NewStagiaire" && <CreateStagiaire />}
            {currentView === "stagiere" && <StagiaireList />}
          </div>
        </div>
        
      </div> 
    );
  }
}

export default App;
