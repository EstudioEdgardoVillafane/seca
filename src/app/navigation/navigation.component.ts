import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { REVESTIMIENTOS, CIELORRASOS } from '../mock-modelos';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public isCollapsed = false;

  constructor(private router: Router) { }
  modelosre = REVESTIMIENTOS;
  modelosci = CIELORRASOS;
  onTabChange(ruta) {
    if (this.router.navigated === false) {
      // Case when route was not used yet
      this.router.navigateByUrl(ruta);
    } else {
      // Case when route was used once or more
      this.router.navigateByUrl('/home').then(
        () => {
          this.router.navigateByUrl(ruta);
        });
    }
  }

  ngOnInit() {
  }

}
