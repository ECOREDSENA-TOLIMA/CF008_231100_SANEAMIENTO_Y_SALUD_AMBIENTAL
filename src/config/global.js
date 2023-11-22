export default {
  global: {
    componenteFormativo: 'Plan de intervención',
    descripcionCurso:
      'En este componente formativo se abordan temáticas las cuales permitirán establecer los actores sociales en medida de las actividades que se deban realizar, planeando y evaluando la promoción y la prevención de la salud pública.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Actores sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Grupos focales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Grupos poblacionales',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Riesgo sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Protocolos de manejo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Normatividad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesamiento de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diligenciamiento de formatos',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Promoción y prevención',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Entornos saludables',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Enfoque poblacional diferencial',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Planificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Herramientas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Cronograma',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CFA_08_231100.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Procesamiento de información. ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Manipular los datos. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nIHKG1B9hQY&t=174s',
    },
    {
      tema: 'Herramientas de planificación. ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Técnicas o herramientas de mejoramiento continuo. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Powx5406v2I',
    },
  ],
  glosario: [
    {
      termino: 'Cronograma',
      significado:
        'una de las herramientas esenciales para la planificación, ya que permite elaborar calendarios de trabajo con actividades específicas.',
    },
    {
      termino: 'Entornos saludables',
      significado:
        'tienen como intención promover intervenciones, actividades y acciones en los entornos que aporten al desarrollo sostenible, al desarrollo humano y a la calidad de vida de las personas y las comunidades.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'enfoque para la mejora de procesos operativos que se basa en la necesidad de revisar continuamente las operaciones de los problemas, la reducción de costos oportunidad, la racionalización, y otros factores que en conjunto permiten la optimización.',
    },
    {
      termino: 'Riesgo sanitario',
      significado:
        'medida de los posibles perjuicios para la salud de una población concreta derivados de la ocurrencia de una situación peligrosa.',
    },
    {
      termino: 'Prevención',
      significado:
        'tiene como finalidad actuar específicamente sobre los factores de riesgo que estén presentes en un individuo, comunidad o en el medio ambiente, los cuales son determinantes para la aparición de enfermedades. ',
    },
    {
      termino: 'Promoción',
      significado:
        'todas las actividades, intervenciones y guías de atención, las cuales sean de carácter informativo y educativo, las cuales tienden a reforzar estilos de vida que son saludables y a modificar aquellos que no lo sean.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía de Bogotá. (2022). Enfoque poblacional diferencial. Secretaría de Cultura, Recreación y Deporte.',
      link:
        'https://ant.culturarecreacionydeporte.gov.co/sites/default/files/2._lineamientos_para_implementar_el_enfoque_poblacional_diferencial.pdf',
    },
    {
      referencia:
        'García, L., T., y Cano, F., M. (2022). El FODA: una técnica para el análisis de problemas en el contexto de la planeación en las organizaciones. Universidad Veracruzana.',
      link: 'https://www.uv.mx/iiesca/files/2013/01/foda1999-2000.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2008). Decreto 3518 de 2008.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2016). Lineamientos nacionales de entornos.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-entornos-nacionales-2016.pdf',
    },
    {
      referencia: 'Ministerio de Salud. (2022). Entornos saludables.',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/Paginas/EntornosSaludables.aspx',
    },
    {
      referencia:
        'Ministro de Salud y Protección Social. (2013). Resolución 1229 del 2013.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1229-de-2013.pdf',
    },
    {
      referencia:
        'Quironprevencion. (2018). Riesgos en personal sanitario I: Trabajos de asistencia sanitaria.',
      link:
        'https://www.quironprevencion.com/blogs/es/prevenidos/riesgos-personal-sanitario-i-trabajos-asistencia-sanitaria',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Julián Ardila',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja.',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable del equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial de Diseño y la manufactura.',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova',
          cargo: 'Experta Temática',
          centro:
            'Regional Putumayo - Centro Agroforestal y Acuícola Arapaima.',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicio',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicio',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
