const Button = ({ onClick, children }) => {
    return (
      <button
        onClick={onClick}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {children}
      </button>
    );
  };
  
  export default Button;