import { useState, useContext } from 'react';
import { MacrosContext } from '../MacrosProvider/MacrosProvider';

import styles from './FormAddMacros.module.css';

function FormAddMacros() {
	console.log('FormAddMacros rendered');
	const { setMacros } = useContext(MacrosContext);
	const [date, setDate] = useState('');
	const [protein, setProtein] = useState('');
	const [carbs, setCarbs] = useState('');
	const [fat, setFat] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		setMacros({ date, protein, carbs, fat });

		// clear inupts
		setDate('');
		setProtein('');
		setCarbs('');
		setFat('');
	}

	return (
		<div className={styles.container}>
			<h2>Add Macros</h2>
			<p>Log values from last week</p>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.field}>
					<label htmlFor="date">Date</label>
					<input
						className={styles['input-wide']}
						type="text"
						id="date"
						name="date"
						required
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>

				<div className={styles['input-row']}>
					<div className={styles.field}>
						<label htmlFor="protein">Protein (g)</label>
						<input
							type="number"
							min="0"
							id="protein"
							name="protein"
							required
							value={protein}
							onChange={(e) => setProtein(e.target.value)}
						/>
					</div>
					<div className={styles.field}>
						<label htmlFor="carbs">Carbs (g)</label>
						<input
							type="number"
							min="0"
							id="carbs"
							name="carbs"
							required
							value={carbs}
							onChange={(e) => setCarbs(e.target.value)}
						/>
					</div>
					<div className={styles.field}>
						<label htmlFor="fat">Fat (g)</label>
						<input
							type="number"
							min="0"
							id="fat"
							name="fat"
							required
							value={fat}
							onChange={(e) => setFat(e.target.value)}
						/>
					</div>
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default FormAddMacros;
