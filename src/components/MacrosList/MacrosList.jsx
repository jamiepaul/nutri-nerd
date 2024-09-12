import { PREV_MACROS } from './MacrosList.constants';
import styles from './MacrosList.module.css';

// function getAverage() {

// }

function MacrosList() {
	return (
		<>
			<p>TODO: display averages from last week</p>
			<div className={styles.average}>
				<h2>Averages</h2>
				<p>From X to X (todo add dates)</p>
				<dl className={styles['macro-values']}>
					<div className={styles.macro}>
						<dt>Protein</dt>
						<dd>130</dd>
					</div>
					<div className={styles.macro}>
						<dt>Carbs</dt>
						<dd>200</dd>
					</div>
					<div className={styles.macro}>
						<dt>Fat</dt>
						<dd>55</dd>
					</div>
				</dl>
			</div>

			{PREV_MACROS.map((day) => (
				<article key={day.id} className={styles.day}>
					<h3>{day.date}</h3>
					<dl className={styles['macro-values']}>
						<div className={styles.macro}>
							<dt>Protein</dt>
							<dd>{day.protein}</dd>
						</div>
						<div className={styles.macro}>
							<dt>Carbs</dt>
							<dd>{day.carb}</dd>
						</div>
						<div className={styles.macro}>
							<dt>Fat</dt>
							<dd>{day.fat}</dd>
						</div>
					</dl>
				</article>
			))}
		</>
	);
}

export default MacrosList;
