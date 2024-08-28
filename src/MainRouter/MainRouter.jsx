import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from '../Manage/Dashboard/Dashboard';
import Earning from '../Manage/Earning/Earning';
import NewOppcomp from "../Manage/Opportunities/NewOpportunity/NewoppComp";
import AppliedComp from "../Manage/Opportunities/AppliedComp/AppliedComp";
import CompltedComp from "../Manage/Opportunities/CompletedComp/CompletedComp";
import OngoingComp from "../Manage/Opportunities/OngoingComp/OngoingComp";



const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

<Route path="/Dashboard" element={<Dashboard />} />
    
<Route path="/Opportunities" element={<NewOppcomp />} />

<Route path="/Applied" element={<AppliedComp />} />

<Route path="/Ongoing" element={<OngoingComp />} />
<Route path="/Complete" element={<CompltedComp />} />

        <Route
          path="/Earnings"
          element={<Earning />}
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
