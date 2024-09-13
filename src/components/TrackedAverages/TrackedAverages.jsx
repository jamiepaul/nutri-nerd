import { useContext, useMemo } from 'react';
import { MacrosContext } from '../MacrosProvider/MacrosProvider';
import { average } from '../../helpers/math.helpers';

import styles from './TrackedAverages.module.css';

function TrackedAverages() {
	console.log('TrackedAverages rendered');
	const { dailyMacros } = useContext(MacrosContext);

	const avg = useMemo(() => {
		const avgProtein = average(dailyMacros.map(entry => entry.protein));
		const avgCarbs = average(dailyMacros.map(entry => entry.carbs));
		const avgFat = average(dailyMacros.map(entry => entry.fat));

		return {
			protein: avgProtein,
			carbs: avgCarbs,
			fat: avgFat
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
}

export default TrackedAverages;
