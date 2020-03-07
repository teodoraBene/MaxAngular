import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // alternative care nu se prea folosesc
  //  selector: '.app-servers', - select by class --> cand facem referire la component folosim <div class="app-server"><div>
  //  selector: [app-servers], - select by attribute --> cand facem referire la component folosim <div app-server><div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
