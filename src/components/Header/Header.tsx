import React from 'react';
import HeaderWrapper from './Header.style';
import { Menu } from './Menu/Menu';

type Props = {
  className?: string;
  token?: string;
  pathname?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  return (
    <HeaderWrapper className={className}>
      <Menu logo="https://bankingthefuture.com/wp-content/uploads/2019/04/dummylogo.jpg" />
    </HeaderWrapper>
  );
};

export default Header;
