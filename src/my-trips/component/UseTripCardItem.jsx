import React, { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { Link } from "react-router-dom";

const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

function UseTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    try {
      const result = await GetPlaceDetails(data);
      const photoName = result.data.places[0]?.photos[3]?.name;
      if (photoName) {
        const photoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
        setPhotoUrl(photoUrl);
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
    }
  };

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl || "/placeholder.jpg"}
          className="object-cover rounded-xl h-[220px] w-full"
        />
        <div className="mt-2">
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-2 mt-2">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs">
              📅 {trip?.userSelection?.noOfDays} Day(s)
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs">
              💸 {trip?.userSelection?.budget} Budget
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UseTripCardItem;
