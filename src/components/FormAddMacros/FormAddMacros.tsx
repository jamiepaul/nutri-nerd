import { useState, useContext, FormEvent, MouseEvent } from 'react';
import { MacrosContext } from '../MacrosProvider/MacrosProvider';

import { random } from '../../helpers/math.helpers';
import styles from './FormAddMacros.module.css';
import { SymbolIcon } from '@radix-ui/react-icons';

const FormAddMacros = (): JSX.Element => {
	const { addEntry } = useContext(MacrosContext);
	const [date, setDate] = useState('');
	const [protein, setProtein] = useState(0);
	const [carbs, setCarbs] = useState(0);
	const [fat, setFat] = useState(0);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		addEntry({ date, protein, carbs, fat });

		// clear inupts
		setDate('');
		setProtein(0);
		setCarbs(0);
		setFat(0);
	}

	function addRandomEntry(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		addEntry({
			date: 'Example',
			protein: random(116, 132),
			carbs: random(185, 215),
			fat: random(50, 65),
		});
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
							onChange={(e) => setProtein(e.target.valueAsNumber)}
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
							onChange={(e) => setCarbs(e.target.valueAsNumber)}
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
							onChange={(e) => setFat(e.target.valueAsNumber)}
						/>
					</div>
				</div>

				<div className={styles['btn-row']}>
					<button type="submit">Submit</button>
					<button
						type="button"
						className={styles['btn-random']}
						onClick={addRandomEntry}
					>
						Generate Random
						<SymbolIcon />
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormAddMacros;
