import { createContext, useState, useMemo, useEffect } from "react";

export const MacrosContext = createContext();

function MacrosProvider({ children }) {
	console.log('MacrosProvider rendered');
	const [dailyMacros, setDailyMacros] = useState(() => {
		const storedMacros = window.localStorage.getItem('daily-macros');
		return JSON.parse(storedMacros) || [];
	});

	useEffect(() => {
		window.localStorage.setItem('daily-macros', JSON.stringify(dailyMacros));
	}, [dailyMacros]);

	const value = useMemo(() => {
		function addEntry({ date, protein, carbs, fat }) {
			setDailyMacros([
				...dailyMacros,
				{
					id: crypto.randomUUID(),
					date,
					protein,
					carbs,
					fat,
				},
			]);
		}

		function removeEntry(id) {
			if (!id) {
				console.warn('Unable to remove entry without providing the ID');
				return;
			}

			const nextDailyMacros = dailyMacros.filter((entry) => {
				return entry.id !== id;
			});
			setDailyMacros(nextDailyMacros);
		}

		function removeAllEntries() {
			setDailyMacros([]);
		}

		return { dailyMacros, addEntry, removeEntry, removeAllEntries };
	}, [dailyMacros]);

	console.log(dailyMacros);

	return (
		<MacrosContext.Provider value={value}>
			{children}
		</MacrosContext.Provider>
	);
}

export default MacrosProvider;
