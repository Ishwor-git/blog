import React, { useEffect } from "react";
import { Box } from "@mui/material";
import AdminFilterSection from "../../components/admin/filterSection";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin/login");
    }
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminFilterSection />
      </Box>
    </>
  );
};

export default Dashboard;
