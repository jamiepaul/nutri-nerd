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

const isStoredMacros = (value: unknown): value is StoredDayMacros => {
	const macros = value as StoredDayMacros;
	return (
		typeof value === 'object' &&
		value !== null &&
		typeof macros.id === 'string' &&
		typeof macros.protein === 'number' &&
		typeof macros.carbs === 'number' &&
		typeof macros.fat === 'number' &&
		(!('date' in macros) || typeof macros.date === 'string')
	);
};

const initialDailyMacros = (): StoredDayMacros[] => {
	const storedMacros = window.localStorage.getItem('daily-macros');

	if (storedMacros === null) {
		return [];
	}

	try {
		const parsedData = JSON.parse(storedMacros);

		if (!Array.isArray(parsedData)) {
			console.error('Stored macros are not an array');
			return [];
		}

		const validMacros = parsedData.filter(
			(item): item is StoredDayMacros => {
				if (!isStoredMacros(item)) {
					console.warn('Invalid macro entry found:', item);
					return false;
				}
				return true;
			}
		);

		return validMacros;
	} catch (error) {
		console.error('Error parsing stored macros:', error);
		return [];
	}
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
