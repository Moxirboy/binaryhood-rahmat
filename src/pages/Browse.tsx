import AnimatedLogoCloud from '@/components/browse/AnimatedLogoClouds'
// import { TabsDemo } from '@/components/browse/BrowseTabs'
import Contact from '@/components/browse/Contact'
import Footer from '@/components/browse/Footer'
import Header from '@/components/browse/Header'
import Navbar from '@/components/browse/Navbar'
import { useEffect } from 'react'

export default function Browse() {

	useEffect(() => {
		document.title = 'Rahmat | Reimagine Employee Recognition and Rewards'
	}, [])

	return (
		<>
			<Navbar/>
			<Header/>
			<AnimatedLogoCloud/>
			{/* <TabsDemo/> */}
			<Contact/>
			<Footer/>
		</>
	)
}