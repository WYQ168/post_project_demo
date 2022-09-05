<template>
  <div style="height: 100%;width: 100%">
    <embed ref="mainiframe" :src="pdfUrl" style="height:100%;width:100%" ></embed>
  </div>
</template>

<script>
  export default {
    name: 'PdfComponent',
    props:['pdfUrl'],
    data(){
      return{
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
