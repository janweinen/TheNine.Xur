import Earth from "../../assets/images/Earth.jpg";
import Nessus from "../../assets/images/Nessus.jpg";
import { firestoreRequest } from "../Firebase";

export const getBGImagePath = async location => {
  console.log(location);
  switch (location) {
    case "Nessus":
      return Nessus;
    case "Earth":
      return Earth;
    default:
      return Earth;
  }
};
