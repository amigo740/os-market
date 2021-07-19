import {Component} from '@angular/core';
import {CardsService} from "../../services/cards.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  public title = '';
  public description = '';
  public price = '';

  constructor(
    private cardsService: CardsService
  ) {
  }

  keyPress(event: KeyboardEvent) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  submit() {
    this.cardsService.addNewCard({
      id: (+ new Date()).toString(),
      title: this.title,
      shortText: this.description,
      price: this.price.toString()
    });
  this.title = '';
  this.description = '';
  this.price = '';
  }

  get isDisabled() {
    return !(this.title.trim() && this.description.trim() && this.price.trim());
  }
}
