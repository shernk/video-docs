import { TeamMember } from "./../../models/team-member.model";
import { TEAM_MEMBERS_DATA } from "./../../models/data/team-members.data";
import { Component } from "@angular/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"]
})
export class TeamComponent {
  public currentTeamMember = TEAM_MEMBERS_DATA[0];
  public teamMembers = TEAM_MEMBERS_DATA;

  public selectTeamMember(teamMember: TeamMember): void {
    this.currentTeamMember = teamMember;
  }
}
