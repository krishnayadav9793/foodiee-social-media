"use client"
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';
import { cn } from '@/lib/utils';
// import { useTheme } from 'next-themes';
import useTheme from 'next-theme';
import { ButtonDemo } from './EmptyButton';
import { Typewriter } from "react-simple-typewriter";
import { redirect } from 'next/navigation';
export const HomePage = () => {
    const { resolvedTheme } = useTheme();

    return (
        <StarsBackground
            starColor={'#FFF'}
            className={cn(
                'absolute inset-0 flex items-center justify-center ',
                'bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] text-white','flex flex-col gap-12'
            )}
        >   <div className='text-4xl'>
                
                    <Typewriter
                        words={["Dummy data is given", "Build Scalable", "Build Modern"]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={40}
                    />
                
                
            </div>
            <div className='flex gap-2 text-black'>
                <div onClick={()=>redirect("./signup")}>
                    <ButtonDemo content="Signup"  />
                </div>
                <div onClick={()=>redirect("./login")}>
                    <ButtonDemo content="Login" />
                </div>
                
            </div>
            

        </StarsBackground>
    );
};