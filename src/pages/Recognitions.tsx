import { useState, useEffect } from 'react';
import Aside from '@/components/recognition/AsideRecogniton';
import RecognationsInput from '@/components/recognition/RecognationsInput';
import UserNavbar from '@/components/UserNavbar';
import RecognationBlogs from '@/components/recognition/RecognationBlogs';
import {blogData} from '@/helper/db';

type Blog = {
  team: boolean;
  id: number;
  points: number;
  author: {
    name: string;
    avatarImage: string;
    avatarFallback: string;
  };
  message: string;
  recognitionPoints: number;
  comments: {
    id: number;
    author: {
      name: string;
      avatarImage: string;
      avatarFallback: string;
    };
    message: string;
    points: number;
    timestamp: string;
  }[];
  mine?: boolean;
};

export default function Recognitions() {
  const savedActiveButton = localStorage.getItem('activeButton');
  const defaultButton =
    savedActiveButton === 'Company' || savedActiveButton === 'Team' || savedActiveButton === 'For You'
      ? savedActiveButton
      : 'Company';

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [activeButton, setActiveButton] = useState(defaultButton);

  useEffect(() => {
    const filteredBlogs =
      activeButton === 'Company'
        ? blogData
        : activeButton === 'Team'
        ? blogData.filter(item => item.team)
        : blogData.filter(item => item.mine);

    setBlogs(filteredBlogs);
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

  return (
    <>
      <UserNavbar />

      <div className='py-5 px-5 flex items-start gap-5 w-full'>
        <Aside activeButton={activeButton} setActiveButton={setActiveButton} />

        <div className='w-full'>
          <RecognationsInput />

          <div className='flex items-center flex-col gap-5'>
            {blogs.map(item => (
              <RecognationBlogs
                key={item.id}
                points={item.points}
                author={item.author}
                message={item.message}
                recognitionPoints={item.recognitionPoints}
                comments={item.comments}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
