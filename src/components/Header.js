import { Link, useLocation } from 'react-router-dom';
import { AnimateSharedLayout, motion, useMotionValue } from 'framer-motion'


const Header = ({ routesList }) => {
  const { pathname } = useLocation();

  return <div className="h-16 px-8 flex border-b border-gray-400">
    <ul className="flex flex-none items-center space-x-2 text-indigo-500">
      <AnimateSharedLayout>
        {routesList.map(item => {
          return <HeaderLink data={item} key={item.path} activeLink={pathname} />
        })}
      </AnimateSharedLayout>
    </ul>
  </div >
}

const HeaderLink = ({ data, activeLink, ...restProps }) => {
  return <Link to={data.path} {...restProps}>
    {/* <span className={`${activeLink === data.path ? 'bg-indigo-500 text-white' : 'hover:bg-indigo-100'} p-2 rounded leading-none`}>{data.name}</span> */}
    <li key={data.path}>
      {activeLink === data.path ?
        <motion.div
          layoutId="currentRoute"
          className="p-2 rounded leading-none bg-indigo-500 text-white"
        >
          {data.name}
        </motion.div>
        :
        <div className="p-2 rounded leading-none text-indigo-500 bg-white">
          {data.name}
        </div>
      }
    </li>


  </Link>
}



export default Header;