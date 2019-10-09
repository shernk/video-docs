import { Component, Input } from "@angular/core";
import { Course } from '../../models/course.model';

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent {
  @Input() public courses: Course[] = [];
}
