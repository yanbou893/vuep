<template>
  <div id="app">
    <h1>Quiz</h1>
    <Text></Text>
    <router-link to="/Quiz">Start</router-link>
  </div>
</template>

<script>
import Text from '@/components/modules/Text'

export default {
    name: 'main',
    data(){
        return{

        }
    },
    components:{
        Text
    }
    
}
</script>