import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please enter a valid email address");
    }

    try {
      const response = await fetch("/api/emailRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      // if (!response.ok) throw new Error(`ERROR: ${response.status}`);

      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <div className="singleEvent">
      <h2>{data.title}</h2>
      <Image
        src={data.image}
        alt={data.title}
        width={900}
        height={500}
        className="singleEventImage"
      ></Image>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="singleEventForm">
        <label>Register for the Event : </label>
        <input
          ref={inputEmail}
          type="email"
          placeholder="Email-ID"
          id="email"
          name="email"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
