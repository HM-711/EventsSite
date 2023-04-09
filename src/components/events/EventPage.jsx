import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventPage = ({ data }) => {
  return (
    <div className="eventsPage">
      {data.map((event) => (
        <Link
          key={event.id}
          href={`/events/${event.id}`}
          passHref
          className="card"
        >
          <Image
            src={event.image}
            alt={event.title}
            width={400}
            height={400}
          ></Image>
          <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default EventPage;
