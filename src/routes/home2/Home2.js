import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home2.scss';

function Home2({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <ul className={s.social}>
          <li>
            <a href="http://weibo.com/626242034" target="_blank">微博</a>
          </li>
          <li>
            <a href="https://github.com/henryhuang" target="_blank">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/henryhuang1886" target="_blank">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Home2.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Home2, s);
