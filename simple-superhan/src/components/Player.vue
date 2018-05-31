<template>
    <div>
        <h1>球员页面</h1>
        <ul>
            <li>编号：{{detail.uid}}</li>
            <li>名字：{{detail.name}}</li>
            <li>得分：{{detail.point}}</li>
        </ul>
        <router-link :to="profile">简介</router-link>
        <router-link :to="status">数据</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default{


    data() {
        return {
            detail: {},
            profile: '',
            status: '',
        };
    },
    mounted() {
        this.detail = this.getPlayer(this.$route.params.uid);
        this.profile = '/player/' + this.$route.params.uid + '/profile';
        this.status = '/player/' + this.$route.params.uid + '/status';
    },
    beforeRouteUpdate(to, from, next) {
        this.detail = this.getPlayer(to.params.uid);
        this.profile = '/player/' + to.params.uid + '/profile';
        this.status = '/player/' + to.params.uid + '/status';
        next();
    },
     methods: {
            getPlayer(uid) {
                switch (uid) {
                    case '1':
                        return {uid: 1,name: '库里',point: 26};
                    case '2':
                        return {uid: 2,name: '哈登',point: 30};
                    default:
                        return {uid: -1};
                }
            }
        }
}
</script>