import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() // pour que le composant parent puisse le voir et le changer 
  titre = "my-default-header"; // valeur par defaut : etape(1) ouput input

  constructor() { }

  ngOnInit() {
  }

}
