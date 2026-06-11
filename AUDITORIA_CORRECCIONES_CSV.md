# Auditoria de correcciones del CSV

Fuente revisada: `/Users/benjacosta/Downloads/Sitio_S&B_Benja(01_Contenido).csv`

Fecha de auditoria: 2026-06-10

## Resumen ejecutivo

La mayor parte del contenido principal del CSV quedo implementado y sincronizado en `src/content/es.ts`, `src/content/en.ts` y `src/content/zh.ts`. Tambien se hicieron cambios estructurales en las paginas de Servicios, Tecnologia, Nosotros y Contacto.

Las imagenes editoriales marcadas como `Imagen/Picture` ya quedaron cubiertas con assets locales en `src/assets/photos`, usando las fotos nuevas de `Propuesta - Fotos/New`. Quedan pendientes principalmente elementos que dependen de assets oficiales o definiciones no disponibles en el repo: logos externos de alianzas/afiliaciones, video/canal de SAM, URLs reales de redes sociales, LinkedIn de socios y algunos ajustes visuales especificos.

Validaciones realizadas:

- `npm run typecheck`: OK
- `npm run build`: OK
- Busqueda global de terminos prohibidos en `src`: no quedan `boutique`, `gestion`, `gestión`, `gestionar` ni `gestiona`.

Nota: `.gitignore` aparece modificado en el worktree, pero no fue parte de esta implementacion.

## Home

| Item CSV | Estado | Como quedo implementado | Pendiente / diferencia |
|---|---:|---|---|
| Hero headline | Hecho | `home.hero.eyebrow` y `home.hero.lines` actualizados a `GLOBAL STRATEGIC IMMIGRATION CONSULTING & COMPLIANCE` y `Movilidad global estrategica sin complicaciones`. | Sin pendientes de copy. |
| Hero subheadline | Hecho | Subtitle actualizado segun CSV. | Sin pendientes. |
| CTA primario / secundario | Hecho | Botones existentes navegan a `/contacto` y `/servicios`. | Sin pendientes. |
| Hero visual | Hecho | Reemplazado por `home-hero-global-mobility.webp` desde `src/assets/photos`. | Sin pendientes de imagen. |
| Quienes somos texto | Hecho | Copy reemplazado en `home.about.body`; se elimino `boutique`. | Sin pendientes de copy. |
| Quienes somos cifras | Hecho | Stats actualizados: `+25`, `+500`, `+10,000`, `95% NPS`, `4 oficinas`, `+25 firmas`. | Sin pendientes. |
| Quienes somos CTA | Hecho | CTA a `/nosotros` con texto `Conoce nuestra historia`. | Sin pendientes. |
| Proposito | Parcial | Primer mensaje y enfoque general implementados sin `boutique`. | El segundo parrafo no replica literalmente el CSV porque el CSV incluia `modelo boutique`, removido por la propia indicacion de no usar ese termino. |
| Por que elegirnos headline | Hecho | Titulo `Lo que nos distingue`. | Sin pendientes. |
| Por que elegirnos subheadline largo | Pendiente | No existe bloque de subheadline largo antes de las tarjetas. | Falta agregar el texto introductorio largo del CSV si se quiere visible. |
| 6 diferenciadores | Hecho | Los seis diferenciadores estan cargados en `home.differentiators.items` en el orden pedido. | Sin pendientes de copy. |
| Servicios headline | Hecho | `Que hacemos` implementado como eyebrow y grilla de servicios. | Sin pendientes de headline. |
| 4 cards de servicios Home | Parcial | Se muestran cuatro cards con titulo y resumen. | No se muestra la descripcion completa de cada card ni el CTA individual `Conocer mas`; todas navegan a `/servicios`. |
| Tecnologia Home | Hecho con fallback | Headline, texto y CTA hacia `/tecnologia` implementados; el lado visual usa `sam-ai-assistant.webp` mientras no haya video. | Falta video/URL de SAM si se quiere reemplazar la imagen. |
| Colaboraciones / alianzas | Parcial | Se unificaron alianzas y afiliaciones en `PartnerLogos` con placeholders tipograficos. | Faltan logos reales, descripciones y links externos visibles. No hay carrusel; hay grid/flex de texto. |
| Bespoke | Hecho | Texto actualizado a modelo de vinculacion estrategica, sin depender del termino `gestion`. | Sin pendientes de copy. |
| CTA final / pre-footer | Parcial | Existe seccion de contacto con texto de disponibilidad y formulario. | El headline visible sigue siendo `Empieza hoy`, no `Contactanos`; no se muestran los botones finales `Contactanos` y `Escribir por WhatsApp` en esa seccion. |

## Servicios

