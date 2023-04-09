import CatEvent from "@/src/components/events/CatEvent";
import React from "react";

const newEvent = ({ data, pageName }) => {
  return <CatEvent data={data} pageName={pageName} />;
};

export default newEvent;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((event) => event.city === id);

  return {
    props: {
      data,
      pageName: id,
    },
  };
}
