import React, { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";

const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

const Hotels = ({ trip }) => {
  const [photoUrls, setPhotoUrls] = useState({});

  useEffect(() => {
    trip?.tripData?.hotels?.forEach((hotel, index) => {
      GetHotelPhoto(hotel, index);
    });
  }, [trip]);

  const GetHotelPhoto = async (hotel, index) => {
    const data = {
      textQuery: hotel.hotelName + " " + hotel.hotelAddress,
    };
    try {
      const result = await GetPlaceDetails(data);
      const photoName = result.data.places[0]?.photos[0]?.name;
      if (photoName) {
        const photoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
        setPhotoUrls((prev) => ({ ...prev, [index]: photoUrl }));
      }
    } catch (error) {
      console.error("Error fetching hotel photo:", error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {trip.tripData?.hotels?.map((hotel, index) => (
          <a
            key={index}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.hotelName + " " + hotel.hotelAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-all cursor-pointer"
          >
            <img
              src={photoUrls[index] || "/placeholder.jpg"}
              className="rounded-xl h-[180px] w-full object-cover"
            />
            <div className="my-2 flex flex-col gap-1">
              <h2 className="font-medium text-lg">{hotel.hotelName}</h2>
              <h2 className="text-xs text-gray-500">📍 {hotel.hotelAddress}</h2>
              <div className="flex justify-between items-center mt-1">
                <h2 className="text-sm font-medium">
                  💰 {hotel.price} per night
                </h2>
                <h2 className="text-sm">⭐ {hotel.rating}</h2>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                {hotel.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
