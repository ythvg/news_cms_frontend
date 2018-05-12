<template>
    <div>
        <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>新闻列表</BreadcrumbItem>
        </Breadcrumb>

        <Card>
            <div class="btn-container">
                <router-link to="/add">
                     <Button type="primary">添加新闻</Button>
                </router-link>
            </div>
            <news-table></news-table>
        </Card>
    </div>
</template>
<script>
   import NewsTable from '../components/NewsTable'

    export default {
        components: {
            NewsTable
        }
    }
</script>


<style scoped>

</style>