import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://offshoreresourcing.com'), title: { default: 'Offshore Resourcing | Plan offshore roles', template: '%s | Offshore Resourcing' }, description: 'Guides and role-planning help for companies hiring offshore staff in admin, support, finance, and tech.', alternates: { canonical: './' }, openGraph: { title: 'Offshore Resourcing', description: 'Plan the role, access, and first weeks of offshore work before you hire.', url: 'https://offshoreresourcing.com', siteName: 'Offshore Resourcing', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
