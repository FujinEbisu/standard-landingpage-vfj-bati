<div align="center">

# GoverStudio Landing Page Template

Template vitrine mono‑page (Hero, À propos, Avis, Contact) minimaliste, respirant, focalisé sur la conversion via un unique formulaire de contact (Web3Forms).

</div>

## 1. Objectif
Fournir une base ultra simple, personnalisable en quelques minutes, sans surcharge technique. Tous les CTA pointent vers la section contact.

## 2. Tech Stack
- Astro 5 (Static / SSG)
- Aucune lib CSS externe (design tokens maison)
- Web3Forms pour le formulaire (POST API)
- Sitemap automatique (`@astrojs/sitemap`)

## 3. Structure Principale
```
src/
	config/site.ts           # Métadonnées globales & branding
	styles/tokens.css        # Couleurs, espacements, rayons, etc.
	styles/globals.css       # Styles globaux + classes utilitaires
	layouts/Layout.astro     # HTML global + header + footer + meta + JSON-LD
	pages/index.astro        # Orchestration des sections
	components/
		Hero.astro
		About.astro
		Testimonials.astro
		ContactForm.astro
		CTAButton.astro
public/
	favicon.svg
	robots.txt
astro.config.mjs           # Config Astro + sitemap + domain (site)
```

## 4. Carte de Personnalisation (où modifier quoi)
| Besoin | Fichier | Que changer |
| ------ | ------- | ----------- |
| Nom site, titre, description | `src/config/site.ts` | Propriétés `name`, `title`, `description`, `company.url`, `contactEmail` |
| Couleur accent / palette | `src/styles/tokens.css` | Variables `--color-accent`, `--color-accent-hover`, `--color-bg`, `--color-text` |
| Espacements / rayon | `tokens.css` | Variables `--space-*`, `--radius-*` |
| Texte Hero | `src/components/Hero.astro` | Contenu `<h1>` & `<p class="lead">` |
| Section À propos | `src/components/About.astro` | Paragraphes & CTA label |
| Témoignages | `src/components/Testimonials.astro` | Tableau `testimonials` en haut du fichier |
| Boutons / CTA global | `src/components/CTAButton.astro` | Styles ou variants supplémentaires |
| Formulaire & champs | `src/components/ContactForm.astro` | Champ hidden `access_key`, labels, placeholders, validation |
| Loader formulaire | `ContactForm.astro` | CSS `.loader` & logique JS inline `handleSubmit` |
| Navigation / Footer / Meta HTML | `src/layouts/Layout.astro` | Liens nav, footer, meta tags, JSON-LD |
| Ordre / insertion de sections | `src/pages/index.astro` |
| Domaine officiel (sitemap + canonical) | `astro.config.mjs` & `robots.txt` | Remplacer `https://example.com` |
| Robots / SEO basique | `public/robots.txt` | URL sitemap + directives crawlers |
| JSON-LD description | `Layout.astro` ou `site.ts` | Valeurs `description`, `name`, `url` |

## 5. Changer la Couleur Accent
1. Ouvrir `src/styles/tokens.css`
2. Modifier `--color-accent` et `--color-accent-hover`
3. (Optionnel) Adapter contrastes `--color-text` / `--color-text-muted` si nécessaire
4. Vérifier lisibilité (AA) sur boutons.

## 6. Mettre en Place Web3Forms
1. Créer une clé d’accès sur web3forms.com
2. Dans `ContactForm.astro`, remplacez `REPLACE_WITH_KEY` dans `<input type="hidden" name="access_key" ...>`
3. (Option recommandé) Créer un fichier `.env` et charger la valeur via `Astro.env` (amélioration future possible)
4. Tester en local (réseau obligatoire) puis vérifier email de réception.

## 7. Ajouter une Nouvelle Section
1. Créer un fichier composant dans `src/components/` (ex: `Services.astro`)
2. Rendu minimal :
	 ```astro
	 ---
	 ---
	 <div class="services">
		 <h2>Services</h2>
		 <p>Décrivez vos offres principales ici.</p>
	 </div>
	 ```
3. Ajouter lien nav (facultatif) dans `Layout.astro`.

## 8. Modifier les Témoignages
Ouvrir `Testimonials.astro` et éditer le tableau `const testimonials = [...]`.
Chaque objet : `{ name: 'Nom', role: 'Fonction', quote: 'Texte' }`
Supprimer ou ajouter des entrées librement (grille responsive automatique).

## 9. Accessibilité & Bonnes Pratiques
- Garder une hiérarchie de titres H1 (Hero) puis H2.
- Vérifier contraste si changement accent.
- Tous les CTA renvoient à `#contact` (cohérence conversion).
- Maintenir `aria-live` dans le formulaire pour feedback utilisateur.

## 10. Domaine & SEO
1. `astro.config.mjs`: remplacez `site: 'https://example.com'` par votre domaine public (https conseillé).
2. `public/robots.txt`: adapter l’URL du sitemap si différent.
3. Ajouter un favicon personnalisé (`public/favicon.svg`).
4. Ajuster `title` & `description` via `site.ts` (propagation automatique dans meta).

## 11. Déploiement (Générique)
Build :
```
npm install
npm run build
```
Le dossier `dist/` peut être déployé sur : Netlify, Vercel (statique), Cloudflare Pages, etc.

Pour Vercel / Netlify : aucun adaptateur serveur nécessaire (site statique). Garder `@astrojs/sitemap`.

## 12. Mise à Jour des Dépendances
Vérifier ponctuellement :
```
npm outdated
```
Puis mettre à jour Astro si besoin :
```
npm install astro@latest
```

## 13. Personnalisation Rapide (Checklist Express)
- [ ] Modifier branding (`site.ts`)
- [ ] Couleurs & tokens (`tokens.css`)
- [ ] Textes Hero / About / CTA
- [ ] Témoignages réels
- [ ] Clé Web3Forms insérée
- [ ] Domaine dans `astro.config.mjs`
- [ ] URL sitemap dans `robots.txt`
- [ ] Favicon remplacé
- [ ] Vérification responsive (mobile / desktop)
- [ ] Test envoi formulaire (succès + erreur réseau simulée)

## 14. Améliorations Futures (Optionnel)
- Mode sombre (dupliquer tokens avec `@media (prefers-color-scheme)`)
- Logs analytics (Plausible / Fathom)
- Section FAQ ou Services
- Gestion multi-langue (Astro i18n)
- Variables d’environnement pour la clé Web3Forms

## 15. Support Interne
Créer un ticket interne si :
- Un client demande une section dynamique (ex: blog) → introduire Content Collections.
- Besoin d’interactivité (calendrier, pricing toggle) → îlot Astro + hydration ciblée.

---
Fait avec simplicité par GoverStudio. Gardez-le léger, itérez seulement si la valeur ajoutée est claire.
