import React from 'react'

const Card = ({ Icon, bgColor, amount, type }) => (
  // en fazla 160px daralabilir
  <div
    className={`flex min-w-[160px] flex-col rounded-lg bg-[${bgColor}] flex-none lg:flex-1`}
    style={{
      background:
        type === 'users'
          ? 'linear-gradient(110deg, #FEAF00 0%, #F8D442 100%)'
          : bgColor,
    }}
  >
    <div className="pb-4 pr-[12.1rem] ps-5 pt-6 ">
      <Icon />
    </div>
    <p
      className={`mb-1.5 px-5 text-sm  ${
        type === 'users' ? 'text-white' : 'text-[#6C6C6C]'
      } `}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </p>
    <div className="mb-6 ms-auto mt-auto px-5 text-3xl font-bold ">
      {amount}
      {type === 'payments' && <span className="text-lg">₺</span>}
    </div>
  </div>
)

export default Card
