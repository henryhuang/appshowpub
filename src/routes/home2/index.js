import React from 'react';
import Home2 from './Home2';

export const path = '/';
export const action = async (state) => {
  const title = 'APP SHOW PUB';
  state.context.onSetTitle(title);
  return <Home2 title={title} />;
};
