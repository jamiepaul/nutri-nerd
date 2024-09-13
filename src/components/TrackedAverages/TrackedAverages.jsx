import styles from './TrackedAverages.module.css';

// function getAverage() {

// }

function TrackedAverages() {
	console.log('TrackedAverages rendered');

	return (
		<div className={styles.average}>
			<h2>Averages</h2>
			<p>From X to X (todo add dates)</p>
			<dl className={styles.values}>
				<div className={styles.value}>
					<dt>Protein</dt>
					<dd>130</dd>
				</div>
				<div className={styles.value}>
					<dt>Carbs</dt>
					<dd>200</dd>
				</div>
				<div className={styles.value}>
					<dt>Fat</dt>
					<dd>55</dd>
				</div>
			</dl>
		</div>
	);
}

export default TrackedAverages;
