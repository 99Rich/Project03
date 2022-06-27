<template>
    <view class="content">
        <!-- 返回指定页面 -->
        <view class="back_box">
            <view class="back_but">
                <u-icon @click="backlast()" style="border-right: 2rpx solid #ebebeb;padding-right: 10rpx;"
                    name="arrow-left" size="28"></u-icon>
                <u-icon @click="homeback()" name="home" size="28"></u-icon>
            </view>
            <text class="back_txt">【618提前购】【5月24日 10:00-6月23日10:00】</text>
        </view>

        <!-- 基本信息 -->
        <view class="message_box">
            <!-- 轮播 -->
            <u-swiper :list="list1" imgMode="aspectFit " height="500"></u-swiper>
            <!-- 商品详情 -->
            <view class="msg_txt">
                <!-- 价格 -->
                <text class="msg_txt1">￥359.00</text>
                <!-- 满减优惠 -->
                <view class="full">
                    <view class="full_left">
                        <text class="full_txt2">满200减30</text>
                        <text class="full_txt3">满300减50</text>
                    </view>
                    <view class="full_right">
                        <text class="full_txt4">查看优惠</text>
                        <u-icon color="#ff4444" name="arrow-right"></u-icon>
                    </view>
                </view>
                <!-- 品牌 -->
                <view class="brand_box">
                    <view class="brand_left">
                        <text class="brand_txt5">
                            <text class="brand_txt6">品牌</text>
                            【618提前购】【5月24日 10:00-6月23日 10:00】【王者荣耀礼盒】谷雨王者礼盒光感水2.0+美白霜50g
                        </text>
                    </view>
                    <view class="brand_right">
                        <u-icon name="share-square" size="28"></u-icon>
                        <text class="brand_txt7">分享</text>
                    </view>
                </view>
                <!-- 赠送 -->
                <text class="msg_txt8">买即赠：光甘草面膜6片+冰硼带面膜6片</text>
            </view>
        </view>

        <!-- 担保 -->
        <view class="warrant_box">
            <view class="warrant_left">
                <view class="left_up">
                    <u-icon name="thumb-up" color="#00b355" size="25"></u-icon>
                    <text class="warrant_txt1">有赞担保</text>
                </view>
                <text class="warrant_txt2">品质保证 ·退运费险 ·免费上门取退 ·专属客服 ·先行赔付</text>
            </view>
            <!-- <view class="warrant_right">
                <u-icon name="arrow-right" color="#acacac" size="20"></u-icon>
            </view> -->
        </view>

        <!-- 运费 -->
        <view class="fare_box">
            <view class="fare_left">
                <view class="fare_txt">运费</view>
                <view class="fare_txt">优惠</view>
            </view>
            <view class="fare_right">
                <view class="fare_txt">免运费</view>
                <view class="fare_txt1">
                    <text class="fare_txt2">满减</text>
                    <text class="fare_txt3">满200.00元减30.00元；满300.00元减50.00元</text>
                </view>
            </view>
            <view class="last_box">
                <u-icon @click="Show(2)" class="fare_icon" name="arrow-right" color="#acacac" size="20"></u-icon>
            </view>
        </view>

        <!-- 规格 服务 参数 -->
        <view class="standands">
            <view class="stand_one">
                <view class="one_left">
                    <text class="stand_txt1">服务</text>
                    <text class="stand_txt2">收货后结算 ·快递发货</text>
                </view>
                <u-icon @click="Show(3)" name="arrow-right" color="#acacac" size="20"></u-icon>
            </view>
            <view class="stand_two">
                <view class="two_left">
                    <text class="stand_txt1">选择</text>
                    <view class="stand_detail">
                        <text class="stand_txt2">光感水145ml+美白精华霜50g</text>
                        <view class="stand_img">
                            <image
                                src="https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01vbBhYf1XnqgJj8L1v_!!0-item_pic.jpg_180x180.jpg">
                            </image>
                            <view class="stand_text">
                                <text>共1种规格可选</text>
                            </view>
                        </view>
                    </view>
                </view>
                <u-icon @click="Show(4)" name="arrow-right" color="#acacac" size="20"></u-icon>
            </view>
            <view class="stand_one">
                <view class="one_left">
                    <text class="stand_txt1">参数</text>
                    <text class="stand_txt2">品牌；产地</text>
                </view>
                <u-icon @click="Show(5)" name="arrow-right" color="#acacac" size="20"></u-icon>
            </view>
        </view>

        <!-- 旗舰店 -->
        <view class="shop">
            <image src="https://img2.baidu.com/it/u=2897328181,2525233443&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=500">
            </image>
            <view class="shop_name">
                <view class="name_top">
                    <text class="na_txt1">谷雨官方会员旗舰店</text>
                    <text @click="homeback()" class="na_txt2">进店逛逛</text>
                </view>
                <view class="name_bott">
                    <text class="na_txt3">品牌</text>
                    <text class="na_txt4">企业认证</text>
                </view>
            </view>
        </view>

        <!-- 商品详情 成交记录 -->
        <view class="goods">
            <view class="good_top">
                <text @click="change1(item.id)" v-for="item in list3" :key="item.id">{{item.name}}</text>
            </view>

            <view class="product_msg" :class="{'activeS':acIndex!==1}">
                <image style="height: 1100rpx;"
                    src="https://img.alicdn.com/imgextra/i4/3027922969/O1CN01hMc9Mq1Xnqg8gtq9s_!!3027922969.jpg">
                </image>
                <image src="https://img.alicdn.com/imgextra/i1/3027922969/O1CN01nFftZk1Xnqg7xd95W_!!3027922969.jpg">
                </image>
                <image style="height: 900rpx;"
                    src="https://img.alicdn.com/imgextra/i3/3027922969/O1CN01IfslSg1XnqgIW9MpO_!!3027922969.jpg">
                </image>
                <image style="height: 550rpx;"
                    src="https://img.alicdn.com/imgextra/i3/3027922969/O1CN01hBbpyY1XnqgDP6fum_!!3027922969.jpg">
                </image>
                <image style="height: 1100rpx;"
                    src="https://img.alicdn.com/imgextra/i3/3027922969/O1CN01Qx7T1R1XnqgEjdeqJ_!!3027922969.jpg">
                </image>
                <image style="height: 1000rpx;"
                    src="https://img.alicdn.com/imgextra/i2/3027922969/O1CN010CAlTu1Xnqg6OxJtt_!!3027922969.jpg">
                </image>
                <image style="height: 1000rpx;"
                    src="https://img.alicdn.com/imgextra/i1/3027922969/O1CN01aFsSOT1XnqgFfduro_!!3027922969.jpg">
                </image>
                <image src="https://img.alicdn.com/imgextra/i3/3027922969/O1CN01E0HX2J1XnqgDP8gcb_!!3027922969.jpg">
                </image>
                <image style="height: 900rpx;"
                    src="https://img.alicdn.com/imgextra/i4/3027922969/O1CN01XJwvmu1XnqgB3MVOA_!!3027922969.jpg">
                </image>
                <image style="height: 900rpx;"
                    src="https://img.alicdn.com/imgextra/i1/3027922969/O1CN01Ng6b4J1XnqgKZYL5n_!!3027922969.jpg">
                </image>
            </view>

            <view class="record_box" :class="{'activeS':acIndex!==2}">
                <view class="table_head">
                    <view class="tr">
                        <view class="th">卖家</view>
                        <view class="th">成交时间</view>
                        <view class="th">数量</view>
                    </view>
                </view>

                <view class="table_body">
                    <view class="tr" v-for="item in list2" :key="item.id" :class="{'active':item.id!==8}">
                        <view class="td">{{item.name}}</view>
                        <view class="td">{{item.time}}</view>
                        <view class="td">{{item.num}}</view>
                    </view>
                </view>
            </view>
        </view>


        <view class="black_box">
            <u-popup :show="show" :round="10" mode="bottom" @close="close" @open="open">

                <view class="Box2" :class="{'Box':acId!=2}">
                    <view class="Box2_txt1">
                        <text>优惠</text>
                    </view>
                    <view class="Box_one">
                        <text class="Box2_txt2">促销</text>
                        <view class="discount_box">
                            <text class="Box2_txt3">满减</text>
                            <view class="discount_msg">
                                <text class="Box2_txt4">满200.00元减30.00；满300.00元减50.00；满600.00元减100.00</text>
                                <text class="Box2_txt5">2022.05.24-2022.06.23</text>
                            </view>
                        </view>
                    </view>
                    <button @click="close()">我知道了</button>
                </view>

                <view class="Box3" :class="{'Box':acId!=3}">
                    <view class="Box_up">
                        <text class="up_txt1">收货后结算</text>
                        <text class="up_txt2">
                            过敏包退服务，是指消费者在天猫购买带有“过敏包退”服务标识的商品后，商家承诺在指定60天内，
                            若消费者因使用该商品引起过敏并选择“使用后过敏”退款原因发起退款申请的，则在48小时内响应消费者的维权需求，
                            且在消费者提供有效凭证的情况下支持其退货退款的服务
                        </text>
                    </view>
                    <view class="Box_bott">
                        <text class="bott_txt1">快递发货</text>
                        <text class="bott_txt2">可选择快递发货配送上门，本商品免运费</text>
                    </view>
                    <button @click="close()">我知道了</button>
                </view>

                <view class="Box4" :class="{'Box':acId!=4}">
                    <view class="Box_one">
                        <image
                            src="https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01vbBhYf1XnqgJj8L1v_!!0-item_pic.jpg_180x180.jpg"
                            mode=""></image>
                        <view class="one_center">
                            <text class="center_txt1">￥359.00</text>
                            <text class="center_txt2">已选择 光感水145ml+美白精华霜50g</text>
                        </view>
                        <text @click="close()" class="txt_x">×</text>
                    </view>
                    <view class="Box_two">
                        <text class="two_txt1">规格</text>
                        <view class="two_msg">
                            <image
                                src="https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01vbBhYf1XnqgJj8L1v_!!0-item_pic.jpg_180x180.jpg"
                                mode=""></image>
                            <text class="two_txt2">光感水145ml+美白精华霜50g</text>
                        </view>
                    </view>
                    <view class="bot_box">
                        <view class="buy_num">
                            <text>购买数量</text>
                            <u-number-box v-model="value" @change="valChange"></u-number-box>
                        </view>
                        <view class="button_box">
                            <text @click="close()" class="but_one">加入购物车</text>
                            <text @click="Order()" class="but_two">立即购买</text>
                        </view>
                    </view>
                </view>

                <view class="Box5" :class="{'Box':acId!=5}">
                    <view class="title_box">
                        <text class="title">产品参数</text>
                    </view>
                    <view class="parameter_box">
                        <view class="parameter_one" v-for="item in list4" :key="item.id">
                            <text class="one_txt1">{{item.name}}</text>
                            <text class="one_txt2">{{item.parameter}}</text>
                        </view>
                    </view>
                    <button @click="close()">我知道了</button>
                </view>
            </u-popup>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                value: 1,
                show: false,
                list1: [
                    'https://img.alicdn.com/imgextra/i3/3027922969/O1CN01nRzo8k1Xnqg7f6egm_!!3027922969.jpg',
                    'https://img.alicdn.com/imgextra/i2/3027922969/O1CN01yURuNv1XnqfGgfshc_!!3027922969.jpg',
                    'https://img.alicdn.com/imgextra/i2/3027922969/O1CN01jwCAHM1XnqfQAfPZc_!!3027922969.jpg',
                    'https://img.alicdn.com/imgextra/i3/3027922969/O1CN01N2DBU21XnqfWTxeQK_!!3027922969.jpg',
                    'https://img.alicdn.com/imgextra/i1/3027922969/O1CN01llLIyL1XnqfXENN43_!!3027922969.jpg',
                ],
                list2: [{
                        id: 1,
                        name: '原*',
                        time: '06-20 14:44:38',
                        num: 1
                    },
                    {
                        id: 2,
                        name: '顾**',
                        time: '06-20 14:44:38',
                        num: 1
                    },
                    {
                        id: 3,
                        name: '邵*',
                        time: '06-20 14:44:38',
                        num: 1
                    },
                    {
                        id: 4,
                        name: '李**',
                        time: '06-20 14:44:38',
                        num: 1
                    },
                    {
                        id: 5,
                        name: '宋**',
                        time: '06-20 14:44:38',
                        num: 1
                    },
                    {
                        id: 6,
                        name: '何*',
                        time: '06-20 14:44:38',
                        num: 1
                    },
                    {
                        id: 7,
                        name: '李*',
                        time: '06-20 14:44:38',
                        num: 1
                    },
                    {
                        id: 8,
                        name: '简**',
                        time: '06-20 14:44:38',
                        num: 1
                    },
                ],
                list3: [{
                        id: 1,
                        name: '商品详情'
                    },
                    {
                        id: 2,
                        name: '成交记录'
                    },
                ],
                acId: 1,
                acIndex:1,
                list4: [{
                        name: '品牌',
                        parameter: '谷雨'
                    },
                    {
                        name: '产地',
                        parameter: '中国'
                    },
                    {
                        name: '保质期',
                        parameter: '3年'
                    },
                    {
                        name: '规格类型',
                        parameter: '正常规格'
                    },
                    {
                        name: '是否为特殊用途化妆品',
                        parameter: '否'
                    },
                ],
            }
        },


        methods: {
            open() {},
            close() {
                this.show = false
            },
            Show(num) {
                // console.log(num);
                this.acId = num;
                this.show = !this.show;
            },
            backlast() {
                // uni.navigateBack({
                //     delta: 1, //返回层数，2则上上页
                // })
                uni.navigateTo({
                    url: '/pages/leak/leak'
                })
            },
            homeback() {
                uni.switchTab({
                    url: '/pages/index/index'
                })
            },
            change1(id) {
                // console.log(id);
                this.acIndex = id;
            },
            Order() {
                uni.redirectTo({
                    url: "/pages/order/order"
                })
            },
        }
    }
