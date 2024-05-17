import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
            <img src="/assets/logo/small.gif" alt="Logo" />
          </Link>
          <ul className="footer-menu">
            <li>
              <Link href="https://twitter.com/solchewglass">Twitter</Link>
            </li>
            <li>
              <Link href="https://t.me/chewglass">Telegram</Link>
            </li>
          </ul>
          <p className="copyright">
             <span>$ChewGlass Token</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
