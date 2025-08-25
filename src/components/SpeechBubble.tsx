import "./SpeechBubble.css";

type SpeechBubbleProps = {
  text: string;
  children?: React.ReactNode;
};
const SpeechBubble = ({ text, children }: SpeechBubbleProps) => {
  return (
    <div className="SpeechBubble">
      <p className="bubble_text">{text}</p>
      <div>{children}</div>
    </div>
  );
};

export default SpeechBubble;
