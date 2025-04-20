# 🧠 RENQME - Quiz ENAA

## 🎯 Présentation du Projet

**RENQME** est une application web interactive développée avec Angular, destinée à tester les connaissances des utilisateurs à travers des quiz dynamiques. Les questions sont récupérées en temps réel depuis l’API [Open Quiz API]([https://opentdb.com](https://quizapi.io/api/v1)).

Ce projet a été conçu dans un objectif pédagogique et professionnel pour maîtriser :
- Les appels HTTP avec Angular
- La gestion d’état réactive avec RxJS
- L’intégration d’API externes
- Les bonnes pratiques de développement frontend moderne

## 🧩 Contexte du Projet

En tant que développeur freelance spécialisé dans les applications web interactives, ce projet représente une étape clé dans ma montée en compétence et mon portfolio.  
Il permet également de proposer un outil éducatif ludique et personnalisable pour des établissements comme l’**ENAA**.

---

## 🚀 Fonctionnalités (User Stories)

En tant qu'utilisateur, je peux :
- ✅ Accéder à une **page d’accueil** avec les **catégories** de quiz disponibles.
- ✅ Sélectionner une **catégorie**, une **difficulté**, et **lancer le quiz**.
- ✅ Répondre aux questions **une par une**, avec une **validation immédiate**.
- ✅ Voir mon **score final**, l’**enregistrer avec un pseudo** (dans `localStorage`), et **rejouer**.
- ✅ Accéder à un **historique des scores** précédents.

### 🧪 Fonctionnalités Bonus
- ⏱️ Mode **chronométré** (temps limité par question)

---

## 🏗️ Structure du Site

- **Navbar** : Liens vers Accueil, Historique, Paramètres
- **Accueil** : Sélection des paramètres du quiz, bouton "Démarrer"
- **Quiz** : Questions en direct, progression, compteur de score
- **Résultat** : Score final, feedback, bouton "Rejouer"
- **Historique** : Tableau des scores sauvegardés avec date et pseudo

---

## 🛠️ Technologies Utilisées

- **Framework** : Angular 16+
- **Langages** : TypeScript, HTML5, CSS3
- **UI Framework** : Tailwind CSS / Bootstrap
- **Gestion d’état** : RxJS
- **API Externe** : [Open Quiz API](https://quizapi.io/api/v1)
- **Stockage** : `localStorage` pour l’historique

---

## 📸 Screenshots

### 🏠 Accueil
![image](https://github.com/user-attachments/assets/602e8971-373c-4ffb-bf4d-fbd73f33037c)

### ❓ Quiz en cours
![image](https://github.com/user-attachments/assets/73161a70-2f91-4261-a731-50b2c0368f48)

### 🧾 Résultat
![image](https://github.com/user-attachments/assets/e57cc87d-a639-4774-b3cb-6c25c5972cfe)

### 📜 Historique des scores
![image](https://github.com/user-attachments/assets/5ac9f93f-8ac7-4a55-92b5-cc119548c4d4)

> 📂 Place tes captures dans le dossier `/screenshots`.

---

## 📌 Installation

```bash
git clone https://github.com/youssfmadani/Quizz--ENAA.git
cd renqme
npm install
ng serve
