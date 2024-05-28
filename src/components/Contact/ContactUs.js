import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { useApiGlobalContext } from "../../utils/apiContext";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
import hrImg from "../../assets/hr.jpg";
import { toast } from "react-toastify";

const ContactUs = () => {
  const { sendMessage } = useApiGlobalContext();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    email: "",
    message: "",
  });

  const handleCaptchaVerify = (response) => {
    // Handle CAPTCHA verification response
    if (response) {
      setIsCaptchaVerified(true);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    if (!isCaptchaVerified) {
      toast.error("Please complete the CAPTCHA before submitting the form.", {
        onClose: () => {
          setLoading(false);
        },
      });
      return;
    }

    setTimeout(() => {
      setLoading(false);
      toast.success(
        "You've successfully sent your message, you would be contacted shortly",
        {
          onClose: () => {
            setLoading(false);
          },
        }
      );
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen sm:p-8 p-1">
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={hrImg}
              alt="Contact Us"
              className="w-[70%] m-auto h-auto"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="p-4">
              <Typography variant="h5" color="primary" gutterBottom>
                Contact Us
              </Typography>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    size="small"
                    multiline
                    rows={4}
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="my-5">
                  <ReCAPTCHA
                    style={{ fontSize: "11px" }}
                    sitekey="6LfsTgUpAAAAAMCb8RLm2RhhwryzlEE4ZaQCj4vD"
                    onChange={handleCaptchaVerify}
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#000066", marginTop: "10%" }}
                  fullWidth>
                  {loading ? "Please wait..." : "Submit"}
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContactUs;
