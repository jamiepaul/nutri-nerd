import {
	createContext,
	useState,
	useEffect,
	PropsWithChildren,
	useContext,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

export type DayMacros = {
	id?: string;
	date?: string;
	protein: number;
	carbs: number;
	fat: number;
};

type MacrosContextState = {
	dailyMacros: DayMacros[];
	addEntry: (entry: DayMacros) => void;
	removeEntry: (id: string | undefined) => void;
	removeAllEntries: () => void;
};

const MacrosContext = createContext<MacrosContextState | undefined>(undefined);

export const useMacrosContext = () => {
	const context = useContext(MacrosContext);
	if (!context) {
		throw new Error(
			'useMacrosContext must be used within a MacrosProvider'
		);
	}
	return context;
};

const initialDailyMacros = (): DayMacros[] => {
	const storedMacros = window.localStorage.getItem('daily-macros');

	if (storedMacros === null) {
		return [];
	}

	return JSON.parse(storedMacros) as DayMacros[];
};

const MacrosProvider = ({ children }: PropsWithChildren): JSX.Element => {
	const [dailyMacros, setDailyMacros] =
		useState<DayMacros[]>(initialDailyMacros);

	useEffect(() => {
		window.localStorage.setItem(
			'daily-macros',
			JSON.stringify(dailyMacros)
		);
	}, [dailyMacros]);

	const addEntry = ({ date, protein, carbs, fat }: DayMacros): void => {
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

	const removeEntry = (id: string | undefined): void => {
		if (!id) {
			console.warn('Unable to remove entry without providing the ID');
			return;
		}

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
