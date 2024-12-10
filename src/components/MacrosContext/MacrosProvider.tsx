import { useState, useEffect, PropsWithChildren } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NewDayMacros, StoredDayMacros } from './types';
import { initialDailyMacros } from './storage';
import { MacrosContext } from './MacrosContext';

const MacrosProvider = ({ children }: PropsWithChildren): JSX.Element => {
	const [dailyMacros, setDailyMacros] =
		useState<StoredDayMacros[]>(initialDailyMacros);

	useEffect(() => {
		window.localStorage.setItem(
			'daily-macros',
			JSON.stringify(dailyMacros)
		);
	}, [dailyMacros]);

	const addEntry = ({ date, protein, carbs, fat }: NewDayMacros): void => {
		// ensure valid inputs
		if (protein < 0 || carbs < 0 || fat < 0 || !date?.trim()) {
			//TODO throw error
			alert('Invalid input values.');
			return;
		}

		setDailyMacros([
			...dailyMacros,
			{
				id: uuidv4(),
				date,
				protein,
				carbs,
				fat,
			},
		]);
	};

	const removeEntry = (id: string): void => {
		setDailyMacros(dailyMacros.filter((entry) => entry.id !== id));
	};

	const removeAllEntries = (): void => {
		setDailyMacros([]);
	};

	return (
		<MacrosContext.Provider
			value={{ addEntry, removeEntry, removeAllEntries, dailyMacros }}
		>
			{children}
		</MacrosContext.Provider>
	);
};

export default MacrosProvider;
