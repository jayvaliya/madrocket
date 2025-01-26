import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
    const handleLogout = (): void => {
        // Remove user data from localStorage and redirect to login
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <div className="h-screen w-64 bg-white shadow-md flex flex-col items-center py-6">
            {/* Logo Section */}
            <div className="flex items-center justify-center w-full mb-6">
                <div className="text-blue-600 font-bold text-3xl">M.</div>
            </div>

            {/* Team Dropdown */}
            <div className="w-full px-4 mb-6">
                <button className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 rounded-md shadow-sm text-gray-700">
                    <div className="flex items-center gap-3">
                        <span className="bg-purple-200 content-center font-bold text-purple-800 h-10 w-10 rounded-full">T</span>
                        <span className="font-semibold">Team 1</span>
                    </div>
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col w-full px-4 space-y-2">
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-2 rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
                >
                    <FiHome className="text-lg" />
                    <span>Students Page</span>
                </Link>
            </nav>

            {/* Logout Button */}
            <div className="mt-auto w-full px-4 text-center">
                <button
                    onClick={handleLogout}
                    className="w-full bg-black text-white py-2 rounded-md text-sm font-medium"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
