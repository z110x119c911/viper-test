<template>
  <div>
    <div class="wrap">
      <div class="row no-gutters">
        <div class="col-2 sidebar_set" id="sticky-sidebar">
          <Menu/>
        </div>
        <div class="col" id="main">
          <Nav/>
          <Traval/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/menu';
import Nav from '../components/nav';
import Traval from '../components/infoTraval.vue'

export default {
  components:{
    Menu,
    Nav,
    Traval
  },
  data() {
    return {
      
    }
  },
}
</script>