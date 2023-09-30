import React, { useState, useCallback, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import SideNav from '../components/SideNav';
import TopNav from '../components/TopNav';
import { useGetUserQuery, useLogoutMutation } from '../services/authentication';
import { styled } from '@mui/material/styles';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
});

const PortalLayout = ({ children }) => {
  const { isLoading, isFetching, isError } = useGetUserQuery();
  const [openNav, setOpenNav] = useState(false);

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  // useEffect(() => {
  //   handlePathnameChange();
  // }, []);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Navigate to='/login'></Navigate>;
  }

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
      {/* <Button onClick={logoutUser}>Logout</Button> */}
    </>
  );
};

export default PortalLayout;