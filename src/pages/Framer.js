import { useState } from 'react';
import { motion } from 'framer-motion'
const ITEMS = [
  { id: 1, count: 1, name: 'Item 1' },
  { id: 2, count: 1, name: 'Item 2' },
  { id: 3, count: 0, name: 'Item 3' },
  { id: 4, count: 0, name: 'Item 4' },
  { id: 5, count: 0, name: 'Item 5' },
  { id: 6, count: 0, name: 'Item 6' },
  { id: 7, count: 0, name: 'Item 7' },
  { id: 8, count: 0, name: 'Item 8' },
]


const Framer = props => {

  const [listItems, setListItems] = useState(ITEMS);

  function updateCounter(id) {
    let updatedListItems = listItems.filter(item => {
      if (item.id === id) {
        item.count = item.count + 1;
      }
      return item;
    })
    setListItems(updatedListItems)
  }

  return (
    <div className="h-full pt-12 flex justify-center items-center bg-gray-900">
      <List listItems={listItems} updateCounter={updateCounter} />
    </div>
  )

}


export default Framer;


const List = ({ listItems, updateCounter }) => {

  return <ul className="w-76">
    {listItems
      .sort((a, b) => b.count - a.count)
      .map(item => (
        <motion.li layout key={item.id}>
          <ListItem item={item} updateCounter={updateCounter} />
        </motion.li>
      ))}
  </ul>
}


const ListItem = props => {
  const { item, updateCounter } = props;
  const { id, count, name } = item;

  return (
    <div
      className="p-4 mb-4 bg-gray-800 text-white flex items-center shadow-md hover:shadow-lg rounded-lg cursor-pointer select-none"
    // onClick={() => updateCounter(id)}
    >
      {/* <div>{count}</div> */}
      <Counter count={count} updateCounter={() => updateCounter(id)} />
      <div className="ml-4">{name}</div>
    </div>
  )
}

const ChevronUp = props => {
  return <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
}


const Counter = ({ count, updateCounter }) => {


  return (
    <div className="flex flex-col items-center hover:text-yellow-300" onClick={updateCounter}>
      <ChevronUp className="h-4 w-4" />
      <span className="text-sm leading-none">{count}</span>
    </div>
  )
}