import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Coins } from 'lucide-react'
import { useState, useEffect } from 'react'
import RecognitionForm from './RecognationForm'
import RecognationBlogs from './RecognationBlogs'
import { myData as initialMyData } from '@/helper/db'

type Recognition = {
	id: number
	message: string
	sender: string
	recipient: string
	points: number
	author: {
		name: string
		avatarImage: string
		avatarFallback: string
	}
	recognitionPoints: number
	comments: {
		id: number
		author: {
			name: string
			avatarImage: string
		}
		message: string
		points: number
		timestamp: string
	}[]
}

export default function RecognationsInput() {
	const [showRecognitionForm, setShowRecognitionForm] = useState(false)
	const [recognitions, setRecognitions] = useState<Recognition[]>([])
	const [myData, setMyData] = useState(() => {
		const storedData = localStorage.getItem('myData')
		return storedData ? JSON.parse(storedData) : initialMyData
	})

	useEffect(() => {
		const storedRecognitions = localStorage.getItem('recognitions')
		if (storedRecognitions) {
			try {
				const parsedData = JSON.parse(storedRecognitions)
				if (Array.isArray(parsedData)) {
					setRecognitions(parsedData)
				} else {
					console.warn('Stored recognitions is not an array, resetting.')
					localStorage.removeItem('recognitions')
				}
			} catch (error) {
				console.error('Error parsing recognitions from localStorage:', error)
				localStorage.removeItem('recognitions')
			}
		}
	}, [])

	useEffect(() => {
		if (recognitions.length > 0) {
			localStorage.setItem('recognitions', JSON.stringify(recognitions))
		} else {
			localStorage.removeItem('recognitions')
		}
	}, [recognitions])

	useEffect(() => {
		localStorage.setItem('myData', JSON.stringify(myData))
	}, [myData])

	const updateBlogData = (newRecognition: Recognition) => {
		setRecognitions(prev => [newRecognition, ...prev])
	}

	return (
		<div className='space-y-4'>
			<Card className='p-4 w-full bg-bgLightBox dark:bg-bgDarkBox mb-5'>
				<div className='flex items-center gap-2 w-full'>
					<div
						onClick={() => setShowRecognitionForm(true)}
						className='relative flex-1 cursor-pointer w-full'
					>
						<input
							readOnly
							placeholder='Start a post...'
							className='h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors disabled:opacity-50 md:text-sm pr-5 focus:outline-none'
						/>
						<div className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-emerald-600'>
							<Coins className='h-4 w-4' />
							<span className='text-sm font-medium'>{myData.coins}</span>
						</div>
					</div>

					<Button
						onClick={() => setShowRecognitionForm(true)}
						className='bg-blue-600 hover:bg-blue-700 cursor-pointer'
					>
						Give recognition
					</Button>
				</div>

				{showRecognitionForm && (
					<RecognitionForm
						setShowRecognitionForm={setShowRecognitionForm}
						updateBlogData={updateBlogData}
						setMyData={setMyData}
					/>
				)}
			</Card>

			<div className='flex flex-col gap-3 pb-5'>
				{recognitions.length > 0 &&
					recognitions.map(recognition => (
						<RecognationBlogs key={recognition.id} {...recognition} />
					))}
			</div>
		</div>
	)
}