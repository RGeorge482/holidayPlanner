import { Fragment } from "react";
import Head from "next/head";
import {MongoClient, ObjectId} from 'mongodb'

import LocationDetail from '../../components/locations/LocationDetail';

function LocationDetails(props) {
  return (
    <Fragment>
       <Head>
      <title>{props.locationData.title}</title>
      <meta name='Description' content={props.locationData.description} />
    </Head>
    <LocationDetail
      image={props.locationData.image}
      title={props.locationData.title}
      address={props.locationData.address}
      description={props.locationData.description}
    />
    </Fragment>
  );
}

export async function getStaticPaths() {

  const client = await MongoClient.connect(
   
  );

  const db = client.db();

  const locationsCollection = db.collection("locations");

  const locations = await locationsCollection.find({}, { _id: 1 }).toArray();

  client.close();


  return {
    fallback: 'blocking',
    paths: locations.map((location) => ({
      params: { locationId: location._id.toString() },
    })),
  }; 
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const locationId = context.params.locationId;

  const client = await MongoClient.connect(
    "mongodb+srv://geo:geomongo351@cluster0.gzpjq.mongodb.net/locations?retryWrites=true&w=majority"
  );

  const db = client.db();

  const locationsCollection = db.collection("locations");

  const selectedLocation = await locationsCollection.findOne({
    _id: ObjectId(locationId),
  });


  client.close();

  return {
    props: {
      locationData: {
        id: selectedLocation._id.toString(),
        title: selectedLocation.title,
        address: selectedLocation.address,
        image: selectedLocation.image,
        description: selectedLocation.description,
      },
    },
  };
}

export default LocationDetails;
