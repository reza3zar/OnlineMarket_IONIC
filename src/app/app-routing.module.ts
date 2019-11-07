import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login',
   loadChildren: './login/login.module#LoginPageModule'
   },
  { path: 'page-not-found'
  , loadChildren: './page-not-found/page-not-found.module#PageNotFoundPageModule'
 },
  { path: 'shoppinCentre', loadChildren: './main-page-shopping-centre/main-page-shopping-centre.module#MainPageShoppingCentrePageModule' },
  { path: 'products/:catId', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'product-category/:catId', loadChildren: './product-category/product-category.module#ProductCategoryPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
