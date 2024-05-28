import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import "tailwindcss/tailwind.css";
import Title from "../general/Title";
import { useApiGlobalContext } from "../../utils/apiContext";

const AdmissionPage = () => {
  const { sendMessage, loading } = useApiGlobalContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      program: "",
      scheduleCall: false,
      callTime: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      dateOfBirth: Yup.date().required("Date of Birth is required"),
      gender: Yup.string().required("Gender is required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      program: Yup.string().required("Program selection is required"),
      callTime: Yup.string().when("scheduleCall", {
        is: (value) => value === true,
        then: (schema) => schema.required("Call time is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    }),
    onSubmit: (values) => {
      completeForm(values);
    },
  });

  const completeForm = (values) => {
    sendMessage(values, formik);
  };

  return (
    <Box
      className=" py-10 bg-[#f1f1f1]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Admission is Now Open" subtitle="Apply Now" />
        <div>
          <p className="text-[17px]" style={{ fontFamily: "Raleway" }}>
            Application Deadline Application is Open from 3rd June to 25th July
            Contact the admissions office for the information.
            admissions@bst.com Start Date 2024/2025 Cohort begins 5th August,
            2024
          </p>

          <div className="sm:w-[60%] w-full mt-5 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Admission Form</h2>
            <form
              onSubmit={formik.handleSubmit}
              className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              <TextField
                fullWidth
                size="small"
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                fullWidth
                size="small"
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <TextField
                fullWidth
                size="small"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                size="small"
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
              <TextField
                fullWidth
                size="small"
                id="dateOfBirth"
                name="dateOfBirth"
                label="Date of Birth"
                type="date"
                value={formik.values.dateOfBirth}
                onChange={formik.handleChange}
                error={
                  formik.touched.dateOfBirth &&
                  Boolean(formik.errors.dateOfBirth)
                }
                helperText={
                  formik.touched.dateOfBirth && formik.errors.dateOfBirth
                }
                InputLabelProps={{ shrink: true }}
              />
              <FormControl
                fullWidth
                size="small"
                error={formik.touched.gender && Boolean(formik.errors.gender)}>
                <InputLabel>Gender</InputLabel>
                <Select
                  id="gender"
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  label="Gender">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {formik.touched.gender && formik.errors.gender && (
                  <p className="text-red-600 text-sm">{formik.errors.gender}</p>
                )}
              </FormControl>
              <TextField
                fullWidth
                size="small"
                id="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
              <TextField
                fullWidth
                size="small"
                id="city"
                name="city"
                label="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
              <TextField
                fullWidth
                size="small"
                id="state"
                name="state"
                label="State"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
              />
              <FormControl
                fullWidth
                size="small"
                error={
                  formik.touched.program && Boolean(formik.errors.program)
                }>
                <InputLabel>Program</InputLabel>
                <Select
                  id="program"
                  name="program"
                  value={formik.values.program}
                  onChange={formik.handleChange}
                  label="Program">
                  <MenuItem value="">
                    <em>Select Program</em>
                  </MenuItem>
                  <MenuItem value="cyberSecurity">Cyber Security</MenuItem>
                  <MenuItem value="softwareEngineering">
                    Software Engineering
                  </MenuItem>
                  <MenuItem value="dataScience">Data Science</MenuItem>
                </Select>
                {formik.touched.program && formik.errors.program && (
                  <p className="text-red-600 text-sm">
                    {formik.errors.program}
                  </p>
                )}
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    id="scheduleCall"
                    name="scheduleCall"
                    checked={formik.values.scheduleCall}
                    onChange={formik.handleChange}
                  />
                }
                label="Schedule a call with us?"
              />
              {formik.values.scheduleCall && (
                <FormControl
                  fullWidth
                  size="small"
                  error={
                    formik.touched.callTime && Boolean(formik.errors.callTime)
                  }>
                  <InputLabel>Preferred Call Time</InputLabel>
                  <Select
                    id="callTime"
                    name="callTime"
                    value={formik.values.callTime}
                    onChange={formik.handleChange}
                    label="Preferred Call Time">
                    <MenuItem value="">
                      <em>Select Time</em>
                    </MenuItem>
                    <MenuItem value="morning">Morning</MenuItem>
                    <MenuItem value="afternoon">Afternoon</MenuItem>
                    <MenuItem value="evening">Evening</MenuItem>
                  </Select>
                  {formik.touched.callTime && formik.errors.callTime && (
                    <p className="text-red-600 text-sm">
                      {formik.errors.callTime}
                    </p>
                  )}
                </FormControl>
              )}
            </form>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              disabled={loading}
              onClick={formik.handleSubmit}
              sx={{ bgcolor: "#000066", width: "50%", marginTop: 5 }}>
              {loading ? "please wait..." : "Submit"}
            </Button>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default AdmissionPage;
