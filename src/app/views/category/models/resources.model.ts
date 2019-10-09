import { Book } from 'src/app/shared/models/book.model';
import { Course } from 'src/app/shared/models/course.model';

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
