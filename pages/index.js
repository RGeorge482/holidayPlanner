import {Fragment} from 'react'
import Head from 'next/head'
import { MongoClient } from "mongodb";

import LocationList from "../components/locations/LocationList";

function HomePage(props) {
  return (
  <Fragment>
    <Head>
      <title>Holiday Planner</title>
      <meta name='Description' content='Browse a list of holiday destinations which you want to visit!' />
    </Head>
   <LocationList locations={props.locations} />;
  </Fragment>
  )
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://geo:geomongo351@cluster0.gzpjq.mongodb.net/locations?retryWrites=true&w=majority"
  );

  const db = client.db();

  const locationsCollection = db.collection("locations");

  const locations = await locationsCollection.find().toArray();

  client.close();

  return {
    props: {
      locations: locations.map((location) => ({
        title: location.title,
        address: location.address,
        image: location.image,
        id: location._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
