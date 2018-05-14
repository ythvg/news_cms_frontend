<template>
    <div>
      <div class="input-container">
          <label>新闻标题：</label> 
          <Input v-model="title" placeholder="请输入新闻标题" class="input"></Input>            
      </div>
        <vue-editor v-model="content"></vue-editor>
        <div class="btn-container-bottom">
            <Button type="success" size="large" @click="saveNews" :disabled="btnDisabled" v-if="!isEdit">保存</Button>
            <Button type="success" size="large" @click="editNews" :disabled="btnDisabled" v-else>修改</Button>
        </div>
    </div>
 </template>

 <script>
   import { VueEditor } from 'vue2-editor'
   import axios from 'axios';

   export default {

   components: {
      VueEditor
   },

    data () {
      return {
        id: '',
        title: '',
        content: '',
        btnDisabled: false,
        isEdit: false
      }
    },

    methods: {
      saveNews: function() {
        this.btnDisabled = true;
        this.$axios.post('/api/news', {
          title: this.title,
            ctime:new Date().toLocaleString(),
            content: this.content
          })
          .then((response) => {
            this.$Message.success('保存成功');
            this.btnDisabled = false;
          })
          .catch((error) => {
            this.btnDisabled = false;
            this.$Message.error('保存成功');
            console.log(error);
          });
      },
      editNews: function() {
        this.btnDisabled = true;
        this.$axios.put(`/api/news/${this.id}`, {
            title: this.title,
            ctime: this.ctime,
            content: this.content,
          })
          .then((response) => {
            this.$Message.success('修改成功');
            this.btnDisabled = false;
          })
          .catch((error) => {
            this.btnDisabled = false;
            this.$Message.error('修改成功');
            console.log(error);
          });
      },
      getCurNews: function() {
        const curHistory = this.$router.history.current;
        if (curHistory.name === 'NewsEdit') {
          this.isEdit = true;
          this.id = curHistory.params.id;
          this.$axios.get(`/api/news/${this.id}`)
            .then( (res) => {
              const data = res.data;
              this.title = data.title;
              this.ctime = data.ctime;
              this.content = data.content;
            })
            .catch( (err) => {
              console.log(err);
            })
        }
      }
    },

    created: function() {
      this.getCurNews();
    }
    

   }
 </script>

 <style>
    .input-container {
        margin-bottom: 15px;
    }
    .input-container label {
        font-weight: bold;
        width: 50px;
    }
    .input-container .input {
        width: calc(100% - 80px);
    }
 </style>
 
 