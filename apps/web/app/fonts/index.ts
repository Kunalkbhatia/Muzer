import { DM_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'

export const fontHeading = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
  })
  
export const fontBody = Space_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
    weight: ['400', '700'],
  })