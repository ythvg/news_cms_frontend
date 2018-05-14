<template>
    <div>
        <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>新闻添加</BreadcrumbItem>
        </Breadcrumb>
        <Card>
            <div class="btn-container">
                <router-link to="/">
                     <Button type="primary" icon="arrow-return-left">返回</Button>
                </router-link>
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
        }
    }
</script>


<style scoped>

</style>