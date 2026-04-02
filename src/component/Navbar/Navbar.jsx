import React, { useState } from 'react';
import NabItems from './NabItems';
import { Menu, SquareX } from 'lucide-react';
const navItems = [
    {
        id: 1,
        title: "Home",
        path: "/",
        icon: "home",
        active: true
    },
    {
        id: 2,
        title: "About",
        path: "/about",
        icon: "info",
        active: false
    },
    {
        id: 3,
        title: "Services",
        path: "/services",
        icon: "briefcase",
        active: false
    },
    {
        id: 4,
        title: "Blog",
        path: "/blog",
        icon: "book",
        active: false
    },
    {
        id: 5,
        title: "Contact",
        path: "/contact",
        icon: "phone",
        active: false
    }
];

const Navbar = () => {
    const links = navItems.map(item =><NabItems item={item} key={item.id}></NabItems>);
    const [open, setOpen] = useState(false);

    return (
        <div className='flex justify-between md:mx-20'>

            <span className='flex gap-2' onClick={() => setOpen(!open)}>
                {open ? <SquareX className='md:hidden'></SquareX> : <Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute duration-1000 bg-gray-500 p-4 rounded-xl ${open? "top-6": "-top-40"}`}>
                    {links}
                </ul>
                <h3>MyPage</h3>
            </span>

            <div className='md:flex hidden'>
                {
                    links
                }
            </div>

            <ul>
                <li><a href="">Login</a></li>
            </ul>
        </div>
    );
};

export default Navbar;