</script>

<style lang="scss">
    .content {
        background-color: #f9f9f9;

        .back_box {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 20rpx;
            background-color: #ffffff;

            .back_but {
                width: 200rpx;
                padding: 10rpx 20rpx 10rpx 10rpx;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                border-radius: 50rpx;
                border: 2rpx solid #ebebeb;

            }

            .back_txt {
                width: 90%;
                height: 50rpx;
                margin: 0 auto;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }
        }

        .message_box {
            display: flex;
            flex-direction: column;

            // 商品详情
            .msg_txt {
                background-color: #ffffff;
                padding: 20rpx;

                // 价格
                .msg_txt1 {
                    color: #ff4444;
                    font-size: 40rpx;
                    font-weight: 700;
                    margin: 10rpx 0;
                }

                // 满减优惠
                .full {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: 20rpx 0;

                    .full_left {
                        width: 70%;

                        .full_txt2,
                        .full_txt3 {
                            margin: 0 10rpx;
                            background-color: #ffeded;
                            color: #ff4444;
                        }
                    }

                    .full_right {
                        width: 30%;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                        align-items: flex-end;
                        color: #ff4444;
                    }
                }

                // 品牌
                .brand_box {
                    display: flex;
                    flex-direction: row;
                    margin: 20rpx 0;

                    .brand_left {
                        width: 90%;
                        font-weight: 700;

                        .brand_txt6 {
                            font-size: 20rpx;
                            padding: 5rpx 7rpx;
                            border-radius: 10rpx;
                            background-color: #000000;
                            color: #ffffff;
                        }
                    }

                    .brand_right {
                        width: 10%;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        align-items: flex-end;
                    }
                }

                // 赠送
                .msg_txt8,
                .brand_txt7 {
                    color: #acacac;
                }
            }
        }

        .warrant_box {
            display: flex;
            flex-direction: row;
            margin: 20rpx 0;
            padding: 20rpx 30rpx;
            background-color: #ffffff;

            .warrant_left {
                width: 90%;
                display: flex;
                flex-direction: column;

                .left_up {
                    display: flex;
                    flex-direction: row;
                    color: #00b355;

                    .warrant_txt1 {
                        margin: 10rpx;
                        font-size: 30rpx;
                        font-weight: 600;
                    }
                }

                .warrant_txt2 {
                    font-size: 25rpx;
                    color: #acacac;
                }
            }

            .warrant_right {
                width: 10%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                text-align: center;
            }
        }

        .fare_box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 20rpx 0;
            padding: 20rpx 30rpx;
            background-color: #ffffff;
            height: 130rpx;

            .fare_left {
                width: 15%;
                color: #acacac;
                margin-right: 20rpx;

                .fare_txt {
                    margin: 20rpx 0;
                }
            }

            .fare_right {
                width: 70%;
                margin-right: 20rpx;

                .fare_txt {
                    margin: 20rpx 0;
                }

                .fare_txt1 {
                    display: flex;
                    flex-direction: row;

                    .fare_txt2 {
                        background-color: #ffeded;
                        color: #ff4444;
                        padding: 5rpx 10rpx;
                        border-radius: 20rpx;
                        margin-right: 10rpx;
                    }
                }

                .fare_txt3 {
                    width: 360rpx;
                    overflow: hidden;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                }
            }

            .last_box {
                height: 120rpx;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
            }
        }

        .standands {
            background-color: #ffffff;
            margin: 20rpx 0;
            padding: 20rpx 30rpx;

            .stand_one {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 20rpx 0;

                .one_left {
                    display: flex;
                    flex-direction: row;

                    .stand_txt1 {
                        padding-right: 30rpx;
                        color: #acacac;
                    }

                }
            }

            .stand_two {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 20rpx 0;

                .two_left {
                    display: flex;
                    flex-direction: row;

                    .stand_txt1 {
                        color: #acacac;
                        margin-right: 20rpx 0;
                    }

                    .stand_detail {
                        margin-left: 30rpx;

                        .stand_img {
                            display: flex;
                            flex-direction: row;
                            margin: 20rpx 0;

                            image {
                                width: 100rpx;
                                height: 100rpx;
                            }

                            .stand_text {
                                background-color: #f7f8fa;
                                color: #acacac;
                                text-align: center;
                                line-height: 100rpx;
                                padding: 0 20rpx;
                                margin-left: 20rpx;
                                border-radius: 10rpx;
                            }
                        }
                    }
                }

            }
        }

        .shop {
            display: flex;
            flex-direction: row;
            margin: 20rpx 0;
            background-color: #ffffff;
            padding: 20rpx 30rpx;

            image {
                width: 120rpx;
                height: 120rpx;
                border-radius: 10rpx;
                padding-top: 20rpx;
            }

            .shop_name {
                margin: 0 20rpx;

                .name_top {
                    padding: 10rpx 0;
                
                    .na_txt1 {
                        font-size: 35rpx;
                    }
                
                    .na_txt2 {
                        font-size: 25rpx;
                        border: 2rpx solid #d0d0d0;
                        padding: 8rpx 13rpx;
                        border-radius: 30rpx;
                        margin-left: 30rpx;
                    }
                }
                
                .name_bott {
                    padding: 10rpx 0;
                    color: #ffffff;
                    font-size: 25rpx;
                
                    .na_txt3 {
                        background-color: #000000;
                        padding: 4rpx 8rpx;
                        border-radius: 10rpx;
                        margin-right: 20rpx;
                    }
                
                    .na_txt4 {
                        background-color: #ff0000;
                        padding: 4rpx 8rpx;
                        border-radius: 10rpx;
                    }
                }
            }
        }

        .goods {
            background-color: #ffffff;
            margin: 20rpx 0;
            padding: 20rpx 0;

            .good_top {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                text-align: center;
                padding: 30rpx 0;
            }

            .product_msg {
                width: 100%;

                image {
                    width: 100%;
                }
            }

        }

        .activeS {
            display: none;
        }

        .record_box {
            background-color: #ffffff;

            .table_head {
                background-color: #f7f8fa;
                color: #969799;

                .tr {
                    height: 90rpx;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;

                    .th {
                        text-align: center;
                    }
                }
            }

            .table_body {
                .tr {
                    height: 90rpx;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                }

                .active {
                    border-bottom: 3rpx solid #f7f8fa;
                }
            }
        }

    }



    .black_box {
        .Box {
            display: none;
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

        button {
            margin-top: 80rpx;
            background-color: #ff0000;
            color: #ffffff;
            border-radius: 50rpx;
        }

        .Box2 {
            padding: 20rpx 30rpx;

            .Box2_txt1 {
                font-size: 40rpx;
                font-weight: 700;
                text-align: center;
                margin: 30rpx 0;
            }

            .Box_one {
                height: 400rpx;

                .Box2_txt2 {
                    font-size: 30rpx;
                    color: #919191;
                }

                .discount_box {
                    background-color: #ffecec;
                    border-radius: 10rpx;
                    padding: 30rpx 20rpx;
                    margin: 30rpx 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .Box2_txt3 {
                        font-size: 70rpx;
                        font-weight: 700;
                        color: #fc0000;
                        padding: 20rpx;
                    }

                    .discount_msg {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 65%;

                        .Box2_txt4 {
                            width: 96%;
                            margin-bottom: 20rpx;
                            overflow: hidden;
                            text-overflow: ellipsis; //溢出用省略号显示
                            display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1; //显示行数
                        }

                        .Box2_txt5 {
                            color: #acacad;
                            font-size: 30rpx;
                        }
                    }
                }
            }
        }

        .Box3 {
            padding: 30rpx;

            .Box_up,
            .Box_bott {
                display: flex;
                flex-direction: column;
                margin-bottom: 80rpx;
            }

            .up_txt1,
            .bott_txt1 {
                font-size: 40rpx;
                font-weight: 700;
                margin-bottom: 30rpx;
            }

            .up_txt2,
            .bott_txt2 {
                font-size: 30rpx;
                color: #919191;
            }
        }

        .Box4 {
            padding: 20rpx 30rpx;

            .Box_one {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-bottom: 20rpx;
                border-bottom: 2rpx solid #f1f1f1;

                image {
                    width: 200rpx;
                    height: 200rpx;
                    border-radius: 10rpx;
                }

                .one_center {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-start;

                    .center_txt1 {
                        font-size: 35rpx;
                        font-weight: 600;
                        color: #ff0000;
                        margin-bottom: 20rpx;
                    }

                    .center_txt2 {
                        font-size: 20rpx;
                        color: #919191;
                    }
                }

                .txt_x {
                    font-size: 50rpx;
                }
            }

            .Box_two {
                margin: 20rpx 0;
                padding-bottom: 20rpx;
                border-bottom: 2rpx solid #f1f1f1;

                .two_msg {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width: 400rpx;
                    margin-top: 20rpx;
                    padding: 15rpx 0;
                    background-color: #ffecec;
                    text-align: center;

                    image {
                        width: 70rpx;
                        height: 70rpx;
                        border-radius: 10rpx;
                    }

                    .two_txt2 {
                        margin-left: 20rpx;
                        font-size: 20rpx;
                        color: #ff0000;
                    }
                }
            }

        }

        .Box5 {
            padding: 50rpx 30rpx 20rpx 30rpx;

            .title_box {
                width: 100%;
                text-align: center;
                font-size: 35rpx;
                font-weight: 700;
                margin: 30rpx 0;
            }

            .parameter_box {
                .parameter_one {
                    display: flex;
                    flex-direction: row;
                    border-bottom: 2rpx solid #f0f0f0;
                    padding: 20rpx 0;

                    .one_txt1 {
                        width: 30%;
                        color: #919191;
                    }

                    .one_txt2 {
                        width: 60%;
                        margin-left: 20rpx;
                    }
                }
            }
        }
    }
</style>
