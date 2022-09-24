import React from 'react';

import '@app/theme/styles';
import { Products } from '@app/features';
import { Header, Main, Footer } from '@app/layouts';

import { Title } from '@components';

export const App = () => {
  const date = new Date();
  const year = date.toLocaleString('EN', { year: 'numeric' });

  return (
    <>
      <Header>
        <Title type="h1" size="h1" variant="thin" color="white">
          Products
        </Title>
      </Header>
      <Main>
        <Products />
      </Main>
      <Footer>
        <Title type="h4" size="h4" variant="thin" color="white">
          &copy; {year} by Victor Kasap
        </Title>
      </Footer>
    </>
  );
};
