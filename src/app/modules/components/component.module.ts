import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarSelectorComponent} from './avatar-selector/avatar-selector.component';
import {IonicModule} from '@ionic/angular';
import {MapaComponent} from './mapa/mapa.component';
import {CardImageComponent} from './card-image/card-image.component';
import {ItemSeleccionadoComponent} from './item-seleccionado/item-seleccionado.component';
import {ArticuloSlideComponent} from './articulo-slide/articulo-slide.component';
import {PipesModule} from '../pipes/pipes.module';
import {PedidosComponent} from './pedidos/pedidos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SolicitudRutaComponent} from './solicitud-ruta/solicitud-ruta.component';


@NgModule({
    declarations: [AvatarSelectorComponent, MapaComponent, SolicitudRutaComponent,
        CardImageComponent, ItemSeleccionadoComponent, ArticuloSlideComponent, PedidosComponent],
    exports: [
        AvatarSelectorComponent, MapaComponent, SolicitudRutaComponent,
        CardImageComponent, ItemSeleccionadoComponent, ArticuloSlideComponent, PedidosComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
    ]
})
export class ComponentModule {
}