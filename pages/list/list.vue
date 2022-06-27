<template>
    <view class="content">
        <view class="input_box">
            <navigator url="/pages/search/search">
                <u-search placeholder="搜索商品" :disabled="true" :showAction="false" height="70rpx"></u-search>
            </navigator>
        </view>

        <!-- 1 -->
        <view class="items" v-for="(item,index) in list" :key="index">
            <!-- 上 -->
            <view class="bigItem_box">
                <view class="" @click="Goto()">
                    <image :src="item.src" mode=""></image>
                    <text class="text">{{item.textup1}}</text>
                </view>
                <view class="discount_box">
                    <view class="volume_box">
                        <text>{{item.textup2}}</text>
                    </view>
                    <view class="money_box">
                        <text>{{item.textup3}}</text>
                        <view class="buy_box">
                            <u-tag @click="Show(item)" text="马上抢" type="error" shape="circle" bgColor="#ff4444" color="#ffffff"></u-tag>
                        </view>
                    </view>
                </view>
            </view>
            
            <!-- 下 -->
            <view class="category">
                <view class="category_one">
                    <view class="" @click="Goto()">
                        <image :src="item.srcCat11" mode=""></image>
                        <text class="text">{{item.textCat11}}</text>
                    </view>
                    <view class="discount_box">
                        <view class="volume_box">
                            <text>{{item.textCat12}}</text>
                        </view>
                        <view class="money_box">
                            <text>{{item.textCat13}}</text>
                            <view class="buy_box">
                                <u-tag @click="Show1(item)" text="马上抢" type="error" shape="circle" bgColor="#ff4444" color="#ffffff"></u-tag>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="category_two">
                    <view class="" @click="Goto()">
                        <image :src="item.srcCat21" mode=""></image>
                        <text class="text">{{item.textCat21}}</text>
                    </view>
                    <view class="discount_box">
                        <view class="volume_box">
                            <text>{{item.textCat22}}</text>
                        </view>
                        <view class="money_box">
                            <text>{{item.textCat23}}</text>
                            <view class="buy_box">
                                <u-tag @click="Show2(item)" text="马上抢" type="error" shape="circle" bgColor="#ff4444" color="#ffffff"></u-tag>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            
        </view>
        
        <view class="back_box">
            <u-popup :show="show" :round="20" :list1="list1" mode="bottom" @open="open" @close="close">
                <view class="buy_box">
                    <!-- 上 -->
                    <view class="">
                        <view class="buy_up">
                            <image :src="list1[0].src" mode=""></image>
                            <view class="up_txt">
                                <view class="up_up">
                                    <text class="up_txt1">{{list1[0].txtup1}}</text>
                                    <text class="up_txt2">{{list1[0].txtup2}}</text>
                                </view>
                                <text class="up_txt3">请选择 面膜</text>
                            </view>
                            <text @click="close()" class="txt_x">×</text>
                        </view>
                        <!-- 下 -->
                        <view class="buy_bott">
                            <text class="up_txt4">面膜</text>
                            <view class="bott">
                                <view class="bott_one">
                                    <image :src="list1[0].src" mode=""></image>
                                    <text class="up_txt5">1盒</text>
                                </view>
                                <view class="bott_one">
                                    <image :src="list1[0].src" mode=""></image>
                                    <text class="up_txt6">2盒</text>
                                </view>
                            </view>
                        </view>
                    </view>
                    <!-- 下 -->
                    <view class="buy_bott">
                        <view class="buy_num">
                            <text>购买数量</text>
                            <u-number-box v-model="value" @change="valChange"></u-number-box>
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
                value:1,
                show:false,
                list:[
                    {
                        id:1,
                        // up
                        src:'../../static/gynp.jpg',
                        textup1:'奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精',
                        textup2:'满200减30',
                        textup3:'￥119',
                        // category
                        // one
                        srcCat11:'../../static/gygg.jpg',
                        textCat11:'奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精',
                        textCat12:'满200减30',
                        textCat13:'￥129',
                        // two
                        srcCat21:'../../static/gyng.jpg',
                        textCat21:'奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精',
                        textCat22:'满200减30',
                        textCat23:'￥238',
                    },
                    {
                        id:2,
                        // up
                        src:'../../static/gyng.jpg',
                        textup1:'奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精',
                        textup2:'满200减30',
                        textup3:'￥180',
                        // category
                        // one
                        srcCat11:'../../static/gynp.jpg',
                        textCat11:'奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精',
                        textCat12:'满200减30',
                        textCat13:'￥119',
                        // two
                        srcCat21:'../../static/gygg.jpg',
                        textCat21:'奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精',
                        textCat22:'满200减30',
                        textCat23:'￥189',
                    },
                    {
                        id:3,
                        // up
                        src:'../../static/gygg.jpg',
                        textup1:'奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精',
                        textup2:'满200减30',
                        textup3:'￥254',
                        // category
                        // one
                        srcCat11:'../../static/gyng.jpg',
                        textCat11:'奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精',
                        textCat12:'满200减30',
                        textCat13:'￥154',
                        // two
                        srcCat21:'../../static/gynp.jpg',
                        textCat21:'奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精奶皮面膜光甘草雪肌精',
                        textCat22:'满200减30',
                        textCat23:'￥119',
                    },
                ],
                list1:[
                    {
                        src:'',
                        txtup1:'',
                        txtup2:'',
                    }
                ]
            }
        },
        methods: {
            open() {},
            close() {
              this.show = false;
            },
            Order(){
                uni.redirectTo({
                    url:"/pages/selected/selected"
                })
            },
            Goto(){
                uni.redirectTo({
                    url:'/pages/detailLS/detailLS'
                })
            },
            Show(item){
                this.show=!this.show
                
                this.list1[0].src=item.src;
                this.list1[0].txtup1=item.textup3;
                this.list1[0].txtup2=item.textup2;
            },
            Show1(item){
                this.show=!this.show;
                
                this.list1[0].src=item.srcCat11;
                this.list1[0].txtup1=item.textCat13;
                this.list1[0].txtup2=item.textCat12;
            },
            Show2(item){
                this.show=!this.show;
                
                this.list1[0].src=item.srcCat21;
                this.list1[0].txtup1=item.textCat23;
                this.list1[0].txtup2=item.textCat22;
            }
        }
    }