| Item CSV | Estado | Como quedo implementado | Pendiente / diferencia |
|---|---:|---|---|
| Hero etiqueta / headline / bajada | Hecho | Hero actualizado a `SERVICIOS`, `MOVILIDAD GLOBAL ESTRATEGICA` y bajada del CSV. | Sin pendientes. |
| Bloque corporativo | Hecho | Eyebrow, headline e intro actualizados. | Sin pendientes. |
| Preview de servicios | Parcial | La pagina muestra directamente los cuatro servicios. | No hay un preview separado con los cuatro bullets antes del detalle. |
| Servicio 1 Movilidad Global | Hecho | Descripcion y subservicios cargados en `servicios.corporate.items[0]`. | Sin pendientes de copy. |
| Servicio 2 Tramites Migratorios | Hecho | Descripcion y subservicios cargados en `items[1]`. | Sin pendientes de copy. |
| Servicio 3 Compliance Migratorio | Hecho | Descripcion y subservicios cargados en `items[2]`. | Sin pendientes de copy. |
| Servicio 4 Servicios Complementarios | Hecho | Descripcion y subservicios cargados en `items[3]`. | Sin pendientes de copy. |
| CTAs de servicios a SAM | Parcial | Texto del CTA dice `Hablar con SAM`. | El link aun va a `/contacto`; falta definir/implementar destino real del chatbot/SAM. |
| CTA final servicio a la medida | Hecho | Cierre actualizado a `Necesitas un servicio a la medida` y `Hablar con un especialista`. | Sin pendientes. |

## Nosotros

| Item CSV | Estado | Como quedo implementado | Pendiente / diferencia |
|---|---:|---|---|
| Hero titulo / subtitulo | Parcial | Subtitulo implementado; hero usa `NOSOTROS / CONFIANZA GLOBAL` para mantener tratamiento visual de dos lineas. | Si se requiere literal, cambiar segunda linea y dejar solo `Nosotros`. |
| Quienes somos titulo y texto | Hecho | Copy principal actualizado con `+500` y `+10,000`. | Sin pendientes. |
| Nuestro enfoque texto | Parcial | La idea del vinculo de confianza aparece como quote en `NosotrosAbout`. | Falta incorporar la frase completa sobre anticipar necesidades, resolver con agilidad, comunicacion constante y generar comunidad. |
| Metodologia | Hecho | Tres pasos actualizados: Diagnostico, Diseno a Medida, Ejecucion y Acompanamiento. | Sin pendientes. |
| Mision | Hecho | Nueva seccion `NosotrosInstitucional` muestra Mision. | Sin pendientes. |
| Vision | Hecho con ajuste | Se agrego Vision, eliminando `boutique` por instruccion global. | Si el cliente insiste en el texto literal, habria que reintroducir `boutique`, pero contradice el ajuste del CSV. |
| Valores | Hecho | Se agregaron los 9 valores en grilla. | Sin pendientes. |
| Diferenciadores | Parcial | Se muestran seis diferenciadores y stats. | En Nosotros los textos son versiones resumidas, no los textos completos de Home; tampoco son acordeones. |
| Colaboraciones logos | Parcial | Se muestran placeholders tipograficos. | Faltan logos reales de la carpeta indicada. |
| Publicaciones / Forbes | Hecho | Nueva seccion con link a Forbes. | Sin pendientes de contenido. |

## Nuestro Talento / Equipo

| Item CSV | Estado | Como quedo implementado | Pendiente / diferencia |
|---|---:|---|---|
| Hero | Hecho | Ruta `/equipo` mantiene pagina con hero `NUESTRO TALENTO` y subtitulo del CSV. | Sin pendientes. |
| Oscar Santos bio | Hecho | Bio actualizada segun CSV. | Falta link real de LinkedIn. |
| Cesar Becker bio | Hecho | Bio actualizada segun CSV. | Falta link real de LinkedIn. |
| Equipo operativo intro | Hecho | Intro agregada arriba de las cards. | Sin pendientes de copy. |
| Cards de equipo | Parcial | Hay cards con foto, nombre, cargo y bio; las fotos son institucionales locales no identificatorias desde `src/assets/photos`. | Falta listado real/retratos reales si el cliente los entrega. |
| Unete a la firma | Hecho | CTA `Enviar CV` y texto `Forma parte de nuestro equipo`. | Falta resolver `ajuste de doble logo inferior`, porque no hay especificacion visual ni asset claro. |

## Tecnologia

| Item CSV | Estado | Como quedo implementado | Pendiente / diferencia |
|---|---:|---|---|
| Hero titulo / subtitulo | Hecho | Hero actualizado a Tecnologia con subtitulo del CSV. | Sin pendientes. |
| Foco en SAM | Hecho | Pagina renderiza solo `TecnologiaSam`; se quito el bloque visible de plataforma/features. | Queda contenido `plataforma` en diccionarios por compatibilidad, pero no se renderiza. |
| Texto SAM + AI Associates | Hecho | Copy actualizado y se eliminaron los cuatro puntos/features visibles. | Sin pendientes de copy. |
| Video SAM / canal YB | Pendiente | No hay video ni asset oficial en repo. | Falta entregar URL/video/asset y definir embed. |

