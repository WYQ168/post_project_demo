<template>
  <div style="padding: 10px">
  wdnmd
  </div>
</template>

<script>
  import {getAuthMenuList} from '@/api/menu'

  export default {
    name: 'Role',
    data() {
      return {
        authMenuDataList:[]
      }
    },
    mounted() {
      getAuthMenuList().then(res=>{
        this.authMenuDataList=res.data
        console.dir(this.authMenuDataList)
      })
    }
  }

</script>
<style scoped lang="scss">

</style>
