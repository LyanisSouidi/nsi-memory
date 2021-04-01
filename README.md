# Projet (DM facultatif) : Le Memory

Projet facultatif à faire par groupes de 1, 2, 3 ou 4 personnes. Le barème dépend de la taille du groupe.

Les règles complètes du Memory peuvent être trouvées sur Internet : 
 - https://fr.wikipedia.org/wiki/Memory_(jeu)
 - https://www.regles-de-jeux.com/regle-du-memory/

## 1 Implémentation du Memory pour 1 joueur

- [x] Vous devez implémenter le jeu du Memory pour 1 joueur. 
Pour se faire, je vous conseille fortement d’utiliser comme base le code fourni ici : https://www.leprofd.info/js/memory.zip

###  1.1 Niveau 0 : Cahier des charges
- [x] 1. Lorsque le joueur place sa souris sur une image non révélée, celle-ci est encadrée en gris.
- [x] 2. Si le joueur clique sur une image, cette image est révélée et est encadrée en noir.
- [ ] 3. Après que le joueur ait sélectionné deux images :
	- - [ ] Si les images sont identiques, elles restent révélées et seront encadrées en bleu.
	- - [ ] Si les images sont différentes, elles sont remises face cachée, non encadrée.
	- - [ ] Dans tous les cas, le nombre de coups est augmenté de 1.
- [ ] 4. Lorsque toutes les images sont révélées, un popup apparaît indiquant “Vous avez gagné en X coups”, X étant le nombre de coups utilisés.
- [ ] 5. Cliquer sur le bouton “Relancer” relance la partie : — Les images sont remélangées et replacées face cachées, — Aucune image n’est encadrée. — Le nombre de coups repasse à 0.

Indication : Pour “encadrer” une image, vous modifierez l’attribut CSS `border-color` de l’élément HTML `<img>` affichant l’image.

### 1.2 Niveau 1 : Mode carte seule

- [x] Si le bouton “Trump card” est coché lorsque l’on relance la partie, une 21me image est utilisée. Le jeu comprendra donc 10 paires et 1 image seule. Le jeu se termine également lorsque toutes les images sont révélées. Cela signifie donc que l’on doit révéler l’image seule en dernière.

### 1.3 Niveau 1 : Gestion du temps

- [ ] **Deux cartes révélées**
- - [ ] Niveau 1 : Lorsqu’un joueur a révélé deux images différentes, ces deux images restent visibles pendant 2 secondes mais c’est images ne sont pas considérées comme “révélées” : le popup “Vous avez gagné” ne doit pas apparaître si on clique très rapidement sur toutes les images.
- - [ ] Niveau 2 : Lorsqu’un joueur a révélé deux images différentes, ces deux images restent visibles jusqu’à ce qu’un joueur clique sur une nouvelle image ou que 2 secondes se soit écoulés.

- [x] **Temps de réflexion**
- - [x] Niveau 1 : Le nombre de secondes écoulées depuis le début de la partie est affiché sur la page Web.
- - [x] Niveau 2 : Le temps écoulés depuis le début de la partie est affiché sur la page Web au format “mm :ss” (nombres de minutes “ :” nombre de secondes sur deux chiffres).

- [ ] **Mode Blitz**
- - [ ] Niveau 1 : Si le bouton “Blitz” est coché lorsque l’on relance la partie, le temps affiché est un compte à rebours de 2 minutes. À la fin de ce compte à rebours, un popup indique “Vous avez perdu”.
- - [ ] Niveau 2 : Ajouter le bouton “Blitz 1m+10s” à la liste des options de jeu. Si ce bouton est coché lorsque l’on relance la partie, le temps affiché est un compte à rebours de 1 minute et chaque paire d’images identiques révélées ajoute 10 secondes supplémentaires à ce compte à rebours. À la fin de ce compte à rebours, un popup indique “Vous avez perdu”.

## 2 Implémentation du Memory pour 2 joueurs

- [ ] Si le bouton “Deux joueurs” est coché lorsque l’on relance la partie, le Memory se jouera à deux joueurs : le joueur bleu et le joueur rouge.

### 2.1 Niveau 1 : Cahier des charges

Le cahier des charges est modifié ainsi : 
- [ ] 1. Dans le mode 2 joueurs, on ne comptabilise plus les coups dans l’en-tête mais le score et le temps de chaque joueur. 
- [ ] 2. Lorsque le joueur place sa souris sur une carte non révélée, celle-ci est encadrée en bleu clair ou en rouge clair suivant le joueur qui joue. 
- [ ] 3. Après que le joueur ait sélectionné deux images : 
	- - [ ] Si les images sont identiques, elles restent révélées et seront encadrées dans la couleur du joueur. Ce joueur rejoue et son score est augmenté de 1.
	- - [ ] Si les images sont différentes, elles sont remises face cachée, non encadrée. 
- [ ] 4. Lorsque toutes les images sont révélées, un popup apparaît indiquant “Le joueur X a gagné”, X étant la couleur du joueur ayant le meilleur score.

### 2.2 Niveau 3 : Modification du mode Blitz

- [ ] En mode “Blitz”, chaque joueur dispose de sa propre horloge, comme dans une partie d’échecs. Dès que qu’un joueur reprend la main, c’est-à-dire dès que le joueur adversaire a sélectionné deux images différentes, son horloge se déclenche et l’horloge adversaire se stoppe.
En mode “Blitz 1m+10s”, les dix secondes sont ajoutées à l’horloge du joueur qui découvre les deux images identiques.
Lorsqu’un joueur n’a plus de temps, un popup indique “Le joueur X a perdu au temps”, X étant la couleur du joueur n’ayant plus de temps.

## 3 Niveau 4 : Programmer une IA

- [ ] Programmer en Javascript une IA jouant au Memory intelligemment. Faite combattre deux IA en mode deux joueurs.
