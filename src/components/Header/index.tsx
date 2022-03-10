import Link from 'next/link';

import commonStyles from '../../styles/common.module.scss';
import headerStyles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={commonStyles.main}>
      <section className={headerStyles.header}>
        <Link href="/">
          <a className={headerStyles.content}>
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>
      </section>
    </header>
  );
};

export default Header;
