<template>
  <div class="wrapper">
    <div class="titles">
      <span>Сумма</span>
      <span>Категория</span>
      <span>Дата</span>
    </div>
      <div class="item" v-for="item in items" :key="item.id">
       
       
       <div>{{item.value}} </div>
       <div>{{item.category}}</div>
       <div>{{item.date}}</div>
      
      </div>
    
   </div>
   
</template>

<script>
export default {
name: "PaymentsDisplay",
props: {
    items: {
        type: Array,
        default: ()=>[],
    }
}
}
</script>

<style lang="scss" scoped>

.item {
  padding: 10px 20px;
  border-top: 2px solid #666;
  margin: 40px auto;
  font-family: Montserrat;
  font-weight:600;
  justify-content: space-between;
  display: flex;
  
  
  max-width: 700px;
  background-color: rgb(143, 221, 210);

}
.titles {
  display: flex;
  gap: 130px;
  justify-content: center;
  margin-top: 40px;
  span {
     font-family: Montserrat;
  }
  
}
</style>