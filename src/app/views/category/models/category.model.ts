import { TabContainer } from "./tab-container.model";
import { Categories } from "./enums/categories.enum";
import { Topic } from "./topic/topic.model";
import { Course } from 'src/app/shared/models/course.model';
import { Book } from 'src/app/shared/models/book.model';
import { Detail } from 'src/app/shared/models/detail.model';

export class Category {
  public simpleId: string;
  public label: string;
  public description: string;
  public iconClasses: string;
  public topics: Topic[];
  public tabContainers: TabContainer[];
  public books: Book[];
  public courses: Course[];
  public playlist: Detail;

  constructor(data?: any) {
    const defaults = {
      id: "",
      simpleId: "",
      label: "",
      description: "",
      topics: [],
      tabContainers: [],
      books: [],
      courses: [],
      playlist: new Detail(),

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
    this.playlist = new Detail(defaults.playlist);
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
