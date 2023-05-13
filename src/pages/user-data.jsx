import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import axios from 'axios'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [agreed, setAgreed] = useState(false)

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/tickets").then((response) => {
            setData(response.data);
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
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">User Data</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Helpy Moto Pvt Ltd
                </p>
            </div>
            <div class=" p-2 flex border-4 bg-sky-300 mx-auto mt-16 max-w-xl sm:mt-20">
                <div class="w-1/2">Export your data</div>
                <div class="w-1/2">
                    <button type="submit" class="bg-gray-500 text-white p-2 rounded text-sm w-auto float-right">
                        Export
                    </button>

                </div>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">


                    <div className="sm:col-span-2">
                        <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                            Subject
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={15}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10 item-center grid grid-cols-2 gap-10 ">

                    <button
                        type="cancel"
                        className="block  rounded-md bg-indigo-600 grid-row-1 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                    <button
                        type="cancel"
                        className="block  rounded-md bg-indigo-600  grid-row-1 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Cancel
                    </button>
                </div>
                {/* <div class="p-2 flex">
    <div class="w-1/2">Empty Space</div>
    <div class="w-1/2">
        <button type="submit" class="bg-gray-500 text-white p-2 rounded text-sm w-auto float-right">
            Cancel
        </button>
        <button type="submit" class="bg-yellow-500 text-white p-2 ml-6 rounded text-lg w-auto float-right ">
            Save
        </button>
    </div>
</div> */}
            </form>
        </div>
    )
}
