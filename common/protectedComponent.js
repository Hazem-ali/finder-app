"use client";

import auth from "@/services/authService";
import React from "react";

export default function ProtectedComponent({ component, fallback = null }) {
  return (
    <React.Fragment>
      {auth.isAuthenticated() ? component : fallback}
    </React.Fragment>
  );
}
