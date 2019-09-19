import { Component, Input } from "@angular/core";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.scss"]
})
export class QuoteComponent {
  // tslint:disable-next-line: max-line-length
  public quote = `Video Dev Docs goal is to make developer documentation pain free and include more than just text regardless of if your an aspiring developer or super senior`;
  public author = "Ostrobuloous Sherk";
  public occupation = "Software Engineer";
}
