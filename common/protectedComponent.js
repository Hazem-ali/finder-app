"use client";

import auth from "@/services/authService";
import React, { useEffect, useState } from "react";

export default function ProtectedComponent({ component, fallback = null }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  useEffect(() => {
    setIsAuthenticated ( auth.isAuthenticated())
  }, []);

  return (
    <React.Fragment>{isAuthenticated ? component : fallback}</React.Fragment>
  );
}
