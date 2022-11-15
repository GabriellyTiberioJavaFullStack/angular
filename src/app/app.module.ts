import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ //serve para registrar componentes e outras estruturas
    AppComponent,
    ProdutoComponent,
    NavbarComponent
  ],
  imports: [ //registrar modulos dentro de outros modulos
    BrowserModule
  ],
  providers: [ //registrar serviços e interceptadores HTTP],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
