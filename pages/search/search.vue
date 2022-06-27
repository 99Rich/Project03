<template>
    <view>
        <view class="search_box">
            <u-search placeholder="搜索商品"></u-search>
            <view class="hot">
                <text>热门搜索</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss">
    .search_box{
        width: 94%;
        margin: 10rpx auto;
        u-search{
            width: 100%;
            height: 70rpx;
            margin-bottom: 20rpx;
        }
        .hot{
            margin: 20rpx;
        }
    }
</style>
