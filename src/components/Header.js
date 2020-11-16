import { Link, useLocation } from 'react-router-dom';

const Header = ({ routesList }) => {
  const { pathname } = useLocation();


  return <div className="p-4 flex items-center space-x-2 text-indigo-500 border-b border-gray-400">
    {routesList.map(item => {
      return <HeaderLink data={item} key={item.route} activeLink={pathname} />
    })}
  </div>
}

const HeaderLink = ({ data, activeLink, ...restProps }) => {
  return <Link to={data.route} {...restProps}>
    <span className={`${activeLink === data.route ? 'bg-indigo-500 text-white' : 'hover:bg-indigo-100'} p-2 rounded leading-none`}>{data.name}</span>
  </Link>
}



export default Header;