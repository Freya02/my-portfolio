import { Inter, Orbitron } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-heading', weight: ['400', '700', '900'], display: 'swap' });

export const metadata = {
  title: 'AI Portfolio | Exploring Antigravity',
  description: 'AI Portfolio exploring the intersection of AI and Development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} scroll-smooth`}>
      <body>
        {/* Background Elements */}
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
        <div className="grid-overlay"></div>

        {/* Navigation */}
        <nav className="glass-nav">
          <div className="nav-content">
            <div className="logo">FREYA VORA</div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#awards">Awards</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
