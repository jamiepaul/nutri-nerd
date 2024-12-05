import { createContext, useContext } from 'react';
import { MacrosContextState } from './types';

export const MacrosContext = createContext<MacrosContextState | undefined>(
	undefined
);

export const useMacrosContext = () => {
	const context = useContext(MacrosContext);
	if (!context) {
		throw new Error(
			'useMacrosContext must be used within a MacrosProvider'
		);
	}
	return context;
};
