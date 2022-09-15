import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


export default function Accordion({ heading, children }) {
    return (
        <Disclosure as="div" className="w-full max-w-5xl rounded-lg lg:rounded-2xl">
          {({ open }) => (
            <>
                <Disclosure.Button className={`group flex w-full justify-between rounded-t-lg ${ open ? "bg-primary text-white": "bg-white text-primary"} px-4 py-2 text-left text-sm font-medium hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75`}>
                    <h5 className="h5">{heading}</h5>
                    <ChevronUpIcon className={`${open ? 'rotate-180 transform text-white' : 'text-primary'} w-6 lg:h-10 lg:w-10 group-hover:text-white`}/>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 bg-white">
                        {children}
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    )
}
