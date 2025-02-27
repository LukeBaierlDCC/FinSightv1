import React from 'react';
import ReactDOM from 'react-dom/client';
import FinancesDropdown from './FinancesDropdown';
import AnalyticsDropdown from './AnalyticsDropdown';
import BudgetDropdown from './BudgetDropdown';
import AccountDropdown from './AccountDropdown';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

ReactDOM.createRoot(document.getElementById('finances-dropdown')).render(<FinancesDropdown />);
ReactDOM.createRoot(document.getElementById('analytics-dropdown')).render(<AnalyticsDropdown />);
ReactDOM.createRoot(document.getElementById('budget-dropdown')).render(<BudgetDropdown />);
ReactDOM.createRoot(document.getElementById('account-dropdown')).render(<AccountDropdown />);
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Navbar />
    </BrowserRouter>
);