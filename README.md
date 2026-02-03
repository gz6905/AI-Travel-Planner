# AI Travel Planner ✈️

An AI-powered travel planning application that generates personalized trip itineraries using Google's Gemini AI. Simply provide your destination, trip duration, budget, and travel companions, and the app creates a complete travel plan with hotel recommendations and daily activities.

## Features

- **AI-Generated Itineraries**: Powered by Gemini 2.0 Flash model for intelligent trip planning
- **Hotel Recommendations**: Get 4-5 hotel options with prices, ratings, and descriptions
- **Daily Plans**: Detailed day-by-day itinerary with specific attractions, time slots, and ticket pricing
- **Google Places Integration**: Real location photos fetched from Google Places API
- **User Authentication**: Sign in with Google OAuth
- **Trip History**: Save and view all your generated trips
- **Interactive Maps**: Click any location to open in Google Maps

## Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **AI**: Google Gemini API
- **Database**: Firebase Firestore
- **Authentication**: Google OAuth
- **APIs**: Google Places API (New)

## Environment Variables

Create a `.env.local` file with the following keys:

```
VITE_GOOGLE_GEMINI_API_KEY=your_gemini_api_key
VITE_GOOGLE_PLACE_API_KEY=your_places_api_key
VITE_GOOGLE_AUTH_CLIENT_ID=your_oauth_client_id
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

## Installation

```bash
# Install dependencies (use --legacy-peer-deps due to React 19)
npm install --legacy-peer-deps

# Run development server
npm run dev
```

## Note on Deployment

This project is not currently deployed to avoid incurring costs from Google API usage (Gemini AI and Places API). The app is designed for local development and demonstration purposes.
