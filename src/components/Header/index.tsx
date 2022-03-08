import commonStyles from '../../styles/common.module.scss';
import headerStyles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <section className={commonStyles.main}>
      <a href="/" className={headerStyles.header}>
        <img src="/logo.svg" alt="logo" />
      </a>
    </section>
  );
};

export default Header;
