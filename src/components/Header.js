import { Link, useLocation } from 'react-router-dom';
import { AnimateSharedLayout, motion, useMotionValue } from 'framer-motion'


const Header = ({ routesList }) => {
  const { pathname } = useLocation();


  return <div className="h-16 px-8 flex border-b border-gray-400">
    <AnimateSharedLayout>
      <ul className="flex flex-none items-center space-x-2 text-indigo-500 ">
        {routesList.map(item => {
          return <HeaderLink data={item} key={item.path} activeLink={pathname} />
        })}
      </ul>
    </AnimateSharedLayout>
  </div >
}

const HeaderLink = ({ data, activeLink, ...restProps }) => {
  return <Link to={data.path} {...restProps}>
    {/* <span className={`${activeLink === data.path ? 'bg-indigo-500 text-white' : 'hover:bg-indigo-100'} p-2 rounded leading-none`}>{data.name}</span> */}
    <li
      // animate
      className="text-indigo-500"
      key={data.path}
    // style={{ color: activeLink === data.path ? 'white' : "#667eea" }}

    >
      {activeLink === data.path ?
        <motion.div
          layoutId="currentRoute"
          className="p-2 rounded leading-none bg-indigo-500 text-white"
        // animate={{ background: '' }}
        >
          {data.name}
        </motion.div>
        :
        <motion.div animate style={{ color: activeLink === data.path ? 'white' : "#667eea" }}>
          {data.name}
        </motion.div>
      }
    </li>


  </Link>
}



export default Header;