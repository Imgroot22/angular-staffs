import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute) {
    this.server={id:0,name:'',status:''};
   }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params:Params)=>{
      this.server = this.serversService.getServer(+params['id']); // '+' to convert string to number...
    });
  }
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.server.name, status: this.server.status});
  }

}
