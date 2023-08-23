
import { MyContext } from '../context'
import { useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import styles from './cleaner.module.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const [front, setFront] = useState(null)
  const [left, setLeft] = useState(null)
  const [right, setRight] = useState(null)
  const [back, setBack] = useState(null)
  const [engine, setEngine] = useState(null)

  function handleChange(event) {
    console.log(event.target.name)
    const name = event.target.name;

    const image = URL.createObjectURL(event.target.files[0]);
    switch (name) {
      case "front":
        
        setFront(image);
        break;

      case "left":
        setLeft(image);
        break;

      case "right":
        setRight(image);
        break;

      case "back":
        setBack(image);
        break;

      case "engine":
        setEngine(image);
        break;

    }

  }

  return (


    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem]   -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mechanic Ticket</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Helpy Moto Pvt Ltd
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 w-4/5 sm:mt-20">
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="ID" className="block text-sm font-semibold leading-6 text-gray-900">
              Customer ID
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="ID"
                id="ID"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mechanic_ID" className="block text-sm font-semibold leading-6 text-gray-900">
              Mechanic ID
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="mechanic_ID"
                id="mechanic_ID"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
    
              <div>
          <label htmlFor="scheduleOfService" className="block text-sm font-semibold leading-6 text-gray-900" >Schedule of Service</label>
  <input list="scheduleOfServices" name="scheduleOfService" id="scheduleOfService" placeholder='Current' className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
  <datalist id="scheduleOfServices" >
    <option value="Current"/>
    <option value="Scheduled"/>

  </datalist>
  </div>
  
          
          <div>
          <label htmlFor="typesOfService" className="block text-sm font-semibold leading-6 text-gray-900" >Types of Services</label>
  <input list="typesOfServices" name="typesOfService" id="typesOfService" placeholder=' Brakedown' className="block w-full rounded-md border-0 px-3.5 py-1.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
  <datalist id="typesOfServices" >
    <option value=" Brakedown"/>
    <option value="Puncher"/>
    <option value="Others "/>
   
  </datalist>
  </div>

      
  <div>
          <label htmlFor="modeOfService" className="block text-sm font-semibold leading-6 text-gray-900" >Mode of Service</label>
  <input list="modeOfServices" name="modeOfService" id="modeOfService"  className="block w-full rounded-md border-0 px-3.5 py-1.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
  <datalist id="modeOfServices" >
  <option value="Pick-Up"/>
    <option value="Drop"/>
    <option value="Both"/>

  </datalist>
  </div>

          <div>
          <label htmlFor="ticketStatus" className="block text-sm font-semibold leading-6 text-gray-900" > Ticket Status</label>
  <input list="ticketStatuses" name="ticketStatus" id="ticketStatus" placeholder='notAccepted' className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
  <datalist id="ticketStatuses" >
    <option value=" Pending"/>
    <option value=" Accepted"/>
    <option value="Rejected"/>
    <option value="Completed"/>
    <option value="In Process"/>

  </datalist>
  </div>

          {/* query */}
          <div className="sm:col-span-2">
            <label htmlFor="query" className="block text-sm font-semibold leading-6 text-gray-900">
              Query
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="query"
                id="query"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
             Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={8}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 sm:col-span-2 gap-4" >
            <div className="sm:col-span-1 sm:col-start-1">
              <label htmlFor="currentLocation" className="block text-sm font-medium leading-6 text-gray-900">
                Current Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="currentLocation"
                  id="currentLocation"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



            <div className="sm:col-span-1">
              <label htmlFor="trackingLocation" className="block text-sm font-medium leading-6 text-gray-900">
                Tracking Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="trackingLocation"
                  id="trackingLocation"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="distance " className="block text-sm font-medium leading-6 text-gray-900">
                Distance
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="distance"
                  id="distance"
                  autoComplete="distance"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="totalPrice " className="block text-sm font-medium leading-6 text-gray-900">
                Total Price
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="totalPrice"
                  id="totalPrice"
                  autoComplete="distance"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>


          <p className="block text-sm font-medium leading-6 text-gray-900">Upload Image</p>



          <div className="sm:col-span-2 flex px-3 gap-2 justify-evenly">
            <div className='flex flex-col text-center'>
              <span className="block text-sm font-medium leading-6 text-gray-900">
                Front
              </span>

              <label htmlFor="front" className="inline text-sm font-semibold leading-6 text-gray-900">
                <img width="120px" height="120px" className="rounded-3xl inline hover:cursor-pointer hover:bg-green-200" src={front === null ? "https://www.svgrepo.com/show/73305/plus-sign-in-a-square.svg" : front} />
              </label>
              <div className="mt-2.5">
                <input onChange={handleChange} className={styles.uploadImage}

                  type="file"
                  name="front"
                  id="front"

                />
              </div>
            </div>



            <div className='flex flex-col text-center'>
              <span className="block text-sm font-medium leading-6 text-gray-900">
                Left
              </span>

              <label htmlFor="left" className="inline text-sm font-semibold leading-6 text-gray-900">
                <img width="120px" height="120px" className="rounded-3xl inline hover:cursor-pointer hover:bg-green-200" src={left === null ? "https://www.svgrepo.com/show/73305/plus-sign-in-a-square.svg" : left} />
              </label>
              <div className="mt-2.5">
                <input onChange={handleChange} className={styles.uploadImage}

                  type="file"
                  name="left"
                  id="left"

                />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className="block text-sm font-medium leading-6 text-gray-900">
                Right
              </span>

              <label htmlFor="right" className="inline text-sm font-semibold leading-6 text-gray-900">
                <img width="120px" height="120px" className="rounded-3xl inline hover:cursor-pointer hover:bg-green-200" src={right === null ? "https://www.svgrepo.com/show/73305/plus-sign-in-a-square.svg" : right} />
              </label>
              <div className="mt-2.5">
                <input onChange={handleChange} className={styles.uploadImage}

                  type="file"
                  name="right"
                  id="right"

                />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className="block text-sm font-medium leading-6 text-gray-900">
                Back
              </span>

              <label htmlFor="back" className="inline text-sm font-semibold leading-6 text-gray-900">
                <img width="120px" height="120px" className="rounded-3xl inline hover:cursor-pointer hover:bg-green-200" src={back === null ? "https://www.svgrepo.com/show/73305/plus-sign-in-a-square.svg" : back} />
              </label>
              <div className="mt-2.5">
                <input onChange={handleChange} className={styles.uploadImage}

                  type="file"
                  name="back"
                  id="back"

                />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className="block text-sm font-medium leading-6 text-gray-900">
                Engine
              </span>

              <label htmlFor="engine" className="inline text-sm font-semibold leading-6 text-gray-900">
                <img width="120px" height="120px" className="rounded-3xl inline hover:cursor-pointer hover:bg-green-200" src={engine === null ? "https://www.svgrepo.com/show/73305/plus-sign-in-a-square.svg" : engine} />
              </label>
              <div className="mt-2.5">
                <input onChange={handleChange} className={styles.uploadImage}

                  type="file"
                  name="engine"
                  id="engine"

                />
              </div>
            </div>
          </div>


          <div className="grid grid-cols-3 sm:col-span-2 gap-4" >
            <div className="sm:col-span-1 sm:col-start-1">
              <label htmlFor="pickupPlace" className="block text-sm font-medium leading-6 text-gray-900">
                Pickup Place
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pickupPlace"
                  id="pickupPlace"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="pickupDate" className="block text-sm font-medium leading-6 text-gray-900">
                Pickup Date
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pickupDate"
                  id="pickupDate"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="pickupTime " className="block text-sm font-medium leading-6 text-gray-900">
                Pickup Time
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pickupTime"
                  id="pickupTime"
                  autoComplete="distance"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>



          <div className="grid grid-cols-3 sm:col-span-2 gap-4" >
            <div className="sm:col-span-1 sm:col-start-1">
              <label htmlFor="dropPlace" className="block text-sm font-medium leading-6 text-gray-900">
                Drop Place
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="dropPlace"
                  id="dropPlace"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="dropDate" className="block text-sm font-medium leading-6 text-gray-900">
                Drop Date
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="dropDate"
                  id="dropDate"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="dropTime " className="block text-sm font-medium leading-6 text-gray-900">
                Drop Time
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="dropTime"
                  id="dropTime"
                  autoComplete="distance"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
          <label htmlFor="paymentMode" className="block text-sm font-semibold leading-6 text-gray-900" > Payment Mode</label>
  <input list="paymentModes" name="paymentMode" id="paymentMode" placeholder='Card' className="block w-full rounded-md border-0 px-3.5 py-1.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
  <datalist id="paymentModes" >
    <option value=" UPI"/>
    <option value=" Card"/>
    <option value="Net Banking "/>
    <option value="Cash on Delivery"/>

  </datalist>
  </div>

          <div>
          <label htmlFor="pendingStatus" className="block text-sm font-semibold leading-6 text-gray-900" > Pending Status</label>
  <input list="pendingStatuses" name="pendingStatus" id="pendingStatus" placeholder='Pending' className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
  <datalist id="pendingStatuses" >
    <option value=" Pending"/>
    <option value=" Paid"/>
    <option value="Money Back"/>
    <option value="Due"/>

  </datalist>
  </div>
        </div>
       
 


    
        <div className="p-2 flex">
          <div className="w-1/2"></div>
          <div className="w-1/2 my-4 flex justify-end">
            <button type="submit" className="bg-teal-500 text-white px-8 py-2 rounded text-sm w-auto">
              Cancel
            </button>
            <button type="submit" className="bg-teal-500 text-white px-8 py-2 ml-6 rounded text-lg w-auto">
              Save
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}
