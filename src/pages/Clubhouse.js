import React, { useState } from 'react';
import { CheckboxEmpty, CheckboxFilled, AddUser } from '../components';
import { TextInput } from '../components/clubhouse';
import RetroShoe from './retro-shoe.jpg';


const Clubhouse = props => {

  const [currentStep, setCurrentStep] = useState(2);

  const toggleStep = jump => {
    let newStep = currentStep + jump;
    if (newStep >= 1 && newStep <= 3) {
      setCurrentStep(newStep);
    }
  }


  return (
    <div className="h-screen w-full bg-clubhouse-gray text-white flex flex-none">
      <div className="w-1/3 flex flex-col px-6 py-3 items-start">
        <header className="text-2xl font-mono">Clubhouse</header>
        <Button onClick={e => toggleStep(-1)}>Prev</Button>
        <Button onClick={e => toggleStep(1)}>Next</Button>
        <h1 className="text-xs mt-20 opacity-50">
          SET UP YOUR CLUBHOUSE ACCOUNT
        </h1>
        <div className="flex flex-col mt-4 ml-2">
          {steps.map(step => <Step step={step} key={step.id} currentStep={currentStep} />)}
        </div>
        <div className="inline-flex gap-2 opacity-25 text-lg">
          <AddUser />
          <span>Collaborate with your team</span>
        </div>
      </div>
      <div className="w-2/3 bg-white text-gray-600 px-4 py-4">
        <div className="flex items-center justify-end">
          <span className="mr-2">Already have an account?</span>
          <Button>Sign In</Button>
        </div>
        <div className="flex justify-center mt-48">
          {currentStep === 1 ? <Step1Form /> : ''}
          {currentStep === 2 ? <Step2Form /> : ''}
        </div>
      </div>
    </div>
  )
}

const Button = ({ children, ...restProps }) => <button type="button" className="px-3 py-1 border-2 rounded-md text-gray-800 hover:text-white hover:bg-clubhouse-gray cursor-pointer duration-200 transition-colors" {...restProps}>{children}</button>
const NextStepButton = ({ children, classes, ...restProps }) => <Button className={`px-20 py-2 text-white bg-blue-600 rounded-md hover:b ${classes}`} style={{ background: '#0c4eb5' }} {...restProps}>{children}</Button>

const Step = ({ step, currentStep, ...restProps }) => {
  const { id, title, subtitle } = step;
  const opacityLevel = id == currentStep ? '' : (id < currentStep ? 'opacity-50' : 'opacity-25')
  return <div className={`relative h-20 flex ${id < 3 ? 'border-l' : ''} border-solid border-white transition-opacity duration-200 ease-in-out ${opacityLevel}`} {...restProps}>
    <div className="absolute bg-clubhouse-gray" style={{ left: '-12px', top: 0 }}>
      {id < currentStep ? <CheckboxFilled /> : <CheckboxEmpty />}
    </div>
    <div className="flex flex-col ml-8">
      <span className="text-2xl leading-6">{title}</span>
      <span className="text-lg mt-1">{subtitle}</span>
    </div>
  </div>
}

const steps = [
  {
    id: 1,
    title: 'Create your Organization',
    subtitle: 'Your software team has a new home!'
  },
  {
    id: 2,
    title: 'Create your Profile',
    subtitle: 'Fill out some quick details'
  },
  {
    id: 3,
    title: 'Tell us about yourself',
    subtitle: 'Help tailor your Clubhouse experience'
  }
];

const Step1Form = props => {
  return (
    <div className="text-gray-800">
      <h1 className="text-5xl tracking-wide">Welcome to Clubhouse</h1>
      <h2 className="text-lg text-gray-500 mb-4">Let's get started buy creating your Clubhouse Organization</h2>
      <TextInput
        name="companyName"
        placeholder="ex. Acme Inc"
        label="Company Name"
      />
      <NextStepButton classes="mt-4">Next Step</NextStepButton>
    </div>
  )
}

// const Step2Form = props => {
//   return (
//     <div className="flex p-6 font-mono">
//       <div className="flex-none w-40 relative">
//         {/* <img src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80" alt="shoe" 
//         className="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-lime" /> */}
//         <img src={RetroShoe} alt="shoe" 
//         className="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-orange" />
//       </div>

//       <form className="flex-auto pl-6">
//         <div className="flex flex-wrap items-baseline pl-52 -mt-6 -mr-6 py-6 pr-6 bg-black text-white">
//           <h1 className="w-full flex-none text-2xl leading-7 mb-2 font-bold">Retro Shoe</h1>
//           <div className="text-2xl leading-7 font-bold">$89.00</div>
//           <div className="text-sm font-medium ml-3">In stock</div>
//         </div>
//         <div className="felx items-baseline py-6">
//         <label>
//           <input type="radio" name="size" value="xs" checked />
//           XS
//         </label>
//         </div>
//       </form>

//     </div>
//   )
// }


const Step2Form = props => {
  return (
    <div class="flex p-6 font-mono">
      <div class="flex-none w-40 relative">
        <img src={RetroShoe} alt="" class="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-lime" />
      </div>
      <form class="flex-auto pl-6">
        <div class="flex flex-wrap items-baseline pl-52 -mt-6 -mr-6 -ml-52 py-6 pr-6 bg-black text-white">
          <h1 class="w-full flex-none text-2xl leading-7 mb-2 font-bold">
            Retro Shoe
      </h1>
          <div class="text-2xl leading-7 font-bold">
            $89.00
      </div>
          <div class="text-sm font-medium ml-3">
            In stock
      </div>
        </div>
        <div class="flex items-baseline py-8">
          <div class="space-x-3.5 flex text-center text-sm leading-none font-bold text-gray-500">
            <label>
              <input class="w-6 text-black shadow-underline" name="size" type="radio" value="xs" checked />
                XS
        </label>
            <label>
              <input class="w-6" name="size" type="radio" value="s" />
                  S
        </label>
            <label>
              <input class="w-6 bg-b" name="size" type="radio" value="m" />
                    M
        </label>
            <label>
              <input class="w-6" name="size" type="radio" value="l" />
                      L
        </label>
            <label>
              <input class="w-6" name="size" type="radio" value="xl" />
                        XL
        </label>
          </div>
          <div class="ml-auto text-xs underline">Size Guide</div>
        </div>
        <div class="flex space-x-3 text-sm font-bold uppercase mb-4">
          <div class="flex-auto flex space-x-3">
            <button class="w-1/2 flex items-center justify-center bg-lime-300 text-black border border-black shadow-offset-black" type="submit">Buy now</button>
            <button class="w-1/2 flex items-center justify-center border border-black shadow-offset-black" type="button">Add to bag</button>
          </div>
          <button class="flex-none flex items-center justify-center w-9 h-9 border border-black" type="button" aria-label="like">
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
  )
}




export default Clubhouse;