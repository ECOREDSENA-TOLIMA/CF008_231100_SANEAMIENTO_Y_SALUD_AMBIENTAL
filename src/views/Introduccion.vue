<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-left") Un plan de intervención es una estrategia diseñada para abordar problemas o situaciones específicas en una comunidad, implicando la colaboración de varios actores sociales. Incluye etapas como diagnóstico, diseño, implementación, seguimiento y evaluación. La participación activa de actores sociales, como la comunidad local, es crucial en todas las fases para garantizar soluciones adecuadas y sostenibles. Estos planes buscan generar un impacto positivo en la situación identificada y promover el desarrollo sostenible en beneficio de la comunidad en su conjunto.

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
