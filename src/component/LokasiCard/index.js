import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { TbBuildingCommunity } from "react-icons/tb";

export default function LokasiCard() {
  return (
    <div className="w-full h-full rounded-xl">
      <Card className="h-full">
        <CardBody className="h-full flex flex-col p-8">
          <div className="w-full flex justify-between">
            <Typography variant="h5" className="mb-2 px-1 text-black-300">
              Lokasi
            </Typography>
            <Typography
              variant="small"
              className="mb-2 px-1 text-green-300 font"
            >
              Lihat semua
            </Typography>
          </div>
          <div className="h-full flex flex-row justify-between w-full gap-8 pt-8">
            <Card className="w-full bg-green-400  px-8">
              <div className="flex flex-row justify-between items-center w-full h-full">
                <TbBuildingCommunity size={80} color="white" />
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="h4" className="mb-2 px-1" color="white">
                    20
                  </Typography>
                  <Typography
                    variant="small"
                    className="mb-2 px-1"
                    color="white"
                  >
                    Induk
                  </Typography>
                </div>
              </div>
            </Card>
            <Card className="w-full bg-green-300  px-8">
              <div className="flex flex-row justify-between items-center w-full h-full">
                <TbBuildingCommunity size={80} color="white" />
                <div className="flex flex-col justify-center items-end">
                  <Typography variant="h4" className="mb-2 px-1" color="white">
                    3
                  </Typography>
                  <Typography
                    variant="small"
                    className="mb-2 px-1"
                    color="white"
                  >
                    Sublokasi level 1
                  </Typography>
                </div>
              </div>
            </Card>
            <Card className="w-full bg-green-200  px-8">
              <div className="flex flex-row justify-between items-center w-full h-full">
                <TbBuildingCommunity size={80} color="white" />
                <div className="flex flex-col justify-center items-end">
                  <Typography variant="h4" className="mb-2 px-1" color="white">
                    1
                  </Typography>
                  <Typography
                    variant="small"
                    className="mb-2 px-1"
                    color="white"
                  >
                    Sublokasi level 2
                  </Typography>
                </div>
              </div>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
