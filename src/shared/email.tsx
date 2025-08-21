import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios, { AxiosError } from 'axios'; // Import axios and AxiosError

export interface SimpleContactFormProps {
  onSuccess?: () => void;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  catalog: string;
  source: string;
}

const SimpleContactForm: React.FC<SimpleContactFormProps> = ({ onSuccess }) => {
  const validationSchema = Yup.object<FormValues>({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: 'Not provided',
    message: 'Not provided',
    catalog: 'tabla franchise',
    source: 'tabla franchise',
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      console.log('Form submitted with:', values);

      // Sending the data to the Gourmet Chefs API
      const response = await axios.post('https://api.gourmetchefsglobal.com/api/forms', values);

      console.log('Form submitted successfully', response.data);
      resetForm();  // Reset the form after submission
      onSuccess?.(); // Call the onSuccess callback after success
    } catch (error: unknown) {
      console.error('Error submitting form', error);
      
      // Type guard to check if error is an instance of AxiosError
      if (error instanceof AxiosError) {
        console.error('Response data:', error.response?.data);
        console.error('Response status:', error.response?.status);
        console.error('Response headers:', error.response?.headers);
      } else if (error instanceof Error) {
        // Handle generic errors (non-Axios errors)
        console.error('Error message:', error.message);
      } else {
        // If the error is something else entirely
        console.error('Unknown error type', error);
      }

      alert('There was an error submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
              <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
              <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            {/* Hidden Fields (phone, message, catalog, source) */}
            <Field id="phone" name="phone" type="hidden" value="Not provided" />
            <Field id="message" name="message" type="hidden" value="Not provided" />
            <Field id="catalog" name="catalog" type="hidden" value="tabla franchise" />
            <Field id="source" name="source" type="hidden" value="tabla franchise" />

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center cursor-pointer py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SimpleContactForm;
