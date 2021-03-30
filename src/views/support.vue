<template>
  <div>
    <div class="wrap">
      <div class="row no-gutters">
        <div class="col-2 sidebar_set" id="sticky-sidebar">
          <Menu/>
        </div>
        <div class="col" id="main">
          <Nav/>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from '../components/menu'
import Nav from '../components/nav';
export default {
  components:{
    Menu,
    Nav
  },
  data() {
    return {
      
    }
  },
}
</script>