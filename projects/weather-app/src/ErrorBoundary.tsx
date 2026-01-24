import { Component, type PropsWithChildren } from 'react';

interface State {
    error: any
}

type Props = PropsWithChildren & {
  className?: string;
}

export class ErrorBoundary extends Component<Props, State> {
  state = { error: null as any };

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className={this.props.className}>
          <h2>Could not load data.</h2>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}