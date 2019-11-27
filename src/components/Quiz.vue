<template>
  <div id="app">
    <Question></Question>
    <dev @:click="buttonAction">
        <Select></Select>
    </dev>
    <router-link to="/Quiz">Start</router-link>
  </div>
</template>

<script>
import Question from '@/components/modules/Question'
import Select from '@/components/modules/Select'


export default {
    name: 'quiz',
    data(){
        return{
            
        }
    },
   methods: mapActions('Quiz', {
     'buttonAction': 'buttonAction'
   }),
    components:{
        Question,
        Select
    }
    
}
</script>