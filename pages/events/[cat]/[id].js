import SingleEvent from "@/src/components/events/SingleEvent";
import React from "react";

const newEvent = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default newEvent;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((event) => event.id === id);
  return {
    props: { data: eventData },
  };
}
