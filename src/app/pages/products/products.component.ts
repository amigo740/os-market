import {Component} from '@angular/core';
import {CardsService} from '../../services/cards.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(public cardsService: CardsService) {}

}
