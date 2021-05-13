// our-domain.com/new-location
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import NewLocationForm from "../../components/locations/NewLocationForm";

function NewLocationPage() {
  const router = useRouter();

  async function addLocationHandler(enteredLocationData) {
    const response = await fetch("/api/new-location", {
      method: "POST",
      body: JSON.stringify(enteredLocationData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Destination</title>
        <meta
          name="Description"
          content="Add a new holiday destinations which you want to visit!"
        />
      </Head>
      <NewLocationForm onAddLocation={addLocationHandler} />
    </Fragment>
  );
}

export default NewLocationPage;
