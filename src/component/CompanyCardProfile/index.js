import React from "react";
import { FaPhoneAlt, FaRegEnvelope, FaGlobe, FaPen } from "react-icons/fa";
import logo from "../../assets/img/mig_logo.png";
import backPhoto from "../../assets/img/background.jpg";

import {
  Card,
  Switch,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CompanyCardProfile() {
  return (
    <div className="h-full flex items-start">
      <Card className="w-80 p-0 rounded-xl">
        <CardBody className="text-center p-0 rounded-xl">
          <div className="pt-8 pb-6 rounded-xl">
            <img
              src={backPhoto}
              alt="company-background"
              className="w-full h-28 mx-auto rounded-t-xl -mt-8"
            ></img>
            <img
              src={logo}
              alt="company-logo"
              className="w-28 h-28 rounded-full mx-auto border-2 border-grey-200 -mt-16"
            ></img>
          </div>
          <Typography variant="h5" className="mb-2 px-1 text-black-300">
            Mitramas Infosys Global
          </Typography>
          <Typography className="text-grey-400">Layanan IT</Typography>
          <Button
            size="sm"
            variant="text"
            color="green"
            className="mt-4 mb-8 text-green-300"
          >
            <div className="flex flex-row items-center">
              {<FaPen size={12} color="green" className="mr-2" /> ?? ""}
              <Typography className="text-green-100" variant="small">
                Sunting profil
              </Typography>
            </div>
          </Button>
          <div className="w-full text-left px-6">
            <div className="mt-1">
              <Typography className="text-grey-400">
                Status perusahaan
              </Typography>
              <div className="flex flex-row justify-between">
                <Typography color="green" className="font-bold">
                  Aktif
                </Typography>
                <Switch defaultChecked color="green" />
              </div>
            </div>
            <div className="mt-1">
              <Typography className="text-grey-400">Singkatan</Typography>
              <div>
                <Typography className="font">MIG</Typography>
              </div>
            </div>
            <div className="mt-1">
              <Typography className="text-grey-400">Alamat</Typography>
              <div>
                <Typography className="font">
                  Jl. Tebet Raya No.44, Jakarta Selatan
                </Typography>
              </div>
            </div>
            <div className="mt-1">
              <Typography className="text-grey-400">
                Penanggung jawab (PIC)
              </Typography>
              <div>
                <Typography className="font">John Doe</Typography>
              </div>
            </div>
            <div className="mt-1">
              <Typography className="text-grey-400">Tanggal PKP</Typography>
              <div>
                <Typography className="font">03 Maret 2021</Typography>
              </div>
            </div>
            <div className="mt-1">
              <Typography className="text-grey-400">Email</Typography>
              <div className="flex flex-row items-center">
                {<FaRegEnvelope size={12} color="green" className="mr-2" /> ??
                  ""}
                <Typography
                  className="underline underline-offset-1"
                  color="green"
                >
                  mig@mitrasolusi.group
                </Typography>
              </div>
            </div>
            <div className="mt-3">
              <Typography className="text-grey-400">Nomor telepon</Typography>
              <div className="flex flex-row items-center">
                {<FaPhoneAlt size={12} color="green" className="mr-2" /> ?? ""}
                <Typography color="green">021-5678-1234</Typography>
              </div>
            </div>
            <div className="mt-3">
              <Typography className="text-grey-400">Website</Typography>
              <div className="flex flex-row items-center">
                {<FaGlobe size={12} color="green" className="mr-2" /> ?? ""}
                <Typography
                  className="underline underline-offset-1"
                  color="green"
                >
                  mitramas.com
                </Typography>
              </div>
            </div>
          </div>
        </CardBody>
        <div className="w-full h-12"></div>
      </Card>
    </div>
  );
}
