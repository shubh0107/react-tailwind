const TextInput = ({label, ...restProps}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={restProps.name} className="text-gray-800 font-semibold mb-2">{label}</label>
      <input type="text" className="border-2 rounded focus:border-blue-600 px-2 py-3" {...restProps} />
    </div>
  )
}


export default TextInput;