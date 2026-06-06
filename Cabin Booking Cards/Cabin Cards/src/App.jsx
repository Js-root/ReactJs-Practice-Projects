import React from "react";
import Card from "./Components/card.jsx";

const App = () => {
  const places = [
    {
      id: 1,
      title: "Santorini Villa",
      description:
        "Luxury villa overlooking the Aegean Sea, offering breathtaking sunset views and a private infinity pool for ultimate relaxation.",
      nights: "3 Night Stay",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Mountain Cabin",
      description:
        "Cozy wooden cabin surrounded by snowy peaks, perfect for a peaceful winter escape and nature retreat.",
      nights: "5 Night Stay",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Beach Bungalow",
      description:
        "Tropical beachfront bungalow with crystal clear waters, palm trees, and stunning ocean views.",
      nights: "2 Night Stay",
      image:
        "https://plus.unsplash.com/premium_photo-1721353413119-230abf059a1c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Forest Retreat",
      description:
        "Hidden forest escape surrounded by greenery, fresh air, and calming natural vibes.",
      nights: "4 Night Stay",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  return (
    <div className="parent">
      {places.map(function (elem) {
        return (
          <Card
            name={elem.title}
            description={elem.description}
            nights={elem.nights}
            image={elem.image}
          />
        );
      })}
    </div>
  );
};

export default App;
