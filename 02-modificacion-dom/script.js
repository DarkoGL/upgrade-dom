const div$$ = document.createElement("div");
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const body$$ = document.querySelector("body");
body$$.appendChild(div$$);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP$$ = document.createElement("div");
const p$$ = document.createElement("p");

divP$$.appendChild(p$$);
body$$.appendChild(divP$$);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divLoop$$ = document.createElement("div");
for (let i = 0; i < 6; i++) {
    const pLoop$$ = document.createElement("p");
    divLoop$$.appendChild(pLoop$$);
}
body$$.appendChild(divLoop$$)

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const dynaP$$ = document.createElement("p");
dynaP$$.textContent = "Soy dinámico!";

body$$.appendChild(dynaP$$);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2$$ = document.querySelector("h2");
if(h2$$.className === "fn-insert-here") h2$$.textContent = "Wubba Lubba dub dub";


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const list$$ = document.createElement("ul");

for (const app of apps) {
    const li$$ = document.createElement("li");
    li$$.textContent = app;
    list$$.appendChild(li$$);
}

body$$.appendChild(list$$);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const remove$$ = document.querySelectorAll(".fn-remove-me");

for (const element of remove$$) {
    element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const pMid$$ = document.createElement("p");

pMid$$.textContent = "Voy en medio!";

const divs$$ = document.querySelectorAll("div");

body$$.insertBefore(pMid$$, divs$$[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divInsert$$ = document.querySelectorAll(".fn-insert-here");

for(element of divInsert$$){
    element.textContent = "Voy dentro!";
}