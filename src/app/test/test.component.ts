import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h2>
        Bem-vindo {{name}}
      </h2>

      <!-- Aula de interpolação -->
      <!--
      h2>{{2+2}}</h2>
      <h2>{{"Bem-vindo" + name}}</h2>
      <h2>{{name.length}}</h2>
      <h2>{{name.toLocaleUpperCase()}}</h2>
      <h2>{{nomeUser()}}</h2>
      <h2>{{siteUrl}}</h2> -->

      <!-- Aula sobre a propriedade binding -->
      <!--<input [id]="meuId" type="text" value="teste">
      <input [disabled]="isDisabled" type="text"  id="{{meuId}}" value="teste">
          Existe uma sintaxe alternativa para não usar os colchetes, ao invés disso
          podemos usar o bind-, como no exemplo abaixo
      
      <input bind-disabled="isDisabled" type="text"  id="{{meuId}}" value="teste">-->
      
      <!--
        Aula 7 sobre class binding
      <h2 class="text-success">Evolução do Código</h2>
      <h2 [class]="sucessClass">Evolução do Código</h2>
      <h2 [class]="sucessClass" class="text-special">Evolução do Código</h2>
      <h2 [class.text-danger]="hasError">Evolução do Código</h2>
      
      <h2 [ngClass]="messageClasses">Evolução do Código</h2>
      -->
    
      <!--
        Aula 8 sobre style binding
      <h2 [style.color]="'orange'">Style Binding 1</h2>
      <h2 [style.color]="highlightColor">Style Binding 2</h2>
      <h2 [style.color]="hasError ? 'red' : 'green' ">Style Binding 3</h2>
      <h2 [ngStyle]="titleStyles">Style Binding 4</h2>
      -->

      <!--
        Aula 9 sobre vinculação de eventos
      <button (click)="onClick($event)">Clique</button>{{clickTeste}}
      <button (click)="clickTeste='Click de teste'">Clique</button>{{clickTeste}}
      -->
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Alef";
  public siteUrl = window.location.href;
  public meuId = "id";
  public isDisabled = false;
  public sucessClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";
  public clickTeste = "";
  public titleStyles = {
    color:"blue",
    fontStyle:"italic",
  }
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  constructor() { }

  ngOnInit(): void {
  }

  nomeUser(){
    return "Olá " + this.name;
  }

  onClick(event: any){
    console.log(event);
    console.log("Click de teste");
    this.clickTeste =event.type;
  }

}

