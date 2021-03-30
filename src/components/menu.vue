<template>
  <div>
    <div class="sticky-top text-testcolor text-center p-3">
      <img class="img-fluid" src="../assets/inefi-logo-svg.svg" width="160" alt="">
    </div>
    <div>
      <ul class="list-unstyled">
        <li class="nav-item active">
          <router-link active-class="menu_active" class="nav-link menu_list" exact to="/dashboard">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="menu_active" class="nav-link menu_list" to="/dashboard/device">Device Management</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="menu_active" class="nav-link menu_list" to="/dashboard/Administation">Administation</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="menu_active" class="nav-link menu_list" to="/support">Support</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu_list{
  margin-bottom: 0.5rem;
  color: black;
  padding: 1rem;
}
.menu_list:hover{
  color: #29bfed;
  font-weight: 700;
  transition: 0.5s all;
  border-left: 7px solid #29bfed;
}
.menu_active{
  color: #29bfed;
  font-weight: 700;
  border-left: 7px solid #29bfed;
}
</style>

<script>
export default {
  data() {
    return {
      status:'',
      isActive:'',
    }
  },
  methods: {
    
  },
}
</script>