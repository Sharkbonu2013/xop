import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open bg-base-200">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu  text-base-content min-h-full w-full p-4">
                    {/* Sidebar content here */}
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/salary">Salary</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar