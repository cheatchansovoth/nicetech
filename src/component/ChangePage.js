import React from "react";
import { useNavigate } from "react-router-dom";

export function ChangePage(route) {
  const navigate = useNavigate();
  navigate(route);
}
