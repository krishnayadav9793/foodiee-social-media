import React from 'react';
import FoodieLoginCard from './login';
import { StarsBackground } from '../animate-ui/components/backgrounds/stars';

const FoodieLogin = () => {
 
  return (
   <StarsBackground
               
               className={(
                   'absolute inset-0 flex items-center justify-center rounded-xl',
                   'dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)]','flex flex-col'
               )}
           >  
            <FoodieLoginCard/>
           </StarsBackground>
  );
};

export default FoodieLogin;