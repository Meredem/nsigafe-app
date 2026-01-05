# N'Sigafé - Application de Livraison de Colis

Une application Next.js pour le service de livraison de colis N'Sigafé.

## Fonctionnalités

- Page d'accueil avec navigation
- Formulaire de contact avec numéro de téléphone
- Suivi de colis avec données mockées
- API pour la gestion des contacts et du suivi
- Interface en français
- Stylisé avec Tailwind CSS

## Installation et Développement Local

1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

3. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement sur Vercel

### Déploiement Automatique (Recommandé)

1. **Connectez-vous à Vercel** : Allez sur [vercel.com](https://vercel.com) et connectez-vous avec GitHub

2. **Importez le projet** :
   - Cliquez sur "New Project"
   - Sélectionnez votre repository GitHub `Meredem/nsigafe-app`
   - Vercel détectera automatiquement Next.js

3. **Configuration** :
   - Framework : Next.js (automatique)
   - Build Command : `npm run build` (automatique)
   - Install Command : `npm install` (automatique)

4. **Déployez** : Cliquez sur "Deploy"

### Déploiement Manuel

Si vous préférez déployer manuellement :

```bash
npm run build
npm run start
```

## Technologies Utilisées

- **Next.js 14** - Framework React
- **TypeScript** - Typage JavaScript
- **Tailwind CSS** - Framework CSS
- **API Routes** - API backend intégré

## Structure du Projet

```
app/
├── api/
│   ├── contact/     # API pour le formulaire de contact
│   └── tracking/    # API pour le suivi de colis
├── contact/         # Page formulaire de contact
├── suivi/          # Page de suivi de colis
├── globals.css     # Styles globaux
├── layout.tsx      # Layout principal
└── page.tsx        # Page d'accueil
```

## Contact

Pour toute question : +33665671239

2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

3. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Utilisation

- **Accueil** : Page principale avec présentation du service
- **Suivi de Colis** : Entrez un numéro de suivi (ex: NSG001, NSG002, NSG003) pour voir le statut
- **Contact** : Formulaire pour envoyer un message

## Technologies utilisées

- Next.js 14 avec App Router
- TypeScript
- Tailwind CSS
- API Routes pour le backend