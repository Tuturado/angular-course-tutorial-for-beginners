# Angular Course
Finalizado o curso Angular tutorial for beginners.
Segue abaixo as minhas anotações feitas no Notion e exportadas para Markdown

# Anotações sobre o curso de Angular

## Comandos úteis do Angular

1. Geração de componentes via CLI: ng g c <Nome do Component>
2. Geração de serviços via CLI: ng g s <Nome do Serviço>
3. Sugere atualizações das bibliotecas instaladas: ng update <pacote>
4. Adiciona novos recursos no aplicativo: ng add. EX: ng add @angular/material
5. Geração de template com Material (Material Sidenav: ng generate @angular/material:material-nav —name=my-nav
6. Geração de modelo para tabela de dados: ng generate @angular/material:material-table —name=my-table
7. Build do app para produção: ng build —prod

---

OBS: Os decorators do Typescript que são os @Components, dentre outros, é uma funcionalidade que permite a alteração do funcionamento de uma classe, função ou variável usando uma sintaxe mais tranquila.

O que são serviços ? Serviços nada mais são do que uma Classe criada para fins específicos.

Para usar um serviço em angular usamos a injeção de dependências.

No Angular a convenção de nomes é : .service.ts

Injeção de dependência é uma codificação padrão na qual uma classe recebe suas dependências de fontes externas ao invés de cria-las.

---

## Passos para configurar o roteamento do Angular:

1. No index.html verifique se tem a tab <base href=”/”>
2. Em app-routing.module.ts configure as rotas como no exemplo: 
    
    ```jsx
    const routes: Routes = [
      { path: 'departments', component: DepartmentListComponent },
      { path: 'employees', component: EmployeeListComponent }
    ];
    ```
    
3. Depois das rotas definidas passe como argumento, como no exemplo: 
    
    ```jsx
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    ```
    
4. Exporte o módulo e os componentes de roteamento, como no exemplo: 
    
    ```jsx
    export const routingComponents = [DepartmentListComponent, EmployeeListComponent]
    ```
    
5. No app.module.ts inclua a variável exportada nos declarations e apague as importações dos components que agora estão no roteamento, como no exemplo: 
    
    ```jsx
    @NgModule({
      declarations: [
        AppComponent,
        TestComponent,
        EmployeeDetailComponent,
        routingComponents
      ],
    ```
    

Com isso já é possível navegar através da URL, para adicionar os botões de navegação basta então:

1. Vá até app.component.html
2. Adicione a tag <router-outlet></router-outlet> caso ainda não contenha
3. Crie uma tag <nav>
4. Crie tags <a> 
5. Coloque um routerLink com o nome que deseja, como no exemplo: 

```jsx
<nav>
  <a routerLink="/" routerLinkActive="active">Home</a>
  <a routerLink="/departments" routerLinkActive="active">Departments</a>
  <a routerLink="/employees" routerLinkActive="active">Employees</a>
</nav>
```

# Angular Forms

Quando se trata de formulários em Angular temos 2 tipos, os formulários orientados por modelo (TDF) e os formulários reativos.

<aside>
🛠 Direto da documentação do angular:

Angular suporta duas abordagens de design para formulários interativos. Você pode criar formulários escrevendo modelos usando a [sintaxe e as diretivas de modelo](https://angular.io/guide/glossary#template) Angular com as diretivas e técnicas específicas de formulário descritas neste tutorial, ou pode usar uma abordagem reativa (ou orientada por modelo) para criar formulários.

Os formulários orientados por modelo são adequados para formulários pequenos ou simples, enquanto os formulários reativos são mais escaláveis e adequados para formulários complexos. Para uma comparação das duas abordagens, consulte [Introdução aos formulários](https://angular.io/guide/forms-overview)

</aside>

## Três etapas para criação de um formulário reativo em Angula

1. Primeira parte é definir o formulário HTML no modelo de componente, como no exemplo:
    
    ```jsx
    <div class="container-fluid">
      <h2>Formulário de registro</h2>
      <form [formGroup]="registrationForm">
        <div class="form-group">
          <label>Nome de usuário</label>
          <input formControlName="userName" type="text" class="form-control">
        </div>
    
        <div class="form-group">
          <label>Senha</label>
          <input formControlName="password" type="password" class="form-control">
        </div>
    
        <div class="form-group">
          <label>Confirmar senha</label>
          <input formControlName="confirmPassword" type="password" class="form-control">
        </div>
    
        <button class="btn btn-primary" type="submit">Registrar</button>
    
      </form>
      {{registrationForm.value | json}}
    </div>
    ```
    
2. Segunda etapa é definir o modelo de formulário no compoente classe, como no exemplo:
    
    ```jsx
    export class AppComponent {
      registrationForm = new FormGroup({
        userName: new FormControl('Alef'),
        password: new FormControl(''),
        confirmPassword: new FormControl('')
      });
    }
    ```
    
3. Terceira etapa é usar as diretivas fornecida pelo módulo de formulários reativos para associar o modelo com a view, que no código do primeiro passo são os formControlName e o [formGroup] que está associado ao registratioForm criado na segunda etapa.
