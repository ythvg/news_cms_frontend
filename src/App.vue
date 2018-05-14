<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Header>
              <h2>
                <router-link to="/" :style="{color: '#fff'}">新闻管理系统</router-link>
              </h2>
            </Header>
            <Content  class="content">
               <router-view/>

            </Content>
            <Footer class="layout-footer-center">2018 &copy; Jim.Fun</Footer>
        </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.content {
  padding: 0 50px;
  min-height: 946px;
}

.layout-footer-center{
    text-align: center;
}

.btn-container {
 margin-bottom: 20px;
}

.btn-container-bottom {
  margin-top: 12px;
  text-align: right;
}
</style>
