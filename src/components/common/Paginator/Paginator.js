import React from 'react';
import styles from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => (
        <span
          key={p}
          className={
            currentPage === p && styles.selectedPage 
          }
          onClick={() => {
            onPageChanged(p);
          }}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
