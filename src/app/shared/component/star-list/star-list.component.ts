import { Component, Input } from "@angular/core";

@Component({
  selector: "app-star-list",
  templateUrl: "./star-list.component.html",
  styleUrls: ["./star-list.component.scss"]
})
export class StarListComponent {

  @Input() public rating = 5;

  public get fullStars(): any[] {
    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStars(): boolean {
    const rating = this.rating;
    const totalFullStars = Math.floor(this.rating);
    const hasHalfStars = rating - totalFullStars >= 0.5 && rating !== 5;

    return hasHalfStars;
  }

  public get emptyStars(): any[] {
    const rating = this.rating;
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - rating);

    return Array(totalEmptyStars).fill(0);
  }
}
