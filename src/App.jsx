function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header clasName="p-4 bg-gray-800">
        <h1 className="text-2x1 font-bold"> Sam's portfolio</h1>
      </header>

      <main className="p-8 space-y-16">
        
        <section className="text-center">
          <h2 className="text-4x1 font-bold mb-4">Hi, I'm Sam</h2>
          <p className="text-lg text-gray-300">
            Software developer passionate about making games, apps, and learning new skills.
          </p>
        </section>

        <section>
          <h2 className="text-3x1 font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-gray-800 rounded-lg shadow">
              <h3 className="text-x1 font-bold">Unity Horde Survival Game</h3>
              <p className="text-gray-300 mt-2">
                A 2D horde survival game built on the Unity game engine with custom mechanics written in C#.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-bold">Java SE 21 Prep</h3>
              <p className="text-gray-300 mt-2">
                Study materials and projects while preparing for the Oracle Certified Professional exam.
              </p>
            </div>
          </div>
        </section>
      
      </main>

      <footer className="p-4 bg-gray-800 text-center text-gray-400">
        © {new Date().getFullYear()} Sam - built with React + TailwindCSS
      </footer>
    </div>
  );
}

export default App;
