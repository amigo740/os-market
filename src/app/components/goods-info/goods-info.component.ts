import { Component } from '@angular/core';
import { CardsService } from "../../services/cards.service";

@Component({
  selector: 'app-goods-info',
  templateUrl: './goods-info.component.html',
  styleUrls: ['./goods-info.component.scss']
})
export class GoodsInfoComponent {

  constructor(
    public cardsService: CardsService
  ) {}

  removeAllCards() {
    this.cardsService.removeAllCards();
  }
}
