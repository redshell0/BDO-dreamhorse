import React from "react";
import Field from "./Field";

const meterials = {
  arduanatt: {
    one: {
      name: "Stonetail Fodder",
      url: "images/stonetailFodder.png",
      point: 1,
    },
    two: {
      name: "Rainbow Gem Fruit",
      url: "images/rainbowGemFruit.png",
      point: 1,
    },
    three: {
      name: "Fruit Of Yianaros",
      url: "images/fruitOfYianaros.png",
      point: 2,
    },
  },
  dine: {
    one: {
      name: "Breezy Conch Seaweed",
      url: "images/breezyConchSeaweed.png",
      point: 1,
    },
    two: {
      name: "Spirit Pouch Of Ferocious Beast",
      url: "images/spiritPouchOfFerociousBeast.png",
      point: 1,
    },
    three: {
      name: "Mysterious Blue Conch",
      url: "images/mysteriousBlueConch.png",
      point: 2,
    },
  },
  doom: {
    one: {
      name: "Pure Forest Breath",
      url: "images/pureForestBreath.png",
      point: 1,
    },
    two: {
      name: "Deep Blue Hoof Root",
      url: "images/deepBlueHoofRoot.png",
      point: 1,
    },
    three: {
      name: "Brilliant Crimson Fire Flower",
      url: "images/brilliantCrimsonFireFlower.png",
      point: 2,
    },
  },
};

const Meterials = () => {
  return (
    <div className="meterials">
      <Field horse={meterials.arduanatt} name="arduanatt" />
      <Field horse={meterials.dine} name="dine" />
      <Field horse={meterials.doom} name="doom" />
    </div>
  );
};

export default Meterials;
