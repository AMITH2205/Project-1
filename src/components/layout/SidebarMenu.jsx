import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Create a separate CSS file for styling

function SidebarMenucomp() {
    const [activeIndex, setActiveIndex] = useState(null);

    const menuItems = [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="side bi bi-speedometer2" viewBox="0 0 16 16" text="Dashboard">
                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                    <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3" />           
                </svg>,
            tooltip: 'View Dashboard',
            to: '/home' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className=" side bi bi-ticket-perforated-fill" viewBox="0 0 16 16">
                    <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z" />
                </svg>,
            tooltip: 'Manage Memberships',
            to: '/user' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="side bi bi-calendar2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M.5 2a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5zM0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v10a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 1 0 13.5v-10zm8-2h4a.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .5-.5z" />
                </svg>,
            tooltip: 'View Calendar',
            to: '/calendar' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="side bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm11.5 5a3.5 3.5 0 0 1-2.877-1.464 2.5 2.5 0 0 0-3.246 0A3.5 3.5 0 1 1 2.5 5a5.5 5.5 0 0 1 11 0zm-7.5-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm6-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM3.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                </svg>,
            tooltip: 'Manage Teams',
            to: '/team' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="side bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                </svg>,
            to: '/users' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="side bi bi-wallet2" viewBox="0 0 16 16">
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                </svg>,
            tooltip: 'View Payments',
            to: '/payment' },
    ];

    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="col col-md-1 col-lg-1 border-end p-3 h-100 shadow-sm">
            <div className="d-none d-lg-block text-start">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className={`menu-item ${activeIndex === index ? 'active' : ''}`}
                        title={item.tooltip}
                        onClick={() => handleMenuItemClick(index)}>
                            {item.icon}<br/><span>{item.text}</span>
                    </Link>
                ))}
            </div>
            <div className="d-lg-none text-center"></div>
        </div>
    );
}

export default SidebarMenucomp;
