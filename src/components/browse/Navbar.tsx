import { Link } from 'react-router-dom'
import { ModeToggle } from '../providers/mode-toggle'
import Logo from '../../assets/svg/logoIcon.svg'
import {
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/clerk-react'
import { FaRegUser } from 'react-icons/fa'
import { styleUI } from '@/util/data'

export default function Navbar() {
	return (
		<header className='font-roboto bg-background text-gray-600 fixed top-0 left-0 w-full z-10 dark:text-gray-300 shadow-md dark:shadow-xl border-b border-transparent dark:border-gray-800'>
			<div className='max-w-[1280px] px-[15px] mx-auto flex justify-between py-4 items-center'>
				<Link
					to='/'
					className='flex items-center text-gray-900 dark:text-white'
				>
					<img
						loading='lazy'
						className='h-[20px]'
						src={Logo}
						alt='Icon of Rahmat Brand'
					/>
				</Link>

				<nav className='flex items-center space-x-3 sm:space-x-5'>
					<ModeToggle />

					<SignedOut>
						<Link
							to={'/sign-in'}
							className={`text-sm hidden sm:block font-space font-medium text-black dark:text-white`}
						>
							Login
						</Link>
					</SignedOut>

					<SignedOut>
						<Link to={'/register'} className={`${styleUI.gradientButton}`}>
							<FaRegUser className='text-sm	text-white' />

							<span className='text-sm hidden xxsm:block font-space font-medium text-white'>
								Sign Up
							</span>
						</Link>
					</SignedOut>

					<SignedIn>
						<UserButton />
					</SignedIn>
				</nav>
			</div>
		</header>
	)
}
