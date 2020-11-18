import React, { useState } from 'react';
import { Svg, CheckboxEmpty, CheckboxFilled, AddUser } from '../components';


const Clubhouse = props => {

  const [currentStep, setCurrentStep] = useState(1);

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
        <div className="inline-flex gap-2 opacity-25">
          <AddUser />
          <span>Collaborate with your team</span>
        </div>
      </div>
      <div className="w-2/3 bg-white flex-none">

      </div>
    </div>
  )
}

const Button = ({ children, ...restProps }) => <button type="button" className="px-3 py-2 leading-none rounded text-white hover:text-clubhouse-gray hover:bg-white cursor-pointer duration-200 transition-colors" {...restProps}>{children}</button>


const Step = ({ step, currentStep, ...restProps }) => {
  const { id, title, subtitle } = step;
  const opacityLevel = id == currentStep ? '' : (id < currentStep ? 'opacity-50' : 'opacity-25')
  return <div className={`relative h-20 flex ${id < 3 ? 'border-l' : ''} border-solid border-white transition-opacity duration-200 ease-in-out ${opacityLevel}`} {...restProps}>
    <div className="absolute bg-clubhouse-gray" style={{ left: '-12px', top: 0 }}>
      {id < currentStep ? <CheckboxFilled /> : <CheckboxEmpty />}
    </div>
    <div className="flex flex-col ml-8">
      <span className="text-xl leading-6">{title}</span>
      <span className="text-sm mt-1">{subtitle}</span>
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


export default Clubhouse;