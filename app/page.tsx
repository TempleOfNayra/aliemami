import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Ali Emami
          </h1>
          <p className="text-2xl text-slate-700 dark:text-slate-300 mb-6">
            Senior Full-Stack Engineer | AI Product Architect | Founder, EDGECASE LLC
          </p>
          <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400">
            <a href="mailto:ali.emami@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              ali.emami@gmail.com
            </a>
            <span>|</span>
            <a href="https://linkedin.com/in/aliemami" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              linkedin.com/in/aliemami
            </a>
            <span>|</span>
            <span>New York, NY</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            About
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Senior full-stack engineer, systems architect, and founder of EDGECASE LLC, with over 20 years of experience building high-performance software across mobile, web, cloud infrastructure, and AI.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Through EDGECASE, I&apos;ve delivered consulting and contract work for global organizations including Amazon, American Express, and U.S. Air Force mission-critical systems, helping design and scale secure, production-grade platforms.
          </p>
        </section>

        {/* Core Strengths */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Core Strengths
          </h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">▸</span>
              <span>Full-cycle software delivery — from architecture to deployment</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">▸</span>
              <span>Deep backend (Java, Node), frontend (React, Flutter), and mobile stack experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">▸</span>
              <span>Cloud-native systems (AWS, Firebase, Vercel), CI/CD, and secure architecture</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">▸</span>
              <span>LLM/AI integration: prompt engineering, API design, semantic workflows, RAG pipelines</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">▸</span>
              <span>Cross-functional leadership: aligning engineering with business strategy</span>
            </li>
          </ul>
        </section>

        {/* Experience Highlights */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Experience Highlights
          </h2>

          <div className="space-y-8">
            {/* EDGECASE */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                Founder & Principal Engineer
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">EDGECASE LLC | 2006 – Present</p>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Leading a technology consultancy delivering full-stack development, architecture, and AI integrations for startups and Fortune 500 companies.
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 ml-4">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <span><strong>U.S. Air Force (2022 – 2025):</strong> Led cross-functional engineering teams under TS clearance. Built ML-enhanced decision pipelines and secure, scalable infrastructure for mission-critical systems.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <span><strong>American Express (2016 – 2019):</strong> Modernized legacy member acquisition platform (Node.js, React). Reduced product rollout time from months to minutes. Led team of 8 engineers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <span><strong>Amazon Audible (2015 – 2016):</strong> Core contributor to Catalog Platform. Improved system latency by 30%, contributing to 40% YoY membership growth.</span>
                </li>
              </ul>
            </div>

            {/* HealthFleet */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                Chief Technology Officer
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">HealthFleet | 2012 – 2015</p>
              <p className="text-slate-700 dark:text-slate-300">
                Built HIPAA-compliant digital health platform from inception to acquisition. Led product and engineering teams across mobile and web platforms. Scaled to 50K+ active users.
              </p>
            </div>
          </div>
        </section>

        {/* Notable Projects */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Notable Projects
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                Nayra (Founder, 2024)
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                AI-powered symbolic reflection app integrating OpenAI & Claude APIs. Built with Flutter, Firebase, and custom LLM prompt pipelines. Features dynamic prompt generation, context-aware responses, and semantic search.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                AMEX OPEN Platform
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Led modernization from legacy Java monolith to microservices. Implemented CI/CD pipeline reducing deployment time by 95%.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                Audible Catalog System
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Designed caching layer handling 10M+ daily requests. Reduced database load by 60% while improving response times.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Languages</h3>
              <p className="text-slate-700 dark:text-slate-300">Java, Node.js, Python, C, C++, TypeScript, JavaScript</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Frontend</h3>
              <p className="text-slate-700 dark:text-slate-300">React, Flutter, React Native, CSS, HTML5</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Backend/Data</h3>
              <p className="text-slate-700 dark:text-slate-300">PostgreSQL, MySQL, MongoDB, Firebase, Firestore</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Cloud & DevOps</h3>
              <p className="text-slate-700 dark:text-slate-300">AWS (EC2, S3, Lambda), Firebase, Docker, GitHub Actions, CI/CD</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-2">AI & LLM</h3>
              <p className="text-slate-700 dark:text-slate-300">OpenAI, Claude, Prompt Engineering, Vector Search, RAG</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Security</h3>
              <p className="text-slate-700 dark:text-slate-300">OAuth, JWT, Secure Coding, TS/SCI Clearance Experience</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Education
          </h2>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
              Master of Science, Computer Science
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              University of Maryland, College Park — 2000
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-600 dark:text-slate-400 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p>© 2025 Ali Emami. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
