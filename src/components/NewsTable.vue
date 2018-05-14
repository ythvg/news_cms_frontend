<template>
    <div>
        <Table border :columns="columns" :data="data" class="newsTable"></Table>
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '新闻标题',
                        key: 'title'
                    },
                    {
                        title: '创建时间',
                        key: 'ctime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.row._id)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.row._id)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: []
            }
        },
        methods: {
            show (id) {
                this.$router.push({ path: `/edit/${id}`})
            },
            remove (id) {
                this.$Modal.confirm({
                    title: '删除新闻',
                    content: '<p>你确定要删除这条新闻吗？</p>',
                    onOk: () => {
                    this.$axios.delete(`/api/news/${id}`)
                        .then( (res) => {
                            this.getData();
                            })
                        .catch(function (error) {
                            console.log(error);
                        });
                    }
                });
            },
            getData () {
                this.$axios.get('/api/news')
                    .then( (res) => {
                        this.data = res.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created: function() {
            this.getData();
        }
    }
</script>
<style scoped>

</style>