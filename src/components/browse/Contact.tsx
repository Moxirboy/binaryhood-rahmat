import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logoIcon.svg';
import TextTicker from '../ui/text-picker';
import { contactLink } from '@/util/icon';
import FormRequest from './FormRequest';
// import { Meteors } from '../ui/meteors';

export default function Contact() {
  return (
    <main className="font-roboto max-w-[1350px] relative mx-auto overflow-hidden">

      <div className="max-w-[1150px] mx-auto z-30 px-6 py-[60px] md:py-20 lg:py-24 flex flex-col md:flex-row gap-16 md:gap-32">

        <div className="w-full max-w-lg mx-auto md:w-1/3 text-center md:text-left">
        <Link
					to='/'
					className='flex items-center text-gray-900 dark:text-white'
				>
					<img
						loading='lazy'
						className='h-[20px] w-auto'
						src={Logo}
						alt='Icon of Rahmat Brand'
					/>
				</Link>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Celebrate milestones. Reward wins. Connect your people. And reimagine performance with the only recognition solution that motivates teams and empowers managers
          </p>
          <p className="mt-4 text-lg lg:text-xl font-medium text-black dark:text-white">
            Trusted by over +<TextTicker value={1000000} /> organizations
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 flex-grow">
          <div className="w-full md:w-1/2 mx-auto max-w-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Connect with us</h2>
            <ul className="space-y-2">
              {contactLink.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <FormRequest />
          </div>
        </div>
      </div>
    </main>
  );
}
