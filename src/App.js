import { useState } from 'react';
import './App.css';


const items = [
  {
    title: 'Hobby',
    metadata1: '8gb/4CPUs',
    metadata2: '160 GB SSD disk',
    price: 40
  },
  {
    title: 'Business',
    metadata1: '32gb/8CPUs',
    metadata2: '640 GB SSD disk',
    price: 80
  },
]

function App() {
  const [selectedOption, setSelectedOption] = useState(0);

  const clickHandler = itemIndex => setSelectedOption(itemIndex);


  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-xl bold mb-6">Trying out Tailwind CSS</h1>
      {/* <div className="grid lg:grid-cols-2 md:grid-cols-1 mb-4"> */}
      <div className="grid gap-3 mb-4">
        {items.map((item, i) => <Card key={item.title} data={item} selectedOption={selectedOption} itemIndex={i} clickHandler={clickHandler} />)}
      </div>

      <Menu data={menuData} />
    </div>
  );
}



const Card = ({ data, itemIndex, selectedOption, clickHandler, ...restProps }) => {
  const { title, metadata1, metadata2, price } = data;
  return (
    <div className="flex px-4 items-center h-20 max-w-md bg-white border border-solid border-gray-400 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-150" onClick={e => clickHandler(itemIndex)} {...restProps}>
      <input type="radio" name="my-radio" checked={itemIndex === selectedOption} onChange={e => clickHandler(itemIndex)} />
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


const menuData = [
  {
    icon: 'analytics',
    title: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from'
  },
  {
    icon: 'engagement',
    title: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way'
  },
  {
    icon: 'security',
    title: 'Security',
    description: 'Your customers data will be safe and secure'
  },
  {
    icon: 'integrations',
    title: 'Integrations',
    description: 'Connect with third party tools that you are already using'
  },
  {
    icon: 'automations',
    title: 'Automations',
    description: 'Build strategic tunnels that will drive your customers to convert'
  }
];


const Menu = ({ data }) => {
  return (
    <div className="flex flex-col p-6 bg-white border border-solid border-gray-400 rounded-lg max-w-xs shadow-md transition-all duration-150">
      {data.map(item => <Row data={item} />)}
    </div>
  )
}

const Row = ({ data }) => {
  const { icon, title, description } = data;
  return (
    <div className="flex mb-6 last:mb-0">
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

const icons = {
  analytics: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>,
  engagement: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>,
  security: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>,
  integrations: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>,
  automations: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>,
  chevronDown: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>,
  chevronUp: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
}

const Svg = ({ name, ...restProps }) => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    {icons[name]}
  </svg>
)






export default App;
