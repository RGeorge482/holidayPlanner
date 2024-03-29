import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Holiday Planner</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Destinations</Link>
          </li>
          <li>
            <Link href='/new-location'>Add New Destination</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
