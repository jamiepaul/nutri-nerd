import { useMemo } from 'react';
import { average } from '../../helpers/math.helpers';

import styles from './TrackedAverages.module.css';
import { useMacrosContext } from '../MacrosContext/MacrosContext';

const TrackedAverages = (): JSX.Element => {
	const { dailyMacros } = useMacrosContext();

	const avg = useMemo(() => {
		if (dailyMacros.length === 0) {
			return {
				protein: 0,
				carbs: 0,
				fat: 0,
			};
		}

		return {
			protein: average(dailyMacros.map((entry) => entry.protein)),
			carbs: average(dailyMacros.map((entry) => entry.carbs)),
			fat: average(dailyMacros.map((entry) => entry.fat)),
		};
	}, [dailyMacros]);

	return (
		<div className={styles.average}>
			<h2>Tracked Averages</h2>
			<p>From X to X (todo add dates)</p>
			<dl className={styles.values}>
				<div className={styles.value}>
					<dt>Protein</dt>
					<dd>{Math.round(avg.protein)}</dd>
				</div>
				<div className={styles.value}>
					<dt>Carbs</dt>
					<dd>{Math.round(avg.carbs)}</dd>
				</div>
				<div className={styles.value}>
					<dt>Fat</dt>
					<dd>{Math.round(avg.fat)}</dd>
				</div>
			</dl>
		</div>
	);
};

export default TrackedAverages;
