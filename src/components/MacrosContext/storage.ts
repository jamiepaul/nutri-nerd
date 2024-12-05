import { StoredDayMacros } from './types';

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

export const initialDailyMacros = (): StoredDayMacros[] => {
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
