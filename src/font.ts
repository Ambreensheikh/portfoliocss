import { Caveat, Inter } from 'next/font/google';


 export const caveatFont = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'], // You can specify the weights you need
  variable: '--font-caveat',
});


export const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // You can specify the weights you need
  variable: '--font-inter',
});


