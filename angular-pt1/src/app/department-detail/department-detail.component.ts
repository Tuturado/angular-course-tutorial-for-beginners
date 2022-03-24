import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>Você selecionou o departamento com id ={{departmentId}}</h3>
    
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contato</button>
    </p>
    <router-outlet></router-outlet>
    
    <p>
      <button (click)="goPrevious()">Voltar</button>
      <button (click)="goNext()">Avançar</button>
    </p>
    <div>
      <button (click)="gotoDepartments()">Voltar</button>
    </div>

  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = this.route.snapshot.paramMap.get('id');
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = parseInt(this.departmentId) - 1;
    this.router.navigate(['/departments', previousId])
  }

  goNext() {
    let nextId = parseInt(this.departmentId) + 1;
    this.router.navigate(['/departments', nextId])
  }

  gotoDepartments() {
    let selectedId = parseInt(this.departmentId) ? parseInt(this.departmentId) : null;
    //this.router.navigate(['/departments', {id:selectedId}]);
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
