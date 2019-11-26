import Earth from "../../assets/images/Earth.jpg";
import Nessus from "../../assets/images/Nessus.jpg";
import Orbit from "../../assets/images/Orbit.jpg";

export const getBGImagePath = async location => {
  switch (location) {
    case "Nessus":
      return Nessus;
    case "Earth":
      return Earth;
    default:
      return Orbit;
  }
};
