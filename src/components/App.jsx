import React from "react";
import Home from "../components/Home/Home";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./Home/Header/Header.css";
import "./Home/footer/footer.css";
import AdminRoute from "./Auth/AdminRoute";
import userlogin from "./Userlogin/Userlogin";
import AdminDashboard from "./AdminDashboardPages/AdminDashboard";
import UserProfile from "./UserPayment/UserProfile";
import Adminlogin from "./Adminlogin/Adminlogin";
import PageNotFound from "./404Page/PageNotFound";
import Incubateeslist from "./AdminDashboardPages/Incubateeslist/Incubatees";
import Adduser from "./AdminDashboardPages/Incubateeslist/Adduser";
import EditUser from "./AdminDashboardPages/Incubateeslist/EditUser";
import Events from "./AdminDashboardPages/events/Events";
import AddEvent from "./AdminDashboardPages/events/AddEvent";
import DisplayEventList from "./AdminDashboardPages/events/DisplayEventList";
import SingleEvent from "./AdminDashboardPages/events/SingleEvent";
import UpdateEvent from "./AdminDashboardPages/events/UpdateEvent";
import Payment from "./AdminDashboardPages/payment/payment";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/payment" exact component={userlogin} />
        <Route path="/user/dashboard" exact component={UserProfile} />
        <Route path="/login" exact component={Adminlogin} />
        <Route path="/Events" exact component={DisplayEventList} />
        <Route path="/Events/singleEvent/:id" exact component={SingleEvent} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/admin/dashboard/events" exact component={Events} />
        <AdminRoute
          path="/admin/dashboard/incubatees"
          exact
          component={Incubateeslist}
        />
        <AdminRoute
          path="/admin/dashboard/incubatees/Adduser"
          exact
          component={Adduser}
        />
        <AdminRoute
          path="/admin/dashboard/incubatees/user/:id"
          exact
          component={EditUser}
        />
        <AdminRoute
          path="/admin/dashboard/Events/addEvent"
          exact
          component={AddEvent}
        />
        <AdminRoute
          path="/admin/dashboard/Eventslist"
          exact
          component={Events}
        />
        <AdminRoute
          path="/admin/dashboard/updateEvent/:id"
          exact
          component={UpdateEvent}
        />
        <AdminRoute path="/admin/dashboard/payment" exact component={Payment} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
