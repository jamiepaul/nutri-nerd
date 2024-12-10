export type NewDayMacros = {
	date?: string;
	protein: number;
	carbs: number;
	fat: number;
};

export type StoredDayMacros = {
	id: string;
	date?: string;
	protein: number;
	carbs: number;
	fat: number;
};

export type MacrosContextState = {
	dailyMacros: StoredDayMacros[];
	addEntry: (entry: NewDayMacros) => void;
	removeEntry: (id: string) => void;
	removeAllEntries: () => void;
};
