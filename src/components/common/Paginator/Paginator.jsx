import React from 'react';
import s from "./Paginator.module.css";

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages
                .slice(0, 30)
                .map(p => {
                    return <span
                        className={currentPage === p && s.selectedPage}
                        onClick={() => onPageChanged(p)}>
                            {p}</span>
                })}
        </div>
    );
}

export default Paginator;