/**
 * Todo componente do Angular é representado por uma classe
 */

 import { Component } from "@angular/core"; //atalho ctrl + espaço


 
 @Component({ 
   selector: 'card-produto', //conseguir chamar o componente (igual a 'tag')
   templateUrl: './produto.component.html',
   styleUrls: ['./produto.component.css'] //tem que colocar 'array' pq permite que use +1 arquivo css
 }) 


 export class ProdutoComponent {
 //serve para 'permitir' que use esse componente em outro arquivo
 }

 //para poder usar a class "ProdutoComponent" dentro do HTML, é preciso criar uma tag chamada 'card-produto' = <card-produto></card-produto>