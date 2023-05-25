### Personas

| id  | nombre   | edad | ciudad           |
| --- | -------- | ---- | ---------------- |
| 1   | Juan     | 25   | Buenos Aires     |
| 2   | María    | 30   | Madrid           |
| 3   | Carlos   | 20   | Lima             |
| 4   | Ana      | 22   | Bogotá           |
| 5   | Andrés   | 40   | Ciudad de México |
| 6   | Laura    | 28   | Buenos Aires     |
| 7   | Pedro    | 18   | Bogotá           |
| 8   | Isabel   | 35   | Madrid           |
| 9   | Ricardo  | 32   | Lima             |
| 10  | Gabriela | 26   | Ciudad de México |

### Productos

| id  | nombre     | precio |
| --- | ---------- | ------ |
| 1   | Producto A | 10     |
| 2   | Producto B | 15     |
| 3   | Producto C | 8      |
| 4   | Producto D | 12     |
| 5   | Producto E | 20     |
| 6   | Producto F | 18     |
| 7   | Producto G | 25     |
| 8   | Producto H | 14     |
| 9   | Producto I | 16     |
| 10  | Producto J | 22     |

### Ventas

| id  | producto_id | cantidad |
| --- | ----------- | -------- |
| 1   | 1           | 50       |
| 2   | 2           | 80       |
| 3   | 3           | 120      |
| 4   | 4           | 90       |
| 5   | 5           | 60       |
| 6   | 6           | 110      |
| 7   | 7           | 70       |
| 8   | 8           | 150      |
| 9   | 9           | 40       |
| 10  | 10          | 100      |

1. Escribe una consulta que devuelva los nombres y las edades de todas las personas mayores de 18 años en la tabla "personas".
   1. SELECT nombre edad
      FROM personas
      WHERE edad > 18;
2. Escribe una consulta que devuelva los nombres y los precios de todos los productos en la tabla "productos", ordenados por precio de menor a mayor.
   1. SELECT nombre,precio
      FROM productos
      ORDER BY precio ASC;
3. Escribe una consulta que devuelva el nombre del producto y la cantidad vendida en la tabla "ventas" para todos los productos que hayan vendido más de 100 unidades.
   1. SELECT p.nombre, v.cantidad
      FROM productos p
      JOIN ventas v ON [p.id](http://p.id/) = v.producto_id
      WHERE v.cantidad > 100;
4. Escribe una consulta que devuelva el nombre de la ciudad y la cantidad de personas que viven en ella en la tabla "personas", ordenados por cantidad de personas de mayor a menor.
   1. SELECT ciudad, COUNT(\*) AS cantidad_personas
      FROM personas
      GROUP BY ciudad
      ORDER BY cantidad_personas DESC;
5. Escribe una consulta que devuelva el nombre del producto y el precio promedio de los productos vendidos en la tabla "ventas", para todos los productos que hayan vendido más de 50 unidades.
   1. SELECT p.nombre, AVG(v.precio) as precio_promedio
      FROM productos p
      JOIN ventas v
