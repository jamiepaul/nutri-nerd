import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './Header.module.css';

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles['logo-row']}>
				<a href="https://vitejs.dev" target="_blank">
					<img
						src={viteLogo}
						className={styles.logo}
						alt="Vite logo"
					/>
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className={`${styles.logo} ${styles.react}`}
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Nutri&#8226;Nerd</h1>
		</header>
	);
};

export default Header;
