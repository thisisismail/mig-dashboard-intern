import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function RelasiCard() {
  return (
    <div className="h-full">
      <Card className="h-full ">
        <CardBody className="h-full">
          <Typography variant="h5" className="mb-2 px-1 text-black-300">
            Relasi
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
