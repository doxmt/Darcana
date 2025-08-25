import "./TarotGirl.css";
import { getTarotgirlImage } from "../util/get-tarotgirl-image";

type TarotGirlProps = {
  tarotgirlId: number;
};

const TarotGirl = ({ tarotgirlId }: TarotGirlProps) => {
  return (
    <div>
      <img
        className={`TarotGirl TarotGirl${tarotgirlId}`}
        src={getTarotgirlImage(tarotgirlId)}
      />
    </div>
  );
};

export default TarotGirl;
