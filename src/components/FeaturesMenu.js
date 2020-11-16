import Svg from './Svg'

const Row = ({ data, ...restProps}) => {
  const { icon, title, description } = data;
  return (
    <div className="flex mb-6 last:mb-0" {...restProps}>
      <span className="text-blue-700">
        <Svg name={icon} className="w-5 h-5" />
      </span>
      <div className="flex flex-col ml-3 content-start">
        <span className="text-md leading-5 mb-1">{title}</span>
        <span className="text-sm text-gray-600 leading-4">{description}</span>
      </div>
    </div>
  )
}

const FeaturesMenu = ({ data }) => {
  return (
    <div className="flex flex-col p-6 bg-white border border-solid border-gray-400 rounded-lg max-w-xs shadow-md transition-all duration-150">
      {data.map(item => <Row data={item} key={item.title} />)}
    </div>
  )
}

export default FeaturesMenu;
