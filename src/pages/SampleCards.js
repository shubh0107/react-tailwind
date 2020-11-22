import React, { useState } from 'react';
import { FeaturesMenu, Card, RetroShoe } from '../components/sample-cards';

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
];

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

const SampleCards = props => {
  const [selectedOption, setSelectedOption] = useState(0);
  const clickHandler = itemIndex => setSelectedOption(itemIndex);

  return (
    <div className="h-full w-full flex flex-col bg-gray-100 p-4">
      <h1 className="text-xl bold mb-6">Trying out Tailwind CSS</h1>
      {/* <div className="grid lg:grid-cols-2 md:grid-cols-1 mb-4"> */}
      <div className="w-full flex">
        <div className="flex flex-col w-1/2">
          <div className="grid gap-3 mb-4">
            {items.map((item, i) => <Card key={item.title} data={item} selectedOption={selectedOption} itemIndex={i} clickHandler={clickHandler} />)}
          </div>
          <FeaturesMenu data={menuData} />
        </div>
        <div className="flex w-1/2">
          <RetroShoe />
        </div>
      </div>
    </div>
  );
}

export default SampleCards;
