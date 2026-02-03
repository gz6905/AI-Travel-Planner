import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-5 md:px-56 gap-9">
      <h1 className="font-extrabold text-[40px] md:text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI ✨
        </span>
        <br />
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-lg md:text-xl text-gray-500 text-center max-w-3xl">
        Stop spending hours researching! 🚀 Your personal AI trip planner
        creates custom itineraries tailored to your interests, budget, and
        travel style in seconds.
      </p>

      <Link to={"/create-trip"}>
        <Button className="text-lg px-8 py-6">
          Get Started - It's Free! 🎉
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-4xl">
        <div className="text-center p-4">
          <div className="text-4xl mb-3">🤖</div>
          <h3 className="font-bold text-lg mb-2">AI-Powered Planning</h3>
          <p className="text-sm text-gray-600">
            Gemini AI creates intelligent itineraries based on your preferences
          </p>
        </div>
        <div className="text-center p-4">
          <div className="text-4xl mb-3">🏨</div>
          <h3 className="font-bold text-lg mb-2">Smart Recommendations</h3>
          <p className="text-sm text-gray-600">
            Get hotel suggestions and daily activities with real photos
          </p>
        </div>
        <div className="text-center p-4">
          <div className="text-4xl mb-3">💾</div>
          <h3 className="font-bold text-lg mb-2">Save & Revisit</h3>
          <p className="text-sm text-gray-600">
            Access all your trips anytime, anywhere with cloud storage
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
