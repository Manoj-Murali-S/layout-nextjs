"use client";
import { Fragment, useState, useContext } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function slider(props) {
  const { open, setOpen,cards } = props;

  const dragEnterEvent = (e) => {
    const cardId = e.target.id;
    console.log("Dragged card ID:", cardId);
    e.dataTransfer.setData("text/plain", cardId);
    setOpen(false);
  };
  
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden bg-black/60 ">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-200"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md duration-300">
                    <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-r from-amber-200 to-yellow-400 py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Panel title
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-white/20 text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="grid grid-cols-2 gap-2">
                          {/* content */}
                          {cards.map((card) => (
                            <div key={card.name} className="max-w-sm rounded overflow-hidden shadow-lg">
                              <div
                                draggable
                                onDragStart={dragEnterEvent}
                                id={card.name}
                              >
                                <img
                                  draggable="false"
                                  className="w-full h-32"
                                  src={card.url}
                                  alt="Sunset in the mountains"
                                />
                                <div className="px-2 py-2 mb-0">
                                  <div className="font-bold text-xl capitalize">
                                    {card.name}
                                  </div>
                                </div></div>
                            </div>
                          ))}

                          {/* content */}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
