import Label from "@/common/label";
import { STATUS_FOUND, STATUS_MISSING } from "@/constants/config";
import React from "react";

export default function Status({ status, ...rest }) {
  if (status === STATUS_MISSING || status === STATUS_FOUND) {
    return status === STATUS_MISSING ? (
      <Label
        text={status}
        bg="bg-yellow-300"
        textColor="text-black"
        {...rest}
      />
    ) : (
      <Label text={status} bg="bg-green-500" textColor="text-white" {...rest} />
    );
  }
  return null;
}
