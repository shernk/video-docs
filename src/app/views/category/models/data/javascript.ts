import { Category } from "./../category.model";
import { Topic } from "./../topic.model";
import { Tab } from "../tab.model";
import { Book } from "src/app/components/shared/models/book.model";

export const JAVASCRIPT_DATA: Category = new Category({
  id: "javascript",
  label: "JavaScript",
  description:
    "Javascript, often abbreviated as JS, is a high-level, interested programming language that conforms to the ECMAScript specification.",
  books: [
    new Book({
      imageUrl: "https://via.placeholder.com/75x100",
      title: "Eloquent Javascript, 3th Edition",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ipsum velit expedita, animi rerum asperiores?",
      href: "",
      rating: 4.5
    }),
    new Book({
      imageUrl: "https://via.placeholder.com/75x100",
      title: "Eloquent Javascript, 3th Edition",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ipsum velit expedita, animi rerum asperiores?",
      href: "",
      rating: 3.5
    })
  ],
  tabContainers: [
    {
      title: "Example",
      tabItems: [
        new Tab({ label: "Simple", iconClasses: "fas fa-cog" }),
        new Tab({ label: "Advance", iconClasses: "fas fa-cogs" })
      ]
    }
  ]
});
