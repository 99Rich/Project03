<template>
    <view>
        <view class="input_box">
            <view class="back_but">
                <u-icon @click="backlast()" style="border-right: 2rpx solid #ebebeb;padding-right: 10rpx;"
                    name="arrow-left" size="28"></u-icon>
                <u-icon @click="homeback()" name="home" size="28"></u-icon>
            </view>
            <navigator url="/pages/search/search">
                <u-search placeholder="搜索商品" :disabled="true" :showAction="false" height="70rpx"></u-search>
            </navigator>
        </view>

        <!-- 通知 -->
        <view class="">
            <u-notice-bar speed="40" :text="text1"></u-notice-bar>
        </view>
        <!-- 图标时间通知 -->
        <view class="phoTime_box">
            <view class="txt_box">
                <text style="font-size: 30rpx;font-weight: 900;color: #ef7b5e;">5/24 10:00-6月23日10:00</text>
                <text style="padding-top: 5rpx;">6月1日 10:00-6月8日10:00</text>
            </view>
            <u-steps>
                <u-steps-item><text class="slot_box" slot="icon">1</text></u-steps-item>
                <u-steps-item></u-steps-item>
            </u-steps>
            <view class="butt_box">
                <text class="txt_one">提前购优先发货</text>
                <text>提前购优先发货</text>
            </view>
        </view>

        <!-- 商品 -->
        <view class="goods_box">
            <!-- 1 -->
            <view class="good_box" v-for="item1 in list1" :key="item1.id">
                <!-- 上 -->
                <view class="top_box">
                    <view class="" @click="Goto()">
                        <image :src="item1.src" mode=""></image>
                        <text class="txt">{{item1.txt}}</text>
                    </view>
                    <view class="details_box" v-for="item11 in item1.list1up" :key="item11.id">
                        <text class="full">{{item11.full}}</text>
                        <view class="details_bot">
                            <text>{{item11.money}}</text>
                            <u-icon @click="Show(item1,item11)" class="cart" name="shopping-cart" size="50rpx"
                                color="#fc0000"></u-icon>
                        </view>
                    </view>
                </view>
                <!-- 下 -->
                <view class="bottom_box">
                    <view class="bott_left">
                        <view class="" @click="Goto()">
                            <image :src="item1.src1" mode=""></image>
                            <text class="txt">{{item1.txt1}}</text>
                        </view>
                        <view class="details_box" v-for="item12 in item1.list1bot1" :key="item12.id">
                            <text class="full">{{item12.full}}</text>
                            <view class="details_bot">
                                <text>{{item12.money}}</text>
                                <u-icon @click="ShowBott(item1,item12)" class="cart" name="shopping-cart" size="50rpx"
                                    color="#fc0000"></u-icon>
                            </view>
                        </view>
                    </view>
                    <view class="bott_right">
                        <view class="" @click="Goto()">
                            <image :src="item1.src2" mode=""></image>
                            <text class="txt">{{item1.txt2}}</text>
                        </view>
                        <view class="details_box" v-for="item13 in item1.list1bot2" :key="item13.id">
                            <text class="full">{{item13.full}}</text>
                            <view class="details_bot">
                                <text>{{item13.money}}</text>
                                <u-icon @click="ShowBott1(item1,item13)" class="cart" name="shopping-cart" size="50rpx"
                                    color="#fc0000"></u-icon>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <view class="back_box">
            <u-popup :show="show" :round="20" :list2="list2" mode="bottom" @open="open" @close="close">
                <view class="shop_box">
                    <!-- 上 -->
                    <view class="up_box">
                        <!-- 上 -->
                        <view class="photo_txt">
                            <image :src="list2[0].src" mode=""></image>
                            <view class="txt_box">
                                <view class="txt_item">
                                    <text class="txt_itemo">{{list2[0].money}}</text>
                                    <text class="txt_itemt">{{list2[0].discount}}</text>
                                </view>
                                <text class="txt_now">已选 光感水145ml+美白精华霜50g</text>
                            </view>
                            <text @click="close()" class="txt_x">×</text>
                        </view>
                        <!-- 下 -->
                        <view class="standards_box">
                            <text class="stand">规格</text>
                            <view class="stand_next">
                                <image :src="list2[0].src" mode=""></image>
                                <text>光感水145ml+美白精华霜50g</text>
                            </view>
                        </view>
                    </view>
                    <!-- 下 -->
                    <view class="bot_box">
                        <view class="buy_num">
                            <text>购买数量</text>
                            <u-number-box v-model="value"></u-number-box>
                        </view>
                        <view class="button_box">
                            <text @click="close()" class="but_one">加入购物车</text>
                            <text @click="Order()" class="but_two">立即购买</text>
                        </view>
                    </view>
                </view>
            </u-popup>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                text1: '提前购专区活动事件：5月24日10:00-6月23日10:00',
                show: false,
                value: 1,
                list1: [{
                        id: 1,
                        src: '//img.alicdn.com/bao/uploaded/i2/3027922969/O1CN019GQ4I41XnqgHl1nB7_!!0-item_pic.jpg_180x180.jpg',
                        txt: '【618提前购】【5月24日 10:00-6月23日10:00】',
                        list1up: [{
                            id: 1,
                            full: '满200减30',
                            money: '￥315'
                        }],
                        src1: '///img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01uCwDxw1XnqgKTRHFV_!!0-item_pic.jpg_180x180.jpg',
                        txt1: '【618提前购】【5月24日 10:00-6月23日10:00】',
                        list1bot1: [{
                            id: 1,
                            full: '满200减30',
                            money: '￥114'
                        }],
                        src2: '///img.alicdn.com/bao/uploaded/i1/3027922969/O1CN01fjvAEW1XnqgFpTXa2_!!0-item_pic.jpg_180x180.jpg',
                        txt2: '【618提前购】【5月24日 10:00-6月23日10:00】',
                        list1bot2: [{
                            id: 1,
                            full: '满200减30',
                            money: '￥269'
                        }],
                    },
                    {
                        id: 2,
                        src: '//img.alicdn.com/bao/uploaded/i4/3027922969/O1CN013MmRZF1XnqgI4TSaw_!!0-item_pic.jpg_180x180.jpg',
                        txt: '【618提前购】【5月24日 10:00-6月23日10:00】',
                        list1up: [{
                            id: 1,
                            full: '满200减30',
                            money: '￥109'
                        }],
                        src1: '//img.alicdn.com/bao/uploaded/i3/3027922969/O1CN018Ffxhi1XnqgHl34EG_!!0-item_pic.jpg_180x180.jpg',
                        txt1: '【618提前购】【5月24日 10:00-6月23日10:00】',
                        list1bot1: [{
                            id: 1,
                            full: '满200减30',
                            money: '￥129'
                        }],
                        src2: '//img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01F0GqjN1XnqfvTpNjs_!!0-item_pic.jpg_180x180.jpg',
                        txt2: '【618提前购】【5月24日 10:00-6月23日10:00】',
                        list1bot2: [{
                            id: 1,
                            full: '满200减30',
                            money: '￥289'
                        }],
                    },
                    {
                        id: 3,
                        src: '//img.alicdn.com/bao/uploaded/i1/3027922969/O1CN018jmHab1Xnqg692IzO_!!0-item_pic.jpg_180x180.jpg',
                        txt: '【618提前购】【5月24日 10:00-6月23日10:00】',
                        list1up: [{
                            id: 1,
                            full: '满200减30',
                            money: '￥229'
                        }],
                        src1: '//img.alicdn.com/bao/uploaded/i4/3027922969/O1CN013WRxIw1XnqgINKfoy_!!0-item_pic.jpg_180x180.jpg',
                        txt1: '【618提前购】【5月24日 10:00-6月23日10:00】',
                        list1bot1: [{
                            id: 1,
                            full: '满200减30',
                            money: '￥298'
                        }],
                        src2: '//img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01arr1oZ1XnqgKSWDQE_!!0-item_pic.jpg_180x180.jpg',
                        txt2: '【618提前购】【5月24日 10:00-6月23日10:00】',
                        list1bot2: [{
                            id: 1,
                            full: '满200减30',
                            money: '￥269'
                        }],
                    },
                ],
                list2: [{
                    src: '',
                    txt: '',
                    money: '',
                    discount: ''
                }],

            }
        },
        methods: {
            backlast() {
                uni.switchTab({
                    url: '/pages/index/index'
                })
            },
            homeback() {
                uni.switchTab({
                    url: '/pages/index/index'
                })
            },
            open() {

            },
            close() {
                this.show = false;
            },
            Order() {
                uni.redirectTo({
                    url: "/pages/order1/order1"
                })
            },
            Show(item1, item11) {
                // console.log(item1.id)
                // console.log(item11)
                // 遮罩层显示
                this.show = true;
                // 获取当前商品的基本信息
                this.list2[0].src = item1.src;
                this.list2[0].txt = item1.txt;
                this.list2[0].money = item11.money;
                this.list2[0].discount = item11.full;
                console.log(this.list2)
            },
            ShowBott(item1, item12) {
                this.show = true;
                // 获取当前商品信息
                this.list2[0].src = item1.src1;
                this.list2[0].txt = item1.txt1;
                this.list2[0].money = item12.money;
                this.list2[0].discount = item12.full;
            },
            ShowBott1(item1, item13) {
                this.show = true;
                this.list2[0].src = item1.src2;
                this.list2[0].txt = item1.txt2;
                this.list2[0].money = item13.money;
                this.list2[0].discount = item13.full;
            },
            Goto() {
                uni.redirectTo({
                    url: '/pages/detailTW/detailTW'
                })
            }
        }
    }
