import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BiHome, BiBox, BiLayer, BiCommand } from "react-icons/bi";
import { RiCoupon3Line } from "react-icons/ri";
import { TbCheckupList } from "react-icons/tb";
import { MdOutlineGroup } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { FaSearchDollar } from "react-icons/fa";

import "./style/NavBar.css";
import {
  Navbar,
  Typography,
  Button,
  Tabs,
  Tab,
  TabsHeader,
  TabPanel,
  TabsBody,
} from "@material-tailwind/react";

export default function NavBar() {
  const size = 24;
  const data = [
    {
      label: <BiHome size={size} />,
      value: "home",
    },
    {
      label: <RiCoupon3Line size={size} />,
      value: "coupon",
    },

    {
      label: <TbCheckupList size={size} />,
      value: "checklist",
    },

    {
      label: <BiBox size={size} />,
      value: "folder",
    },

    {
      label: <HiOutlineOfficeBuilding size={size} />,
      value: "office",
    },

    {
      label: <MdOutlineGroup size={size} />,
      value: "customers",
    },

    {
      label: <BiLayer size={size} />,
      value: "layers",
    },

    {
      label: <BsBox size={size} />,
      value: "box",
    },

    {
      label: <BiCommand size={size} />,
      value: "command",
    },

    {
      label: <FaSearchDollar size={size} />,
      value: "searchDolar",
    },
  ];

  return (
    <div className="navbar-container">
      <div className="h-full w-min">
        <Tabs value="html" className="flex flex-row h-full rounded-xl">
          <TabsHeader className="flex flex-col justify-around h-full rounded-xl">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="h-min">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          {/* <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody> */}
        </Tabs>
      </div>
    </div>
  );
}
