import { TabContainer } from "./tab-container.model";
import { Categories } from "./enums/categories.enum";
import { Topic } from "./topic.model";
import { Book } from "src/app/components/shared/models/book.model";
import { Course } from "src/app/components/shared/models/course.model";

export class Category {
  public simpleId: string;
  public label: string;
  public description: string;
  public iconClasses: string;
  public topics: Topic[];
  public tabContainers: TabContainer[];
  public books: Book[];
  public courses: Course[];

  constructor(data?: any) {
    const defaults = {
      id: "",
      simgpleId: "",
      label: "",
      description: "",
      topics: [],
      tabContainers: [],
      books: [],
      courses: [],

      ...data
    };

    this.simpleId = defaults.simpleId;
    this.label = defaults.label;
    this.description = defaults.description;

    this.topics = defaults.topics.map((topic: any) => new Topic(topic));

    this.tabContainers = defaults.tabContainers.map(
      tabContainer => new TabContainer(tabContainer)
    );

    this.books = defaults.books.map((book: any) => new Book(book));

    this.courses = defaults.courses.map((course: any) => new Course(course));

    this.iconClasses = this.getIconClasses(defaults.simpleId);
  }

  private getIconClasses(Id: string) {
    switch (Id) {
      case Categories.JavaScript:
        return "fab fa-js";

      default:
        return "";
    }
  }
}
