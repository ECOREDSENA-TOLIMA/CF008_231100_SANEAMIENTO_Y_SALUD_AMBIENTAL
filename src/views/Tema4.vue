<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Promoción y prevención
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Entornos saludables

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2 Enfoque poblacional diferencial

</template>

<script>
export default {
  name: 'Tema4',
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