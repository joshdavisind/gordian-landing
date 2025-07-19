import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          FeathersJS + ShadCN
        </h1>
        <p className="text-muted-foreground">
          Full-stack development environment
        </p>
        <div className="space-y-4">
          <button
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
          <p className="text-sm text-muted-foreground">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App