</script>

<style lang="scss">
    .input_box {
        margin: 10rpx 20rpx;
        display: flex;
        flex-direction: row;
        navigator{
            width: 500rpx;
        }
        
        .back_but {
            width: 150rpx;
            padding: 10rpx 20rpx 10rpx 10rpx;
            margin-right: 20rpx;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            border-radius: 50rpx;
            border: 2rpx solid #ebebeb;
        }
    }

    .phoTime_box {
        height: 200rpx;
        background: url('/static/adTime.jpg');

        .txt_box {
            width: 94%;
            margin: 0 auto;
            padding-top: 30rpx;
            font-size: 25rpx;
            display: flex;
            justify-content: space-around;
        }

        .slot_box {
            width: 45rpx;
            height: 45rpx;
            border-radius: 50%;
            color: #ffffff;
            text-align: center;
            background-color: #f16738;
        }

        .butt_box {
            width: 94%;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;

            text {
                padding: 5rpx 10rpx;
            }

            .txt_one {
                border-radius: 20rpx;
                color: #ffffff;
                background-color: #f16738;
            }
        }
    }

    .goods_box {
        display: flex;
        flex-direction: column;
        background-color: #f8f8f8;
        margin: 20rpx 0;

        .good_box {
            margin: 10rpx 0;

            .top_box {
                margin-bottom: 10rpx;

                image {
                    width: 100%;
                    height: 650rpx;
                }

                text {
                    width: 96%;
                    margin: 20rpx auto;
                    overflow: hidden;
                    text-overflow: ellipsis; //溢出用省略号显示
                    display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1; //显示行数
                }

                .details_box {
                    display: flex;
                    flex-direction: column;

                    .full {
                        width: 200rpx;
                        margin-left: 20rpx;
                        text-align: center;
                        background-color: #fff2f2;
                        color: #cf0000;
                    }

                    .details_bot {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 20rpx;

                        text {
                            font-size: 40rpx;
                            font-weight: 600;
                            color: #fc0000;
                        }

                        .cart {
                            width: 60rpx;
                            height: 60rpx;
                            border-radius: 50%;
                        }
                    }
                }
            }

            .bottom_box {
                display: flex;
                justify-content: space-between;

                .bott_left,
                .bott_right {
                    width: 49%;
                    background-color: #ffffff;

                    image {
                        width: 100%;
                        height: 350rpx;

                    }

                    text {
                        width: 96%;
                        margin: 10rpx auto;
                        overflow: hidden;
                        text-overflow: ellipsis; //溢出用省略号显示
                        display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2; //显示行数
                    }

                    .details_box {
                        display: flex;
                        flex-direction: column;

                        .full {
                            width: 200rpx;
                            margin-left: 20rpx;
                            text-align: center;
                            background-color: #fff2f2;
                            color: #cf0000;
                        }

                        .details_bot {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 20rpx;

                            text {
                                font-size: 40rpx;
                                font-weight: 600;
                                color: #fc0000;
                            }

                            .cart {
                                width: 60rpx;
                                height: 60rpx;
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
        }
    }

    .shop_box {
        width: 100%;
        padding: 30rpx 0;

        .up_box {
            .photo_txt {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0 25rpx;
                margin-bottom: 20rpx;

                image {
                    width: 160rpx;
                    height: 160rpx;
                }

                .txt_box {
                    width: 480rpx;
                    font-size: 15rpx;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-start;
                    padding: 10rpx 0;

                    .txt_item {
                        .txt_itemo {
                            font-size: 38rpx;
                            font-weight: 600;
                            color: #fc0000;
                        }

                        .txt_itemt {
                            font-size: 25rpx;
                            padding: 5rpx;
                            margin-left: 20rpx;
                            background-color: #fff2f2;
                            color: #cf0000;
                        }
                    }

                    .txt_now {
                        font-size: 25rpx;
                        color: #969799;
                    }
                }

                .txt_x {
                    font-size: 60rpx;
                    color: #969799;
                    margin-top: -20rpx;
                }
            }

            .standards_box {
                padding-left: 20rpx;
                border-bottom: 2rpx solid #f6f6f7;

                .stand_next {
                    width: 520rpx;
                    padding: 20rpx;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin: 20rpx 0;
                    border-radius: 10rpx;
                    background-color: #f6f6f7;

                    image {
                        width: 80rpx;
                        height: 80rpx;
                    }

                    text {
                        color: #cf0000;
                        font-size: 30rpx;
                        margin-left: 20rpx;
                    }
                }

            }

        }

        .bot_box {
            .buy_num {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 20rpx;
            }

            .button_box {
                width: 94%;
                height: 200rpx;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: flex-end;
                margin: 0 auto;

                .but_one,
                .but_two {
                    width: 50%;
                    height: 100rpx;
                    text-align: center;
                    line-height: 100rpx;
                    color: #ffffff;
                    font-weight: 800;
                }

                .but_one {
                    border-top-left-radius: 50rpx;
                    border-bottom-left-radius: 50rpx;
                    background-color: #f16738;
                }

                .but_two {
                    border-top-right-radius: 50rpx;
                    border-bottom-right-radius: 50rpx;
                    background-color: #fc0000;
                }
            }
        }
    }
</style>
