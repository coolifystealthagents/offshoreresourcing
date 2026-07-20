import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://offshoreresourcing.com'), title: { default: 'Offshore Resourcing | Offshore outsourcing guides', template: '%s | Offshore Resourcing' }, description: 'Stealth Agents-style guides for offshore resourcing: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Offshore Resourcing', description: 'Practical outsourcing guides for business teams.', url: 'https://offshoreresourcing.com', siteName: 'Offshore Resourcing', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
