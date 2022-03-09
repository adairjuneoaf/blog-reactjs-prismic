import commonStyles from '../../styles/common.module.scss';
import headerStyles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={commonStyles.main}>
      <section className={headerStyles.header}>
        <a href="/" className={headerStyles.content}>
          <img src="/logo.svg" alt="logo" />
        </a>
      </section>
    </header>
  );
};

export default Header;
