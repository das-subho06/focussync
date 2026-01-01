'use client';
//import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import {TooltipProvider} from '@/components/ui/tooltip';
import {useState} from 'react';
import {useEffect} from 'react';
export default function Providers({children}: {children: React.ReactNode}){
    //const [queryClient] = useState( () => new QueryClient() );
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Trigger the animation immediately after the component mounts
        setIsVisible(true);
    }, []);
    return (
        //<QueryClientProvider client={queryClient}>
        <div className={`
        transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}>
            <TooltipProvider>
                 {children}
            </TooltipProvider>
        </div>
        //</QueryClientProvider>

    );
}
