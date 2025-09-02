import "./Button.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
  isActive?: boolean;
};

const Button = ({ text, onClick, isActive }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`Button ${isActive ? "active" : ""}`}>
      {text}
    </button>
  );
};

export default Button;
