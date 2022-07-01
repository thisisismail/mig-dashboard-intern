import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function AktivitasCard() {
  return (
    <div className="h-full">
      <Card className="h-full">
        <CardBody className="h-full">
          <Typography variant="h5" className="mb-2 px-1 text-black-300">
            Aktivitas
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
