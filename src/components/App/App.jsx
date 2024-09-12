import styles from './App.module.css';
import Header from '../Header';
import FormAddMacros from '../FormAddMacros';
import MacrosList from '../MacrosList';

function App() {
	return (
		<>
			<Header />
			<main>
        <FormAddMacros />
				<div>
          <MacrosList />
				</div>
			</main>
		</>
	);
}

export default App;
