# 🧪 Testing Practice

Este proyecto contiene una colección de funciones implementadas en **JavaScript** con sus respectivos **tests unitarios** utilizando **Jest**.  
El objetivo es practicar y reforzar conceptos de programación, testing y buenas prácticas de organización de proyectos.

---

## 📂 Estructura del proyecto

TESTING PRACTICE

│── node_modules/ # dependencias instaladas
│── src/ # código fuente
│ ├── utils/ # funciones auxiliares
│ │ ├── cipherLetter.js
│ │ └── reorderAlphabetByIndex.js
│ ├── analyzeArray.js
│ ├── caesarCipher.js
│ ├── calculator.js
│ ├── capitalize.js
│ └── reverseString.js
│
│── test/ # tests unitarios
│ ├── analyzeArray.test.js
│ ├── caesarCipher.test.js
│ ├── calculator.test.js
│ ├── capitalize.test.js
│ └── reverseString.test.js
│
│── babel.config.js
│── package.json
│── package-lock.json

---

#▶️ Uso

Cada función puede importarse desde la carpeta src/. Ejemplos:

<img width="421" height="232" alt="image" src="https://github.com/user-attachments/assets/606ce3f3-23eb-45d6-8489-c8d93446a3a1" />

---

#🧪 Tests

Los tests están escritos con Jest.
Para ejecutarlos:

npm test

Ejemplo de expectativas:
<img width="370" height="210" alt="image" src="https://github.com/user-attachments/assets/e089276c-c2d3-4623-8ff6-b25649510f52" />

---
#📚 Objetivo

Este proyecto forma parte de la práctica de The Odin Project, enfocándose en:

*Funciones puras en JavaScript.

*Métodos de strings y arrays.

*Buenas prácticas de testing con Jest.

*Organización de proyectos con separación src/ y test/.
