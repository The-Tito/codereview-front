# 🔍 CodeReview AI

Una aplicación web que analiza y explica código fuente usando inteligencia artificial, potenciada por **Groq** y el modelo **LLaMA 3.1**.

🚀 **Desplegado en producción:** [https://codereview-front.vercel.app](https://codereview-front.vercel.app)

---

## ✨ Características

- **Análisis general:** Resumen comprensible del código, ideal para entender su propósito rápidamente.
- **Análisis línea a línea:** Explicación detallada de cada parte del código.
- **Respuestas en streaming:** La IA genera la explicación en tiempo real.
- **Interfaz limpia:** Pega tu código, selecciona el tipo de análisis y obtén resultados al instante.

---

## 🛠️ Tech Stack

| Tecnología                                    | Uso                              |
| --------------------------------------------- | -------------------------------- |
| [Next.js 16](https://nextjs.org/)             | Framework fullstack (App Router) |
| [React 19](https://react.dev/)                | UI                               |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático                  |
| [Tailwind CSS 4](https://tailwindcss.com/)    | Estilos                          |
| [Groq SDK](https://groq.com/)                 | Cliente para la API de IA        |
| [Zod](https://zod.dev/)                       | Validación de esquemas           |
| [Vercel](https://vercel.com/)                 | Hosting y despliegue             |

---

## 🚀 Cómo correr el proyecto localmente

### Prerrequisitos

- Node.js 18+
- Una API Key de [Groq](https://console.groq.com/)

### Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/The-Tito/codereview-front.git
cd codereview-front

# 2. Instala dependencias
npm install

# 3. Configura variables de entorno
cp .env.example .env
# Edita .env y agrega tu GROQ_API_KEY

# 4. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🔑 Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con:

```env
GROQ_API_KEY=tu_api_key_de_groq
```

Obtén tu API Key en [console.groq.com](https://console.groq.com/).

---

## 🐳 Docker

También puedes correr el proyecto con Docker:

```bash
# Construir la imagen
docker build -t codereview-front .

# Correr el contenedor
docker run -p 3000:3000 -e GROQ_API_KEY=tu_api_key codereview-front
```

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── api/
│   │   └── review/         # Endpoint POST que llama a Groq
│   ├── (main)/
│   │   └── review/         # Página con el resultado del análisis
│   └── page.tsx            # Página principal con el formulario
├── services/
│   ├── groqService.ts      # Integración con la API de Groq
│   └── reviewService.ts    # Lógica de negocio y validación
├── lib/
│   └── reviewStorage.ts    # Almacenamiento del resultado
└── types/                  # Interfaces y tipos TypeScript
```

---

## 📝 Uso

1. Abre la aplicación en [codereview-front.vercel.app](https://codereview-front.vercel.app)
2. Pega tu código en el área de texto
3. Selecciona el nivel de explicación: **General** o **Línea a línea**
4. Haz clic en **Explicar**
5. Obtén tu análisis generado por IA en segundos

---

## 📄 Author

Selvas de Leon Luis Antonio
