import Dashboard from "views/Dashboard/Dashboard.jsx";
import EmployeeDetails from "views/EmployeeDetails/EmployeeDetails.jsx";
import Account from "views/Account/Account.jsx";
import Payroll from "views/Payroll/Payroll.jsx";
import PaySchedule from "views/PaySchedule/PaySchedule.jsx";
import Taxinfo from "views/Taxinfo/Taxinfo.jsx";
import BankAccount from "views/BankAccount/BankAccount.jsx";
import Compensation from "views/Compensation/Compensation.jsx";
import SetupCompany from "views/SetupCompany/SetupCompany.jsx";
import ReviewPayroll from "views/ReviewPayroll/ReviewPayroll.jsx";
import Confirmation from "views/Confirmation/Confirmation.jsx";
import Employees from "views/Employees/Employees.jsx";
import Error from "views/Error/Error.jsx";

import CreatePayroll from "views/CreatePayroll/CreatePayroll.jsx"



var dashRoutes = [
  {
    path: "/dashboard/:id?",
    name: "Dashboard",
    icon: "ic_dashboard",
    component: Dashboard,
    show:true
  },

  {
    path:"/error",
    name:"Error",
    component:Error,
    show:false

  },
  {
    redirect: true,
    path:"/",
    pathTo:"/dashboard",
    component:Dashboard
  }


];
export default dashRoutes;
