import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const PublicInformationPage = () => {
  return (
    <div className="bg-[#fff] min-h-screen flex items-center justify-center">
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="bg-[#000066] p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Public Policies - Coming Soon
          </h1>
          <p className="text-lg mb-4 text-white">
            We're currently working on making our public policies available.
          </p>
          <p className="text-gray-100 text-[11px]">
            Stay tuned for updates. Our public policies will be published soon.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PublicInformationPage;
