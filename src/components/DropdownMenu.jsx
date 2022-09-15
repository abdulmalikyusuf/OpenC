import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function DropdownMenu({ label, options, placement="right" }) {
    return (
      <div className="xw-56">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-primary bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      {label}
                      <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true"/>
                  </Menu.Button>
              </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className={`absolute ${placement+"-0"} mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
              <div className="px-1 py-1">
                {options.map(option => (
                    <Menu.Item key={option.title}>
                    {({ active }) => (
                      <button className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`} onClick={option.handleClick}>
                        {option.icon}{option.title}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
}