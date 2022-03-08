import commonStyles from '../../styles/common.module.scss';
import headerStyles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <section className={commonStyles.main}>
      <div className={headerStyles.header}>
        <img src="/logo.svg" alt="logo" />
      </div>
    </section>
  );
};

export default Header;
