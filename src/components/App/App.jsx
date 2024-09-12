import styles from './App.module.css';
import Header from '../Header';
import FormAddMacros from '../FormAddMacros';
import MacrosList from '../MacrosList';
import MacrosProvider from '../MacrosProvider/MacrosProvider';

function App() {
  console.log('App rendered');
	return (
		<MacrosProvider>
			<Header />
			<main className={styles.main}>
        <section className={styles.split}>
          <FormAddMacros />
        </section>
				<section className={styles.split}>
          <MacrosList />
				</section>
			</main>
		</MacrosProvider>
	);
}

export default App;
