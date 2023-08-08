# Exercice

Créer une classe `Utilisateur`

La classe aura plusieurs propriétés :

* `username` ( le nom de l'utilisateur )
* `password` ( le mot de passe )
* `subLevel` ( le niveau d'abonnement qu'il a) Il s'agit d'un nombre entre 0 et 3, 3 étant le maximum
* `subscribed` (?)
* `loggedIn` ( si l'utilisateur est connecté avec son mot de passe )

> Les propriétés `password` et `loggedIn` doivent être privées. `loggedIn` doit être accessible, mais `password` ne l'est pas

Les méthodes de la classe seront les suivantes :

* `sendMessage(text: string): void` Affiche le `text` dans la console

> le message doit s'afficher comme ceci : `\x1b[34m[le nom de l'utilisateur]\x1b[0m : le message`

* `updateSubscription(level: number): number` Change l'abonnement de l'utilisateur sur le nouveau chiffre et renvoie le nouveau chiffre
* `changePassword(newPassword: string, password: string): boolean` Change le mot de passe
* `checkSamePassword(password: string): boolean` Vérifie si le mot de passe passé en argument correspond à celui de l'utilisateur
* `login(password: string): boolean` Connecte l'utilisateur. Renvoie si l'utilisateur s'est connecté.
* `logout(): void` Déconnecte l'utilisateur

## Spécificités

* Aucune méthode, à part `login()` n'est utilisable si l'utilisateur n'est pas connecté
* Une propriété `id` doit être définie au moment de la construction de l'utilisateur (on choisira `Date.now()` en valeur). Elle n'est pas modifiable
