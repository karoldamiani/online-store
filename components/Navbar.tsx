'use client'

import Link from 'next/link';
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop className="fixed inset-0 bg-black/25" />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative flex w-full max-w-xs flex-col bg-white pb-6 shadow-xl">

                        <div className="flex justify-end px-4 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="p-2 text-gray-400 hover:text-gray-600"
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>

                        {/* links */}

                        <div className="mt-3 space-y-4 px-4">
                            <img
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Logo"
                                className="h-8 w-auto"
                            />                            
                            <Link href="/" className="block text-lg font-medium text-gray-900">Home</Link>
                            <Link href="/products" className="block text-lg font-medium text-gray-900">Products</Link>
                            <Link href="/cart" className="block text-lg font-medium text-gray-900">Cart</Link>
                            <Link href="/login" className="block text-lg font-medium text-gray-900">Login</Link>
                            <Link href="/signup" className="block text-lg font-medium text-gray-900">Sign up</Link>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Desktop navbar */}
            <header className="relative bg-white">
                <nav className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between border-b border-gray-200">
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="p-2 text-gray-400 hover:text-gray-600"
                            >
                                <Bars3Icon className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Desktop menu links */}
                        <div className="flex items-center lg:space-x-8">
                            <Link href="/" className="flex items-center">
                                <img
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="Logo"
                                    className="h-8 w-auto"
                                />
                            </Link>
                            <div className="hidden lg:flex lg:space-x-8">
                                <Link href="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Home</Link>
                                <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Products</Link>
                            </div>

                        </div>


                        <div className="flex items-center space-x-4">
                            {/* Search */}
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <MagnifyingGlassIcon className="h-6 w-6" />
                            </button>

                            {/* Cart */}
                            <a href="/cart" className="flex items-center p-2 text-gray-400 hover:text-gray-600">
                                <ShoppingBagIcon className="h-6 w-6" />
                                <span className="ml-1 text-sm font-medium text-gray-700">0</span>
                            </a>

                            {/* Login / Sign up */}
                            <a href="/login" className="hidden text-sm font-medium text-gray-700 hover:text-indigo-600 lg:block">
                                Login
                            </a>
                            <span className="hidden text-gray-300 lg:block">|</span>
                            <a href="/signup" className="hidden text-sm font-medium text-gray-700 hover:text-indigo-600 lg:block">
                                Sign up
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
