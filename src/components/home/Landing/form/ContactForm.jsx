import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "react-bootstrap/Button";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgwwroe");
  if (state.succeeded) {
    return <p>Thanks!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col "
      accept-charset="utf-8"
      method="post"
    >
      <label for="full-name">Full Name</label>
      <input
        type="text"
        name="name"
        id="full-name"
        placeholder="First and Last"
        required=""
        className="m-1 p-1"
      ></input>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" placeholder="@.." className="m-1 p-1" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Proposal" className="m-1 p-1" style={{ resize: "none" }} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button
        variant="primary"
        type="submit"
        disabled={state.submitting}
        className=" w-1/2 bg-black m-auto mt-3"
      >
        Send
      </Button>
    </form>
  );
}

export default ContactForm;
