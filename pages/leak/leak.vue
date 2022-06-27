<template>
    <view class="content">
        <view class="back_box">
            <view class="back_but">
                <u-icon @click="backlast()" style="border-right: 2rpx solid #ffffff;padding-right: 10rpx;"
                    name="arrow-left" size="28"></u-icon>
                <u-icon @click="homeback()" name="home" size="28"></u-icon>
            </view>
            <text class="back_txt">199任选4件</text>
        </view>
        
        <u-notice-bar :text="text1" color="#000000"></u-notice-bar>
        <!--  -->
        <view class="up_box">
            <text class="text1">199元任选4款</text>
            <text class="text2">热销爆品组合</text>
        </view>
        <!-- 商品区 -->
        <view class="lists">
            <view class="list_box" v-for="(item,index) in list" :key="index">
                <view class="" @click="Goto()">
                    <image :src="item.src"></image>
                    <view class="text3">
                        <text>{{item.txt3}}</text>
                    </view>
                </view>
                <view class="details_box">
                    <text class="text4">{{item.txt4}}</text>
                    <text class="text5">{{item.txt5}}</text>
                    <view class="details_bot">
                        <text>{{item.txt6}}</text>
                        <view class="buy_box">
                            <u-tag @click="Show(item)" text="马上抢" type="error" shape="circle" bgColor="#ff4444" color="#ffffff"></u-tag>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        
        <!-- 遮罩层 -->
        <view class="back_box">
            <u-popup :show="show" :round="20" :list2="list2" mode="bottom" @open="open" @close="close">
                <view class="buy_box">
                    <!-- 上 -->
                    <view class="buy_up">
                        <!-- 上 -->
                        <view class="up_up">
                            <image :src="list2[0].l2src" mode=""></image>
                            <view class="up_one">
                                <view class="up_txt">
                                    <text class="up_txt1">{{list2[0].l2money}}</text>
                                    <text class="up_txt2">{{list2[0].l2txt}}</text>
                                </view>
                                <text class="up_txt3">已选1盒</text>
                            </view>
                            <text @click="close()" class="txt_x">×</text>
                        </view>
                        <!-- 下 -->
                        <view class="up_bott">
                            <text class="up_txt4">面膜</text>
                            <text class="up_txt5">1盒</text>
                        </view>
                    </view>
                    <!-- 下 -->
                    <view class="buy_bott">
                        <view class="buy_num">
                            <text>购买数量</text>
                            <u-number-box v-model="value"></u-number-box>
                        </view>
                        <view class="button_box">
                            <text  @click="close()" class="but_one">加入购物车</text>
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
                show:false,
                value:1,
                text1:'专区内商品每个ID每天限拍1，单拍或部分退款不发货',
                list:[
                    {
                        id:1,
                        src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01sD0zGj1XnqgGVQKcn_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                    {
                        id:2,
                        src:'https://img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01F0GqjN1XnqfvTpNjs_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                    {
                        id:3,
                        src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01ysQeQ11XnqgBUUUzL_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                    {
                        id:4,
                        src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01AhmGE31Xnqg7rl5CU_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                    {
                        id:5,
                        src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01UM5yz91XnqgCb68K5_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                    {
                        id:6,
                        src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01sD0zGj1XnqgGVQKcn_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                    {
                        id:7,
                        src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01AhmGE31Xnqg7rl5CU_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                    {
                        id:8,
                        src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01UM5yz91XnqgCb68K5_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                    {
                        id:9,
                        src:'https://img.alicdn.com/bao/uploaded/i1/3027922969/O1CN01qDwcYV1XnqgLIlW7A_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                    {
                        id:10,
                        src:'https://img.alicdn.com/bao/uploaded/i1/3027922969/O1CN0141PGPK1XnqgBA4Idx_!!0-item_pic.jpg_180x180.jpg',
                        txt3:'199元任选4款',
                        txt4:'【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】【199元任选4款】',
                        txt5:'199元4件',
                        txt6:'￥139'
                    },
                ],
                list2:[
                    {l2src:'',
                    l2money:'',
                    l2txt:''}
                ]
            };
        },
        methods:{
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
            open(){},
            close(){
                this.show=false
            },
            Order(){
                uni.redirectTo({
                    url:"/pages/pickup/pickup"
                })
            },
            Goto(){
                uni.redirectTo({
                    url:'/pages/detailDY/detailDY'
                })
            },
            Show(item){
                this.show=!this.show;
                
                this.list2[0].l2src=item.src;
                this.list2[0].l2money=item.txt6;
                this.list2[0].l2txt=item.txt5;
            }
        }
    }
</script>

<style lang="scss">
    .content{
        width: 100%;
        box-sizing: border-box;
        background-color: #f8e2e7 ;
        
        .back_box {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 20rpx;
        
            .back_but {
                width: 200rpx;
                padding: 10rpx 20rpx 10rpx 10rpx;
                margin-right: 20rpx;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                border-radius: 50rpx;
                border: 2rpx solid #ffffff;
        
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
        
        .up_box{
            background-image: url("http://www.grainrain.com.cn/static/imgs/home/01.jpg");
            background-size: 140%;
            height:320rpx;
            display: flex;
            flex-direction: column;
            text{
                position: relative;
                top: 60rpx;
                left: 70rpx;
                margin-top: 20rpx;
                width: 220rpx;
                padding: 10rpx 20rpx;
            }
            .text1{
                background-color: #ff0000;
                color: #ffffff;
                border-radius: 50rpx;
            }
            .text2{
                font-weight: 900;
            }
        }
        
        .lists{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .list_box{
                width: 49%;
                display: flex;
                flex-direction: column;
                background-color: #ffffff;
                margin-bottom: 15rpx;
                image{
                    width: 100%;
                    height: 360rpx;
                }
                .text3{
                    margin: 0;
                    width: 100%;
                    padding: 10rpx 0;
                    text-align: center;
                    color: #ffffff;
                    background-color: #ef8f76;
                }
                .details_box{
                    display: flex;
                    flex-direction: column;
                    margin: 10rpx 20rpx 0 20rpx;
                    .text4{
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    .text5{
                        width: 150rpx;
                        background-color: #f8e2e7;
                        color: #ff0000;
                        display: -webkit-box;
                        margin: 15rpx 10rpx;
                    }
                    .details_bot{
                        height: 60rpx;
                        padding-bottom: 20rpx;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        justify-content: space-between;
                        text{
                            font-size: 50rpx;
                            font-weight: 500;
                            color: #ff4444;
                        }
                        .buy_box {
                            height: 70rpx;
                            line-height: 70rpx;
                            color: #f8f8f8;
                            text{
                                font-size: 30rpx;
                            }
                        }
                    }
                }
            }
        }
    
        .back_box{
            .buy_box{
                padding: 30rpx;
                .up_up{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    image{
                        width: 200rpx;
                        height: 200rpx;
                        border-radius: 20rpx;
                    }
                    .up_one{
                        width: 70%;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        align-items: flex-start;
                        margin: 0 20rpx;
                        .up_txt{
                            display: flex;
                            flex-direction: row;
                            margin: 10rpx 0;
                            .up_txt1{
                                font-size: 40rpx;
                                font-weight: 700;
                                color: #ff0000;
                                margin-right: 10rpx;
                            }
                            .up_txt2{
                                height: 40rpx;
                                line-height: 40rpx;
                                background-color: #f8e2e7;
                                color: #ff0000;
                                font-size: 20rpx;
                                padding: 0 5rpx;
                                margin-top: 8rpx;
                                border-radius: 50rpx;
                            }
                        }
                        .up_txt3{
                            color: #969799;
                        }
                    }
                    .txt_x{
                        font-size: 60rpx;
                        color: #969799;
                        margin-top: -20rpx;
                    }
                }
                .up_bott{
                    margin: 20rpx 0;
                    display: flex;
                    flex-direction: column;
                    border-bottom: 2rpx solid #f7f8fa;
                    .up_txt4{
                        margin-top: 20rpx;
                    }
                    .up_txt5{
                        width: 60rpx;
                        height: 30rpx;
                        line-height: 30rpx;
                        background-color: #f7f8fa;
                        padding: 20rpx;
                        margin: 20rpx 0;
                        border-radius: 10rpx;
                    }
                }
                
                .buy_bott{
                    .buy_num{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        padding: 20rpx;
                    }
                    .button_box{
                        width: 94%;
                        height: 200rpx;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                        align-items: flex-end;
                        margin: 0 auto;
                        .but_one,.but_two{
                            width: 50%;
                            height: 100rpx;
                            text-align: center;
                            line-height: 100rpx;
                            color: #ffffff;
                            font-weight: 800;
                        }
                        .but_one{
                            border-top-left-radius: 50rpx;
                            border-bottom-left-radius: 50rpx;
                            background-color: #f16738;
                        }
                        .but_two{
                            border-top-right-radius: 50rpx;
                            border-bottom-right-radius: 50rpx;
                            background-color: #fc0000;
                        }
                    }
                }
            }
        }
    }
    
</style>
