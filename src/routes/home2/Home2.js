import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home2.scss';

function Home2({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

Home2.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Home2, s);
