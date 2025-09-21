export const site = {
  name: 'Example',
  title: 'Expertise en Maçonnerie & Construction',
  description: "Entreprise de maçonnerie spécialisée dans la construction, la rénovation et l’aménagement. Qualité, fiabilité et savoir-faire au service de vos projets résidentiels et professionnels.",
  locale: 'fr_FR',
  author: 'Gover_Studio',
  contactEmail: 'contact@example.com',
  twitter: '',
  linkedin: '',
  company: {
    name: 'Example Maçonnerie',
    url: 'https://example.com',
  },
  accentColor: '#2F6F5E',
  textColor: '#252525',
  background: '#F7F9FA'
} as const;

export type SiteConfig = typeof site;
