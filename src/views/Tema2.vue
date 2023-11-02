<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Riesgo sanitario
    .row.justify-content-center.align-items-center
      .col-lg-8.col-12
        p(data-aos="fade-left") Los riesgos sanitarios son todas aquellas contingencias que pueden afectar la salud de las personas, los cuales están presentes hoy en día y se pueden mantener en un futuro. Una población determinada está compuesta de varios subconjuntos que están caracterizadas por tener distintos niveles de riesgo alto, medio y bajo, el cual está determinado en relación con un daño.
        p(data-aos="fade-left") Los peligros se pueden clasificar según su naturaleza:
        .cajon.p-4.mb-3(style="background-color: #E7FFD1")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Peligros biológicos:] bacterias, virus y parásitos patogénicos, determinadas toxinas naturales, toxinas microbianas, y determinados metabólicos tóxicos de origen microbiano.
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Peligros químicos:] son aquellos derivados de procesos productivos tales como pesticidas, herbicidas, contaminantes tóxicos inorgánicos, anti-bióticos, promotores de crecimiento, aditivos alimentarios tóxicos, lubricantes y tintas, desinfectantes, micotoxinas, ficotoxinas, metil y etilmercurio, e histamina.
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Peligros físicos:] fragmentos de vidrio, metal, madera u otros objetos que puedan causar daño físico al consumidor.
      .col-lg-4.col-md-8.col-10
        figure
          img(src='@/assets/curso/temas/tema2/1.png', alt='Imagen decorativa')
    .row.mt-5
      .cajon.p-4.mb-3(style="background-color: #D5FFF5")
        p(data-aos="fade-left") Los riesgos biológicos son los más importantes dentro del sector sanitario, pues no solo en la frecuencia de los casos, sino en la gravedad de las consecuencias, de no ser controlados de manera correcta constituye problemas serios para todo el personal.
    .row 
      p(data-aos="fade-left") Si bien dentro del sector sanitario no todo el personal tiene la posibilidad de manipular agentes biológicos, es necesario que se considere la posible exposición a estos agentes que pueden estar contaminados. A continuación, se aborda la clasificación de los agentes biológicos:

    .row 
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
        .row.justify-content-center(titulo="Grupo 1")
          .col-lg-8.col-md-12.mb-4.md-0.mb-3
            p Son aquellos que tienen una escasa posibilidad de causar alguna enfermedad a los seres humanos.
          .col-lg-4.col-md-6.col-12.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/2.png', alt='Imagen decorativa')
        .row.justify-content-center(titulo="Grupo 2")
          .col-lg-8.col-md-12.mb-4.md-0.mb-3
            p Son agentes que pueden generar enfermedades en el ser humano y son un peligro inminente para quienes trabajan, son poco probables que se propaguen y por lo general se realiza un tratamiento eficaz.
          .col-lg-4.col-md-6.col-12.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/3.png', alt='Imagen decorativa')
        .row.justify-content-center(titulo="Grupo 1")
          .col-lg-8.col-md-12.mb-4.md-0.mb-3
            p Representan una amenaza significativa para la salud pública, ya que pueden causar enfermedades graves en las personas. Esto plantea un riesgo tanto para los trabajadores de la salud, que están en contacto directo con pacientes infectados, como para la comunidad en general, ya que existe el peligro de que estas enfermedades se propaguen.
          .col-lg-4.col-md-6.col-12.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/4.png', alt='Imagen decorativa')
        .row.justify-content-center(titulo="Grupo 1")
          .col-lg-8.col-md-12.mb-4.md-0.mb-3
            p Son todos aquellos agentes que causan enfermedades graves al ser humano y el riesgo de propagación es muy alto.
          .col-lg-4.col-md-6.col-12.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/5.png', alt='Imagen decorativa')

    .row.mb-5.mt-5
      .col-lg-2.col-md-4.col-8
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/6.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#C1E29A")
            .p-2
            p.text-center(style="color: #264100") #[b Vías de entrada]
    .row 
      p(data-aos="fade-left") Sin duda en el organismo humano existen diversas entradas a través de las cuales estos agentes pueden penetrar, a continuación, se podrá reconocer algunas de las formas a través de las cuales acceden:

    .row.mt-5 
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.p-4.col-ipad(style="background-color: #D5FFF5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/10.svg' alt='AvatarTop')
          h2.text-center Parental
          p.text-center Esto sucede a través de la sangre o las mucosas, usualmente por medio de los ojos, boca o cortes en la piel.
        .tarjeta.p-4.col-ipad(style="background-color: #D5FFF5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/7.svg' alt='AvatarTop')
          h2.text-center Respiratoria
          p.text-center Los organismos que están presentes en el ambiente pueden ingresar en nuestro organismo cuando respiramos, hablamos o tosemos.
        .tarjeta.p-4.col-ipad(style="background-color: #D5FFF5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/8.svg' alt='AvatarTop')
          h2.text-center Digestiva
          p.text-center Estos pueden entrar en contacto al momento de ingerir alimentos pasando por la boca hasta los intestinos.
        .tarjeta.p-4.col-ipad(style="background-color: #D5FFF5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/9.svg' alt='AvatarTop')
          h2.text-center Dérmica
          p.text-center A través de la piel aumentan las posibilidades de riesgo cuando se tienen heridas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/11.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 Es necesario resaltar que, aunque las vías aéreas tienen bastante importancia por ser las que más fácilmente pueden diseminar patógenos, no se deben descuidar las vías dérmicas y parenteral, ya que las transmisiones de sangre tienen un elevado potencial de riesgo.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Protocolos de manejo
    
    p(data-aos="fade-left") Como los riesgos se clasifican en diferentes niveles, se hace necesario establecer protocolos que establezcan las acciones que se deben en materia de prevención y cuando los riesgos se ven materializados.

    .row
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/12.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La Resolución 1229 de 2013 del Ministerio de Salud y Protección Social establece un modelo de inspección, vigilancia y control sanitario que se enfoca en analizar y prevenir riesgos asociados al uso y consumo de bienes y servicios a lo largo de diferentes cadenas de producción. El objetivo principal es proteger la salud humana a nivel individual y colectivo en el contexto de seguridad sanitaria social. Esta resolución es esencial para garantizar la calidad y seguridad de productos y servicios que puedan afectar la salud pública, mediante la identificación y abordaje de riesgos y amenazas en el ámbito de la salud, asegurando el cumplimiento de estándares y regulaciones necesarios para proteger a la población.
            br
            br
            | 
    .row 
      p(data-aos="fade-left") Es importante conocer y aplicar el ciclo de la prevención es un enfoque sistemático que busca prevenir riesgos y amenazas en diversos ámbitos, incluyendo la salud, la seguridad, y el medio ambiente. Este ciclo consta de varias etapas interrelacionadas:

    .row.justify-content-center.mt-5
      .col-lg-6.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span #[em Ciclo de la prevención]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/13.svg' alt='En la figura 1 se muestra el ciclo de la prevención de la salud pública')

    .row.justify-content-center.align-items-center.mt-5 
      .col-lg-8.col-12.mb-3
        .cajon.p-4.mb-3(style="background-color: #D5FFF5")
          p(data-aos="fade-left") Es importante resaltar el Decreto 3518 de 2006, que establece la creación y regulación del Sistema de Vigilancia de Salud Pública. Este tiene como objetivo proporcionar información de manera sistemática y oportuna sobre eventos que puedan afectar la salud de la población. Además, se busca mejorar las condiciones laborales y el entorno de trabajo para promover el bienestar de los empleados en las organizaciones. Entre las acciones clave en el sistema de salud y seguridad en el trabajo se incluyen capacitaciones, exámenes médicos ocupacionales, adquisición de equipos para el manejo de emergencias, adaptación de puestos de trabajo según las necesidades de los empleados y la entrega de elementos de protección personal como cascos, guantes y botas, entre otros. Estas medidas buscan garantizar un entorno laboral seguro y saludable.
      .col-lg-4.col-md-8.col-12.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/14.jpg' alt='Imagen decorativa')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Normatividad
    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-8.col-12.mb-3 
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/15.png' alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        p La normatividad en Colombia relacionada con la seguridad social en salud y la salud pública se refiere a un conjunto de políticas destinadas a garantizar la salud de la población, abordando tanto a nivel individual como colectivo. El Estado colombiano desempeña un papel central en la conducción, regulación, financiamiento, supervisión y coordinación de los servicios de salud.
        .cajon.p-4.mb-3(style="background-color: #E7FFD1")
          p La salud pública se enfoca en fortalecer la capacidad institucional, mejorar la planificación y gestión, desarrollar el recurso humano en salud y llevar a cabo investigaciones continuas para mejorar las condiciones de la sociedad.
    .row 
      p(data-aos="fade-left") A lo largo de su evolución, la salud pública en Colombia ha estado sujeta a diversas normativas tanto a nivel nacional como internacional, como se muestra a continuación : 


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
