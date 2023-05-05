
// * Hooks
import { useState } from 'react'

// * Svgs
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


type Props = {}

export default function MainNavBar(props: Props) {

    return <nav className="flex-between mx-auto w-full">
        <ul className="flex-between gap-8 text-sm">
            <li>Home</li>
            <li>Benefits</li>
            <li>Our Classes</li>
            <li>Contact Us</li>
        </ul>
        <div className="flex-between gap-8">
            <button>Login</button>
            <button>Become a member</button>
        </div>
    </nav>
}