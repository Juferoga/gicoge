import { Component } from '@angular/core';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  contactList = [
    {
      icon: "",
      text: "+57 31062123222",
    },
    {
      icon: "",
      text: "Directorio",
    },
    {
      icon: "",
      text: "Portal Antiguo",
    },
  ]

  serviceList = [
    {
      link: "",
      text: "+57 31062123222",
    },
    {
      link: "",
      text: "Directorio",
    },
    {
      link: "",
      text: "Portal Antiguo",
    },
  ]

  pages = routes
}
