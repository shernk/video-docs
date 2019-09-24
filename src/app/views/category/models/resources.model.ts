import { Course } from "src/app/components/shared/models/course.model";
import { Book } from "./../../../components/shared/models/book.model";

export class Resources {
  public books: Book[];
  public courses: Course[];

  constructor(data?: any) {
    const defaults = {
      books: [],
      courses: [],
      ...data
    };

    this.books = defaults.books.map(book => new Book(book));
    this.courses = defaults.courses.map(course => new Course(course));
  }
}
