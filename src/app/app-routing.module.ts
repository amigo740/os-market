import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import {SingleProductPageComponent} from "./pages/single-product-page/single-product-page.component";
import {ProductsComponent} from "./pages/products/products.component";
import {AddProductComponent} from "./pages/add-product/add-product.component";
import {ErrorComponent} from "./pages/error/error.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: SingleProductPageComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
