import { Injectable } from '@angular/core';
import cards from '../mock/cards.json'
import {CardModel, CardsInfo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})

export class CardsService {

  private cardsList: CardModel[] = cards;

  private isAddedWhenLoadedPage = false;

  private addCardListItem(obj: CardModel[]) {
    obj.forEach( (item) => {
      this.cardsList.push(item);
    } );
  }

  private removeLocalStorageItem(id: string, localStorageName: string) {
    let localStorageObj = JSON.parse( <string>localStorage.getItem(localStorageName) );
    this.cardsList = this.cardsList.filter( item => item.id !== id );
    if ( localStorageObj !== null ){
      localStorageObj = localStorageObj.filter( (item: { id: string; }) => item.id !== id );
      if (localStorageObj.length === 0){
        localStorage.clear();
      } else {
        localStorage.setItem( localStorageName, JSON.stringify(localStorageObj) );
      }
    }
  }

  private static addLocalStorageItem(obj: CardModel, localStorageName: string) {
    let localStorageObj = JSON.parse( <string>localStorage.getItem(localStorageName) );
    if ( localStorageObj !== null ){
      localStorageObj.push(obj);
      localStorage.setItem( localStorageName, JSON.stringify(localStorageObj) );
    } else {
      localStorage.setItem( localStorageName, `[${JSON.stringify(obj)}]` );
    }
  }

  public getAllCards() {
    const localStorageObj = JSON.parse( <string>localStorage.getItem('app-market-products') );
    const localStorageObj2 = JSON.parse( <string>localStorage.getItem('app-market-new-products') );
    if ( localStorageObj !== null ){
      if ( !this.isAddedWhenLoadedPage ){
        this.addCardListItem(localStorageObj);
        this.isAddedWhenLoadedPage = true;
        localStorage.removeItem('app-market-new-products');
      } else if (localStorageObj2 !== null) {
        this.addCardListItem(localStorageObj2);
        localStorage.removeItem('app-market-new-products');
      }
    }
    return this.cardsList;
  }

  public getCardByID( id: string ) {
    return this.cardsList.find(item => item.id === id );
  }

  public removeCard( id: string ) {
    this.removeLocalStorageItem(id, 'app-market-products');
  }

  public getCardsInfo(): CardsInfo {
    const totalCards = this.cardsList.length;
    let totalPrice = 0;
    for ( let i = 0; i < totalCards; i++ ){
      totalPrice = +(+this.cardsList[i].price.replace(/\s/g, '') + totalPrice).toFixed(2);
    }
    return {
      totalCards: totalCards,
      totalPrice: totalPrice,
      averagePrice: +(totalPrice/totalCards).toFixed(2) || 0
    };
  }

  public removeAllCards() {
    this.cardsList = [];
    localStorage.clear();
  }

  public addNewCard(obj: CardModel) {
    CardsService.addLocalStorageItem(obj, 'app-market-products');
    CardsService.addLocalStorageItem(obj, 'app-market-new-products');
    this.getAllCards();
  }

}
