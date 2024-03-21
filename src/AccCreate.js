const Button = ({ children, backgroundColor, color, onClick }) => {
  return (
    <button
      style={{
        backgroundColor,
        color,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;