</script>

<style lang="scss">
    .content {
        background-color: #f8f8f8;
    }
    
    .input_box{
        margin: 10rpx;
    }

    .items {
        width: 94%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        margin: 0 auto;
        // background-color: #63b4ff;
        
        .bigItem_box,.category{
            margin-bottom: 20rpx;
        }

        .bigItem_box {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
            text {
                margin: 20rpx;
            }
            image{
                width: 100%;
                height: 600rpx;
            }
            .text {
                width: 600rpx;
                overflow: hidden;
                text-overflow: ellipsis; //溢出用省略号显示
                display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1; //显示行数
            }

            .discount_box {
                display: flex;
                flex-direction: column;
                margin: 40rpx 20rpx 0 20rpx;

                .volume_box {
                    width: 240rpx;
                    text-align: center;
                    background-color: #fff2f2;
                    color: #cf0000;
                }

                .money_box {
                    display: flex;
                    justify-content: space-between;

                    text {
                        font-size: 50rpx;
                        font-weight: 500;
                        color: #ff4444;
                    }

                    .buy_box {
                        height: 70rpx;
                        margin-top: 30rpx;
                        line-height: 70rpx;
                        color: #f8f8f8;
                        text{
                            font-size: 30rpx;
                        }
                    }
                }
            }
        }
        
        .category{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .category_one,.category_two{
                width: 48%;
                image{
                    width: 100%;
                    height: 350rpx;
                }
                .text {
                    width:100%;
                    overflow: hidden;
                    text-overflow: ellipsis; //溢出用省略号显示
                    display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2; //显示行数
                }
                
                .discount_box {
                    display: flex;
                    flex-direction: column;
                    margin: 40rpx 0 0 0;
                
                    .volume_box {
                        width: 240rpx;
                        text-align: center;
                        background-color: #fff2f2;
                        color: #cf0000;
                        margin-bottom: 10rpx;
                    }
                
                    .money_box {
                        display: flex;
                        justify-content: space-between;
                
                        text {
                            font-size: 50rpx;
                            font-weight: 500;
                            color: #ff4444;
                        }
                
                        .buy_box {
                            height: 70rpx;
                            margin-top: 8rpx;
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
    }

    .back_box{
        .buy_box{
            margin: 30rpx;
            border-bottom: 2rpx solid #f7f8fa;
            .buy_up{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                image{
                    width: 200rpx;
                    height: 200rpx;
                    border-radius: 20rpx;
                }
                .up_txt{
                    width: 400rpx;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-start;
                    .up_up{
                        display: flex;
                        flex-direction: row;
                        
                        .up_txt1{
                            font-size: 45rpx;
                            font-weight: 700;
                            color: #ff4444;
                            margin-right: 10rpx;
                        }
                        .up_txt2{
                            font-size: 20rpx;
                            background-color: #fff2f2;
                            color: #cf0000;
                            height: 30rpx;
                            line-height: 30rpx;
                            padding: 10rpx;
                            border-radius: 20rpx;
                        }
                    }
                    .up_txt3{
                        color: #969799 ;
                    }
                }
                .txt_x{
                    font-size: 60rpx;
                    color: #969799;
                    margin-top: -20rpx;
                }
            }
            
            .buy_bott{
                margin: 20rpx 0;
                .bott{
                    display: flex;
                    flex-direction: row;
                    .bott_one{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        background-color: #f7f8fa;
                        padding: 10rpx;
                        border-radius: 20rpx;
                        margin: 20rpx 20rpx 20rpx 0;
                        image{
                            width: 80rpx;
                            height: 80rpx;
                            border-radius: 20rpx;
                        }
                        .up_txt5,.up_txt6{
                            margin: 0 20rpx;
                        }
                        .up_txt6{
                            color: #cf0000;
                        }
                    }
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
</style>
