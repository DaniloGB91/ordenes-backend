import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  signInWithRedirect,
  signOut,
  fetchAuthSession,
  getCurrentUser
} from 'aws-amplify/auth';
import { PedidosService } from "./pedidos.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  usuario = '';
  token = '';
  autenticado = false;
  pedidos: any[] = [];
  cargandoPedidos = false;
  errorPedidos = '';
  mostrarToken = false;

  constructor(
    private pedidosService: PedidosService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.verSesion();
  }

  async login() {
    await signInWithRedirect();
  }

  async logout() {
    await signOut();
  }

  verToken() {
    this.mostrarToken = !this.mostrarToken; 
  }

  async verSesion() {
    try {
      const user = await getCurrentUser();
      const session = await fetchAuthSession();
      this.usuario = user.username;
      this.token = session.tokens?.accessToken?.toString() ?? '';
      this.autenticado = true;
      this.cdr.detectChanges();
    } catch (Error) {
      console.log("No existe sesion", Error);
      this.autenticado = false;
      this.token = '';
      this.cdr.detectChanges();
    }
  }

  consultarPedidos() {
    this.cargandoPedidos = true;
    this.errorPedidos = '';
    this.pedidosService
      .obtenerPedidos()
      .subscribe({
        next: (data) => {
          this.pedidos = data;
          this.cargandoPedidos = false;
          console.log('¡Datos recibidos exitosamente:', data);
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('¡Error detectado en la petición!', error);
          this.errorPedidos = `Error HTTP ${error.status}`;
          this.cargandoPedidos = false;
          this.cdr.detectChanges();
        }
      });
  }

  obtenerImagen(nombre: string): string {
    if (nombre.includes('Servidor')) return 'https://cdn-icons-png.flaticon.com/512/2885/2885435.png';
    if (nombre.includes('Tarjeta')) return 'https://cdn-icons-png.flaticon.com/512/943/943178.png';
    if (nombre.includes('Switch') || nombre.includes('Router')) return 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png';
    if (nombre.includes('SSD') || nombre.includes('Almacenamiento')) return 'https://cdn-icons-png.flaticon.com/512/2933/2933703.png';
    if (nombre.includes('Memoria') || nombre.includes('RAM')) return 'https://cdn-icons-png.flaticon.com/512/2382/2382533.png';
    if (nombre.includes('Procesador')) return 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png';
    return 'https://cdn-icons-png.flaticon.com/512/1042/1042339.png';
  }
}