<template>
    <div>
        <List
            :products="products"
            @addNewProduct="addProduct"
            @disBtn="disBtn"
        />
        <div class="routBlock">
            <router-link to="/basket" class="routLink">
                <h2>Перейти в корзину</h2>
            </router-link>
        </div>
    </div>
</template>

<script>
import BasketJs from '@/JsFiles/BasketJs'
import List from '@/components/List'
export default {
  name: 'App',
  data(){
    return{
      products:[
          {id:1,title:'Банан',imgN:'Ban.jpg',cost:10,count:1,inBasket:false},
          {id:2,title:'Яблоко',imgN:'Yab.jpg',cost:8,count:1,inBasket:false},
          {id:3,title:'Папайя',imgN:'Pap.jpg',cost:10,count:1,inBasket:false}
        ],
        basket:[]
    }
  },
  components: {
    List
  },
  methods:{
    disBtn(id){
      var changeObj = this.products.findIndex(prod => prod.id == id)

      this.products[changeObj].inBasket = true
    },
    addProduct(newProduct){
      this.basket.push(newProduct)
    }
  },
  mounted(){
    this.basket = BasketJs
  }
}
</script>

<style>

    .routBlock{
        width: 15%;
        margin: auto;
        margin-top: 1%;
        border: solid 1px #c7c7c7;
        border-radius: 5px;
    }

    .routLink{
        text-decoration: none;
        color: black;
        transition: 0.5s;
    }

    .routLink:hover{
        font-size: 1.1em;
        text-decoration: underline;
    }
</style>