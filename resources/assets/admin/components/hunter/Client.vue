<template>
    <div>
        <Row>
            <Tabs value="name1">
                <TabPane label="客户管理" name="name1">
                    <Table :columns="columns" :data="data" size="small"></Table>
                    <div class="page">
                        <Page :total="40" size="small" show-elevator show-sizer></Page>
                    </div>
                </TabPane>
                <Button type="success" @click="handleTabsAdd" icon="ios-personadd" size="small" slot="extra">新增客户</Button>
            </Tabs>
        </Row>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                columns: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

<style scope>
    .page{
        padding-top: 1rem;
    }
</style>