import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Navbar />
    </BrowserRouter>
);

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropdown = (menu) => setDropdown(dropdown === menu ? null : menu);

    return (
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">FinSight</Link>
                <button className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                <ul
                    className={`md:flex space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-blue-600 md:bg-transparent ${menuOpen ? "block" : "hidden"
                        }`}
                >
                    <li>
                        <Link to="/" className="block px-4 py-2">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block px-4 py-2">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block px-4 py-2">Contact</Link>
                    </li>

                    <li
                        className="relative"
                        onMouseEnter={() => toggleDropdown("finances")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button className="px-4 py-2">Finances ▼</button>
                        {dropdown === "finances" && (
                            <ul className="absolute bg-white text-black shadow-lg rounded mt-1">
                                <li>
                                    <Link to="/add-expense" className="block px-4 py-2">Add Expense</Link>
                                </li>
                                <li>
                                    <Link to="/add-income" className="block px-4 py-2">Add Income</Link>
                                </li>
                                <li>
                                    <Link to="/transactions" className="block px-4 py-2">Transaction History</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li
                        className="relative"
                        onMouseEnter={() => toggleDropdown("analytics")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button className="px-4 py-2">Analytics ▼</button>
                        {dropdown === "analytics" && (
                            <ul className="absolute bg-white text-black shadow-lg rounded mt-1">
                                <li>
                                    <Link to="/spending-patterns" className="block px-4 py-2">Spending Patterns</Link>
                                </li>
                                <li>
                                    <Link to="/budget-vs-actual" className="block px-4 py-2">Budget vs Actual</Link>
                                </li>
                                <li>
                                    <Link to="/reports" className="block px-4 py-2">Custom Reports</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li
                        className="relative"
                        onMouseEnter={() => toggleDropdown("budget")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button className="px-4 py-2">Budget ▼</button>
                        {dropdown === "budget" && (
                            <ul className="absolute bg-white text-black shadow-lg rounded mt-1">
                                <li>
                                    <Link to="/monthly-budget" className="block px-4 py-2">Set Monthly Budget</Link>
                                </li>
                                <li>
                                    <Link to="/adjust-budget" className="block px-4 py-2">Adjust Budget</Link>
                                </li>
                                <li>
                                    <Link to="/budget-goals" className="block px-4 py-2">Budget Goals</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li
                        className="relative"
                        onMouseEnter={() => toggleDropdown("account")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button className="px-4 py-2">Account ▼</button>
                        {dropdown === "account" && (
                            <ul className="absolute bg-white text-black shadow-lg rounded mt-1">
                                <li>
                                    <Link to="/profile" className="block px-4 py-2">Profile Settings</Link>
                                </li>
                                <li>
                                    <Link to="/notifications" className="block px-4 py-2">Notifications</Link>
                                </li>
                                <li>
                                    <Link to="/logout" className="block px-4 py-2">Logout</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}