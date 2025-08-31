function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header clasName="p-4 bg-gray-800">
        <h1 className="text-2xl font-bold"> Sam's portfolio</h1>
      </header>

      <main className="p-8 space-y-16">
        
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Sam</h2>
          <p className="text-lg text-gray-300">
            Software developer passionate about making games, apps, and learning new skills.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-bold"><a href="https://Github.com/samsteve123/RunForIt">Unity Horde Survival Game</a></h3>
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
            <div className="p-6 bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-bold">Other Projects</h3>
              <p className="text-gray-300 mt-2">
                Check out <a href="https://Github.com/samsteve123">my GitHub</a> for some other projects.
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <h2 className="text-3xl font-semibold p-6 text-center">My Resume</h2>
          <p className="text-gray-300 mt-2 bg-gray-800 shadow rounded-lg">
            <h3 className="text-center text-2xl font-bold mt-10 ">Software and Automation Testing Engineer (Systems Integration) - <a href="https://www.fortna.com/">FORTNA</a> (July, 2022 - Present):</h3>
            <ul class="list-disc p-8">
              <li>Responsible for thorough execution of testing at three sites for one of the company's largest programs, each of which is worth up to $600 million</li>
              <li>Facilitated cross team collaboration and communication between technical and non-technical personnel in order to deliver optimal solutions based on client requirements and constraints</li>
              <li>Designed and tested the integration of multiple software and hardware systems and communicated dysfunction to responsible parties</li>
              <li>Developed and deployed reusable project template in C++ with Bash and Python automation, reducing setup time by over 50% for future software launches</li>
              <li>Traveled to customer sites to oversee and execute solution installation, setup and problem solving</li>
              <li>Provided additional support to clients during peak demand periods to ensure prompt support and minimize downtime</li>
              <li>Completed the inaugural Software Development Leadership and Development Rotational Program</li>
            </ul>


            <h3 className="text-center text-2xl font-bold mt-10 ">Vehicle Software Engineer (Software Developer - Embedded Systems) - Dematic Mobile Automation (June, 2021 - June, 2022):</h3> 
              <ul class="list-disc p-8">
                <li>Lead engineer for development, testing and project execution of the device software for two AGV (automatic guided vehicle) projects, and support engineer on seven others</li>
                <li>Determined the best way to execute transports based on vehicle functionality, customer needs, and safety requirements</li>
                <li>Performed host system integration and system-level engineering</li>
                <li>Proactively communicated status, blockers, and concerns for the project to the team</li>
                <li>Analyzed and corrected legacy software to improve vehicle network connection reliability resulting in over 80% reduction in communication interruptions</li>
                <li>Collaborated with electrical, systems, and controls engineers to design and execute project strategies and develop efficient solutions</li>
                <li>Debugged and improved software performance by analyzing logs and system behavior, resulting in more stable AGV deployments</li>
                <li>Identified and reported problems with hardware and vehicle design, and assisted with the design and testing of solutions</li>
                <li>Reduced customer cost and downtime by recreating on-site environments in-house to improve software performance through remote testing</li>
              </ul>

Technical Skills:
Languages: Java, C, C++, Python, SQL, Assembly, Verilog, Pascal/Delphi  
Tools: Git, Jenkins, Jira, VMWare | OS: Windows, Linux  
Other: Multithreading/Concurrency, Agile/Scrum 

Education: BS Software Engineering, Michigan Tech (2020)
          </p>
        </section>

      </main>

      <footer className="p-4 bg-gray-800 text-center text-gray-400">
        © {new Date().getFullYear()} Sam - built with React + TailwindCSS
      </footer>
    </div>
  );
}

export default App;
