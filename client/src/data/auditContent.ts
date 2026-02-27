export interface Question {
  id: number;
  question: string;
  answer: string;
}

export const auditQuestions: Question[] = [
  {
    id: 1,
    question: "¿Qué es y de qué se encarga la ISO?",
    answer: `La Organización Internacional de Normalización (ISO) es una federación mundial de organismos nacionales de normalización que reúne a expertos para compartir conocimientos y desarrollar estándares internacionales voluntarios, basados en el consenso y relevantes para el mercado. Estos estándares buscan asegurar que los productos, servicios y sistemas sean seguros, fiables y de alta calidad.

Historia y Origen: La ISO fue fundada oficialmente el 23 de febrero de 1947 en Londres. Nació de la unión de dos organizaciones: la Federación Internacional de Asociaciones Nacionales de Normalización (ISA) y el Comité de Coordinación de Normas de las Naciones Unidas (UNSCC). Su objetivo principal era crear un conjunto de normas industriales y comerciales que facilitaran el comercio internacional y promovieran la unificación de estándares a nivel global.

Funciones Principales:
• Desarrollo de Estándares: Su función más conocida es la publicación de estándares internacionales en casi todos los aspectos de la tecnología y la fabricación. Ha publicado más de 25,000 estándares que cubren desde la seguridad alimentaria y la agricultura hasta la atención médica y la tecnología de la información.
• Facilitación del Comercio: Al proporcionar un marco común, los estándares ISO ayudan a reducir las barreras técnicas al comercio, permitiendo que los productos y servicios crucen fronteras sin inconvenientes.
• Promoción de la Calidad y Seguridad: Las normas ISO establecen puntos de referencia que garantizan la calidad y seguridad de productos y servicios, lo que aumenta la confianza del consumidor.
• Fomento de la Innovación y la Mejora Continua: Los estándares promueven una cultura de mejora continua, animando a las organizaciones a evaluar y perfeccionar sus procesos constantemente.`
  },
  {
    id: 2,
    question: "¿Qué es una auditoría interna y qué es una auditoría externa?",
    answer: `Ambos tipos de auditoría son cruciales para la salud de una organización, pero difieren en sus objetivos, alcance y ejecutores.

Auditoría Interna:
• Definición: Es una actividad de evaluación independiente y objetiva, realizada por personal de la propia organización (o un tercero contratado para este fin), diseñada para agregar valor y mejorar las operaciones de una empresa.
• Objetivos: Su enfoque principal es evaluar y mejorar la eficacia de los procesos de gestión de riesgos, control interno y gobierno corporativo. Busca identificar ineficiencias operativas, incumplimientos de políticas internas y áreas de mejora.
• Alcance: Es amplio y puede cubrir cualquier área de la organización, incluyendo operaciones, finanzas, cumplimiento de políticas y sistemas de TI.
• Reporte: Los hallazgos se reportan a la dirección y al comité de auditoría de la empresa para la toma de decisiones internas.

Auditoría Externa:
• Definición: Es un examen independiente realizado por un auditor externo certificado que no tiene vínculos con la organización.
• Objetivos: El objetivo principal es expresar una opinión sobre la veracidad y fiabilidad de los estados financieros de la empresa. Asegura a los stakeholders (inversionistas, acreedores, reguladores) que la información financiera es precisa y cumple con los principios de contabilidad generalmente aceptados.
• Alcance: Se centra casi exclusivamente en los registros financieros y los controles internos relacionados con la información financiera.
• Reporte: El informe de auditoría es un documento público dirigido a los accionistas, inversores y otros interesados externos.`
  },
  {
    id: 3,
    question: "¿Qué es la documentación de referencia en una auditoría?",
    answer: `La documentación de referencia, también conocida como criterios de auditoría, es el conjunto de políticas, procedimientos, normas, leyes, reglamentos o requisitos contra los cuales el auditor compara la evidencia recopilada. En esencia, define el "estado ideal" o el "deber ser".

Esta documentación es fundamental porque proporciona la base para una evaluación objetiva. Sin criterios claros, una auditoría no tendría un estándar contra el cual medir el desempeño, lo que podría convertirla en un ejercicio subjetivo.

Ejemplos de documentación de referencia:
• Normas internacionales (ej. ISO 9001, ISO 14001)
• Manuales de calidad y procedimientos internos de la empresa
• Leyes y regulaciones gubernamentales aplicables
• Contratos con clientes o proveedores
• Buenas prácticas de la industria

La documentación de referencia debe ser:
• Accesible: Disponible para el auditor durante el proceso de auditoría
• Actualizada: Reflejar la versión vigente de las normas y regulaciones
• Completa: Incluir todos los requisitos aplicables al alcance de la auditoría
• Clara: Ser comprensible para los auditores y el personal auditado`
  },
  {
    id: 4,
    question: "¿Qué es el alcance de una auditoría?",
    answer: `El alcance de una auditoría define sus límites y extensión. Especifica qué será revisado, qué departamentos o sistemas están incluidos, el período de tiempo que se cubrirá y los criterios que se utilizarán para la evaluación.

Un alcance bien definido es crucial para el éxito de la auditoría por varias razones:

• Asignación Eficiente de Recursos: Permite a los auditores enfocar su tiempo y esfuerzo en las áreas más críticas y de mayor riesgo.
• Claridad de Objetivos: Establece expectativas claras para todas las partes involucradas, evitando malentendidos.
• Relevancia: Asegura que la auditoría se centre en los asuntos que realmente importan para la organización y sus objetivos.
• Medición del Desempeño: Proporciona un marco claro para evaluar si la auditoría ha logrado sus objetivos.

El alcance se documenta formalmente en el plan de auditoría e incluye:
• Áreas o departamentos a auditar
• Procesos o sistemas específicos a revisar
• Período de tiempo cubierto
• Criterios de evaluación
• Recursos asignados
• Cronograma de la auditoría`
  },
  {
    id: 5,
    question: "¿De qué se encarga el auditor de calidad?",
    answer: `Un auditor de calidad es un profesional que juega un papel vital en asegurar que los productos, servicios y procesos de una organización cumplan con los estándares de calidad establecidos, ya sean internos o externos (como las normas ISO).

Responsabilidades clave:

• Planificación y Ejecución de Auditorías: Desarrolla planes de auditoría, realiza inspecciones y evalúa los procesos para verificar el cumplimiento de los estándares.
• Análisis y Reporte: Recopila y analiza datos, identifica áreas de no conformidad y oportunidades de mejora, y prepara informes detallados para la gerencia.
• Fomento de la Cultura de Calidad: Actúa como un agente de cambio, promoviendo una cultura de mejora continua y ayudando a capacitar al personal en temas de calidad.
• Verificación de Acciones Correctivas: Da seguimiento a las no conformidades para asegurar que se implementen acciones correctivas efectivas.
• Evaluación de Riesgos: Identifica posibles riesgos en los procesos y sugiere medidas preventivas.
• Documentación: Mantiene registros detallados de todas las auditorías realizadas, hallazgos y seguimientos.

Competencias requeridas:
• Conocimiento profundo de los estándares de calidad aplicables
• Habilidades de comunicación y liderazgo
• Capacidad analítica y pensamiento crítico
• Conocimiento de procesos empresariales y sistemas de calidad`
  },
  {
    id: 6,
    question: "¿Qué es el programa de auditoría?",
    answer: `Un programa de auditoría es un documento que planifica un conjunto de una o más auditorías para un período de tiempo específico. Este programa detalla los objetivos generales, la frecuencia, los tipos de auditoría, los departamentos involucrados y los recursos necesarios.

Mientras que el plan de auditoría se refiere a las actividades de una auditoría individual, el programa de auditoría gestiona el conjunto de todas las auditorías. Por ejemplo, una empresa puede tener un programa anual de auditoría que incluye auditorías internas trimestrales para diferentes departamentos y una auditoría externa anual.

Elementos clave del programa de auditoría:

• Objetivos: Define qué se espera lograr con todas las auditorías programadas
• Cronograma: Especifica cuándo se realizarán las auditorías
• Alcance: Determina qué áreas, procesos o departamentos serán auditados
• Recursos: Identifica el personal, presupuesto y herramientas necesarias
• Criterios: Establece los estándares contra los cuales se evaluará
• Responsabilidades: Designa quién será responsable de cada auditoría
• Seguimiento: Define cómo se monitoreará el cumplimiento del programa

Un programa de auditoría debe ser flexible para adaptarse a cambios en la organización o a los resultados de auditorías previas. También debe considerar:
• Riesgos identificados en la organización
• Cambios en la legislación o normativas
• Resultados de auditorías anteriores
• Prioridades estratégicas de la empresa`
  },
  {
    id: 7,
    question: "¿Cómo se puede definir el concepto de criterios de una auditoría?",
    answer: `Los criterios de auditoría son los estándares de referencia que se utilizan para evaluar la evidencia de auditoría. Son el conjunto de políticas, procedimientos o requisitos con los que se compara la evidencia objetiva para determinar si se ha logrado la conformidad.

Los criterios de auditoría son esencialmente el "deber ser" contra el cual se mide la realidad encontrada durante la auditoría. Sin criterios claros y bien definidos, los auditores no tendrían una base objetiva para sus evaluaciones.

Para que los criterios sean adecuados, deben ser:

• Relevantes: Pertinentes al tema de la auditoría y aplicables a la organización
• Objetivos e Imparciales: Libres de sesgos y aplicables de manera consistente
• Medibles: Permiten una evaluación consistente, ya sea cuantitativa o cualitativa
• Completos: Incluyen todos los factores relevantes para los objetivos de la auditoría
• Accesibles: Están disponibles y son comprensibles para los auditores
• Actualizados: Reflejan la versión vigente de las normas y regulaciones

Tipos de criterios de auditoría:

• Criterios Normativos: Basados en normas internacionales (ISO 9001, ISO 14001, etc.)
• Criterios Legales: Basados en leyes y regulaciones gubernamentales
• Criterios Internos: Basados en políticas, procedimientos y objetivos de la organización
• Criterios de Buenas Prácticas: Basados en estándares de la industria y mejores prácticas

La selección de los criterios es un paso fundamental en la planificación de la auditoría, ya que de ellos depende la validez de los hallazgos y la utilidad de la auditoría para la organización.`
  },
  {
    id: 8,
    question: "¿Qué es el hallazgo de la auditoría?",
    answer: `Un hallazgo de auditoría es el resultado de comparar la evidencia recopilada durante la auditoría con los criterios de auditoría. Los hallazgos indican si se cumplen o no los requisitos y pueden clasificarse principalmente en tres categorías: conformidad, no conformidad y oportunidad de mejora.

Todo hallazgo debe estar respaldado por evidencia objetiva, que sea rastreable y verificable. La evidencia puede incluir:

• Documentos: Políticas, procedimientos, registros, informes
• Observaciones: Lo que el auditor ve durante la auditoría
• Entrevistas: Información proporcionada por el personal de la organización
• Datos: Estadísticas, métricas, resultados de mediciones

Características de un hallazgo válido:

• Basado en Evidencia: Respaldado por hechos verificables, no por opiniones
• Objetivo: Libre de sesgos y prejuicios del auditor
• Específico: Claramente identificado y localizado en la organización
• Relevante: Pertinente a los objetivos y alcance de la auditoría
• Documentado: Registrado de manera clara y detallada

Proceso de identificación de hallazgos:

1. Recopilación de Evidencia: El auditor reúne información sobre los procesos y sistemas
2. Análisis: Se compara la evidencia con los criterios de auditoría
3. Evaluación: Se determina si hay conformidad, no conformidad u oportunidad de mejora
4. Documentación: Se registra el hallazgo con toda la información relevante
5. Comunicación: Se informa al personal auditado sobre el hallazgo

Los hallazgos son fundamentales para que la auditoría cumpla su propósito de mejorar la organización.`
  },
  {
    id: 9,
    question: "¿Qué es una conformidad en una auditoría?",
    answer: `Una conformidad es un hallazgo que indica el cumplimiento de un requisito. Significa que la evidencia de la auditoría demuestra que las prácticas, procesos o sistemas de la organización se alinean con los criterios de auditoría establecidos. En términos simples, es la confirmación de que las cosas se están haciendo como deberían hacerse.

Las conformidades son tan importantes como las no conformidades, ya que:

• Validación: Confirman que los controles y procesos están funcionando correctamente
• Reconocimiento: Demuestran el cumplimiento de los estándares y regulaciones
• Confianza: Aumentan la confianza de los stakeholders en la organización
• Documentación: Proporcionan evidencia de que la organización cumple con sus obligaciones

Ejemplos de conformidades:

• Un procedimiento de control de calidad se sigue correctamente en todos los casos
• Los registros de capacitación están completos y actualizados
• Los equipos de seguridad se utilizan de acuerdo con las políticas
• Los procesos de autorización se ejecutan según lo establecido
• La documentación requerida está disponible y accesible

Importancia de reportar conformidades:

Las conformidades deben ser reportadas en el informe de auditoría porque:
• Proporcionan una visión equilibrada de la organización
• Reconocen los esfuerzos del personal en mantener la calidad
• Identifican áreas que pueden servir como modelos para otras áreas
• Contribuyen a una cultura positiva de cumplimiento

Aunque las no conformidades suelen recibir más atención, las conformidades son igualmente valiosas para demostrar que la organización está en el camino correcto.`
  },
  {
    id: 10,
    question: "¿Qué es una no conformidad en una auditoría?",
    answer: `Una no conformidad es un hallazgo que indica el incumplimiento de un requisito. Ocurre cuando la evidencia de la auditoría muestra una desviación de los criterios establecidos. Las no conformidades deben ser documentadas claramente, indicando el requisito incumplido y la evidencia que lo respalda.

Las no conformidades suelen requerir la implementación de acciones correctivas para abordar la causa raíz del problema y evitar su recurrencia.

Tipos de no conformidades:

• No Conformidad Mayor: Un incumplimiento grave que afecta significativamente la efectividad del sistema de gestión. Requiere acción correctiva inmediata.
• No Conformidad Menor: Un incumplimiento que no afecta significativamente la efectividad del sistema, pero que debe ser corregido. Permite un plazo más largo para la corrección.

Ejemplos de no conformidades:

• Un procedimiento requerido no se sigue en ningún caso
• Los registros obligatorios no están disponibles o están incompletos
• El personal no ha recibido la capacitación requerida
• Los equipos de seguridad no se utilizan de acuerdo con las políticas
• La documentación no cumple con los requisitos establecidos

Proceso de manejo de no conformidades:

1. Identificación: El auditor identifica la desviación durante la auditoría
2. Documentación: Se registra la no conformidad con evidencia y criterios incumplidos
3. Comunicación: Se informa al personal auditado sobre la no conformidad
4. Análisis de Causa Raíz: La organización investiga por qué ocurrió la no conformidad
5. Acción Correctiva: Se implementa una solución para corregir el problema
6. Verificación: El auditor verifica que la acción correctiva fue efectiva
7. Seguimiento: Se monitorea para asegurar que el problema no se repita

Las no conformidades, aunque negativas, son oportunidades valiosas para que la organización identifique y corrija problemas antes de que causen daños mayores.`
  },
  {
    id: 11,
    question: "¿Qué es una oportunidad de mejora en una auditoría?",
    answer: `Una oportunidad de mejora es una observación o sugerencia realizada por el auditor sobre una situación que, si bien no constituye un incumplimiento (no es una no conformidad), podría optimizarse para aumentar la eficiencia, la eficacia o la resiliencia de un proceso.

Son recomendaciones proactivas que buscan agregar valor más allá de la simple verificación del cumplimiento. Fomentan una mentalidad de mejora continua dentro de la organización.

Características de las oportunidades de mejora:

• No son Obligatorias: A diferencia de las no conformidades, no requieren acción correctiva inmediata
• Voluntarias: La organización puede elegir implementarlas o no
• Constructivas: Buscan mejorar, no criticar
• Prácticas: Son realistas y alcanzables
• Basadas en Experiencia: Provienen de la experiencia del auditor y de buenas prácticas

Ejemplos de oportunidades de mejora:

• Implementar un sistema de gestión de documentos más eficiente
• Automatizar un proceso manual que consume mucho tiempo
• Mejorar la comunicación entre departamentos
• Adoptar nuevas tecnologías para aumentar la productividad
• Simplificar un procedimiento complejo
• Implementar mejores prácticas de la industria

Importancia de las oportunidades de mejora:

• Fomento de la Innovación: Alientan a la organización a pensar en nuevas formas de hacer las cosas
• Mejora Continua: Apoyan la filosofía de mejora continua
• Competitividad: Ayudan a la organización a mantenerse competitiva
• Eficiencia: Pueden llevar a ahorros de tiempo y recursos
• Satisfacción del Personal: Pueden mejorar las condiciones de trabajo

Las oportunidades de mejora son particularmente valiosas porque demuestran que el auditor no solo busca encontrar problemas, sino también ayudar a la organización a crecer y mejorar.`
  },
  {
    id: 12,
    question: "¿De qué se encarga la ley 1581 de 2012 en Colombia?",
    answer: `La Ley Estatutaria 1581 de 2012 es la norma general de protección de datos personales en Colombia. Su principal objetivo es desarrollar el derecho constitucional de Habeas Data, que permite a todas las personas conocer, actualizar y rectificar la información que se haya recogido sobre ellas en bases de datos o archivos de entidades públicas y privadas en Colombia.

Ámbito de Aplicación:
Se aplica a cualquier base de datos con datos personales que sea tratada por entidades públicas o privadas en territorio colombiano. Esto incluye tanto datos digitales como información en papel.

Principios Clave:

• Legalidad: El tratamiento de datos debe realizarse de acuerdo con la ley
• Finalidad: Los datos solo pueden usarse para los fines para los cuales fueron recolectados
• Libertad: Se requiere consentimiento previo, expreso e informado del titular
• Veracidad: Los datos deben ser exactos, completos y actualizados
• Transparencia: El titular debe ser informado sobre el tratamiento de sus datos
• Acceso y Circulación Restringida: Los datos no pueden ser compartidos sin autorización
• Seguridad: Deben implementarse medidas para proteger los datos
• Confidencialidad: Los datos deben mantenerse confidenciales

Derechos de los Titulares:

• Derecho de Acceso: Conocer qué datos se tienen sobre ellos
• Derecho de Rectificación: Solicitar la corrección de datos inexactos
• Derecho de Actualización: Solicitar que se actualicen los datos
• Derecho de Supresión: Solicitar la eliminación de datos
• Derecho de Revocación: Revocar la autorización para el tratamiento de datos
• Derecho de Oposición: Oponerse al tratamiento de datos para ciertos fines

Deberes de los Responsables:

• Obtener Autorización: Deben obtener el consentimiento previo del titular
• Informar: Deben informar sobre el propósito del tratamiento
• Garantizar Seguridad: Deben implementar medidas de seguridad adecuadas
• Permitir Ejercicio de Derechos: Deben facilitar que los titulares ejerzan sus derechos
• Mantener Registros: Deben documentar todas las autorizaciones y tratamientos
• Notificar Incidentes: Deben informar sobre brechas de seguridad

Vigilancia y Sanciones:

La Superintendencia de Industria y Comercio (SIC) es la autoridad encargada de vigilar el cumplimiento de esta ley. Las sanciones por incumplimiento pueden incluir:
• Multas de hasta 2,000 salarios mínimos mensuales legales vigentes
• Suspensión de actividades
• Cancelación de autorizaciones
• Publicación de la infracción

Esta ley es fundamental para proteger la privacidad de los ciudadanos colombianos y garantizar que sus datos personales sean tratados de manera responsable y segura.`
  }
];

