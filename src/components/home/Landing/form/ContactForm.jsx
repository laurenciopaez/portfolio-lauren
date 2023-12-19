import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "react-bootstrap/Button";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgwwroe");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [messageLengthError, setMessageLengthError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (e.target.message.value.trim().split(/\s+/).length < 20) {
      setMessageLengthError(true);
      return;
    }


    const result = await handleSubmit();

    if (result.ok) {
      // Successful submission
      setSubmissionStatus("success");
    } else {
      // Error during submission
      setSubmissionStatus("error");
    }
  };

  if (submissionStatus === "success") {
    return <p>Thanks! Your form has been submitted successfully.</p>;
  }

  if (submissionStatus === "error") {
    return <p>Oops! There was an error submitting the form. Please try again.</p>;
  }


  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col"
      acceptCharset="utf-8" // Use camelCase for JSX attribute names
      method="post"
    >
      <label htmlFor="full-name">Full Name</label>
      <input
        type="text"
        name="name"
        id="full-name"
        placeholder="First and Last"
        required
        className="m-1 p-1 text-black"
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="@.."
        required
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        className="m-1 p-1 text-black"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Proposal"
        className="m-1 p-1 text-black"
        style={{ resize: "none" }}
        required
      />
      {messageLengthError && (
        <p className="ml-2 text-lg font-semibold">
        The message must be 20 words min</p>
      )}
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <Button
        variant="primary"
        type="submit"
        disabled={state.submitting}
        className="w-1/2 bg-black m-auto mt-3"
      >
        Send
      </Button>
    </form>
  );
}

export default ContactForm;
