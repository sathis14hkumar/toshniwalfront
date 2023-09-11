import React from 'react';
import { withRouter } from 'next/router';
import { NormalButton } from '@/components/common/Inputs/NormalButton';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false, error: {} };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }

  componentDidCatch(error) {
    // You can use your own error logging service here

    this.setState({
      error,
    });
  }

  render() {
    const { hasError, error } = this.state;

    const { children, router } = this.props;

    const { dev } = router.query || {};

    // Check if the error is thrown
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <div className="d-flex flex-column align-items-center justify-content-center py-4">
            <div>
              <h1 className="text-center fw-600">Something went wrong :(</h1>
            </div>
            {dev === 'true' && <pre>{error?.message}</pre>}
            {dev === 'true' && <pre>{error?.stack}</pre>}
            <div className="action-btn w-100 mt-4 size-md mx-auto">
              <NormalButton
                className="w-100 fw-600"
                onClick={() => this.setState({ hasError: false })}
              >
                Try again?
              </NormalButton>
            </div>
          </div>
        </div>
      );
    }
    return children;
  }
}

export default withRouter(ErrorBoundary);
