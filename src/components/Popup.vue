<template>
    <div class="v-popup">
        <div class="v-popup_header">
           <h3>Товар добавлен в корзину</h3> 
           <hr> 
        </div>
        <div class="v-popup_content">
            <slot></slot>
        </div>
        <div class="v-popup_footer">
            <hr>
            <button @click="closePopup" class="btn">Закрыть</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        closePopup(){
            this.$emit('closePopup')
        }
    }
}
</script>

<style lang="scss">
.v-popup{
        position: absolute;
        margin-top: -15%;
        padding: 16px;
        width: 400px;
        background: #ffffffff;
        box-shadow: 0 0 17px 0 #dddbdb;
        &_content{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .btn{
        outline: none;
        cursor: pointer;
        padding: 5px;
        border: none;
        border-radius: 5px;
        background: rgb(132, 226, 38);
        transition: box-shadow 0.5s;
    }

    .btn:hover{
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
</style>