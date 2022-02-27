<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import {Pie} from 'vue-chartjs'

export default {
    name: "Chart",
    props: {
        items: Array,
    },
    extends: Pie,
    data() {
        return {

        }
    },
    watch:{
        items: function(){
                this.renderChart({
        labels: this.categoriList,
        datasets: [{
            label: '# of Votes',
            data: this.categoriList.map(cat =>{
                return this.items.reduce((total, r)=> {
                    if (r.category == cat) {
                        total += + r.value
                    }
                    return total
                }, 0)
            }),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    })
        },
    },
    computed:{
        categoriList(){
            let categories = []
            this.items.map((el) => {
                if (!categories.includes(el.category)) {
                    categories.push(el.category)
                }
            })
            return categories
        }
    },
}
</script>

<style>

</style>