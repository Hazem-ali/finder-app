import Label from "@/common/label";
import { STATUS_MISSING } from "@/constants/config";
import React from "react";

export default function Status({ status }) {
  return status === STATUS_MISSING ? (
    <Label text={status} bg="bg-yellow-300" textColor="text-black" />
  ) : (
    <Label text={status} bg="bg-green-500" textColor="text-white" />
  );
}
