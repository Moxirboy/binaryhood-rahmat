import { Button } from '@/components/ui/button';
import { Building2, Users, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AsideProps {
  activeButton: string;
  setActiveButton: (button: string) => void;
}

export default function Aside({ activeButton, setActiveButton }: AsideProps) {
  const navigate = useNavigate();

  const buttonStyles = (buttonName: string) =>
    `w-full justify-start gap-2 ${
      activeButton === buttonName ? 'bg-accent text-accent-foreground' : ''
    }`;

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === 'Profile') {
      navigate('/profile');
    }
  };

  return (
    <div className='w-[300px] bg-background border-r bg-bgLightBox dark:bg-bgDarkBox rounded-lg p-4 shadow-md'>
      <nav className='space-y-2 mb-2 pb-2'>
        <Button
          variant='ghost'
          className={buttonStyles('Company')}
          onClick={() => handleClick('Company')}
        >
          <Building2 className='h-4 w-4' />
          Company
        </Button>
        <Button
          variant='ghost'
          className={buttonStyles('Team')}
          onClick={() => handleClick('Team')}
        >
          <Users className='h-4 w-4' />
          Team
        </Button>
        <Button
          variant='ghost'
          className={buttonStyles('For You')}
          onClick={() => handleClick('For You')}
        >
          <User className='h-4 w-4' />
          For You
        </Button>
      </nav>
    </div>
  );
}