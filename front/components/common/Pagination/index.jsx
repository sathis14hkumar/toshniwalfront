import classes from './pagination.module.scss';

export default function PaginationComponent({
  active = 5,
  items = [1, 2, 3, 4, 5],
  onClick,
}) {
  const hidePrevBtn = active < 2 ? 'd-none' : '';
  const hideNextBtn = active == items.length ? 'd-none' : '';
  const lastIndex = items.length;
  return (
    <div className={classes.paginationWrap}>
      <ul className={'pagination pagination-md'}>
        <li className={`page-item ${hidePrevBtn}`}>
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        {items.map((item, i) => {
          const nextNumber = i + 1;
          const activeClass = active === nextNumber ? classes.active : '';
          const rightRadius =
            lastIndex === nextNumber ? classes.rightRadius : '';
          const leftRadius = active < 2 ? classes.leftRadius : '';
          return (
            <li key={`pagination_${i}`} className={`page-item ${activeClass} `}>
              <a
                className={`page-link ${rightRadius} ${leftRadius}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onClick(nextNumber);
                }}
              >
                {nextNumber}
              </a>
            </li>
          );
        })}
        <li class={`page-item ${hideNextBtn}`}>
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}
