import { useState } from 'react';
import RetroShoeImg from './retro-shoe.jpg';

const RetroShoe = props => {
  const [selectedSize, setSelectedSize] = useState('m');
  const sizes = [
    { name: 'XS', value: 'xs' },
    { name: 'S', value: 's' },
    { name: 'M', value: 'm' },
    { name: 'L', value: 'l' },
    { name: 'XL', value: 'xl' },
  ];

  const Button = ({ children, ...restProps }) => <button class="w-1/2 flex items-center justify-center focus:outline-none bg-red-400 text-black border border-black box-border shadow-offset-black hover:shadow-offset-black-sm transition-shadow duration-150 uppercase font-semibold tracking-wider" type="submit" {...restProps}>{children}</button>
  return (
    <div className="relative">
      <div className="h-76 w-full absolute top-0 left-0 -m-4 bg-gradient-to-r from-red-200 to-red-400">
      </div>
      <div class="flex p-6 font-mono relative border border-black">
        <div class="flex-none w-40 relative">
          <img src={RetroShoeImg} alt="" class="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-red" />
        </div>
        <form class="flex-auto pl-6">
          <div class="flex flex-wrap items-baseline pl-52 -mt-6 -mr-6 -ml-52 py-6 pr-6 bg-black text-white">
            <h1 class="w-full flex-none text-2xl leading-7 mb-2 font-bold">
              Retro Shoe
            </h1>
            <div class="text-2xl leading-7 font-bold">
              $89.00
            </div>
            <div class="text-sm font-medium ml-3 text-red-400">
              In stock
            </div>
          </div>
          <div class="flex items-baseline py-8 pl-52 -ml-52 pr-6 -mr-6 pb-32 -mb-32 bg-white">
            <div class="space-x-8 flex content-start text-center text-sm leading-none font-bold text-gray-500">
              {sizes.map(({ name, value }) => (
                <label key={value}>
                  <input class="w-6 text-black hidden"
                    name="size"
                    type="radio"
                    value={value}
                    checked={selectedSize === value}
                    onChange={e => setSelectedSize(value)} />
                  <span className="cursor-pointer">{name}</span>
                </label>
              ))}
            </div>
            <div class="ml-auto text-xs underline">Size Guide</div>
          </div>
          <div class="flex space-x-3 text-sm font-bold uppercase my-8">
            <div class="flex-auto flex space-x-3">
              <Button>Buy now</Button>
              <Button>Add to bag</Button>
            </div>
            <button class="flex-none flex items-center justify-center w-8 h-8 focus:outline-none hover:text-black" type="button" aria-label="like">
              <svg width="20" height="20" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p class="text-xs leading-5 text-gray-500">
            Free shipping on all continental US orders.
        </p>
        </form>
      </div>
    </div>
  )
}


export default RetroShoe;