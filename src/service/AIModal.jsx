import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GOOGLE_GEMINI_API_KEY,
);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// Get the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

// Start a chat session
export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '{"hotels":[{"hotelName":"Example Hotel","hotelAddress":"123 Main St","price":"$100","hotelImageUrl":"https://example.com/image.jpg","geoCoordinates":{"lat":36.1699,"lng":-115.1398},"rating":4.5,"description":"A nice hotel"}],"itinerary":[{"day":1,"plan":[{"placeName":"Example Place","placeDetails":"Details here","placeImageUrl":"https://example.com/place.jpg","geoCoordinates":{"lat":36.1699,"lng":-115.1398},"ticketPricing":"$20","rating":4.8,"timeToTravel":"2 hours","bestTimeToVisit":"Morning"}]}]}',
        },
      ],
    },
  ],
});
