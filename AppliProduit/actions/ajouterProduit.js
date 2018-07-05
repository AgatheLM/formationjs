export const AJOUTER_PRODUIT='AJOUTER_PRODUIT';

// L'action AJOUTER_PRODUIT sera utilisée pour ajouter un nouvel élément à notre liste
let idProduit=0;
// La fonction addTodo est un créateur d'actuib qyu renvoie notre action et défini un id pour chaque élément crée
export function ajouterProduit(refPdt, nomPdt, prixPdt){
  return{
	 type:AJOUTER_PRODUIT, //on notifie le store en passant l'action en constante par type, c'est une propriété de redux
	 id: idProduit++, //incrément de 1 le compteur
	 refPdt : refPdt,
	 nomPdt : nomPdt,
	 prixPdt : prixPdt
	 
  };
}