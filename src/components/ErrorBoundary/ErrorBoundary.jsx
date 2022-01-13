import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <h1>Something went wrong! Please refresh page.</h1>
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary
