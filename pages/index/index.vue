<template>
    <view class="content">
        <view class="box">
            <u-search placeholder="搜索商品" bgColor="#fff" :showAction="false" height="70rpx"></u-search>
        </view>
        <view class="area_box">
            <text @click="Advance()" style="border-right: 2rpx solid #ffffff;">提前购专区</text>
            <text @click="Advance1()">捡漏专区</text>
        </view>
        <view class="swiper_box">
           <u-swiper :list="list1"  imgMode="aspectFit " height="500" :circular="true" :indicator="true"></u-swiper>
        </view>
        <view class="time_box">
            <image src="../../static/gy4.jpg" mode=""></image>
        </view>
        <view class="nav_box">
            <image style="height: 260rpx;" src="../../static/gy5.jpg" mode=""></image>
          <u-swiper :list="list2" imgMode="aspectFit " height="350" :circular="true" :indicator="true"
                indicatorMode="dot"></u-swiper>
            <!-- 焕颜星品 释放仙肌活力 -->
            <view class="title_box">
                <view class="font_box">焕颜星品 释放仙肌活力</view>
                <image style="height: 90rpx;" src="../../static/gy0.jpg" mode=""></image>
            </view>
          <u-swiper :list="list3" imgMode="aspectFit " height="350" :circular="true" :indicator="true"
                indicatorMode="dot"></u-swiper>
            <!-- 修护王道 助理满分仙气 -->
            <view class="title_box">
                <view class="font_box">修护王道 助理满分仙气</view>
                <image style="height: 90rpx;" src="../../static/gy0.jpg" mode=""></image>
            </view>
          <u-swiper :list="list4" imgMode="aspectFit " height="350" :circular="true" :indicator="true"
                indicatorMode="dot"></u-swiper>
            <!-- 御龄而行 尽享时光盛宴 -->
            <view class="title_box">
                <view class="font_box">御龄而行 尽享时光盛宴 </view>
                <image style="height: 90rpx;" src="../../static/gy0.jpg" mode=""></image>
            </view>
          <u-swiper :list="list5" imgMode="aspectFit " height="350" :circular="true" :indicator="true"
                indicatorMode="dot"></u-swiper>
        </view>

        <view class="foot_box">
            <u-divider text="店铺信息"></u-divider>
            <text>有赞提供技术支持</text>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list1: [
                    'http://img30.360buyimg.com/popWareDetail/jfs/t1/100094/35/29430/224812/6294331dE2995b4da/a7e33ef0d93967b8.jpg',
                    'http://img30.360buyimg.com/popWareDetail/jfs/t1/66719/32/18792/187676/6294331dE213ce580/79ca7ae0fc39a02b.jpg',
                    // 'http://img30.360buyimg.com/popWareDetail/jfs/t1/152807/35/28310/93315/6294331eEf6277628/fbafc41c50174390.jpg',
                ],
                list2: [
                    'https://img30.360buyimg.com/n1/jfs/t1/211262/38/20336/114353/62583f58Ebc4a0adb/bf1aa6bb387e1035.jpg',
                    'https://img30.360buyimg.com/n1/jfs/t1/180607/40/23436/98456/6258449cE6e9dffb4/2e8bd53cc3d91588.jpg',
                    'https://img30.360buyimg.com/n1/jfs/t1/36174/38/16522/102357/625eadd6E5bc7e3c8/de28bc2c228bfab7.jpg',
                ],
                list3: [
                    'https://img30.360buyimg.com/n1/jfs/t1/184891/35/23428/112580/625f892eE0b6aba54/79c48199c54dca30.jpg',
                    'https://img30.360buyimg.com/n1/jfs/t1/36174/38/16522/102357/625eadd6E5bc7e3c8/de28bc2c228bfab7.jpg',
                    'https://img30.360buyimg.com/n1/jfs/t1/133399/2/20675/95189/62584d1cE18c05fb2/32cf7da7706e6ca8.jpg',
                ],
                list4: [
                    'https://img30.360buyimg.com/n1/jfs/t1/180607/40/23436/98456/6258449cE6e9dffb4/2e8bd53cc3d91588.jpg',
                    'https://img30.360buyimg.com/n1/jfs/t1/184891/35/23428/112580/625f892eE0b6aba54/79c48199c54dca30.jpg',
                ],
                list5: [
                    'https://img30.360buyimg.com/n1/jfs/t1/192962/34/23298/116790/625ead36E12e0dfc7/49f38c5bde769e95.jpg',
                    'https://img30.360buyimg.com/n1/jfs/t1/180607/40/23436/98456/6258449cE6e9dffb4/2e8bd53cc3d91588.jpg',
                ],
            }
        },
        
        
        methods: {
            Taggle(id) {
                // console.log(id)
                this.acId = id;
            },
            Advance(){
                uni.redirectTo({
                    url:"/pages/advance/advance"
                })
            },
            Advance1(){
                uni.redirectTo({
                    url:"/pages/leak/leak"
                })
            },
            
        }
    }