## Inclusion Laboral

| Item CSV | Estado | Como quedo implementado | Pendiente / diferencia |
|---|---:|---|---|
| Hero | Hecho | Titulo y subtitulo actualizados segun CSV. | Sin pendientes. |
| Posicion: cambiar labels | Hecho | `Nuestra Posicion / Mas alla de la visa` fue reemplazado por `Inclusion que transforma / Compromiso real con la inclusion`. | Sin pendientes. |
| Cifras clave / texto | Parcial | Texto central y pro bono estan implementados en `position.body`; stats muestran `100%`, `PRO BONO`, `360`. | No replica como bloque textual independiente; se adapta al layout existente. |
| Accion concreta | Parcial | Consultoria pro bono, empleo directo y aliados estrategicos estan visibles. | Se removio capacitacion/talleres como card visible al adaptar el ajuste del CSV. |
| Aliados estrategicos | Hecho | Lista ampliada: Invest Monterrey, CCI France Mexico, AILA, TENT, OIM, ACNUR, OIT, ASEM. | Sin pendientes de copy. |
| Logos aliados | Pendiente | Se muestran textos/wordmarks tipograficos, no logos. | Faltan logos oficiales; la carpeta subida no incluye archivos de logos de terceros. |
| CTA cierre | Hecho | Texto y CTA a `/contacto` implementados. | Hay boton secundario extra `Ver servicios` en el componente, no solicitado por CSV. |

## Contacto

| Item CSV | Estado | Como quedo implementado | Pendiente / diferencia |
|---|---:|---|---|
| Hero | Hecho | `Contacto` + `Nuestro equipo esta listo para apoyarte.` | Sin pendientes. |
| Formulario campos | Hecho | Nombre, empresa, email, telefono, tipo de consulta, mensaje y boton `Enviar`. | Sin backend real; el submit muestra alerta/toast segun componente. |
| Aviso de privacidad | Parcial | Texto bajo boton agregado. | Falta link real a aviso de privacidad. |
| Datos de contacto | Parcial | Email, telefono/WhatsApp y redes estan en contenido. | LinkedIn/Instagram/Facebook/YouTube tienen `href: "#"`, faltan URLs reales. |
| Oficinas | Hecho | Cards para CDMX, Monterrey, Guadalajara y Cancun. | No hay mapa interactivo; CSV permitia cards o mapa. |
| CTA alternativo WhatsApp | Hecho | Se agrego `ContactAlternativeCta` con link a WhatsApp y mensaje global. | Sin pendientes. |

## Componentes globales

| Item CSV | Estado | Como quedo implementado | Pendiente / diferencia |
|---|---:|---|---|
| Header estructura | Hecho | Logo, links principales, contacto y selector de idioma. | Sin pendientes. |
| Header comportamiento | Hecho | Sticky, compacta con scroll, hamburger movil y selector de idioma. | Sin pendientes. |
| Footer contenido | Parcial | Tiene marca, links, email/telefono por oficinas, legales y newsletter. | No muestra logo como imagen, no incluye redes sociales visibles y las oficinas del footer siguen hardcodeadas con direcciones/emails distintos a Contacto. |
| Boton flotante WhatsApp | Hecho | Siempre visible abajo a la derecha, numero y mensaje configurados. | Sin pendientes. |
| Selector multilenguaje | Hecho | Cambios sincronizados en ES/EN/ZH y `typecheck` pasa. | Sin pendientes tecnicos. |

## Pendientes priorizados

1. Conseguir assets oficiales que aun no estan disponibles: logos externos de alianzas/afiliaciones y video/URL de SAM.
2. Definir destino real de `Hablar con SAM`; hoy los CTAs apuntan a `/contacto`.
3. Agregar URLs reales de redes sociales y LinkedIn de Oscar/Cesar.
4. Decidir si Home necesita mostrar el subheadline largo de `Por que elegirnos`.
5. Decidir si Home Services debe mostrar descripcion completa + CTA individual por card.
6. Ajustar CTA final de Home a headline literal `Contactanos` y botones `Contactanos` / `Escribir por WhatsApp`.
7. Revisar footer: usar datos oficiales, logo real, redes sociales y consistencia con Contacto.
8. Resolver el ajuste visual `doble logo inferior` en Equipo cuando haya referencia o asset claro.

## Archivos principales tocados

- `src/content/es.ts`
- `src/content/en.ts`
- `src/content/zh.ts`
- `src/pages/Servicios.tsx`
- `src/pages/Tecnologia.tsx`
- `src/pages/Nosotros.tsx`
- `src/pages/Contacto.tsx`
- `src/sections/nosotros/NosotrosInstitucional.tsx`
- `src/sections/tecnologia/TecnologiaSam.tsx`
- `src/sections/contacto/ContactForm.tsx`
- `src/sections/contacto/ContactOffices.tsx`
- `src/sections/equipo/OperationalTeam.tsx`
- `src/sections/home/HomeServices.tsx`
