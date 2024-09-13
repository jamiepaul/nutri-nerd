import { useContext } from 'react';
import { MacrosContext } from '../MacrosProvider/MacrosProvider';

import styles from './MacrosList.module.css';

function MacrosList() {
	console.log('MacrosList rendered');
	const { dailyMacros } = useContext(MacrosContext);
	return (
		<ul className={styles.list}>
			{dailyMacros.map((day) => (
				<li key={day.id} className={styles['list-item']}>
					<h3 className={styles.heading}>{day.date}</h3>
					<dl className={styles.values}>
						<div className={styles.value}>
							<dt>Protein</dt>
							<dd>{day.protein}</dd>
						</div>
						<div className={styles.value}>
							<dt>Carbs</dt>
							<dd>{day.carbs}</dd>
						</div>
						<div className={styles.value}>
							<dt>Fat</dt>
							<dd>{day.fat}</dd>
						</div>
					</dl>
				</li>
			))}
		</ul>
	);
}

export default MacrosList;
