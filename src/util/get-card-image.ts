import card00 from "../assets/cards/major/00.png";
import card01 from "../assets/cards/major/01.png";
import card02 from "../assets/cards/major/02.png";
import card03 from "../assets/cards/major/03.png";
import card04 from "../assets/cards/major/04.png";
import card05 from "../assets/cards/major/05.png";
import card06 from "../assets/cards/major/06.png";
import card07 from "../assets/cards/major/07.png";
import card08 from "../assets/cards/major/08.png";
import card09 from "../assets/cards/major/09.png";
import card10 from "../assets/cards/major/10.png";
import card11 from "../assets/cards/major/11.png";
import card12 from "../assets/cards/major/12.png";
import card13 from "../assets/cards/major/13.png";
import card14 from "../assets/cards/major/14.png";
import card15 from "../assets/cards/major/15.png";
import card16 from "../assets/cards/major/16.png";
import card17 from "../assets/cards/major/17.png";
import card18 from "../assets/cards/major/18.png";
import card19 from "../assets/cards/major/19.png";
import card20 from "../assets/cards/major/20.png";
import card21 from "../assets/cards/major/21.png";

const cards = [
  card00,
  card01,
  card02,
  card03,
  card04,
  card05,
  card06,
  card07,
  card08,
  card09,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card21,
];

export function getCardImage(id: number) {
  return cards[id];
}
