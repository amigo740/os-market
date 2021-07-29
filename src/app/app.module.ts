import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MaterialModule } from './material.module';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoodsInfoComponent } from './components/goods-info/goods-info.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ErrorComponent } from './pages/error/error.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    CardComponent,
    SingleProductPageComponent,
    FooterComponent,
    GoodsInfoComponent,
    ProductsComponent,
    AddProductComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
