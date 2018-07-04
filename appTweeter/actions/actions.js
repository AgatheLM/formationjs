export const ADD_TWEET='ADD_TWEET';

// L'action ADD_TWEET sera utilisée pour ajouter un nouveau tweet à notre liste
let idTweet=0;
// La fonction addTodo est un créateur d'actuib qyu renvoie notre action et défini un id pour chaque élément crée
export function ajouterTweet(texte){
  return{
	 type:ADD_TWEET, //on notifie le store en passant l'action en constante par type, c'est une propriété de redux
	 id: idTweet++, //incrément de 1 le compteur
	 texte : texte
  };
}