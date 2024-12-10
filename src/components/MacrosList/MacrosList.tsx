import { useMacrosContext } from '../MacrosContext/MacrosContext';
import { Cross2Icon, TrashIcon } from '@radix-ui/react-icons';
import styles from './MacrosList.module.css';
import { MacrosContextState } from '../MacrosContext/types';

const MacrosList = (): JSX.Element | null => {
	const { dailyMacros, removeEntry, removeAllEntries }: MacrosContextState =
		useMacrosContext();

	if (dailyMacros.length <= 0) {
		return null;
	}

	console.log(dailyMacros);

	return (
		<aside className={styles['macros-list']}>
			<button className={styles.reset} onClick={removeAllEntries}>
				Clear All
				<TrashIcon />
			</button>
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
						<button
							className={styles.button}
							onClick={() => removeEntry(day.id)}
						>
							<Cross2Icon width="20" height="20" />
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default MacrosList;
