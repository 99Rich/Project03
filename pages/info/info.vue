<template>
    <view class="content">
        <view class="self_box">
            <view class="photo_box">
                <image src="../../static/two.jpg"></image>
            </view>
            <view class="base_box">
                <text style="font-size: 45rpx;font-weight: 900;">99Rich</text>
                <text>初见乍惊欢，久处亦怦然。</text>
                <view class="fans_box">
                    <text>关注</text>
                    <text>234</text>
                    <text>|</text>
                    <text>粉丝</text>
                    <text>234</text>
                </view>
            </view>
        </view>

        <view class="things_box">
            <view class="member_box">
                <view class="member_info">
                    <text style="font-size: 40rpx;font-weight: 900;">会员中心 ></text>
                    <text style="color: #cab48b;font-size: 30rpx;">开通领取超级会员礼包</text>
                </view>
                <button>已开通</button>
            </view>

            <view class="volume_box">
                <view class="balance_box" v-for="item in list" :key="item.id" :class="{'ac':item.id!=4}">
                    <text style="font-size: 40rpx;">{{item.number}}</text>
                    <text style="font-size: 30rpx;">{{item.name}}</text>
                </view>
            </view>

            <view class="orders_box">
                <view class="orders_top">
                    <text style="font-size: 35rpx;font-weight: 900;">我的订单</text>
                    <text style="font-size: 28rpx;color: #c0c0c0 ;">全部订单 ></text>
                </view>
                <view class="orders_bott">
                    <view class="bott" v-for="item in order" :key="item.id">
                        <u-icon size="25" :name="item.icon"></u-icon>
                        <text>{{item.name}}</text>
                    </view>
                </view>
            </view>

            <view class="active_box">
                <view class="active_top">
                    <text style="font-size: 35rpx;font-weight: 900;">活动专享</text>
                    <text style="font-size: 28rpx;color: #c0c0c0 ;">更多活动 ></text>
                </view>
                <view class="active_bott">
                    <view class="bott_left">
                        <view class="left_box">
                            <text style="color: #ff0000 ;font-size: 35rpx;font-weight: 700;">￥30</text>
                            <text style="color: #ff0000;border: 2rpx solid #ff0000;text-align: center;
                                    border-radius: 20rpx;padding: 5rpx 0;width: 100rpx;">7积分</text>
                            <text style="margin-left: -12rpx;">【积分兑换】</text>
                        </view>
                        <button @click="exchange()">兑换</button>
                    </view>
                    <view class="bott_left">
                        <view class="left_box">
                            <text style="color: #ff0000 ;font-size: 35rpx;font-weight: 700;">￥20</text>
                            <text style="color: #ff0000;border: 2rpx solid #ff0000;text-align: center;
                                    border-radius: 20rpx;padding: 5rpx 0;width: 100rpx;">7积分</text>
                            <text style="margin-left: -12rpx;">【积分兑换】</text>
                        </view>
                        <button @click="exchange()">兑换</button>
                    </view>
                </view>
            </view>
        </view>
        
        <!--  -->
        <view class="list_box">
            <view class="list" v-for="item in list1" :key="item.id" :class="{'listActive':item.id!=4}">
                <view class="list_one">
                    <u-icon size="20" :name="item.icon"></u-icon>
                    <text class="cart">{{item.name}}</text>
                </view>
                <view class="arrow">
                    <u-icon name="arrow-right"></u-icon>
                </view>
            </view>
        </view>
        
        <!--  -->
        <view class="address_box">
            <view class="address">
                <view class="address_up">
                    <u-icon size="20" name="map"></u-icon>
                    <text class="address1">收货地址</text>
                </view>
                <view class="arrow">
                    <u-icon name="arrow-right"></u-icon>
                </view>
            </view>
        </view>
        
        <!--  -->
        <view class="address_box">
            <view class="address" v-for="item in list2" :key="item.id" :class="{'listActive':item.id==1}">
                <view class="address_up">
                    <u-icon size="20" :name="item.icon"></u-icon>
                    <text class="address1">{{item.name}}</text>
                </view>
                <view class="arrow">
                    <u-icon name="arrow-right"></u-icon>
                </view>
            </view>
        </view>
        
        <!-- 更多精选商品 -->
        <view class="more_box">
            <text class="more_txt">更多精选商品</text>
            <view class="goods_box">
                <view @click="Goto()" class="good1" v-for="item in list3" :key="item.id">
                    <image :src="item.src" mode=""></image>
                    <view class="txt_box">
                        <text class="txt1">{{item.txt1}}</text>
                        <text class="txt2">{{item.txt2}}</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                        id: 1,
                        number: 1000,
                        name: '余额'
                    },
                    {
                        id: 2,
                        number: 3,
                        name: '优惠券'
                    },
                    {
                        id: 3,
                        number: 5,
                        name: '代金券'
                    },
                    {
                        id: 4,
                        number: 50,
                        name: '货币'
                    },
                ],
                order: [{
                        id: 1,
                        icon:'rmb-circle',
                        name: '待付款'
                    },
                    {
                        id: 2,
                        icon:'car',
                        name: '代发货'
                    },
                    {
                        id: 3,
                        icon:'car-fill',
                        name: '待收货'
                    },
                    {
                        id: 4,
                        icon:'chat',
                        name: '评价'
                    },
                    {
                        id: 5,
                        icon:'server-man',
                        name: '退款/售后'
                    },
                ],
                list1:[
                    {id:1,icon:'shopping-cart',name:'购物车'},
                    {id:2,icon:'order',name:'任务中心'},
                    {id:3,icon:'rmb-circle',name:'返现'},
                    {id:4,icon:'gift',name:'赠品'},
                ],
                list2:[
                    {id:1,icon:'account',name:'个人信息'},
                    {id:2,icon:'setting',name:'账号设置'},
                ],
                list3:[
                    {
                        id:1,
                        src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN019lQBt91XnqgG3G9Qx_!!0-item_pic.jpg_180x180.jpg',
                        txt1:'光感和美白修护精华霜30g/50g温和高效美白保湿修护敏肌可用美白霜2.0',
                        txt2:'￥149.00',
                    },
                    {
                        id:2,
                        src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01H8Am6z1XnqgGlOU9F_!!3027922969.jpg_180x180.jpg',
                        txt1:'谷雨光果甘草亮白水乳套装提亮补水保湿油皮水乳焕白爽肤水护肤',
                        txt2:'￥178.00',
                    },
                    {
                        id:3,
                        src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01OWNjsq1XnqgEUZJYZ_!!0-item_pic.jpg_180x180.jpg',
                        txt1:'【全新升级】谷雨光感水修护夏天提亮爽肤水女补水保湿湿敷护肤水',
                        txt2:'￥159.00',
                    },
                    {
                        id:4,
                        src:'https://img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01XLtalb1XnqgG1zsDM_!!3027922969.jpg_180x180.jpg',
                        txt1:'【新升级】谷雨仙人掌水乳套装2.0控油水乳补水保湿护肤品套装',
                        txt2:'￥209.00',
                    },
                    {
                        id:5,
                        src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01E7fucV1XnqgJFOsgn_!!0-item_pic.jpg_180x180.jpg',
                        txt1:'谷雨洗面奶氨基酸洁面乳深层清洁控油保湿泡沫慕斯刷头洁颜蜜敏肌',
                        txt2:'￥98.00',
                    },
                    {
                        id:6,
                        src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01qb7R9E1XnqgQepQJr_!!0-item_pic.jpg_180x180.jpg',
                        txt1:'谷雨奶皮面膜女补水保湿提亮修护雪肌精华焕亮面膜',
                        txt2:'￥139.00',
                    },
                ]
            }
        },
        methods: {
            exchange() {
                uni.showToast({
                    title:'兑换成功！',
                    icon:"success",
                    duration:850
                })
            },
            Goto() {
                uni.redirectTo({
                    url: '/pages/detailIF/detailIF'
                })
            }
        }
    }
