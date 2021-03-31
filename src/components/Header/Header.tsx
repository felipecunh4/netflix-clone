import Image from 'next/image';

import { IHeaderProps } from './types';

import scss from './Header.module.scss';

import Netflix from './images/netflix.svg';

const Header = (props: IHeaderProps) => {
  const headerClass = [scss.header];

  if (props.bgBlack) {
    headerClass.push(scss.bgBlack);
  }

  return (
    <header className={headerClass.join(' ')}>
      <div className={scss.logo}>
        <a href="/">
          <Netflix />
        </a>
      </div>

      <div className={scss.user}>
        <Image
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          width={50}
          height={50}
          className={scss.userImg}
        />
      </div>
    </header>
  );
};

export default Header;
