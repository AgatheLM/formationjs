export const ADD_TODO='ADD_TODO';

// L'action ADD_TODO sera utilisée pour ajouter un nouvel élément à notre liste
let nextToDo=0;
// La fonction addTodo est un créateur d'actuib qyu renvoie notre action et défini un id pour chaque élément crée
export function addTodo(text){
  return{
	 type:ADD_TODO, //on notifie le store en passant l'action en constante par type, c'est une propriété de redux
	 id: nextToDo++, //incrément de 1 le compteur
	 nouvelItem : text
  };
}