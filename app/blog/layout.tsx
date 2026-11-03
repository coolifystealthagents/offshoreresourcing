import type { ReactNode } from 'react';
import { BlogBanner } from '../blog-banners';
import { Footer, Header } from '../components';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>
    <Header />
    {children}
    <BlogBanner position="bottom" />
    <Footer />
  </>;
}
