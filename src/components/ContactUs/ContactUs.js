import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const ContactUs = () => {
  return (
    <div className="bg-[#fff] min-h-screen flex items-center justify-center">
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="bg-[#000066] p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Contact Us - Coming Soon
          </h1>
          <p className="text-lg mb-4 text-white">
            We're currently working on improving our contact options.
          </p>
          <p className="text-gray-100 text-[11px]">
            For inquiries, please email us at{" "}
            <a href="mailto:enquiries@hust.edu.ng">enquiries@hust.edu.ng</a>. We
            will get back to you shortly.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
