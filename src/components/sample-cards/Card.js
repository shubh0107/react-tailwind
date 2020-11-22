const Card = ({ data, itemIndex, selectedOption, clickHandler, ...restProps }) => {
  const { title, metadata1, metadata2, price } = data;
  return (
    <div className="flex px-4 items-center h-20 max-w-md bg-white border border-solid border-gray-400 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-150" onClick={e => clickHandler(itemIndex)} {...restProps}>
      <input type="radio" name="my-radio" checked={itemIndex === selectedOption} onChange={e => clickHandler(itemIndex)} style={{visibility: "visible"}} />
      <div className="flex flex-col ml-4 w-full">
        <span className="font-semibold">{title}</span>
        <span className="flex items-center justify-between w-9/12 text-gray-600">
          {metadata1}
          <span style={{ fontSize: '10px' }}>&#8226;</span>
          {metadata2}
        </span>
      </div>
      <div className="flex flex-col ml-auto text-right">
        <span className="font-semibold">${price}</span>
        <span className="text-gray-600">/mo</span>
      </div>
    </div>
  )
}

export default Card;