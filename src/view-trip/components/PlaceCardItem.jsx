import React, { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";

const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
    };
    try {
      const result = await GetPlaceDetails(data);
      const photoName = result.data.places[0]?.photos[0]?.name;
      if (photoName) {
        const photoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
        setPhotoUrl(photoUrl);
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
    }
  };

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.placeName)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl || "/placeholder.jpg"}
          className="w-[130px] h-[130px] rounded-xl object-cover"
          alt={place.placeName}
        />
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.placeDetails}</p>
          <div className="flex gap-2 mt-1">
            <span className="text-sm">🕒 {place.timeSlot}</span>
            <span className="text-sm">🎫 {place.ticketPricing}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-sm">⭐ {place.rating}</span>
            {place.travelTime && (
              <span className="text-sm">🚗 {place.travelTime}</span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

export default PlaceCardItem;
