import React from "react";
import CardItem from "./CardItem";

function App() {
  return (
    <div className="cardList">
      <CardItem
        card={{
          image: "01face.png",
          alt: "01face",
          title: "Mr.Face01",
          blurb: "Something i did while doing something"
        }}
      />
      <CardItem
        card={{
          image: "02face.png",
          alt: "02face",
          title: "Mr.Face02",
          blurb: "Something i did while doing something"
        }}
      />
      <CardItem
        card={{
          image: "03face.png",
          alt: "03face",
          title: "Mr.Face03",
          blurb: "Something i did while doing something"
        }}
      />
      <CardItem
        card={{
          image: "04face.png",
          alt: "04face",
          title: "Mr.Face04",
          blurb: "Something i did while doing something"
        }}
      />
    </div>
  );
}

export default App;
