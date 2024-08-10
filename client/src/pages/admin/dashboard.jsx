import React from "react";
import { Box } from "@mui/material";
import AdminFilterSection from "../../components/admin/filterSection";

const Dashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminFilterSection />
      </Box>
    </>
  );
};

export default Dashboard;
