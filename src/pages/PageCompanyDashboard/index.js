import React from "react";
import "./style/PageCompanyDashboard.css";
import CompanyCardProfile from "../../component/CompanyCardProfile/index.js";
import NavBar from "../../component/NavBar/index.js";
import HeaderBar from "../../component/HeaderBar/index.js";
import LokasiCard from "../../component/LokasiCard/index.js";
import AktivitasCard from "../../component/AktivitasCard/index.js";

export default function PageCompanyDashboard() {
  // const gridNavbar = () => {
  //   return(
  //     <NavBar/>
  //   )
  // }
  return (
    <div className="page-company-container">
      <div className="">
        <NavBar />
      </div>
      <div className="flex flex-col w-full h-full pl-6 pr-6">
        <div className="w-full block py-2 pt-4">
          <HeaderBar />
        </div>
        <div className="flex flex-row">
          <div className="col-start-1 row-span-3 w-min">
            <CompanyCardProfile />
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-4 pl-4 w-full">
            <div className="col-span-2">
              <LokasiCard />
            </div>
            <div className="bg-red-100">4</div>
            <div className="col-start-2 row-start-2 row-span-2">
              <AktivitasCard />
            </div>
            <div className="bg-red-100">2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
