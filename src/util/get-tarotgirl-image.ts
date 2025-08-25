import tarotgirl1 from "../assets/TarotGirl1.png";
import tarotgirl2 from "../assets/TarotGirl2.png";
import tarotgirl3 from "../assets/TarotGirl3.png";

const tarotgirls = [tarotgirl1, tarotgirl2, tarotgirl3];

export function getTarotgirlImage(id: number) {
  return tarotgirls[id - 1];
}
