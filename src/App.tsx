import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#overview', label: 'Overview' },
    { href: '#innovations', label: 'Components' },
    { href: '#workplan', label: 'Work Plan' },
    { href: '#impact', label: 'Impact' },
    { href: '#status', label: 'Status' },
    { href: '#budget', label: 'Budget' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">BLUEPULSE AI</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {links.map(link => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                {link.label}
              </a>
            ))}
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
          <div className="px-4 py-3 space-y-2">
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium py-2">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Op.1: Proposal status banner */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-2xl sm:rounded-full px-4 py-2 mb-4 max-w-full">
          <span className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
          <span className="text-amber-300 text-xs sm:text-sm font-medium leading-relaxed text-left">
            Proposal under preparation for the I3FLOAT 1st Open Call. Funding has not been awarded.
          </span>
        </div>

        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl sm:rounded-full px-4 py-2 mb-6 sm:mb-8 max-w-full">
          <span className="text-cyan-300 text-xs sm:text-sm font-medium leading-relaxed text-left">Open Challenge 1.2.3 — Probabilistic fatigue and failure models for mooring and anchoring systems</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">BLUEPULSE AI</span>
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-3 sm:mb-4 font-light">
          Intelligent Structural Monitoring &amp; Predictive Maintenance
        </p>
        <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 max-w-3xl mx-auto">
          For Floating Offshore Wind Mooring Systems
        </p>

        {/* Op.2: TRL metrics corrected */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 sm:px-6 py-4 min-w-0">
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 break-words">Target TRL: 7</div>
            <div className="text-xs text-slate-400 mt-1">Target Technology Readiness Level</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 sm:px-6 py-4 min-w-0">
            <div className="text-xl sm:text-2xl font-bold text-amber-400 break-words">Starting TRL: pending evidence review</div>
            <div className="text-xs text-slate-400 mt-1">Initial maturity to be documented</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 sm:px-6 py-4 min-w-0">
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 break-words">12 Months</div>
            <div className="text-xs text-slate-400 mt-1">Proposed Duration (M1–M12)</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 sm:px-6 py-4 min-w-0">
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 break-words">€60,000</div>
            <div className="text-xs text-slate-400 mt-1">Proposed Budget — subject to approval</div>
          </div>
        </div>

        {/* Op.3: Indicative schedule disclaimer */}
        <p className="text-xs text-slate-500 mb-5 sm:mb-6 max-w-2xl mx-auto italic">
          Indicative implementation schedule (M1–M12), subject to selection and contract signature. The provisional reference year is 2027; actual start depends on award.
        </p>

        <a href="#overview" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5">
          Explore the Proposal
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator — visible only when vertical space allows */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section id="overview" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Proposal Overview</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Addressing a Critical Challenge in Floating Offshore Wind
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            BLUEPULSE AI is a proposed project that aims to develop an intelligent structural health monitoring and predictive maintenance solution combining artificial intelligence, physics-based digital twins and probabilistic fatigue models for mooring and anchoring systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Floating offshore wind turbines operate under complex environmental conditions, including variable wave loads, wind forces and ocean currents. These conditions generate cyclic stresses in mooring components, potentially accelerating fatigue and increasing the risk of structural failures.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Conventional inspection and maintenance procedures can be costly, time-consuming and difficult to implement in offshore environments.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Proposed Approach</h3>
            <p className="text-slate-600 leading-relaxed">
              BLUEPULSE AI proposes to address these challenges by integrating structural monitoring data, environmental information and advanced predictive algorithms into a unified digital platform, supporting safer and more efficient maintenance strategies. The technical components described below are proposed developments, not demonstrated capabilities.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Structural Monitoring</h4>
                    <p className="text-slate-400 text-sm mt-1">Proposed integration of sensor data to assess mooring system behaviour</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">AI-Driven Prediction</h4>
                    <p className="text-slate-400 text-sm mt-1">Proposed hybrid models combining physics, ML and probabilistic analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Predictive Maintenance</h4>
                    <p className="text-slate-400 text-sm mt-1">Proposed decision-support tools for inspection prioritisation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Innovations() {
  const innovations = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Hybrid Analytical Framework',
      description: 'Proposed combination of physics-based structural models with machine learning algorithms to interpret monitoring data under changing environmental and operational conditions.',
      role: 'Supports Challenge 1.2.3 by enabling interpretation of structural responses under uncertainty.',
      color: 'from-cyan-500 to-cyan-600',
      bgLight: 'bg-cyan-50',
      textColor: 'text-cyan-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Probabilistic Fatigue Assessment',
      description: 'Proposed approach to account for uncertainties in environmental loads, material properties and structural responses to estimate fatigue accumulation and provide risk indicators.',
      role: 'Directly addresses the core requirement of Challenge 1.2.3.',
      color: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: 'Physics-Based Digital Twin',
      description: 'Proposed computational model representing the structural behaviour of mooring and anchoring systems under variable environmental and operational conditions.',
      role: 'Supports Challenge 1.2.3 by providing a simulation foundation for probabilistic analysis.',
      color: 'from-indigo-500 to-indigo-600',
      bgLight: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Decision-Support Platform',
      description: 'Proposed platform to translate monitoring and predictive information into actionable recommendations, helping operators prioritise inspections and plan maintenance.',
      role: 'Supports Challenge 1.2.3 by making probabilistic outputs actionable for maintenance decisions.',
      color: 'from-violet-500 to-violet-600',
      bgLight: 'bg-violet-50',
      textColor: 'text-violet-600',
    },
  ];

  return (
    <section id="innovations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Proposed Technical Components</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Four Complementary Technical Components
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            All four components are proposed to support Open Challenge 1.2.3 — Probabilistic fatigue and failure models for mooring and anchoring systems. They are described as development objectives, not demonstrated capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((item, index) => (
            <div key={index} className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl ${item.bgLight} flex items-center justify-center mb-5 ${item.textColor}`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.description}</p>
              <p className="text-xs text-slate-500 italic border-t border-slate-100 pt-3">{item.role}</p>
              <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${item.color} rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Op.4: Expected results with disclaimer */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Proposed Validation Targets</h3>
          <p className="text-slate-400 text-sm text-center mb-6 max-w-2xl mx-auto">
            Proposed validation targets, not demonstrated results. Metric definitions, reference baseline and validation dataset remain to be specified.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">≥90%</div>
              <div className="text-slate-300 text-sm">Proposed anomaly detection target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">20%</div>
              <div className="text-slate-300 text-sm">Proposed reduction in false alarms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">TRL 7</div>
              <div className="text-slate-300 text-sm">Target Technology Readiness Level</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkPlan() {
  const workPackages = [
    {
      id: 'WP1',
      title: 'Project Management & Coordination',
      period: 'M1–M12',
      description: 'Technical coordination, financial control, milestone monitoring, risk management and reporting throughout the project duration.',
      color: 'bg-slate-500',
    },
    {
      id: 'WP2',
      title: 'Requirements & Technology Baseline Assessment',
      period: 'M1–M2',
      // Op.2: corrected — no claim of adapting existing TRL 6 technology
      description: 'Assess the available technology baseline, document its demonstrated maturity and define the adaptations required for the proposed use case. Define operational requirements, monitoring parameters and system architecture.',
      color: 'bg-cyan-500',
    },
    {
      id: 'WP3',
      title: 'Data Integration & Digital Twin',
      period: 'M3–M4',
      description: 'Proposed integration of structural monitoring and environmental data. Development or adaptation of a physics-based digital twin of mooring systems, subject to data availability.',
      color: 'bg-blue-500',
    },
    {
      id: 'WP4',
      title: 'AI & Probabilistic Modelling',
      period: 'M5–M6',
      description: 'Proposed development of machine learning algorithms and probabilistic fatigue/failure models for risk estimation, contingent on WP3 outputs.',
      color: 'bg-indigo-500',
    },
    {
      id: 'WP5',
      title: 'Integration, Testing & Validation',
      period: 'M7–M10',
      description: 'Proposed integration of all components into a functional demonstrator. Testing and validation against reference methods, subject to data and environment availability.',
      color: 'bg-violet-500',
    },
    {
      id: 'WP6',
      title: 'Results Assessment & Commercialisation',
      period: 'M11–M12',
      description: 'Assess the TRL actually achieved based on available evidence. Prepare exploitation plan, define commercial offering and deployment roadmap.',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section id="workplan" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Proposed Implementation</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Work Plan &amp; Timeline
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Six interconnected work packages over a proposed 12-month period (M1–M12). Indicative schedule, subject to selection and contract signature. The provisional reference year is 2027; actual start depends on award.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden sm:block" />

          <div className="space-y-8">
            {workPackages.map((wp, index) => (
              <div key={wp.id} className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-white shadow-md hidden sm:block" style={{ top: '1.5rem' }}>
                  <div className={`w-full h-full rounded-full ${wp.color}`} />
                </div>

                {/* Content card */}
                <div className={`ml-12 sm:ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${wp.color} text-white font-bold text-sm`}>
                        {wp.id.replace('WP', '')}
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900">{wp.id}</h3>
                        <span className="text-xs text-slate-500">{wp.period}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{wp.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{wp.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Proposed Impact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            European Floating Offshore Wind Value Chain
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            If funded, the project would aim to contribute to the competitiveness and technological autonomy of the floating offshore wind value chain, and to the digitalisation of the European renewable energy sector.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-2xl p-8">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Structural Integrity</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              The project would aim to improve assessment of structural deterioration, supporting reliability of floating wind assets and helping operators manage technical and economic risks.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Transformation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              The project would aim to support adoption of AI, advanced simulation and data-driven asset management in the European renewable energy sector.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Operational Efficiency</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              The project would aim to reduce unnecessary offshore operations, associated costs and environmental impact through more targeted maintenance interventions.
            </p>
          </div>
        </div>

        {/* Commercialisation */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Proposed Commercialisation Strategy</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                If funded, the project would pursue a B2B strategy targeting floating offshore wind farm developers, operators, mooring system suppliers, engineering consultancies and offshore maintenance service providers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 text-sm font-bold">1</span>
                  </div>
                  <span className="text-slate-300 text-sm">Validation &amp; industrial engagement during project</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 text-sm font-bold">2</span>
                  </div>
                  <span className="text-slate-300 text-sm">Pilot agreements with operators and integrators</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 text-sm font-bold">3</span>
                  </div>
                  <span className="text-slate-300 text-sm">Commercial B2B sales &amp; technology partnerships</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Proposed Business Model</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="text-cyan-400 font-semibold mb-1">Integration &amp; Configuration</h4>
                  <p className="text-slate-400 text-sm">Proposed initial setup fee for deployment and customisation</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="text-cyan-400 font-semibold mb-1">Software Licensing</h4>
                  <p className="text-slate-400 text-sm">Proposed recurring licensing with monitoring and support services</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="text-cyan-400 font-semibold mb-1">Value-Added Services</h4>
                  <p className="text-slate-400 text-sm">Proposed custom analytics, engineering studies and third-party integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Selected Open Challenge</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Open Challenge 1.2.3
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Probabilistic fatigue and failure models for mooring and anchoring systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-slate-300 leading-relaxed mb-6">
              BLUEPULSE AI is proposed to address this challenge by developing an integrated solution to assess structural deterioration and support predictive maintenance in floating offshore wind installations. The four technical components described above (hybrid analytical framework, probabilistic fatigue assessment, physics-based digital twin and decision-support platform) are proposed as complementary elements supporting Challenge 1.2.3.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="text-cyan-400 font-semibold mb-2">Problem</h4>
                <p className="text-slate-400 text-sm">
                  Mooring systems exposed to variable loads, cyclic stresses and complex conditions that accelerate fatigue and increase failure risk, with significant uncertainties in environmental loads and material properties.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="text-cyan-400 font-semibold mb-2">Proposed Approach</h4>
                <p className="text-slate-400 text-sm">
                  The proposal intends to incorporate operational measurements and uncertainty-aware predictive models for earlier identification of deterioration. This approach is proposed; it has not yet been demonstrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevelopmentStatus() {
  return (
    <section id="status" className="py-24 bg-amber-50/50 border-y border-amber-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">Transparency</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Development and Validation Status
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-amber-200 p-8 md:p-10 shadow-sm">
          <p className="text-slate-700 leading-relaxed mb-6">
            This website is an <strong>informational presentation</strong> of a proposal under preparation. It is not an operational offshore monitoring demonstrator. The technical components described on this site are proposed developments, not validated products or services.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mb-4">Items pending evidence or confirmation</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-slate-700 text-sm"><strong>Initial TRL accreditation.</strong> The starting Technology Readiness Level has not yet been documented with verifiable evidence. The proposal states a target of TRL 7; the actual starting TRL is pending evidence review.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-slate-700 text-sm"><strong>Access to operational data.</strong> No formal data access agreement with an offshore wind operator or asset owner has been confirmed. Data availability will determine whether WP3–WP5 can proceed as planned.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-slate-700 text-sm"><strong>Validation environment.</strong> No operational floating offshore wind installation has been confirmed for testing. If operational access is unavailable, the final TRL will be reported according to the evidence actually obtained.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-slate-700 text-sm"><strong>Evaluation protocol.</strong> Metric definitions, reference baseline, validation dataset and acceptance criteria for the proposed performance targets (≥90% anomaly detection, 20% false alarm reduction) remain to be specified.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-slate-700 text-sm"><strong>Partnerships and collaborators.</strong> No industrial partners, data providers, test facilities or subcontractors have been formally confirmed at this stage.</span>
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-900 text-sm leading-relaxed">
              <strong>Note.</strong> The corrections on this page do not certify compliance with the I3FLOAT call requirements. Eligibility and conformity will be determined by the evaluation process. The applicant remains responsible for providing the evidence required by the call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Budget() {
  const budgetItems = [
    { title: 'Project Management & Coordination', amount: 5000, months: 'M1–M12' },
    { title: 'Requirements & Technology Baseline Assessment', amount: 9000, months: 'M1–M2' },
    { title: 'Data Integration & Digital Twin', amount: 13000, months: 'M3–M4' },
    { title: 'AI & Probabilistic Modelling', amount: 14000, months: 'M5–M6' },
    { title: 'Integration, Testing & Validation', amount: 15000, months: 'M7–M10' },
    { title: 'Results Assessment & Commercialisation', amount: 4000, months: 'M11–M12' },
  ];

  const total = budgetItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section id="budget" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Proposed Resources</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Proposed Budget Allocation
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Proposed budget: EUR 60,000. Requested funding: EUR 60,000 — subject to approval. The breakdown by eligible cost categories is pending validation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Budget table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Applicant Budget</h3>
              <p className="text-xs text-slate-500 mt-1">Single applicant. Breakdown by eligible cost categories pending validation.</p>
            </div>
            <div className="divide-y divide-slate-100">
              {budgetItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.months}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-900">€{item.amount.toLocaleString()}</div>
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${(item.amount / total) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-900 flex items-center justify-between">
              <span className="text-white font-semibold">Total Proposed Funding</span>
              <span className="text-cyan-400 font-bold text-xl">€{total.toLocaleString()}</span>
            </div>
          </div>

          {/* Visual chart */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {(() => {
                  const colors = ['#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#083344'];
                  let cumulative = 0;
                  return budgetItems.map((item, index) => {
                    const percentage = (item.amount / total) * 100;
                    const strokeDasharray = `${percentage} ${100 - percentage}`;
                    const strokeDashoffset = -cumulative;
                    cumulative += percentage;
                    return (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={colors[index]}
                        strokeWidth="16"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-500"
                      />
                    );
                  });
                })()}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">€60K</div>
                  <div className="text-xs text-slate-500">Proposed Budget</div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-sm">
              {budgetItems.map((item, index) => {
                const colors = ['bg-cyan-500', 'bg-cyan-700', 'bg-cyan-800', 'bg-cyan-900', 'bg-slate-700', 'bg-slate-900'];
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${colors[index]}`} />
                    <span className="text-xs text-slate-600 truncate">{item.title.split(' ')[0]} ({Math.round((item.amount / total) * 100)}%)</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">BLUEPULSE AI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Intelligent Structural Monitoring and Predictive Maintenance for Floating Offshore Wind Mooring Systems.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Proposal Details</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>I3FLOAT 1st Open Call — Open Challenge 1.2.3</li>
              <li>Challenge: Probabilistic fatigue and failure models for mooring and anchoring systems</li>
              <li>Proposed duration: 12 months (M1–M12)</li>
              <li>Proposed budget: EUR 60,000</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Proposed Focus Areas</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Structural Health Monitoring</li>
              <li>AI-Driven Predictive Analytics</li>
              <li>Physics-Based Digital Twins</li>
              <li>Probabilistic Risk Assessment</li>
            </ul>
          </div>
        </div>
        {/* Op.1: Footer disclaimer replacing "Funded by I3FLOAT • Horizon Europe" */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-sm text-center leading-relaxed max-w-3xl mx-auto">
            BLUEPULSE AI — Proposal under preparation for the I3FLOAT 1st Open Call. Project implementation is subject to selection and contract signature.
          </p>
          <p className="text-slate-600 text-xs text-center mt-4">
            © 2026 BLUEPULSE AI. This is an informational website for a proposal under preparation. No funding has been awarded.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Overview />
      <Innovations />
      <WorkPlan />
      <Impact />
      <Challenge />
      <DevelopmentStatus />
      <Budget />
      <Footer />
    </div>
  );
}
