# README

## El Funcionamiento del Programa

Este programa funciona de la siguiente manera:
1. Preguntar por el nombre.
2. Preguntar por la edad.
3. Preguntar por su estado civil (casado o no casado).
4. Si está casado, preguntar por la edad del conyuge.
5. Preguntar si tiene hijos.
6. Si tiene hijos, preguntar cuántos hijos tiene.
7. Preguntar cuántas propiedades posée.
8. Preguntar su salario.
9. Calcular el recargo total basado en las respuestas ingresadas:

	**Edad del Asegurado**

	| Edad | Recargo |
	| :--- | :------ |
	| 18 a 24 | 10% |
	| 25 a 49 | 20% |
	| 50 o más | 30% |

	**Edad del Conyuge**

	| Edad | Recargo |
	| :--- | :------ |
	| 18 a 24 | 10% |
	| 25 a 49 | 20% |
	| 50 o más | 30% |

	**Otros Recargos**

	| Tipo | Recargo |
	| :----- | :------ |
	| Por hijo | 20% |
	| Por propiedad | 35% |
	| Sobre el salario | 5% |
 
10. Mostrar el nombre del asegurado, el recargo total, y el precio final.
11. Preguntar al usuario si desea generar otra cotización, o si desea salir.

## Posibles Mejoras

El funcionamiento del programa es aceptable; no obstante, hay algunas oportunidades de mejora. Entre ellas, están las siguientes:
- Interfaz de Usuario atractiva
	El programa sería más atractivo si tuviera una interfaz de usuario simple, en lugar de funcionar solamente con prompts de JavaScript.
- Tal vez renombrar las variables para usar el "upperCamelCase", que parece estar entre las "mejores prácticas" de JavaScript.
