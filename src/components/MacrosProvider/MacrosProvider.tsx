import {
	createContext,
	useState,
	useEffect,
	PropsWithChildren,
	useContext,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

type NewDayMacros = {
	date?: string;
	protein: number;
	carbs: number;
	fat: number;
};

type StoredDayMacros = NewDayMacros & {
	id: string;
};

type MacrosContextState = {
	dailyMacros: StoredDayMacros[];
	addEntry: (entry: NewDayMacros) => void;
	removeEntry: (id: string) => void;
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

const initialDailyMacros = (): StoredDayMacros[] => {
	const storedMacros = window.localStorage.getItem('daily-macros');

	if (storedMacros === null) {
		return [];
	}

	return JSON.parse(storedMacros) as StoredDayMacros[];
};

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
