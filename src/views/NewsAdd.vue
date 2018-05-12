<template>
    <div>
        <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>新闻添加</BreadcrumbItem>
        </Breadcrumb>
        <Card>
            <div class="btn-container">
                <router-link to="/">
                     <Button type="primary">返回</Button>
                </router-link>
            </div>
            <div class="input-container">
                <label>新闻标题：</label> 
                <Input v-model="title" placeholder="请输入新闻标题" class="input"></Input>            
            </div>
            <news-editor></news-editor>
        </Card>
    </div>
</template>
<script>
   import NewsEditor from '../components/NewsEditor'

    export default {
        components: {
            NewsEditor
        },
        data: function() {
            return {
                title: 'fad'
            }
        }
        
    }
</script>


<style scoped>
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