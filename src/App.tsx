import { FeatureFlags } from "./components/FeatureFlags"
import { Header } from "./components/Header"
import TableFeatures from "./components/FeatureFlagsTable/TableFeatures"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 h-35 backdrop-blur-2xl border-b border-gray-100 bg-linear-to-br from-gray-900 to-slate-90">
        <Header />
      </header>
      <div className="flex flex-1 pt-35 bg-linear-to-br from-gray-800 to-slate-90">
        {/* Sidebar */}
        <aside className="w-74 border-r p-2 ">
          <FeatureFlags />
        </aside>
        <main className="flex-1 p-8 w-375">
            <TableFeatures />
        </main>
      </div>
    </div>
  )
}

export default App
