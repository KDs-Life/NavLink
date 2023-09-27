import { Routes, Route } from "react-router-dom";

import UserList from "./components/DynamicRouting/UserList";
import Users from "./components/DynamicRouting/Users";

import Welcome from "./components/Navigate/Welcome";
import Goodbye from "./components/Navigate/Goodbye";

import Dashboard from "./components/NestedRoutes/Dashboard";
import Overview from "./components/NestedRoutes/Overview";
import Profile from "./components/NestedRoutes/Profile";
import Settings from "./components/NestedRoutes/Settings";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="goodbye" element={<Goodbye />} />

        {/* NESTED ROUTING */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* DYNAMIC ROUTING */}
        <Route path="users" element={<UserList />}></Route>
        <Route path="users/:userId" element={<Users />} />
      </Routes>
    </>
  );
}
export default App;
