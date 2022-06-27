<template>
    <view class="content">
        <view class="back_box">
            <view class="back_but">
                <u-icon @click="backlast()" style="border-right: 2rpx solid #dadada;padding-right: 10rpx;"
                    name="arrow-left" size="28"></u-icon>
                <u-icon @click="homeback()" name="home" size="28"></u-icon>
            </view>
            <text class="back_txt">确认订单</text>
        </view>
        
        <!-- 收货地址 -->
        <view class="address">
            <!--  -->
            <view class="address_icon">
                <u-icon color="#9e9e9e" size="20" name="map"></u-icon>
            </view>
            <!--  -->
            <view class="adress_txt">
                <!--  -->
                <view class="txt_up">
                    <text class="txt1">收货人：汤圆</text>
                    <text class="txt2">18820150453</text>
                </view>
                <!--  -->
                <view class="detail_bot">
                    <text>收货地址：山东省威海市荣成市海湾南路86号科创大厦南楼4楼</text>
                </view>
            </view>
            <!--  -->
            <view class="arrow">
                <u-icon color="#9e9e9e" size="20" name="arrow-right"></u-icon>
            </view>
        </view>
        
        <!-- 商品信息 -->
        <view class="goods_mag">
            <!--  -->
            <view class="shop_na">
                <u-icon color="#9e9e9e" size="20" name="home"></u-icon>
                <text>谷雨官方旗舰店</text>
            </view>
            <!--  -->
            <view class="message_box">
                <image src="https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01sD0zGj1XnqgGVQKcn_!!0-item_pic.jpg_180x180.jpg"></image>
                <view class="msg_right">
                    <view class="txt_msg">
                        <text class="txt_mag1">【618提前购】【5月24日 10:00-6月23日10:00】【王者荣耀礼盒】谷雨王者礼盒感光水2.0+美白霜50g】</text>
                        <text class="txt_msg2">光感水145ml+美白精华霜50g</text>
                    </view>
                    <view class="price">
                        <text class="price_txt">￥359</text>
                        <text>x 1</text>
                    </view>
                </view>
            </view>
        </view>
        
        <!--  -->
        <view class="active_box">
            <view class="active_top">
                <text>店铺活动</text>
                <view class="active_right">
                    <text>50.00</text>
                    <u-icon color="#9e9e9e" size="20" name="arrow-right"></u-icon>
                </view>
            </view>
            
            <view class="active_bott">
                <text>优惠</text>
                <view class="active_right">
                    <text>暂无可以</text>
                    <u-icon color="#9e9e9e" size="20" name="arrow-right"></u-icon>
                </view>
            </view>
        </view>
        
        <!--  -->
        <view class="delivery">
            <view class="active_top">
                <text>店铺活动</text>
                <view class="active_right">
                    <text>快递免运费</text>
                </view>
            </view>
            
            <view class="delivery_bott">
                <text>买家留言</text>
                <view class="textarea">
                    <u--textarea v-model="value" placeholder="请输入留言" autoHeight border="none"></u--textarea>
                </view>
            </view>
        </view>
        
        <!--  -->
        <view class="money_box">
            <view class="money_up">
                <view class="money" v-for="item in list" :key="item.id">
                    <text>{{item.name}}</text>
                    <text>{{item.money}}</text>
                </view>
            </view>
            
            <!--  -->
            <view class="totle_box">
                <text class="totle_txt">合计：</text>
                <text class="totle_num">309.00</text>
            </view>
        </view>
        
        <!--  -->
        <view class="footer">
            <view class="left">
                <text class="left_txt1">合计:</text>
                <text class="left_txt2">￥309.00</text>
            </view>
            <text class="order_txt">提交订单</text>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                value:"",
                list:[
                    {name:'商品金额',money:'￥359.00'},
                    {name:'运费',money:'+￥0.00'},
                    {name:'提前购22618',money:'-￥50.00'},
                ]
            }
        },
        methods: {
            backlast() {
                uni.navigateTo({
                    url: '/pages/leak/leak'
                })
            },
            homeback() {
                uni.switchTab({
                    url: '/pages/index/index'
                })
            },
        }
    }
</script>

<style lang="scss">
    .content{
        position: relative;
        height: auto;
        min-height: 100%;
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
                margin-right: 20rpx;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                border-radius: 50rpx;
                border: 2rpx solid #dadada;
        
            }
        
            .back_txt {
                font-weight: 700;
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
        
        // 收货地址部分
        .address{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
            margin-bottom: 20rpx;
            padding: 20rpx 0;
            .address_icon{
                width: 8%;
                padding: 10rpx 0 0 20rpx;
            }
            .adress_txt{
                width: 85%;
                font-size: 20rpx;
                .txt_up{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    font-size: 30rpx;
                    font-weight: 800;
                    .txt1{
                        margin-bottom: 10rpx;
                    }
                    .txt{
                        color: #8e8e8e;
                    }
                }
            }
            .arrow{
                width: 7%;
                padding-top: 20rpx;
            }
        }
        
        // 商品信息
        .goods_mag{
            background-color: #ffffff;
            padding: 10rpx 30rpx;
            margin: 20rpx 0;
            .shop_na{
                display: flex;
                flex-direction: row;
                color: #9e9e9e;
                padding: 15rpx 0;
                text{
                    margin-left: 10rpx;
                }
            }
            .message_box{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 20rpx;
                image{
                    width: 230rpx;
                    height: 230rpx;
                    border-radius: 20rpx;
                }
                .msg_right{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 450rpx;
                    .txt_msg{
                        display: flex;
                        flex-direction: column;
                        .txt_mag1{
                            font-size: 25rpx;
                            font-weight: 700;
                        }
                        .txt_msg2{
                            color: #8e8e8e;
                        }
                    }
                    .price{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        .price_txt{
                            font-size: 40rpx;
                            font-weight: 700;
                            color: #ff4444 ;
                        }
                    }
                }
            }
        }
        
        // 
        .active_box,
        .delivery{
            margin: 20rpx 0;
            background-color: #ffffff;
            .active_top{
                border-bottom: 3rpx solid #f7f7f7;
            }
            .active_top,.active_bott{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 20rpx 30rpx;
                font-size: 37rpx;
                .active_right{
                    display: flex;
                    flex-direction: row;
                    
                }
            }
        }
        
        // 
        .delivery{
            margin: 20rpx 0;
            .delivery_bott{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                padding: 0 30rpx;
                
                
                .textarea{
                    width: 80%;
                    text-align: left;
                }
            }
        }
        
        
        // 
        .money_box{
            margin: 20rpx 0;
            padding: 0 20rpx;
            background-color: #ffffff;
            .money_up{
                border-bottom: 3rpx solid #f7f7f7;
                .money{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 25rpx 0;
                }
            }
            .totle_box{
                padding:20rpx;
                display:flex;
                justify-content: flex-end;
                align-items: flex-end;
                .totle_txt{
                    color: #9e9e9e;
                    font-weight: 700;
                }
                .totle_num{
                    color: #ff4444;
                }
            }
        }
        
        // 
        .footer{
            display: flex;
            flex-direction: row;
            line-height: 100rpx;
            margin-top: 50rpx;
            background-color: #9e9e9e;
            .left{
                width: 70%;
                background-color: #ffffff;
                text-align: right;
                padding-right: 10rpx;
                .left_txt1{
                    font-size: 35rpx;
                    font-weight: 700;
                }
                .left_txt2{
                    color: #ff4444;
                    font-weight: 700;
                }
            }
            .order_txt{
                width: 30%;
                background-color: #ff4444;
                color: #ffffff;
                text-align: center;
            }
        }
    }
</style>