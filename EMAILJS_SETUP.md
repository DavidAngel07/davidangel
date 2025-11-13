# Configuración de EmailJS para el Formulario de Contacto

Este proyecto usa EmailJS para recibir los mensajes del formulario de contacto directamente en tu Gmail **GRATIS**.

## Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu email

## Paso 2: Conectar tu Gmail

1. Una vez dentro del dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Haz clic en **"Connect Account"** y autoriza con tu Gmail (davidangelosorio29@gmail.com)
5. Dale un nombre al servicio (ejemplo: "Gmail Portfolio")
6. Copia el **Service ID** que aparece (algo como "service_xxxxxxx")

## Paso 3: Crear el Template de Email

1. Ve a **"Email Templates"** en el menú lateral
2. Haz clic en **"Create New Template"**
3. Configura el template así:

   **Subject:** `Nuevo mensaje de {{subject}}`

   **Content (Body):**
   ```
   Has recibido un nuevo mensaje desde tu portafolio:

   -----------------------------------
   De: {{from_name}}
   Email: {{from_email}}
   Asunto: {{subject}}
   -----------------------------------

   Mensaje:
   {{message}}

   -----------------------------------
   Este mensaje fue enviado desde tu formulario de contacto
   ```

4. En **"To Email"** asegúrate que esté tu email: davidangelosorio29@gmail.com
5. Haz clic en **"Save"**
6. Copia el **Template ID** (algo como "template_xxxxxxx")

## Paso 4: Obtener tu Public Key

1. Ve a **"Account"** en el menú superior derecho
2. Selecciona **"General"**
3. Copia tu **Public Key** (algo como "xxxxxxxxxxxxxxx")

## Paso 5: Configurar las variables de entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores con tus credenciales:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

3. Guarda el archivo

## Paso 6: Reiniciar el servidor de desarrollo

```bash
npm run dev
```

## ¡Listo! 🎉

Ahora cuando alguien envíe un mensaje desde tu formulario, te llegará directamente a tu Gmail.

## Plan Gratuito de EmailJS

- ✅ 200 emails gratis al mes
- ✅ Sin tarjeta de crédito requerida
- ✅ Perfecto para portafolios personales

## Probar el formulario

1. Abre tu portafolio en el navegador
2. Ve a la sección de Contacto
3. Llena el formulario y envía un mensaje de prueba
4. Revisa tu Gmail (davidangelosorio29@gmail.com)

## Solución de problemas

- **"Error al enviar"**: Verifica que las 3 variables de entorno estén correctamente configuradas
- **No llegan los emails**: Revisa la carpeta de Spam en Gmail
- **Error 401**: La Public Key es incorrecta
- **Error 404**: El Service ID o Template ID son incorrectos
