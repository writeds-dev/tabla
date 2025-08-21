"use client";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import SnackbarAlert from "@/shared/alert";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const FormClient = () => {
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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      franchiseType: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      franchiseType: Yup.string().required("Please select a type"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values) => {
      try {
        setSubmitForm(true);

        const data = {
          name: {
            firstName: values.firstName,
            lastName: values.lastName,
          },
          contact: {
            email: values.email,
            phone: {
              dialCode: 0,
              iso2: "US",
              country: "USA",
              number: values.phone,
            },
          },
          subFields: {
            type: values.franchiseType,
            message: values.message,
            url: currentUrl,
          },
        };

        await fetch("https://api.tablacuisine.com/api/website/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, type: "CONTACT-US" }),
        });

        const goatTokenRes = await fetch(
          "https://api.goatcampaign.com/v1/access-token",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              tenantId: "63cd8baecbab01ef459c147c",
              secretKey: "89e25562-49ff-43e6-960e-e41fab71b8ba",
            }),
          }
        );

        const tokenData = await goatTokenRes.json();
        const token = tokenData?.data?.tenantToken;

        const emailHtml = `
          <p>First Name: ${values.firstName}</p>
          <p>Last Name: ${values.lastName}</p>
          <p>Email: ${values.email}</p>
          <p>Phone: ${values.phone}</p>
          <p>Franchise Type: ${values.franchiseType}</p>
          <p>Message: ${values.message}</p>
          <p>URL: ${currentUrl}</p>
        `;

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        await Promise.all([
          fetch("https://api.goatcampaign.com/v1/mail/send", {
            method: "POST",
            headers,
            body: JSON.stringify({
              from: "info@tablacuisine.com",
              to: "info@tablacuisine.com",
              subject: "Tabla Cuisine - Contact Form Submission",
              html: emailHtml,
            }),
          }),
          fetch("https://api.goatcampaign.com/v1/mail/send", {
            method: "POST",
            headers,
            body: JSON.stringify({
              from: "info@tablacuisine.com",
              to: "sales@tablafranchise.com",
              subject: "Tabla Cuisine - Contact Form Submission",
              html: emailHtml,
            }),
          }),
        ]);

        setShowSnackbar(true);
        formik.resetForm();

        setTimeout(() => {
          setShowSnackbar(false);
          router.push("/thankyou");
        }, 2500);
      } catch (error) {
        console.error("Form submission failed:", error);
      } finally {
        setSubmitForm(false);
      }
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="p-10 sm:p-12 flex flex-col gap-7"
        noValidate
        aria-label="Franchise Contact Form"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Questions? Proposals? We’d love to hear from you. Send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TextField
            id="firstName"
            label="First Name"
            fullWidth
            size="small"
            aria-required="true"
            {...formik.getFieldProps("firstName")}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            id="lastName"
            label="Last Name"
            fullWidth
            size="small"
            aria-required="true"
            {...formik.getFieldProps("lastName")}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            fullWidth
            size="small"
            aria-required="true"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="phone"
            label="Phone"
            type="tel"
            fullWidth
            size="small"
            aria-required="true"
            {...formik.getFieldProps("phone")}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </div>

        <FormControl component="fieldset" className="mt-2">
          <FormLabel
            component="legend"
            className="text-gray-900 font-medium"
            id="franchiseTypeLabel"
          >
            What type of franchise?
          </FormLabel>
          <RadioGroup
            aria-labelledby="franchiseTypeLabel"
            row
            {...formik.getFieldProps("franchiseType")}
            onChange={formik.handleChange}
            value={formik.values.franchiseType}
            name="franchiseType"
          >
            <FormControlLabel
              className="text-black"
              value="Franchise"
              control={<Radio />}
              label="FastCasual"
            />
            <FormControlLabel
              className="text-black"
              value="Partnership"
              control={<Radio />}
              label="FineDining"
            />
          </RadioGroup>
          {formik.touched.franchiseType && formik.errors.franchiseType && (
            <p className="text-sm text-red-600 mt-1" role="alert">
              {formik.errors.franchiseType}
            </p>
          )}
        </FormControl>

        <TextField
          id="message"
          label="Message"
          fullWidth
          multiline
          rows={5}
          size="small"
          aria-required="true"
          {...formik.getFieldProps("message")}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />

        <Button
          disabled={isSubmitForm}
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#7D0C0C",
            px: 5,
            py: 1.8,
            borderRadius: 12,
            fontWeight: "bold",
            color: "#fff",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#580808",
            },
          }}
          aria-label="Send contact message"
        >
          {isSubmitForm ? "Submitting..." : "Send Message"}
        </Button>
      </form>

      {showSnackbar && <SnackbarAlert message="Message sent successfully!" />}
    </>
  );
};

export default FormClient;
