import TextTicker from '../ui/text-picker';
import { logos } from '@/util/icon'

const AnimatedLogoCloud = () => {
	return (
		<div className='max-w-[1150px] mx-auto py-6 sm:py-8 border-y border-gray-300 dark:border-gray-800 font-mono'>

			<h2 className="mb-7 sm:mb-9 md:mb-[60px] text-center text-lg lg:text-2xl font-medium lg:font-bold text-black dark:text-white">
        Trusted by over +<TextTicker value={1000000} /> organizations
      </h2>

			<div className='mx-auto'>
				<div
					className='group relative flex gap-6 overflow-hidden p-2'
					style={{
						maskImage:
							'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
					}}
				>
					{Array(5)
						.fill(null)
						.map((itm, index) => (
							<div
								key={`logo-cloud-${index} + ${itm}`}
								className='flex shrink-0 animate-logo-cloud flex-row justify-around'
							>
								{logos.map(logo => (
									<div key={logo.name} className='flex items-center gap-3 px-5 sm:px-10'>
										<img loading='lazy' src={logo.url} className='h-7 sm:h-10 w-auto' alt={logo.name} />

										<p className='text-lg sm:text-xl'>{logo.name}</p>
									</div>
								))}
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default AnimatedLogoCloud;
