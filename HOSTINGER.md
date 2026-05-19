# Déployer sur Hostinger — réglages exacts

## Ce que tu dois choisir dans l’écran Hostinger

| Champ | Valeur à mettre |
|-------|-----------------|
| **Préréglage de framework** | **Express** (recommandé) ou **Autre** — **PAS** « Create React App » si ça plante |
| **Branche** | `main` |
| **Version de Node** | **20.x** (ou 18.x minimum) |
| **Commande de compilation** | `npm install && npm run build` |
| **Gestionnaire de paquets** | `npm` |
| **Répertoire de sortie** | `build` |
| **Commande de démarrage** (si Express) | `npm start` |

### Variables d’environnement (clique « Ajouter »)

| Nom | Valeur |
|-----|--------|
| `VITE_SITE_URL` | `https://ton-domaine.fr` (ton URL Hostinger) |
| `NODE_ENV` | `production` |

---

## Pourquoi ça plantait

1. **Répertoire de sortie `build`** — Vite mettait les fichiers dans `dist/` → Hostinger ne trouvait rien.  
   → Corrigé : le site est maintenant compilé dans **`build/`**.

2. **Préréglage « Create React App »** — pas adapté à un projet Vite.  
   → Utilise **Express** (on a `server.js` + `npm start`) ou **Autre**.

3. **Config TypeScript** — parfois bloquée sur le serveur Linux.  
   → Config Vite en **`vite.config.mjs`** (JavaScript simple).

---

## Option A — Express (comme un vrai site Node)

- Préréglage : **Express**
- Build : `npm install && npm run build`
- Start : `npm start`
- Sortie : `build`

## Option B — Site statique uniquement

- Préréglage : **Autre**
- Build : `npm install && npm run build`
- Répertoire de sortie : `build`
- Pas de commande start

---

## Repo GitHub

https://github.com/nabil13090/snack

Après chaque push sur `main`, clique **Redéployer** dans Hostinger.
