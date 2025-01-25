import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MessageSquare, Plus, ThumbsUp } from 'lucide-react'
import { BiSolidLike } from 'react-icons/bi'
import { FaRegSmile } from 'react-icons/fa'
import { GiQueenCrown } from 'react-icons/gi'

interface Author {
	name: string
	avatarImage: string
}

interface Comment {
	id: number
	author: Author
	message: string
	points: number
	timestamp: string
}

interface RecognationBlogsProps {
	points: number
	author: Author
	message: string
	recognitionPoints: number
	comments: Comment[]
}

export default function RecognationBlogs({
	points,
	author,
	message,
	recognitionPoints,
	comments,
}: RecognationBlogsProps) {
	// State to manage likes
	const [liked, setLiked] = useState(false)
	const [likeCount, setLikeCount] = useState(0)

	const sanitizedMessage = message
		.replace(/\[Sticker: Fire\]/g, '')
		.replace(/\[Sticker: Good\]/g, '')
		.replace(/\[Sticker: Crown\]/g, '')

	const stickerUrl = message.includes('[Sticker: Crown]') ? (
		<GiQueenCrown className='text-xl text-yellow-600' />
	) : message.includes('[Sticker: Good]') ? (
		<BiSolidLike className='text-xl text-red-600' />
	) : message.includes('[Sticker: Fire]') ? (
		<FaRegSmile className='text-xl text-green-600' />
	) : null

	// Handle like button click
	const handleLikeClick = () => {
		setLiked(!liked)
		setLikeCount(liked ? likeCount - 1 : likeCount + 1) // Increment or decrement like count
	}

	return (
		<Card className='w-full p-4 bg-bgLightBox dark:bg-bgDarkBox'>
			<div className='space-y-6'>
				<div className='flex items-center justify-start gap-3'>
					<div className='h-8 w-8 rounded-full overflow-hidden'>
						<img
							src={author.avatarImage}
							alt={author.name}
							className='object-cover w-full h-full'
						/>
					</div>
					<div className='bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full text-sm font-medium'>
						+{points}
					</div>
				</div>

				<div className='space-y-2 flex items-center gap-2'>
					<span>{stickerUrl}</span>
					<p className='text-sm'>
						<span className='text-blue-500'>{sanitizedMessage}</span>{' '}
						<span className='inline-flex items-center bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full text-sm font-medium'>
							+{recognitionPoints}
						</span>
					</p>
				</div>

				<div className='flex gap-2'>
					<Button
						variant='outline'
						size='sm'
						className='flex items-center gap-2'
					>
						<MessageSquare className='h-4 w-4' />
						Comment
					</Button>
					<Button
						variant='outline'
						size='sm'
						className='flex items-center gap-2'
					>
						<Plus className='h-4 w-4' />
						Add-On
					</Button>
					<Button
						variant={liked ? 'default' : 'outline'} 
						size='sm'
						className='flex items-center gap-2 ml-auto'
						onClick={handleLikeClick}
					>
						<ThumbsUp className='h-4 w-4' />
						{liked ? 'Liked' : 'Like'} ({likeCount})
					</Button>
				</div>

				{comments && (
					<div className='space-y-4'>
						<div className='flex justify-between items-center text-sm text-muted-foreground'>
							<button className='hover:underline'>
								View previous comments
							</button>
							<span>{comments.length} comment(s)</span>
						</div>

						{comments.map(comment => (
							<div key={comment.id} className='flex gap-3'>
								<div className='h-8 w-8 rounded-full overflow-hidden'>
									<img
										src={comment.author.avatarImage}
										alt={comment.author.name}
										className='object-cover w-full h-full'
									/>
								</div>
								<div className='flex-1'>
									<div className='bg-muted p-3 rounded-lg'>
										<div className='flex items-center gap-2 mb-1'>
											<span className='font-medium text-sm'>
												{comment.author.name}
											</span>
											<span className='text-xs text-muted-foreground'>
												{comment.timestamp}
											</span>
										</div>
										<div className='flex items-center gap-2'>
											<span className='bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-xs font-medium'>
												+{comment.points}
											</span>
											<p className='text-sm'>{comment.message}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</Card>
	)
}
