# Le type Object en Javascript

Il existe 2 méthode pour créer un objet en Javascript : 

```javascript
const myObj = {};
```

ou

```javascript
const myObj = new Object();
```

Donc un objet est une instance de la classe `Object`.

## La classe Object

Comme toutes les classes elle peut être instancié, ou utilisé directement si elle possède des méthodes statiques.

Parmis ces méthodes les plus utilisés sont, `values()`, `keys()`, et `entries()`

### Méthode statique values

Elle permet de transformer un objet en tableau, où chaque élement contiendra les valeurs des propriétés de l'objet.

Exemple :

```javascript
const myObj = {prop1: 'valeur1', prop2: 'valeur2'};
console.log(Object.values(myObj));
// [
//     'valeur1',
//     'valeur2'
// ]
```

### Méthode statique keys

Elle permet de transformer un objet en tableau, où chaque élement contiendra les clés des propriétés de l'objet.

Exemple :

```javascript
const myObj = {prop1: 'valeur1', prop2: 'valeur2'};
console.log(Object.keys(myObj));
// [
//     'prop1',
//     'prop2'
// ]
```

### Méthode statique entries

Elle permet de transformer un objet en tableau, où chaque élement contiendra un tableau avec 2 éléments (tuple) ou le premier élément (à l'index 0) contient la clé de la propriété et le 2eme élément (à lindex 1) contient la valeur de propriété.

Exemple :

```javascript
const myObj = {prop1: 'valeur1', prop2: 'valeur2'};
console.log(Object.entries(myObj));
// [
//     ['prop1', 'valeur1'], 
//     ['prop2', 'valeur2']
// ]
```