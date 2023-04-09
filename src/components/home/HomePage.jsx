import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = ({ data }) => {
  return (
    <div className="homeBody">
      {data.map((event) => (
        <Link
          className="card"
          key={event.id}
          href={`/events/${event.id}`}
          passHref
        >
          <div className="homeImage">
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={200}
            ></Image>
          </div>
          <div className="content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