export const bibliography = [
  {
    id: 1,
    author: "International Organization for Standardization (ISO)",
    title: "ISO 9001:2015 Quality Management Systems",
    year: 2015,
    source: "https://www.iso.org"
  },
  {
    id: 2,
    author: "International Organization for Standardization (ISO)",
    title: "ISO 19011:2018 Guidelines for auditing management systems",
    year: 2018,
    source: "https://www.iso.org"
  },
  {
    id: 3,
    author: "The Institute of Internal Auditors (IIA)",
    title: "International Standards for the Professional Practice of Internal Auditing",
    year: 2017,
    source: "https://www.theiia.org"
  },
  {
    id: 4,
    author: "Colombia Ministry of Commerce, Industry and Tourism",
    title: "Ley Estatutaria 1581 de 2012 - Protección de Datos Personales",
    year: 2012,
    source: "https://www.mincomercio.gov.co"
  },
  {
    id: 5,
    author: "Superintendencia de Industria y Comercio (SIC)",
    title: "Guía para el Cumplimiento de la Ley 1581 de 2012",
    year: 2021,
    source: "https://www.sic.gov.co"
  },
  {
    id: 6,
    author: "AUDITING STANDARDS BOARD",
    title: "Generally Accepted Auditing Standards (GAAS)",
    year: 2020,
    source: "https://www.aicpa.org"
  },
  {
    id: 7,
    author: "International Auditing and Assurance Standards Board (IAASB)",
    title: "International Standards on Auditing (ISA)",
    year: 2022,
    source: "https://www.iaasb.org"
  },
  {
    id: 8,
    author: "Quality Management Institute (QMI)",
    title: "Auditing Fundamentals and Best Practices",
    year: 2019,
    source: "https://www.qmi.ca"
  }
];
