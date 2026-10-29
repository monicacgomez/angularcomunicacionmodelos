import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicJsonComponent} from './components/comic-json-component/comic-json-component';
import { ComicExcelComponent } from './components/comic-excel-component/comic-excel-component';
import { HijoNumeroComponent } from './components/hijo-numero-component/hijo-numero-component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "listaproductos", component: ListaProductosComponent},
  { path: "padrecoches", component: PadreCochesComponent},
  { path: "deportes", component: PadreDeportesComponent},
  { path: "numeros", component: PadreNumerosComponent},
  { path: "comicssimple", component: ComicsSimpleComponent},
  { path: "comicsjson", component: ComicJsonComponent},
  { path: "comicsexcel", component: ComicExcelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }