import { NavLink } from 'react-router-dom'
import Logo from '../assets/svg/logoIcon.svg'
import { UserButton } from '@clerk/clerk-react'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaSearch } from 'react-icons/fa'
import { ModeToggle } from './providers/mode-toggle'

export default function UserNavbar() {
	const userNavbarData = [
		{
			id: 0,
			name: 'Recognitions',
			slug: '/recognition',
		},
		{
			id: 1,
			name: 'Detailed',
			slug: '/organization',
		},
		{
			id: 2,
			name: 'Rewards',
			slug: '/rewards',
		},
		{
			id: 3,
			name: 'Analytics',
			slug: '/statistics',
		},
	]

	return (
		<header className='font-roboto bg-bgLightBox dark:bg-bgDarkBox text-gray-600 dark:text-gray-300 shadow-md dark:shadow-xl border-b border-transparent dark:border-gray-800'>
			<div className='max-w-[1280px] px-[15px] mx-auto flex justify-between py-4 items-center'>
				<NavLink
					to='/organization'
					className='flex items-center text-gray-900 dark:text-white'
				>
					<img
						loading='lazy'
						className='h-[20px]'
						src={Logo}
						alt='Icon of Rahmat Brand'
					/>
				</NavLink>

				<nav className='flex items-center justify-center gap-5'>
					{userNavbarData.map(item => (
						<NavLink
							key={item.id}
							to={item.slug}
							className={({ isActive }) =>
								isActive
									? 'bg-blue-800 dark:bg-blue-900 text-white px-4 py-[6px] rounded-md transform scale-105 transition-all duration-200 ease-out'
									: 'text-gray-600 dark:text-gray-300 px-4 py-[6px] rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 ease-outw'
							}
						>
							{item.name}
						</NavLink>
					))}
				</nav>

				<div className='flex items-center space-x-3 sm:space-x-3'>
					<ModeToggle />

					<div className='p-2 cursor-pointer rounded-md hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200'>
						<FaSearch className='text-xl text-gray-700 dark:text-gray-300' />
					</div>

					<div className='p-2 cursor-pointer rounded-md hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200'>
						<IoNotificationsOutline className='text-xl text-gray-700 dark:text-gray-300' />
					</div>

					<UserButton />
				</div>
			</div>
		</header>
	)
}
