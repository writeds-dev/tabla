"use client";

import axios from "axios";
import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PhoneNumberUtil } from "google-libphonenumber";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SnackbarAlert from "./alert";

const phoneUtil = PhoneNumberUtil.getInstance();

export default function Form() {
  const router = useRouter();

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isSubmitForm, setSubmitForm] = useState(false);

  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  useEffect(() => {
    // This runs only on the client
    const url = sessionStorage.getItem('initial_url');
    setCurrentUrl(url);
  }, []);


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      restaurantManagementExperience: "",
      fundsAvailable: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .test("is-valid-phone", "Invalid phone number", (value) => {
          if (!value) return false;
          try {
            const parsedNumber = phoneUtil.parseAndKeepRawInput(value, "US");
            return phoneUtil.isValidNumber(parsedNumber);
          } catch (error) {
            console.log(error, "This is error ...");
            return false;
          }
        }),
      location: Yup.string().required("Location is required"),
      restaurantManagementExperience: Yup.string().required(
        "Restaurant field Experience is required"
      ),
      fundsAvailable: Yup.string().required("Funds field is required"),
    }),
    onSubmit: async (values, form) => {
      try {
        setSubmitForm(true);

        const data = {
          name: { firstName: values.name },
          contact: {
            email: values.email,
            phone: {
              dialCode: 0,
              iso2: "string",
              country: "string",
              number: values.phone,
            },
          },
          subFields: {
            address: values.location,
            restaurantManagementExperience:
              values.restaurantManagementExperience,
            fundsAvailable: values.fundsAvailable,
            url: currentUrl || "https://www.tablafranchise.com",
          },
        };

        await axios.post("https://api.tablacuisine.com/api/website/query", {
          ...data,
          type: "FRANCHISE-SIGNUP",
        });

        const goatResponse = await axios.post(
          "https://api.goatcampaign.com/v1/access-token",
          {
            tenantId: "63cd8baecbab01ef459c147c",
            secretKey: "89e25562-49ff-43e6-960e-e41fab71b8ba",
          }
        );

        const token = goatResponse.data?.["data"]?.["tenantToken"];

        const response = await axios.post(
          "https://api.goatcampaign.com/v1/mail/send",
          {
            from: "info@tablacuisine.com",
            to: "info@tablacuisine.com",
            subject: "Tabla Cuisine - franchise Form",
            html: `
              </br></br>
              <p>Name: ${values?.name}</p></br>
              <p>Email ID: ${values?.email}</p></br>
              <p>Phone Number: ${values?.phone}</p></br>
              <p>Location: ${values?.location}</p></br>
              <p>Restaurant Magement Experience: ${values?.restaurantManagementExperience}</p></br>
              <p>Funds Available: ${values?.fundsAvailable}</p></br>
              <p>URL: ${currentUrl}</p></br>
            `,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        await axios.post(
          "https://api.goatcampaign.com/v1/mail/send",
          {
            from: "info@tablacuisine.com",
            to: "sales@tablafranchise.com",
            subject: "Tabla Cuisine - franchise Form",
            html: `
              </br></br>
              <p>Name: ${values?.name}</p></br>
              <p>Email ID: ${values?.email}</p></br>
              <p>Phone Number: ${values?.phone}</p></br>
              <p>Location: ${values?.location}</p></br>
              <p>Restaurant Magement Experience: ${values?.restaurantManagementExperience}</p></br>
              <p>Funds Available: ${values?.fundsAvailable}</p></br>
              <p>URL: ${currentUrl}</p></br>
            `,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response) {
          setShowSnackbar(true);
          form.resetForm();
        }

        setSubmitForm(false);

        router.push("/thankyou");
      } catch (error) {
        console.log(error, "This is error");
        setSubmitForm(false);
      }
    },
  });

  return (
    <div
      className="form-area min text-black h-full" id="home-form"
      style={{ maxWidth: "100%", overflowX: "hidden" }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            // maxWidth: 430,
            width: "100%",
            height: "100%",
            mx: "auto",
            p: 3,
            borderRadius: 3,
            backgroundColor: "#fff",
            boxShadow: 3,
            color: "black",
          }}
        >
          <div>
            <h2
              style={{
                color: "#9B1B1B",
                fontWeight: "700",
                fontSize: "25px",
                textTransform: "uppercase",
                textAlign: "center",
                letterSpacing: "0.08em",
                marginBottom: 12,
              }}
            >
              Take the first step
            </h2>
            <div
              style={{
                width: 60,
                height: 3,
                backgroundColor: "#9B1B1B",
                margin: "0 auto 20px auto",
                borderRadius: 1,
              }}
            ></div>
          </div>

          {/* Responsive two-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("name")}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              size="small"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              size="small"
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("phone")}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              size="small"
            />
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("location")}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
              size="small"
            />
          </div>

          {/* Full width selects with smaller spacing */}
          <div className="grid grid-cols-1 gap-4 mt-3">
            <FormControl fullWidth size="small">
              <InputLabel 
  id="funds-label" 
  style={{ color: 'rgb(64, 64, 64)' }} // Darker text color for better contrast
>
 Do You have Restaurant Management Experience?
</InputLabel>
              <Select
                labelId="restaurant-exp-label"
                id="restaurant-exp-select"
                label="Do You have Restaurant Management Experience?"
                {...formik.getFieldProps("restaurantManagementExperience")}
                onChange={formik.handleChange}
                error={
                  formik.touched.restaurantManagementExperience &&
                  Boolean(formik.errors.restaurantManagementExperience)
                }
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
            <InputLabel 
  id="funds-label" 
  style={{ color: 'rgb(64, 64, 64)' }} // Darker text color for better contrast
>
  Funds available for investment
</InputLabel>

              <Select
                labelId="funds-label"
                id="funds-select"
                label="Funds available for investment"
                {...formik.getFieldProps("fundsAvailable")}
                onChange={formik.handleChange}
                error={
                  formik.touched.fundsAvailable &&
                  Boolean(formik.errors.fundsAvailable)
                }
              >
                <MenuItem value="$25,000">Liquidity: $25,000</MenuItem>
                <MenuItem value="$50,000">Liquidity: $50,000</MenuItem>
                <MenuItem value="$100,000+">Liquidity: $100,000+</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button
            disabled={isSubmitForm}
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#9B1B1B",
              borderRadius: 4,
              height: 48,
              fontWeight: "bold",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#7a1515",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </LocalizationProvider>

      {showSnackbar && <SnackbarAlert message="Query Sent Successfully!" />}
    </div>
  );
}
