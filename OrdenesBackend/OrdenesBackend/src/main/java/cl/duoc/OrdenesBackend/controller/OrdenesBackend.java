package cl.duoc.OrdenesBackend.controller;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pedidos")
public class OrdenesBackend {

    @GetMapping
    public List<Map<String, Object>> obtenerOrdenes() {
        return List.of(
            Map.of("id", 1, "producto", "Servidor Dell PowerEdge R750", "estado", "EN_PREPARACION"),
            Map.of("id", 2, "producto", "Tarjeta Gráfica NVIDIA RTX 4090 24GB", "estado", "DISPONIBLE"),
            Map.of("id", 3, "producto", "Switch Cisco Catalyst 9300 48 Puertos", "estado", "EN_DESPACHO"),
            Map.of("id", 4, "producto", "Router de Borde MikroTik CCR2004", "estado", "DISPONIBLE"),
            Map.of("id", 5, "producto", "Almacenamiento NAS Synology DS923+", "estado", "ENTREGADO"),
            Map.of("id", 6, "producto", "Unidad SSD NVMe PCIe 4.0 Samsung 990 Pro 2TB", "estado", "DISPONIBLE"),
            Map.of("id", 7, "producto", "Placa de Desarrollo Raspberry Pi 5 8GB", "estado", "EN_PREPARACION"),
            Map.of("id", 8, "producto", "Llave de Seguridad YubiKey 5 NFC", "estado", "DISPONIBLE"),
            Map.of("id", 9, "producto", "Firewall Hardware Fortinet FortiGate 60F", "estado", "PENDIENTE_PAGO"),
            Map.of("id", 10, "producto", "Punto de Acceso Ubiquiti UniFi 6 Pro", "estado", "DISPONIBLE"),
            Map.of("id", 11, "producto", "Procesador AMD EPYC 7763 64-Core", "estado", "EN_PREPARACION"),
            Map.of("id", 12, "producto", "Módulo Memoria RAM Servidor 64GB DDR5 ECC", "estado", "DISPONIBLE"),
            Map.of("id", 13, "producto", "Gabinete Rack de Servidores 42U APC", "estado", "EN_DESPACHO"),
            Map.of("id", 14, "producto", "Sistema UPS Smart-UPS RT 3000VA On-Line", "estado", "DISPONIBLE"),
            Map.of("id", 15, "producto", "Transceiver Óptico SFP+ 10G Cisco", "estado", "ENTREGADO"),
            Map.of("id", 16, "producto", "Kit Nvidia Jetson Orin Nano Developer Kit", "estado", "EN_PREPARACION"),
            Map.of("id", 17, "producto", "Consola KVM sobre IP Aten 16 Puertos", "estado", "DISPONIBLE"),
            Map.of("id", 18, "producto", "Cámara de Seguridad IP PoE Hikvision 4K", "estado", "EN_DESPACHO"),
            Map.of("id", 19, "producto", "Patch Panel Cat6A Blindado 24 Puertos", "estado", "DISPONIBLE"),
            Map.of("id", 20, "producto", "Bobina de Fibra Óptica Monomodo 500m", "estado", "DISPONIBLE")
        );
    }
}