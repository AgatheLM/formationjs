export const AJOUTER_PRODUIT_PANIER='AJOUTER_PRODUIT_PANIER';

// L'action AJOUTER_PRODUIT sera utilisée pour ajouter un nouvel élément à notre liste

// La fonction addTodo est un créateur d'actuib qyu renvoie notre action et défini un id pour chaque élément crée
export function ajouterProduitPanier(produit){
console.log("toto");
  return{
	 type:AJOUTER_PRODUIT_PANIER, //on notifie le store en passant l'action en constante par type, c'est une propriété de redux
	 produit: produit 
  };
}