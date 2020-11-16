import { icons } from '../assets/icons';


const Svg = ({ name, ...restProps }) => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    {icons[name]}
  </svg>
)


export default Svg;
