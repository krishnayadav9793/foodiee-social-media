"use client"
import React from 'react'
import { Input } from './ui/input'
import ThemeTogglerButtonDemo from './ThemeButton'
import { AnimateIcon } from './animate-ui/icons/icon'
import { User } from './animate-ui/icons/user'

function Haeder() {
    return (
        <div className='absolute inset-0  z-5 p-2 flex justify-between'>
            <div>
                Logo
            </div>
            <div className='top-1.5 flex gap-3 justify-end'>
                <div >
                    <Input />
                </div>
                <div >
                    <ThemeTogglerButtonDemo />
                </div>
                <a href='./profile'>
                    <AnimateIcon animateOnHover>
                        <User />
                    </AnimateIcon>
                </a>
            </div>

        </div>
    )
}

export default Haeder
