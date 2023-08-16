import './DashboardHeader.css';

function DashboardHeader() {
    return (
      <header className="dashboard-header">
        <div className="logo">
          <h1>REQRES.IN API</h1>
          </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button className="search-button">
            <i className="fa fa-search"></i> { }
          </button>
        </div>
      </header>
    );
  }
  export default  DashboardHeader