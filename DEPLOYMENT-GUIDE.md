# 🚀 Guide de Déploiement - Centre Sportif Bouba & Mane

## **Option 1: VERCEL (RECOMMANDÉ - Facile et Gratuit)**

### Étapes:
1. Allez sur https://vercel.com
2. Cliquez "Sign Up" 
3. Connectez-vous avec GitHub
4. Cliquez "Import Project"
5. Collez l'URL de votre repository GitHub: `https://github.com/VOTRE_USERNAME/nsigafe-app`
6. Cliquez "Deploy"
7. ✅ Votre site sera en ligne en 5 minutes!

**Votre site sera accessible à: `https://nsigafe-app.vercel.app`**

---

## **Option 2: NETLIFY (Aussi Simple)**

### Étapes:
1. Allez sur https://netlify.com
2. Cliquez "Sign Up"
3. Connectez-vous avec GitHub
4. Cliquez "Add new site"
5. Sélectionnez votre repository
6. Netlify détectera automatiquement Next.js
7. Cliquez "Deploy"

**Votre site sera accessible à: `https://nsigafe-app.netlify.app`**

---

## **Option 3: GITHUB PAGES (Gratuit)**

1. Poussez votre code sur GitHub
2. Allez dans "Settings" → "Pages"
3. Sélectionnez "main" branch
4. Cliquez "Save"

---

## **Avant de déployer:**

✅ Assurez-vous que le code fonctionne en local:
```bash
npm run dev
# Visite http://localhost:3002
```

✅ Testez toutes les pages:
- Accueil
- Galerie
- Matchs
- Équipe
- Contact
- Vidéos
- Recrutement

---

## **Commandes de build:**

```bash
# Build pour production
npm run build

# Tester la build
npm start
```

---

## **Domaine personnalisé (après déploiement):**

Sur Vercel/Netlify, vous pouvez ajouter votre propre domaine:
- `boubamanefoot.com`
- `boubamanefoot.gn`
- `nsigafe.com`

---

## **Support:**

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com/
- Next.js Deployment: https://nextjs.org/docs/deployment

**Voilà! Votre site sera visible par le monde entier! 🌍**
