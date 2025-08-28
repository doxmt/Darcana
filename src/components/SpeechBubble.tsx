import "./SpeechBubble.css";

type SpeechBubbleProps = {
  text: React.ReactNode;
  children?: React.ReactNode;
  bubbleId: number;
};
const SpeechBubble = ({ text, children, bubbleId }: SpeechBubbleProps) => {
  return (
    <div className={`SpeechBubble SpeechBubble${bubbleId}`}>
      <p className="bubble_text">{text}</p>
      <div>{children}</div>
    </div>
  );
};

export default SpeechBubble;
