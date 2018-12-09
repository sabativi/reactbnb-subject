# TP 0 - Todo List en React

## Objectifs

Apprendre les bases de l'approche composant dans un environnement plus simple : le web.

## Instructions

**Dans ce TP, afin d'éviter les problématiques d'installation, nous allons utiliser un environnement en ligne : codesandbox**

### 1. CodeSandbox

1. Rendez vous sur CodeSandBox (https://codesandbox.io/)
2. Cliquer sur le bouton Créer une sandbox en haut à droite et partez de l'exemple intitulé `create-react-app`.
3. Après l'installation de l'environnement, vous devriez avoir du texte sur la page de prévisualisation à droite.

### 2. Identifier le "state" de l'application et afficher une liste statique.

1. En reprenant la méthode vu juste avant, quel est le state de l'application ?
2. Créer un composant TodoList, initialiser l'état avec une liste de todos, par exemple `['react', 'react-native', 'expo', 'graphql']
3. Dans la méthode render du composant, parcourez la liste avec la méthode .map d'un tableau pour afficher le texte de chaque todo.

```js
this.state.todos.map(todo => ...)
```

### 3. Créer un formulaire pour ajouter une todo.

1. Créer un nouveau composant `AddTodo` contenant un simple formulaire html : vous pouvez vous baser sur l'exemple un peu plus loin.
2. Stocker dans l'état de ce composant la valeur du champ rentré par l'utilisateur.
3. Insérer ce composant dans votre composant déjà crée `TodoList`.
4. Définissez une méthode addTodo ( mais dans quel composant ? ) permettant d'ajouter une todo dans la liste de notre composant TodoList.
5. Branchez la méthode sur le clic du formulaire pour faire apparaitre la nouvelle todo.

```js
<form onSubmit={/TODO/}>
  <input onChange={/TODO/} value={/TODO/} />
  <button> Ajouter </button>
</form>
```

### 4. (Pour aller plus loin ) Gérer un état : 'Todo', 'Doing', 'Done'.

1. Changer la structure de données pour avoir un état sur chaque todo.
2. Séparer la liste en trois ( Les todo en cours, celles à faire et celles faites )
3. Ajouter la possibilité en cliquant sur une todo "à faire" de la passer en "doing" et quand elle est "doing" de la passer à done en cliquant dessus.

Comparez votre code entre vous.

** CodeSandox vous offre la possibilité de télécharger le projet. **
