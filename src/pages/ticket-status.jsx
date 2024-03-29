/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useLocation } from 'react-router-dom'
import styles from './ticket.module.css';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [agreed, setAgreed] = useState(false);

    // TEMPORARY CODE for fetching ticketStatus.
    // location.state contains the user data and token.
    const location = useLocation();
    const [tickets, setTickets] = useState(null);

    useEffect(() => {
        fetch("https://service-provider-apis.onrender.com/api/v1/admin/allticket/cleaner", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTdiZDA4YTk0MDg2NjczYmNmMDVlMSIsImlhdCI6MTY4NTAwNzM1NSwiZXhwIjoyNTQ5MDA3MzU1fQ.URXzJj7tNkt4vkXbETcpyIo1OmhJjsIidk219LV31YU"
            }
        }
        ).then(response => response.json()) 
        .then(response => {
            console.log(response);
            if(response.success === true)
                setTickets(response.ticket);
        });
        
    }, []);

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
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
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ticket Status</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Helpy Moto Pvt Ltd
                </p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email Address
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Ticket ID
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                required
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                </div>

                <div className="mt-10 ">
                    <button
                        type="cancel"
                        className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Check Status
                    </button>
                </div>
                {/* <div>
                    {tickets?.map(ticket => <div>status: {ticket.status}</div>)}
                </div> */}
                {tickets?.map(ticket => {
                    if(ticket.status === 'pending')
                        return <TicketDetails status={ticket.status} modeOfService={ticket.modeOfService} paymentMode={ticket.paymentMode} paymentStatus={ticket.paymentStatus}   />
                })}
            </form>
        </div>
    )
}

function TicketDetails({status, modeOfService, paymentMode, paymentStatus}) {
    


    return(
        <>
        <div className={styles.card}>
            <div><b>status: </b>{status}</div>
            <div><b>mode of service: </b>{modeOfService}</div>
            <div><b>paymentMode: </b>{paymentMode}</div>
            <div><b>payment status: </b>{paymentStatus}</div>
        </div>
        </>
    )
}