</script>

<style lang="scss">
    .content {
        width: 100%;
        box-sizing: border-box;
        background-color: #f9f9f9;
    }

    .box {
        width: 94%;
        height: 100rpx;
        padding-top: 20rpx;
        margin: 0 auto;
    }

    .area_box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100rpx;
        margin: 0 auto;
        background-color: #fae8ca;

        text {
            width: 50%;
            margin: 20rpx 0;
            text-align: center;
        }
    }

    .swiper_box {
        width: 100%;
        margin: 0 auto;
        image{
            width: 100%;
        }
    }

    .time_box {
        width: 100%;
        height: 160rpx;

        image {
            width: 100%;
            height: 100%;
        }
    }

    .nav_box {
        width: 100%;
        margin: 0 auto;
        background-color: #e0e8ee;

        image {
            width: 100%;
        }
        
        .title_box {
            position: relative;
            display: flex;
            line-height: 28upx;
            align-items: center;
            .font_box{
                position: absolute;
                left: 12%;
                color: #4270ae;
                font-size: 55rpx;
                font-weight: 900;
                font-family: 'Courier New', Courier, monospace;
                z-index: 999;
            }
        }
    }
    .foot_box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20rpx;
        text{
            color: #bfbfc3;
        }
    }









    // .switch_box {
    //     width: 94%;
    //     margin: 0 auto;
    //     margin-bottom: 40rpx;

    //     .box_title {
    //         display: flex;
    //         justify-content: space-between;
    //         width: 100%;
    //         height: 110rpx;

    //         // background-color: #0066CC;
    //         .min_box {
    //             width: 33%;
    //             height: 100%;
    //             background-color: #badaf8;
    //             border-radius: 10rpx;
    //             text-align: center;
    //             line-height: 110rpx;
    //             font-weight: 700;
    //             font-size: 40rpx;
    //         }

    //         .active {
    //             background-color: #63b4ff;
    //         }
    //     }

    //     .intr_box {
    //         display: flex;
    //         flex-direction: column;

    //         image {
    //             width: 100%;
    //             height: 400rpx;
    //         }

    //         text {
    //             margin-top: 20rpx;
    //         }
    //     }

    //     .box_foot {
    //         width: 100%;
    //         height: 300rpx;

    //         scroll-view {
    //             height: 100%;

    //             .scroll-view-item {
    //                 display: flex;
    //                 justify-content: space-between;
    //                 height: 200rpx;
    //                 text-align: center;
    //                 font-size: 36rpx;
    //                 padding: 10rpx;
    //                 border-bottom: 2px solid #c0c0c0;

    //                 .img_box {
    //                     width: 30%;
    //                     height: 100%;

    //                     image {
    //                         width: 100%;
    //                         height: 100%;
    //                     }
    //                 }

    //                 .img_right {
    //                     width: 68%;
    //                     height: 100%;
    //                     padding-left: 5rpx;
    //                     display: flex;
    //                     flex-direction: column;
    //                     text-align: left;
    //                 }
    //             }
    //         }
    //     }

    //     .fence {
    //         width: 100%;
    //         height: 300rpx;

    //         scroll-view {
    //             height: 100%;

    //             .scroll-view-item {
    //                 display: flex;
    //                 justify-content: space-between;
    //                 height: 200rpx;
    //                 text-align: center;
    //                 font-size: 36rpx;
    //                 padding: 10rpx;
    //                 border-bottom: 2px solid #c0c0c0;

    //                 .img_box {
    //                     width: 30%;
    //                     height: 100%;

    //                     image {
    //                         width: 100%;
    //                         height: 100%;
    //                     }
    //                 }

    //                 .img_right {
    //                     width: 68%;
    //                     height: 100%;
    //                     padding-left: 5rpx;
    //                     display: flex;
    //                     flex-direction: column;
    //                     text-align: left;
    //                 }
    //             }
    //         }
    //     }
    // }

    // .list_box {
    //     width: 100%;
    //     margin: 20rpx;
    // }
</style>
