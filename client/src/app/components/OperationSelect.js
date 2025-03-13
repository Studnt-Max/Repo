const OperationSelect = ({ value, onChange }) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
    );
  };
  
  export default OperationSelect;