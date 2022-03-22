import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-test',
  template: `
      <h2>
        Bem-vindo {{person.nome +' '+ person.sobrenome}}
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

      <!--
        Aula 10 sobre variáveis de referência de modelo
      <input #myInput type="text">
      <button (click)="logMessage(myInput.value)">Log</button>
      -->

      <!--
        Aula 11 sobre two way binding
      <input [(ngModel)]="name" type="text">
      {{name}}
      -->

      <!-- 
        Aula 12 sobre diretiva nfif
      <h2 *ngIf="true">Evolução do código</h2>
      <h2 *ngIf="displayName; else elseBlock">Evolução do código</h2>
      <ng-template #elseBlock>
        <h2>Nome é hidden</h2>
      </ng-template>

      <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

      <ng-template #thenBlock>
        <h2>Evolução do Código</h2>
      </ng-template>

      <ng-template #elseBlock>
        <h2>Hidden</h2>
      </ng-template>
      -->

      <!-- 
        Aula 13 sobre a diretiva ngSwitch
      <div [ngSwitch]="color">
          <div *ngSwitchCase="'red'">Você escolheu vermelho</div>
          <div *ngSwitchCase="'blue'">Você escolheu azul</div>
          <div *ngSwitchCase="'green'">Você escolheu verde</div>
          <div *ngSwitchDefault>Não escolheu nenhuma cor das opções</div>
      </div>
      -->

      <!-- 
        Aula 14 sobre a diretiva ngFor
      <div *ngFor="let color of colors; index as i">
        <h2>{{i}} {{color}}</h2>
      </div>
      -->

      <!--
        Aula 15 sobre interação de components, de pai para filho e de filho para pai
      
      <h2>{{"Olá " + parentData}}</h2>
      
        Outra forma de fazer a mesma coisa que em cima
          <h2>{{pai}}</h2>   
      
      <button (click)="fireEvent()">Enviar evento</button>
      -->

      <!--
        Aula 16 sobre pipes, OBS importante, os pipes não alteram os valores
        apenas o formato deles
      <h2>{{name}}</h2>
      <h2>{{name | lowercase}}</h2>
      <h2>{{name | uppercase}}</h2>
      <h2>{{name | titlecase}}</h2>
      <h2>{{name | slice:3:5}}</h2>
      <h2>{{person | json}}</h2>

      <h2>{{5.678 | number:'1.2-3'}}</h2>
      <h2>{{5.678 | number:'3.4-5'}}</h2>
      <h2>{{5.678 | number:'3.1-2'}}</h2>

      <h2>{{ 0.25 | percent }}</h2>
      <h2>{{ 0.25 | currency }}</h2>
      <h2>{{ 0.25 | currency: 'GBP'}}</h2>
      <h2>{{ 0.25 | currency: 'BRL' : 'code'}}</h2>

      <h2>{{ date }}</h2>
      <h2>{{ date | date:'short' }}</h2>
      <h2>{{ date | date:'shortDate' }}</h2>
      <h2>{{ date | date:'shortTime' }}</h2>
      -->

  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Alef";
  public person = {
    "nome":"Alef",
    "sobrenome":"Paula"
  };
  public date = new Date();
  public siteUrl = window.location.href;
  public meuId = "id";
  public isDisabled = false;
  public sucessClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";
  public clickTeste = "";
  public displayName = false;
  public color = "red";
  public colors = ["red", "blue", "green", "yellow"];
  @Input() public parentData: any;
  //Faz a mesma coisa que o de cima, só que diferente, só estou me referindo a parentData por outro nome
  //@Input('parentData') public pai: any; 
  @Output() public childEvent = new EventEmitter();

  public titleStyles = {
    color:"blue",
    fontStyle:"italic",
  }
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  constructor(private http: HttpClient) { }

  private _url: string ="/assets/data/employees.json";

  getEmployees(){
    return this.http.get<IEmployee[]>(this._url);
    
  }

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

  logMessage(value: any){
    console.log(value);
   
  }

  fireEvent(){
    this.childEvent.emit("Um olá do seu filho, Component Test")
  }

}

