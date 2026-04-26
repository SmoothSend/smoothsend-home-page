const trustedCompanies = [
  {
    name: "Pepasur",
    href: "https://pepasur.xyz",
    logo: "/pepasur.png",
    subtitle: "Onchain Mafia Game",
  },
  {
    name: "Sendra",
    href: "https://usesendra.com/",
    logo: "/sendra.png",
    subtitle: "Chat-first dollar access",
  },
]

export function TrustedBySection() {
  return (
    <section id="trusted-by" className="py-16" aria-labelledby="trusted-by-heading">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm p-8 md:p-10">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Trusted by</p>
            <h2 id="trusted-by-heading" className="text-2xl md:text-3xl font-bold text-balance mb-3">
              Teams shipping gasless experiences with SmoothSend
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SmoothSend powers production and pilot integrations across multiple chains, with more partners onboarding every week.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {trustedCompanies.map((company) => (
              <a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border/40 bg-background/60 hover:bg-background/80 transition-colors p-5 text-left"
                aria-label={`${company.name} website`}
              >
                <div className="h-10 flex items-center">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{company.subtitle}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
