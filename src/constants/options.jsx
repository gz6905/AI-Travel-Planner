export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler on an adventure",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "🥂",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun-loving adventurers",
    icon: "🏡",
    people: "3-5",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "⛵",
    people: "5-10",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💎",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location}, for {totalDays} Days for {travelers} with a {budget} budget. Provide the response in the exact JSON format below:\n\n" +
  '{"hotels": [{"hotelName": "Hotel Name", "hotelAddress": "Address", "price": "$100", "hotelImageUrl": "url", "geoCoordinates": {"lat": 0, "lng": 0}, "rating": 4.5, "description": "description"}], ' +
  '"itinerary": [{"day": 1, "plan": [{"placeName": "Place Name", "placeDetails": "Details", "placeImageUrl": "url", "geoCoordinates": {"lat": 0, "lng": 0}, "ticketPricing": "$20", "rating": 4.5, "timeSlot": "9:00 AM - 12:00 PM", "travelTime": "30 mins"}]}]}\n\n' +
  "Provide 4-5 hotel options. For placeName, use specific attraction/landmark names, not activity descriptions. Include time slots in format like '9:00 AM - 12:00 PM' for each place.";
