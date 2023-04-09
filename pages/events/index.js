import React from "react";
import EventPage from "@/src/components/events/EventPage";

const events = ({ data }) => {
  return <EventPage data={data} />;
};

export default events;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
