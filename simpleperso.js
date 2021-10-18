
class Personnage {
    constructor(name, category, subcategory,items,pv) {
        this.name = name;
        this.category = category;
        this.subcategory = subcategory;
        this.items = items;
        this.pv = pv;
    }
    attaque(atk){
        if(this.items == "DivineRapier"){
          return atk + 31; 
        }
        else if (this.items == "Aghanim")
        {
          return atk +20;
        }
        else if(this.items == "boots"){
          return atk +7;
        }
    }
    defense(def){
        if(this.items == "Tarasque")
        {
          return def+27;
        }
        else if(this.items != "Tarasque")
        {
          return def-15;
        }
    }
    mana(mp){
        if (this.items == "Bloodstone")
        {
          return mp + 25;
        }
        else if(this.items != "Bloodstone" )
        {
          return mp +2;
        }
    }
}

let monperso = new Personnage("Luna","Carry","Nova","Tarasque",150);
console.log("Mon Perso s'appelle "+monperso.name + " c'est un " + monperso.category + " il possede l'item " + monperso.items + " donc sa defense passe a " + monperso.defense(30) + " ce qui lui permet de survire a l'attaque");


class Perso {
  constructor(name, weight, annee, equipement, shard, pv, talisman) {
      this.name = name;
      this.weight = weight;
      this.annee = annee;
      this.equipement = equipement;
      this.shard = shard;
      this.pv = pv;
      this.talisman = talisman;
  }

anneeFormat() {
  let date = new Date();
  return date.getFullYear() - this.annee;
}

attaque(x){
  return x + this.weight + 15;
}

}


// Appel de class D'exemple !
let myperso = new Perso("Sorken", 50, 1950, "diamond", "MagicPsy", 100, false);

console.log("Mon Perso a " + myperso.anneeFormat() + " Et il s'appel " + myperso.name + "et il lance une attaque avec son épée de " + myperso.attaque(48));







//   alert("Mon joueur s'appelle "+ personnage.firstName + " "+ personnage.lastName + " Il pese "+ personnage.poids+ "kg C'est un " + personnage.rank + " de l'armee du dieu Mene. C'est un " +personnage.category[0] +" ainsi qu'un "+personnage.category[1]   );

// const perso = {
//   name : "Sorken",
//   weight : 50,
//   année : 1435,
//   equipement :["diamond", "argent", "fer"],
//   shard : "MagicPsy",
//   pv :  100,
//   tasliman : false
//
// };
//
//
// let diamond = "diamond";
// let argent = "argent";
// let fer = "fer";
//
// if (perso.equipement == "diamond"){
//   weight = perso.weight + 15;
// } else if (perso.equipement == "argent"){
//   weight = perso.weight + 10;
// } else if(perso.equipement == "fer" ){
//   weight = perso.weight + 5;
// } else {
//   weight = perso.weight;
// }
//
//
//
// equipement = perso.equipement = "argent";
//
// // accesseurs
//
// alert("Mon joueur s'appel "+perso.name + ", il pese " + weight + ",il est né en l'an " + perso.année+"et possede une "+perso.equipement+"Ainsi qu'un atout de type"+perso.shard+"il un nombre de pv égale a "+perso.pv);

