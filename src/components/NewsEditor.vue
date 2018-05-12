<template>
    <div>
        <vue-editor v-model="content"></vue-editor>
        <div class="btn-container-bottom">
            <Button type="success" size="large">保存</Button>
        </div>
    </div>
 </template>

 <script>
   import { VueEditor } from 'vue2-editor'

   export default {

   components: {
      VueEditor
   },

    data () {
      return {
        content: '<h3>Initial Content</h3>'
      }
    },

    methods: {
      saveContent: function() {
        // You have the content to save
        console.log(this.content)
      }
    } 

   }
 </script>