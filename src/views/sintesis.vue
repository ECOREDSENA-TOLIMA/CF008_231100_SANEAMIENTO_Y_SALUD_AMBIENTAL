<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Plan de intervención, esencial para preservar y mejorar la calidad de vida de las comunidades. Este enfoque integral busca identificar y abordar los riesgos ambientales que afectan la salud pública, como la contaminación del aire, el agua y los suelos, así como los desastres naturales. El plan incluye la creación de políticas, regulaciones y programas de educación y concientización para promover prácticas sostenibles y seguras. Además, se enfoca en el monitoreo constante y la evaluación de resultados para ajustar estrategias según las necesidades cambiantes, garantizando un ambiente saludable para las generaciones presentes y futuras.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