</script>

<style lang="scss">
    .content{
        background-color: #f8f8f8;
    }
    .self_box {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        box-sizing: border-box;
        padding: 30rpx 40rpx 100rpx 40rpx;
        margin: 0 auto;
        color: #ffcd00;
        background-image: url('/static/gybk1.jpg');

        .photo_box {
            width: 170rpx;
            height: 170rpx;
            border-radius: 50%;
            margin-right: 30rpx;
            image {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .base_box {
            width: 70%;
            display: flex;
            flex-direction: column;

            .fans_box {
                margin: 10rpx 0;

                text {
                    margin-right: 10rpx;
                    font-size: 33rpx;
                    font-weight: 900;
                }
            }
        }
    }

    .things_box {
        width: 100%;
        box-sizing: border-box;
        padding: 20rpx 0;

        .member_box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 94%;
            height: 150rpx;
            align-items: center;
            position: absolute;
            margin: 0 20rpx;
            margin-top: -90rpx;
            border-radius: 10rpx;
            background-color: #ffe4af;

            .member_info {
                display: flex;
                flex-direction: column;
                margin-left: 50rpx;
            }

            button {
                width: 150rpx;
                height: 50rpx;
                line-height: 50rpx;
                background-color: #ffd077;
                font-size: 30rpx;
                margin-right: 30rpx;
            }
        }

        .volume_box,
        .orders_box,
        .active_box {
            width: 94%;
            margin: 0 auto;
            border-radius: 25rpx;
            background-color: #ffffff;
            margin-bottom: 20rpx;
        }

        .volume_box {
            display: flex;
            flex-direction: row;
            margin-top: 80rpx;

            .balance_box {
                width: 25%;
                height: 110rpx;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                margin: 40rpx 10rpx;
                padding-right: 20rpx;
            }

            .ac {
                border-right: 4rpx solid #dcdcdc;
            }
        }

        .orders_box {
            display: flex;
            flex-direction: column;
            padding: 30rpx 0;

            .orders_top {
                display: flex;
                justify-content: space-between;
                margin-bottom: 30rpx;
                padding: 0 20rpx;
            }

            .orders_bott {
                display: flex;
                justify-content: space-around;

                .bott {
                    width: 130rpx;
                    height: 140rpx;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    text {
                        font-size: 25rpx;
                        margin-top: 20rpx;
                        color: #606266;
                    }
                }
            }
        }

        .active_box {
            display: flex;
            flex-direction: column;
            padding: 30rpx 0;

            .active_top {
                display: flex;
                justify-content: space-between;
                margin-bottom: 30rpx;
                padding: 0 20rpx;
            }

            .active_bott {
                display: flex;
                flex-direction: row;
                justify-content: space-around;

                .bott_left {
                    display: flex;
                    flex-direction: row;
                    width: 47%;
                    box-sizing: border-box;
                    border: 4rpx solid #f5f5f5;
                    border-radius: 15rpx;

                    .left_box {
                        display: flex;
                        flex-direction: column;
                        padding: 10rpx 0 10rpx 10rpx;

                        text {
                            margin-bottom: 10rpx;
                        }
                    }

                    button {
                        width: 100rpx;
                        height: 100%;
                        background: linear-gradient(90deg, #f9c7c6, #ee6762);
                        margin-right: -2rpx;
                        color: #f9f9f9;
                        font-size: 40rpx;
                        border: none;
                    }
                }

                .bott_right {
                    width: 45%;
                    box-sizing: border-box;
                    background-color: #dcdcdc;
                }
            }
        }

    }
    
    .list_box,
    .address_box{
        width: 94%;
        border-radius: 20rpx;
        margin: 30rpx auto;
        background-color: #ffffff;
        .list,
        .address{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 20rpx 20rpx;
            .list_one,
            .address_up{
                display: flex;
                flex-direction: row;
                .cart,
                .address1{
                    margin-left: 10rpx;
                }
            }
        }
        .listActive{
            border: 2rpx solid #f8f8f8;
        }
    }
    
    .more_box{
        display: flex;
        flex-direction: column;
        .more_txt{
            padding: 20rpx 0;
            text-align: center;
        }
        .goods_box{
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            .good1{
                width: 46%;
                margin: 15rpx 0;
                border-radius: 20rpx;
                overflow: hidden;
                image{
                    width: 100%;
                    height: 300rpx;
                }
                .txt_box{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    background-color: #ffffff;
                    padding: 10rpx;
                    font-size: 20rpx;
                    .txt1{
                        width: 90%;
                        margin: 0 auto;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2; //显示行数
                    }
                    .txt2{
                        margin: 20rpx 0;
                        font-size: 35rpx;
                        font-weight: 800;
                        color: #ee6762;
                    }
                }
            }
        }
        
    }
    
</style>
