import styles from './App.module.css';
import Header from '../Header';
import FormAddMacros from '../FormAddMacros';
import MacrosList from '../MacrosList';
import TrackedAverages from '../TrackedAverages/TrackedAverages';
import MacrosProvider from '../MacrosProvider/MacrosProvider';

function App() {
	return (
		<>
			<Header />
			<MacrosProvider>
				<main className={styles.main}>
					<section className={styles.split}>
						<FormAddMacros />
						<MacrosList />
					</section>
					<section className={styles.split}>
						<TrackedAverages />
					</section>
				</main>
			</MacrosProvider>
		</>
	);
}

export default App;
