import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from '../Manage/Dashboard/Dashboard';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

<Route path="/Dashboard" element={<Dashboard />} />
    

        <Route
          path="/Earnings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Earnings
            </div>
          }
        />
        <Route
          path="/Analytics"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Analytics
            </div>
          }
        />


        <Route
          path="/Profile"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Profile
            </div>
          }
        />


<Route
          path="/Contracts"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Contracts
            </div>
          }
        />

<Route
          path="/Opportunities"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Opportunities
            </div>
          }
        />




        <Route
          path="/settings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Settings
            </div>
          }
        />
        <Route
          path="/Support"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
             Help & Support
            </div>
          }
        />

           </Routes>
    </>
  );
};

export default MainRouter;
