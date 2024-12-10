import styles from './App.module.css';
import Header from '../Header';
import FormAddMacros from '../FormAddMacros';
import MacrosList from '../MacrosList';
import TrackedAverages from '../TrackedAverages/TrackedAverages';
import MacrosProvider from '../MacrosContext/MacrosProvider';
import ErrorBoundary from '../ErrorBoundary';

const App = (): JSX.Element => {
	return (
		<>
			<Header />
			<ErrorBoundary>
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
			</ErrorBoundary>
		</>
	);
};

export default App;
