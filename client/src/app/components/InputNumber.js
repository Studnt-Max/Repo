const InputNumber = ({ value, onChange, placeholder }) => {
    return (
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  };
  
  export default InputNumber;