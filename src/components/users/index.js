import React from 'react'

export default function Users() {
  return (
    <div className="relative">
      {[1, 3, 6, 23, 8].map((item, index) => <User id={item} index={index} />)}
    </div>
  )
}


function User({ id, index }) {
  return (
    <div key={id} className={`absolute h-16 w-16 left`} style={{ left: index * 3 + 'rem' }}>
      <img
        src={`https://randomuser.me/api/portraits/${id % 2 === 0 ? 'men' : 'women'}/${id}.jpg`} alt=""
        className="rounded-full bg-gradient-to-tr from-red-500 to-blue-400 p-1"
      />
    </div >
  )
}




// https://randomuser.me/api/portraits/men/22.jpg