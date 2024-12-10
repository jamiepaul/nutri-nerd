import { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

type State = {
	hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_error: Error): State {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo): void {
		console.error('ErrorBoundary caught an error', error, info);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return (
				<div className="errorr-boundary">
					<h2>Could not display this component.</h2>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
