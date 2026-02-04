# 📧 Configuration de Resend pour l'envoi d'emails

Ce guide vous explique comment configurer Resend pour permettre l'envoi d'emails depuis le formulaire de contact du site NSIGAFE.

## Pourquoi Resend ?

Resend est un service d'email moderne et fiable pour Next.js qui offre :
- ✅ **100 emails gratuits par jour** (sans carte de crédit)
- ✅ **Activation instantanée** (pas de validation manuelle requise)
- ✅ **Intégration simple** avec Next.js
- ✅ **Email de test gratuit** : `onboarding@resend.dev`
- ✅ **Excellente délivrabilité**

## 🚀 Étapes de Configuration

### 1. Créer un compte Resend (gratuit)

1. Visitez [https://resend.com](https://resend.com)
2. Cliquez sur **"Sign Up"** ou **"Get Started"**
3. Créez un compte avec :
   - Votre email
   - Ou connectez-vous via GitHub

> 💡 **Note** : Aucune carte de crédit n'est requise pour le plan gratuit (100 emails/jour)

### 2. Obtenir votre clé API

Une fois connecté à votre compte Resend :

1. Accédez au **Dashboard** : [https://resend.com/dashboard](https://resend.com/dashboard)
2. Cliquez sur **"API Keys"** dans le menu de gauche
3. Cliquez sur **"Create API Key"**
4. Donnez un nom à votre clé (ex: "NSIGAFE Production")
5. Sélectionnez les permissions :
   - ✅ **Sending access** (requis)
6. Cliquez sur **"Add"**
7. **Copiez immédiatement** la clé API (elle commence par `re_`)
   - ⚠️ Vous ne pourrez plus la voir après avoir fermé la fenêtre !

### 3. Configuration en Local (Développement)

Pour tester en local :

1. Créez un fichier `.env.local` à la racine du projet :
   ```bash
   touch .env.local
   ```

2. Ajoutez votre clé API dans `.env.local` :
   ```env
   RESEND_API_KEY=re_votre_cle_api_ici
   ```

3. Redémarrez le serveur de développement :
   ```bash
   npm run dev
   ```

> ⚠️ **Important** : Le fichier `.env.local` ne doit JAMAIS être commité dans Git (il est déjà dans `.gitignore`)

### 4. Configuration sur Vercel (Production)

Pour déployer sur Vercel :

1. Connectez-vous à [Vercel](https://vercel.com)
2. Ouvrez votre projet **nsigafe-app**
3. Allez dans **Settings** → **Environment Variables**
4. Cliquez sur **"Add New"**
5. Configurez la variable :
   - **Key** : `RESEND_API_KEY`
   - **Value** : Collez votre clé API Resend (`re_...`)
   - **Environment** : Sélectionnez **Production**, **Preview**, et **Development**
6. Cliquez sur **"Save"**
7. **Redéployez** votre application pour appliquer les changements

### 5. Vérifier que tout fonctionne

#### Test en Local

1. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

2. Ouvrez [http://localhost:3000/contact](http://localhost:3000/contact)

3. Remplissez le formulaire et envoyez un message

4. Vérifiez :
   - ✅ Le message s'affiche comme "envoyé avec succès"
   - ✅ L'email arrive dans `aboubacarsdk22@gmail.com`
   - ✅ La notification ntfy.sh est reçue (backup)

#### Test en Production

1. Après avoir déployé sur Vercel, visitez votre site
2. Accédez au formulaire de contact
3. Envoyez un message de test
4. Vérifiez la réception dans la boîte email

## 📨 Email de Test par Défaut

Par défaut, le code utilise `onboarding@resend.dev` comme adresse d'expédition.

**Avantages** :
- ✅ Fonctionne immédiatement sans configuration
- ✅ Fourni gratuitement par Resend
- ✅ Parfait pour tester et commencer

**Limitations** :
- ⚠️ Peut parfois être filtré comme spam
- ⚠️ Ne permet pas de personnaliser l'adresse d'expédition

### Configuration d'un domaine personnalisé (Optionnel)

Pour utiliser votre propre domaine (ex: `contact@nsigafe.com`) :

1. Dans le Dashboard Resend, allez dans **"Domains"**
2. Cliquez sur **"Add Domain"**
3. Entrez votre domaine (ex: `nsigafe.com`)
4. Suivez les instructions pour configurer les **enregistrements DNS** :
   - SPF
   - DKIM
   - DMARC
5. Une fois vérifié, modifiez le code dans `app/api/contact/route.ts` :
   ```typescript
   from: 'Contact NSIGAFE <contact@nsigafe.com>',
   ```

> 💡 **Note** : La vérification DNS peut prendre quelques heures

## 🔍 Dépannage

### Erreur : "Configuration email manquante"

**Cause** : La variable `RESEND_API_KEY` n'est pas définie

**Solution** :
- En local : Vérifiez que `.env.local` contient la clé API
- Sur Vercel : Vérifiez que la variable d'environnement est bien configurée dans Settings

### Erreur : "Erreur lors de l'envoi de l'email"

**Causes possibles** :
1. Clé API invalide ou révoquée
2. Limite de 100 emails/jour atteinte
3. Problème réseau temporaire

**Solutions** :
1. Vérifiez que la clé API est correcte
2. Consultez votre dashboard Resend pour voir le nombre d'emails envoyés
3. Créez une nouvelle clé API si nécessaire

### Les emails n'arrivent pas

**Vérifications** :
1. Consultez le dossier **Spam** de votre boîte email
2. Vérifiez les logs Resend : [https://resend.com/logs](https://resend.com/logs)
3. Assurez-vous que `aboubacarsdk22@gmail.com` est correct

## 📊 Monitoring et Logs

Pour suivre vos envois d'emails :

1. Connectez-vous au Dashboard Resend
2. Allez dans **"Logs"** : [https://resend.com/logs](https://resend.com/logs)
3. Vous pouvez voir :
   - ✅ Emails envoyés avec succès
   - ❌ Emails en erreur
   - 📊 Statistiques d'envoi
   - 📧 Contenu des emails

## 💰 Limites et Tarification

### Plan Gratuit
- **100 emails par jour**
- ✅ Suffisant pour un site de contact
- ✅ Pas de carte de crédit requise
- ✅ Accès à l'API complète

### Si vous dépassez 100 emails/jour
- Plan Pro : 20$/mois pour 50,000 emails/mois
- Plus d'infos : [https://resend.com/pricing](https://resend.com/pricing)

## 🔒 Sécurité

### Bonnes pratiques :

1. ✅ **Ne jamais** commiter la clé API dans le code
2. ✅ Utiliser les variables d'environnement (`.env.local`, Vercel)
3. ✅ Révoquer et recréer les clés API en cas de fuite
4. ✅ Limiter les permissions de la clé API (seulement "Sending access")

### En cas de fuite de la clé API :

1. Connectez-vous immédiatement à Resend
2. Allez dans **"API Keys"**
3. **Supprimez** la clé compromise
4. **Créez** une nouvelle clé
5. **Mettez à jour** la variable d'environnement dans Vercel

## 📚 Ressources Supplémentaires

- [Documentation Resend](https://resend.com/docs)
- [Guide Next.js + Resend](https://resend.com/docs/send-with-nextjs)
- [Support Resend](https://resend.com/support)

## ✅ Checklist de Déploiement

Avant de mettre en production :

- [ ] Compte Resend créé
- [ ] Clé API générée et copiée
- [ ] Variable `RESEND_API_KEY` ajoutée dans Vercel
- [ ] Application redéployée sur Vercel
- [ ] Test d'envoi d'email effectué
- [ ] Email reçu dans `aboubacarsdk22@gmail.com`
- [ ] Notification ntfy.sh fonctionne

---

**Date de dernière mise à jour** : Février 2026

Pour toute question, consultez la [documentation Resend](https://resend.com/docs) ou contactez le support.
