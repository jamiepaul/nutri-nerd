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

	// console.log(dailyMacros);

	const value = useMemo(() => {
		function setMacros({ date, protein, carbs, fat }) {
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

		return { dailyMacros, setMacros };
	}, [dailyMacros]);

	return (
		<MacrosContext.Provider value={value}>
			{children}
		</MacrosContext.Provider>
	);
}

export default MacrosProvider;
