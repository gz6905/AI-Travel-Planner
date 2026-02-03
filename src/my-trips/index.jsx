import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useNavigation } from "react-router-dom";
import UserTripCardItem from "./component/UseTripCardItem";

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  useEffect(() => {
    GetUserTrips();
  }, []);
  const GetUserTrips = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigation("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", JSON.parse(user).email),
    );

    setUserTrips([]);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  return (
    <div className="p-10 md:px-20 lg:px-36 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl mb-10">My Trips</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {userTrips.map((trip, index) => (
          <UserTripCardItem key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default MyTrips;
