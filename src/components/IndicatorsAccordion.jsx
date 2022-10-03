import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


export default function Accordion({ code, pillar, children }) {
    return (
        <Disclosure as="div" className="w-full rounded-lg lg:rounded-2xl">
          {({ open }) => (
            <>
                <Disclosure.Button 
					className={`group flex w-full justify-between rounded-t-md ${ open ? "bg-primary dark:bg-gray-900 text-white dark:text-white": 
					"bg-white dark:bg-gray-700 text-primary dark:text-white"} 
					px-4 py-1 text-left text-sm font-medium hover:bg-primary dark:bg-gray-900 hover:text-white 
					dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary 
					focus-visible:ring-opacity-75`}>
                    <h5 className="h6">
                      <span className="">{pillar}</span>
                    </h5>
                    <ChevronUpIcon className={`${open ? 'rotate-180 transform text-white dark:text-white' : 'text-primary  dark:text-white'} h-8 w-8 group-hover:text-white text-white dark:text-white`}/>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 bg-white dark:bg-gray-700">
                        {children}
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    )
}
