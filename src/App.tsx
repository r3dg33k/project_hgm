
import { Component, type ErrorInfo, type ReactNode } from "react";

import StoryLayout from "./components/layout/StoryLayout";

import "./styles/globals.css";
import "./styles/story.css";
import "./styles/chapters.css";
import "./styles/animations.css";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      "Story application error:",
      error,
      info.componentStack
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-page">
          <div className="error-page-content">
            <span className="error-heart">♡</span>

            <h1>Our story is taking a little moment.</h1>

            <p>
              Something unexpected happened while
              opening this memory.
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
            >
              Return to our story
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <StoryLayout />
    </ErrorBoundary>
  );
}
