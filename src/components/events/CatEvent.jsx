import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatEvent = ({ data, pageName }) => {
  return (
    <div className="catEvents">
      <h2>Events in {pageName}</h2>
      <div className="content">
        {data.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.city}/${event.id}`}
            passHref
            className="card"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={300}
            ></Image>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
