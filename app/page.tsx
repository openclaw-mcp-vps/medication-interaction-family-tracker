export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Family Health Safety
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track Family Medication Interactions &amp; Side Effects
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Monitor every family member&apos;s medications for dangerous interactions, log side effects in real time, and never miss a pharmacy refill again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start for $13/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "⚠️", title: "Interaction Alerts", desc: "Real-time checks against drug interaction databases for every new medication added." },
          { icon: "📋", title: "Side Effect Log", desc: "Each family member gets a personal timeline to record and review side effects." },
          { icon: "🔔", title: "Refill Reminders", desc: "Automated alerts before prescriptions run out so no one misses a dose." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold mb-1">Family Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$13</p>
          <p className="text-[#8b949e] mb-6">/month · unlimited family members</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Unlimited family member profiles",
              "Drug interaction database checks",
              "Side effect tracking &amp; history",
              "Refill reminders via email",
              "Secure, private data storage"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]" dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the drug interaction check work?",
              a: "We query established drug interaction databases whenever you add or update a medication, and immediately flag any dangerous combinations with a clear warning."
            },
            {
              q: "Is my family's health data private?",
              a: "Yes. All data is encrypted at rest and in transit. We never sell or share your information with third parties."
            },
            {
              q: "Can I manage medications for multiple people?",
              a: "Absolutely. Add as many family members as you need — each gets their own medication list, side effect log, and refill schedule."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} FamilyMedTracker. All rights reserved.
      </footer>
    </main>
  );
}
