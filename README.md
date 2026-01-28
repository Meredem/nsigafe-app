# ⚽ Bouba & Mane Foot - Site Officiel

**Bienvenue sur le site officiel du club de football Bouba & Mane Foot!**

Un site web moderne, dynamique et spectaculaire pour présenter le meilleur club de football de Guinée.

## 🎯 Fonctionnalités Principales

✅ **Page d'accueil époustouflante**
- Section héros animée
- Statistiques en temps réel
- Galerie photos interactive
- Palmarès & trophées
- Actualités dynamiques
- Avis des supporters

✅ **Pages Complètes**
- ⚽ Calendrier des matchs (clubs guinéens)
- 📊 Résultats avec statistiques
- 👥 Page équipe avec staff "Mane & Bouba"
- 🏟️ Centre d'entraînement
- 🎬 Vidéos (highlights, interviews)
- 🎽 Recrutement (formulaire candidature)
- 📸 Galerie photos
- 📱 Formulaire contact avec téléphones

✅ **Design Premium**
- Dark theme moderne
- Dégradés élégants
- Animations fluides
- Responsive design
- 100% mobile friendly

## 🚀 Installation et Démarrage

### En Local
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Accédez à http://localhost:3000
```

### Build pour Production
```bash
npm run build
npm start
```

## 🌍 Déployer en Ligne (FACILE!)

### **Option 1: VERCEL (Recommandé)**

1. Allez sur https://vercel.com
2. Cliquez "Sign Up" et connectez-vous avec GitHub
3. Cliquez "New Project"
4. Sélectionnez votre repository
5. Cliquez "Deploy"
6. ✅ Votre site est en ligne! 🎉

**Lien**: `https://nsigafe-app.vercel.app` ou votre domaine personnalisé

### **Option 2: NETLIFY**

1. Allez sur https://netlify.com
2. Cliquez "Sign Up" et connectez-vous avec GitHub
3. Cliquez "Add new site"
4. Sélectionnez votre repository
5. Cliquez "Deploy"
6. ✅ Votre site est en ligne! 🎉

**Lien**: `https://nsigafe-app.netlify.app` ou votre domaine personnalisé

## 📱 Contacts

- 📞 Téléphone 1: **+224-620-02-71-18**
- 📞 Téléphone 2: **+336-65-37-12-39**
- 📧 Email: contact@bouba-mane-foot.fr

## 👥 Staff Technique

- **Co-Entraîneurs**: Mane & Bouba
- **Équipe**: Complète et expérimentée

## 🏆 Nos Clubs Adversaires Guinéens

- AS Kindia
- Horoya AC
- Stade Conakry
- CI Kamsar
- FC Lafiaji

## 📚 Technologies Utilisées

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript/JavaScript
- **Animations**: CSS personnalisé

## 📄 License

© 2026 Bouba & Mane Foot. Tous droits réservés.

---

**Créé pour faire briller le meilleur club de Guinée! ⚽✨**

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

## Déploiement sur Netlify (GRATUIT)

### Déploiement Automatique

1. **Connectez-vous à Netlify** : Allez sur [netlify.com](https://netlify.com) et connectez-vous avec GitHub

2. **Importez le projet** :
   - Cliquez sur "Add new site" → "Import an existing project"
   - Choisissez GitHub et autorisez l'accès
   - Sélectionnez votre repository `Meredem/nsigafe-app`

3. **Configuration** :
   - **Branch to deploy** : `master`
   - **Build command** : `npm run build`
   - **Publish directory** : `.next` (automatique avec netlify.toml)

4. **Déployez** : Cliquez sur "Deploy site"

### Avantages de Netlify
- ✅ **100% gratuit** pour les projets personnels
- ✅ Déploiement automatique à chaque push
- ✅ Formulaires intégrés (pas besoin de configuration supplémentaire)
- ✅ CDN mondial rapide
- ✅ HTTPS automatique

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

## Autres Options de Déploiement Gratuit

### 🚀 Render
- **Site** : [render.com](https://render.com)
- **Avantages** : 750 heures gratuites/mois, bases de données gratuites
- **Idéal pour** : Applications full-stack

### 🚂 Railway
- **Site** : [railway.app](https://railway.app)
- **Avantages** : 512MB RAM gratuit, bases de données
- **Idéal pour** : Applications avec base de données

### 📦 Netlify Functions (Alternative)
Si vous voulez garder Vercel mais éviter les frais :
- Utilisez le plan Hobby ($7/mois) pour 1 projet
- Ou attendez les promotions étudiantes

## Déploiement Local (pour développement)

Si vous voulez juste montrer l'app à quelqu'un :

```bash
# Sur votre machine
npm run dev
# Puis partagez l'URL localhost:3000 via ngrok ou similar
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