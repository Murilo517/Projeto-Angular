import { Component, OnInit } from "@angular/core";
import { Imatch } from "src/app/interfaces/matches.interfaces";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private matchService: MatchService) {}

  matches : Imatch[] = [];

  ngOnInit(): void {
    this.matchService.getMatches().subscribe((newMatches) => {
      this.matches = newMatches;
    });
  }
}
