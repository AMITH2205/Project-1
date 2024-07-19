import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className='row1'>
      <div className="row pt-1 px-4 shadow-sm">
        <div className="col-lg-12 d-flex justify-content-between align-items-center">
          <b>Sports Edge</b>
          <div className="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav bi bi-bell navbar-icon" viewBox="0 0 16 16"> {/* Notification icon */}
              <path d="M8 16a1.5 1.5 0 0 1-1.5-1.5h3A1.5 1.5 0 0 1 8 16zm6.5-3a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-1z"/>
              <path fillRule="evenodd" d="M8 1a2.5 2.5 0 0 1 2.5 2.5V5h-5V3.5A2.5 2.5 0 0 1 8 1zM3 6v6a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6H3z"/>
            </svg>
            <p className="me-3">Logout</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav bi bi-person-circle navbar-icon" viewBox="0 0 16 16"> {/* Person circle icon */}
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.385 11.315c.867 1.733 2.755 2.685 5.385 2.685s4.518-.952 5.385-2.685A7 7 0 0 0 8 1z"/>
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6.5-3a.5.5 0 0 1 .5.5v1a4.5 4.5 0 0 1-4.5 4.5h-3A4.5 4.5 0 0 1 4 11.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 0 3.5 3.5h3a3.5 3.5 0 0 0 3.5-3.5v-1a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
