<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="row py-5">
      <div class="col-md-3 py-2" v-for="(item) in AreaList" :key="item.id">
        <div class="card">
          <img :src="item.Picture1" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{ item.Name }}</h5>
            <p class="card-text box">{{ item.Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .box{
    max-height: 200px;
    overflow: auto;
  }
</style>
<script>
export default {
  data() {
    return {
      AreaList:[],
      isLoading: false,
    }
  },
  methods:{
    getData(){
      const api = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json';
      const vm = this;
      vm.isLoading = true;
       this.$http.get(api).then((response) => {
        if(response.data.success === true){
          vm.isLoading = false;
          const data = response.data.result;
          vm.AreaList = data.records;
          console.log(vm.AreaList);
        }
      })
    }
  },
  created(){
    this.getData();
  }
}
</script>