// Définition de la classe Utilisateur
class Utilisateur {
    #id = Date.now(); // Il est aussi définissable dans le constructor
    #password;
    subLevel;
    // On donne une valeur par défaut à loggedIn
    #loggedIn = false;
    username;
    subLevel;
    

    /**
     * Build the user
     * @param {{ username: string; password: string; subLevel: number; }} params 
     */
    constructor(params) {
        this.#password = params.password;
        this.username = params.username
        this.subLevel = params.subLevel

        // On peut aussi définir l'id ici
        // this.#id = Date.now()
    }

    get id() {
        return this.#id;
    }
    get subscribed() {
        return this.subLevel > 0
    }
    get loggedIn() {
        return this.#loggedIn
    }

    /**
     * Vérifie si le mot de passe est le même
     * @param {string} password 
     */
    checkSamePassword(password) {
        return this.#password === password
    }
    /**
     * Connecte l'utilisateur
     * @param {string} password
     * @returns {Boolean} Si l'utilisateur s'est connecté
     */
    login(password) {
        if (this.checkSamePassword(password)) {
            this.#loggedIn = true
        }

        return this.checkSamePassword(password);
    }
    /**
     * Change l'abonnement de l'utilisateur
     * @param {number} level
     * @returns {number} le nouveau niveau d'abonnement
     */
    updateSubscription(level) {
        // On vérifie si l'utilisateur est connecté
        if (!this.loggedIn) return false

        // On définit un maximum et un minimum
        const max = 3;
        const min = 0;

        // On fait en sorte que level soit un nombre entier
        level = Math.floor(level);

        // On modifie subLevel
        this.subLevel = 
            // Dans le cas où le paramètre est supérieur au maximum, on laisse au maximum
            level > max ? max
            // Ensuite on vérifie si il est bien supérieur ou égal au minimum
            : level < min
            // Dans le cas où le paramètre est inférieur au minimum, on laisse au minimum
            ? min
            // On laisse la modification se faire
            : level

        return this.subLevel
    }
    /**
     * Modifie le mot de passe
     * @param {string} newPassword Le nouveau mot de passe
     * @param {string} password Le mot de passe pour confirmer
     * @returns {Boolean} Si le mot de passe a été changé
     */
    changePassword(newPassword, password) {
        // On vérifie si l'utilisateur est connecté
        if (!this.loggedIn) return false

        if (!this.checkSamePassword(password)) return false;

        this.#password = newPassword;
        return true;
    }
    /**
     * Déconnecte l'utilisateur si il est connecté
     */
    logout() {
        if (this.#loggedIn) this.#loggedIn = false;
    }
    /**
     * Send a message via the user
     * @param {string} text 
     */
    sendMessage(text) {
        // On vérifie si l'utilisateur est connecté
        if (!this.loggedIn) return false;

        console.log(`\x1b[34m[${this.username}]\x1b[0m : ${text}`)
    }
}

const Greensky = new Utilisateur({
    username: 'Greensky',
    password: 'Greensky123',
    subLevel: 3
})

Greensky.login('Greensky123')
Greensky.sendMessage('Hello guys')
