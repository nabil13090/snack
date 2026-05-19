# Déployer Snack Du Lion sur Hostinger

Vite **ne tourne pas sur le serveur** : il compile le site en fichiers HTML/CSS/JS (`dist/`).  
C’est le même principe qu’un site Next.js après `npm run build` — seul le résultat est envoyé en ligne.

## Option 1 — Hébergement web (le plus simple)

Idéal si tu utilises le **gestionnaire de fichiers** ou FTP.

1. Sur ton PC :
   ```bash
   npm install
   npm run build
   ```
2. Dans **hPanel → Fichiers → public_html**, supprime l’ancien contenu.
3. Envoie **tout le contenu du dossier `dist/`** (pas le dossier `dist` lui-même).
4. Vérifie que `.htaccess` est bien présent (copié depuis `public/` au build).

Aucun Node.js requis sur Hostinger.

---

## Option 2 — Hostinger Node.js (comme ton projet t3coms / Next)

Si tu déploies via **Git + Node.js** (même workflow que `te3coms-portfolio`) :

| Paramètre        | Valeur              |
|------------------|---------------------|
| Branche Git      | `main`              |
| Build command    | `npm install && npm run build` |
| Start command    | `npm start`         |
| Version Node     | 18.x ou 20.x        |
| Racine du site   | racine du repo      |

Le fichier `server.js` sert le dossier `dist/` (équivalent de `next start` pour un site statique).

Variables d’environnement (panel Hostinger) :

```
VITE_SITE_URL=https://ton-domaine.fr
PORT=3000
```

Puis **redéploie** après chaque modification.

---

## Option 3 — GitHub + Hostinger

1. Repo : https://github.com/nabil13090/snack  
2. Dans Hostinger : **Sites web → Git** → connecter le dépôt.  
3. Choisir l’option 1 (build local + upload `dist`) **ou** l’option 2 (Node.js).

---

## Dépannage

| Problème | Solution |
|----------|----------|
| Page blanche | Vérifier que `index.html` est à la racine de `public_html` |
| 404 sur `/carte` | Fichier `.htaccess` manquant → recopier depuis `public/.htaccess` |
| Vidéo lourde | `videobanniere.mp4` ~40 Mo : laisser sur le CDN ou compresser |
| Mauvais domaine SEO | Définir `VITE_SITE_URL` avant `npm run build` |
