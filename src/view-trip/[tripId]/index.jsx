import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "@/service/firebaseConfig";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";

function Viewtrip() {
  const { tripId } = useParams();

  const [trip, setTrip] = useState([]);

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  /*  Get Trip Data from Firestore */
  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast("No trip found!");
    }
  };
  return (
    <div className="w-full sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      {/* Information Section */}
      <InfoSection trip={trip} />
      {/*Recommended Hotels*/}
      <Hotels trip={trip} />
      {/*Itinerary Section*/}
      <PlacesToVisit trip={trip} />
    </div>
  );
}

export default Viewtrip;
