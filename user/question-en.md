# Exercice

Create a class `User`

The class will have some propreties :

* `username` ( Name of the user )
* `password` ( Password of the user )
* `subLevel` ( subscribtion level ) It is an integer between 0 and 3, 3 is the maximum
* `subscribed` (?, you have to guess)
* `loggedIn` ( Wether is the user is logged in with his password )

> Propreties `password` and `loggedIn` must be private. `loggedIn` must be accessible, but `password` is not

The class will have these methods :

* `sendMessage(text: string): void` Send `text` in console

> The message must appear like so : `\x1b[34m[username]\x1b[0m : message`

* `updateSubscription(level: number): number` Change the user subscribtion to the specified one, and return the new level
* `changePassword(newPassword: string, password: string): boolean` Change password, and it is confirmed by the current password
* `checkSamePassword(password: string): boolean` Check if the argument is the same than the password
* `login(password: string): boolean` Log the user in with the password, and returns if the user has been logged in.
* `logout(): void` Disconnect the user

## Specificities

* No method, exept `login()`, is usable if the user is not logged in
* A proprety `id` must be defined at the construction (We'll choose `Date.now()` as value). It's not editable
