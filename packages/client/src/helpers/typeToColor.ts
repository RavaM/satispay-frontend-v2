export function typeToColor(type: string): string {
  let color;
  switch (type) {
    case "Fire":
      color = "#f5222d";
      break;
    case "Water":
      color = "#40a9ff";
      break;
    case "Grass":
      color = "#73d13d";
      break;
    case "Poison":
      color = "#135200";
      break;
    case "Bug":
      color = "#bae637";
      break;
    case "Flying":
      color = "#87e8de";
      break;
    case "Electric":
      color = "#fadb14";
      break;
    case "Ground":
      color = "#874d00";
      break;
    case "Fairy":
      color = "#ff85c0";
      break;
    case "Fighting":
      color = "#ad2102";
      break;
    case "Rock":
      color = "#873800";
      break;
    case "Steel":
      color = "#434343";
      break;
    case "Ice":
      color = "#adc6ff";
      break;
    case "Ghost":
      color = "#efdbff";
      break;
    case "Psychic":
      color = "#722ed1";
      break;
    case "Dragon":
      color = "#780650";
      break;
    default:
      color = "#d9d9d9"
  }
  return color;
}