import Navbar from '@/components/browse/Navbar'
import { SignIn } from '@clerk/clerk-react'

function Login() {
	return (
		<div className='w-full h-screen font-roboto'>
			<Navbar />

			<div className='max-w-[1150px] px-[15px] mx-auto flex h-screen justify-center items-center'>
				<SignIn signUpUrl='/register'/>
			</div>
		</div>
	)
}

export default Login;