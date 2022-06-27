<template>
    <view class="box">
        <view class="search_box">
           <view class="se">
                <u-search placeholder="搜索商品" :showAction="false"></u-search>
           </view>
        </view>
        
        <view class="goods_box">
            <!-- 列表分类 -->
            <view class="list_box">
                <view class="txt_box" @click="Change(item.id)" :class="{'active':acId==item.id}" v-for="(item,index) in list1" :key="index">
                    <view class="txt_min" :class="{'activeMin':acId==item.id}">
                        <text>{{item.name}}</text>
                    </view>
                </view>
            </view>
            <!-- 对应商品部分 -->
            <view class="list_good">
                <view class="" @click="Homes()">
                    <image style="width: 100%;height: 200rpx;" src="http://www.grainrain.com.cn/static/imgs/series/01.jpg" mode=""></image>
                </view>
                <!-- 无大图 -->
                <view class="starHot" v-for="(itemP,indexP) in list2" :key="indexP" >
                    <text>{{itemP.name}}</text>
                    <view class="items">
                        <view class="itemOne" v-for="(itemC,indexC) in itemP.list2C">
                            <image @click="Goto()" :src="itemC.src" mode=""></image>
                            <text>{{itemC.name}}</text>
                        </view>
                    </view>
                </view>
                <!-- 有大图 -->
               <view class="">
                   <view class="starHot" v-for="(itemP,indexP) in list3" :key="indexP">
                        <image :src="itemP.src" mode=""></image>
                        <text>{{itemP.name}}</text>
                        <view class="items">
                            <view class="itemOne" v-for="(itemC,indexC) in itemP.list3C">
                                <image @click="Goto()" :src="itemC.src" mode=""></image>
                            </view>
                        </view>
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
                acId:1,
                list1:[
                    {id:1,name:'明星爆款'},
                    {id:2,name:'重磅新品'},
                    {id:3,name:'热销套装'},
                    {id:4,name:'光果甘草系列'},
                    {id:5,name:'松路系列'},
                    {id:6,name:'山参系列'},
                    {id:7,name:'仙人掌系列'},
                    {id:8,name:'氨基酸系列'},
                ],
                list2:[
                    {
                        id:1,
                        name:'明星爆款',
                        list2C:[
                            {id:1,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN019lQBt91XnqgG3G9Qx_!!0-item_pic.jpg_180x180.jpg',name:'美白奶罐'},
                            {id:2,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01E7fucV1XnqgJFOsgn_!!0-item_pic.jpg_180x180.jpg',name:'刷头洁面'},
                            {id:3,src:'https://img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01QtfVHE1XnqgRqShH4_!!3027922969.jpg_180x180.jpg',name:'保湿乳'},
                            {id:4,src:'https://img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01sBHxRQ1XnqgET37xN_!!3027922969.jpg_180x180.jpg',name:'涂抹面膜'},
                            {id:5,src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01Kazm3x1XnqgQcw4Zf_!!3027922969.jpg_180x180.jpg',name:'面部精华'},
                            {id:6,src:'//img.alicdn.com/bao/uploaded/i1/3027922969/O1CN01mwCjEy1XnqgPoPrQO_!!0-item_pic.jpg_180x180.jpg',name:'光感水'},
                        ]
                    },
                    {
                        id:2,
                        name:'重磅新品',
                        list2C:[
                            {id:1,src:'//img.alicdn.com/bao/uploaded/i1/3027922969/O1CN01mwCjEy1XnqgPoPrQO_!!0-item_pic.jpg_180x180.jpg',name:'光感水'},
                            {id:2,src:'//img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01ysQeQ11XnqgBUUUzL_!!0-item_pic.jpg_180x180.jpg',name:'美白霜'},
                            {id:3,src:'//img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01F0GqjN1XnqfvTpNjs_!!0-item_pic.jpg_180x180.jpg',name:'奶皮面膜'},
                        ]
                    },
                    {
                        id:3,
                        name:'热销套装',
                        list2C:[
                            {id:1,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01OWNjsq1XnqgEUZJYZ_!!0-item_pic.jpg_180x180.jpg',name:'亮白水乳'},
                            {id:2,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN019lQBt91XnqgG3G9Qx_!!0-item_pic.jpg_180x180.jpg',name:'美白奶罐'},
                            {id:3,src:'https://img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01XLtalb1XnqgG1zsDM_!!3027922969.jpg_180x180.jpg',name:'控油水乳'},
                            {id:4,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01E7fucV1XnqgJFOsgn_!!0-item_pic.jpg_180x180.jpg',name:'刷头洁面'},
                            {id:5,src:'https://img.alicdn.com/bao/uploaded/i4/3027922969/O1CN010CZp4G1XnqgNnNMbv_!!0-item_pic.jpg_180x180.jpg',name:'淡斑霜'},
                            {id:6,src:'https://img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01QtfVHE1XnqgRqShH4_!!3027922969.jpg_180x180.jpg',name:'保湿乳'},
                        ]
                    },
                ],
                list3:[
                    {
                        id:1,
                        src:'http://www.grainrain.com.cn/static/imgs/series/01.jpg',
                        name:'光果甘草系列',
                        list3C:[
                            {id:1,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01H8Am6z1XnqgGlOU9F_!!3027922969.jpg_180x180.jpg'},
                            {id:2,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01OWNjsq1XnqgEUZJYZ_!!0-item_pic.jpg_180x180.jpg'},
                            {id:3,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN019lQBt91XnqgG3G9Qx_!!0-item_pic.jpg_180x180.jpg'},
                        ]
                    },
                    {
                        id:2,
                        src:'http://www.grainrain.com.cn/static/imgs/series/03.jpg',
                        name:'松露系列',
                        list3C:[
                            {id:1,src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01Yp8lRI1XnqgET1v6x_!!3027922969.jpg_180x180.jpg'},
                            {id:2,src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN019toJ491XnqgObaO1Q_!!3027922969.jpg_180x180.jpg'},
                            {id:3,src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01AhmGE31Xnqg7rl5CU_!!0-item_pic.jpg_180x180.jpg'},
                        ]
                    },
                    {
                        id:3,
                        src:'http://www.grainrain.com.cn/static/imgs/series/05.jpg',
                        name:'山参系列',
                        list3C:[
                            {id:1,src:'https://img.alicdn.com/bao/uploaded/i1/3027922969/O1CN01YanMLB1XnqgPqvKa2_!!3027922969.jpg_180x180.jpg'},
                            {id:2,src:'https://img.alicdn.com/bao/uploaded/i1/3027922969/O1CN01Z2oBhC1XnqgOdBLUm_!!0-item_pic.jpg_180x180.jpg'},
                            {id:3,src:'https://img.alicdn.com/bao/uploaded/i1/3027922969/O1CN01YanMLB1XnqgPqvKa2_!!3027922969.jpg_180x180.jpg'},
                        ]
                    },
                    {
                        id:4,
                        src:'http://www.grainrain.com.cn/static/imgs/series/04.jpg',
                        name:'仙人掌系列',
                        list3C:[
                            {id:1,src:'https://img.alicdn.com/bao/uploaded/i3/3027922969/O1CN01nhP2Qh1XnqgNlyxac_!!3027922969.jpg_180x180.jpg'},
                            {id:2,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN01P4UzbU1XnqgG3j16r_!!0-item_pic.jpg_180x180.jpg'},
                            {id:3,src:'https://img.alicdn.com/bao/uploaded/i2/3027922969/O1CN010N9rMv1Xnqg9YughC_!!3027922969.jpg_180x180.jpg'},
                        ]
                    },
                    {
                        id:5,
                        src:'http://www.grainrain.com.cn/static/imgs/series/02.jpg',
                        name:'氨基酸系列',
                        list3C:[
                            {id:1,src:'https://img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01Uu5RER1XnqgNlx9K8_!!3027922969.jpg_180x180.jpg'},
                            {id:2,src:'https://img.alicdn.com/bao/uploaded/i4/3027922969/O1CN01tcmZ8a1XnqgMoyP1d_!!3027922969.jpg_180x180.jpg'},
                            {id:3,src:'https://img.alicdn.com/bao/uploaded/i1/3027922969/O1CN01fKvoiz1XnqgMoybVF_!!3027922969.jpg_180x180.jpg'},
                        ]
                    },
                ]
            }
        },
        
        methods: {
            Change(id){
                // console.log(id)
                this.acId=id;
               
            },
            Homes(){
                // console.log(111)
                uni.switchTab({
                	url: "/pages/index/index"
                })
            },
            Goto() {
                uni.redirectTo({
                    url: '/pages/detailCS/detailCS'
                })
            }
        }
    }
</script>

<style lang="scss">
    .search_box{
        width: 100%;
        padding: 20rpx 0;
        background-color: #f9f9f9 ;
        position: fixed;
        z-index: 9999;
        .se{
            width: 94%;
            margin: 0 auto;
        }
    }
    
    .goods_box{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 100rpx;
        .list_box{
            position: fixed;
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f9f9f9;
            // 列表侧
            .active{
                background-color: #ffffff;
            }
            .txt_box{
                width: 100%;
                display: flex;
                align-items: center;
                .txt_min{
                    font-size: 30rpx;
                    padding: 10rpx 0 0 10rpx;
                    margin: 30rpx 0;
                }
                // 列表侧
                .activeMin{
                    border-left: 8rpx solid #ff0000 ;
                }
            }
        }
        .list_good{
            width: 75%;
            padding: 0 20rpx;
            margin-left: 20%;
            // background-color: #92def9;
            .starHot{
                margin: 20rpx 0;
                image{
                    width: 100%;
                    height: 200rpx;
                    margin-bottom: 10rpx;
                }
                .items{
                    padding: 20rpx 0;
                    display: flex;
                    flex-wrap: wrap;
                    // justify-content: space-around;
                    .itemOne{
                        width: 30%;
                        margin-top: 10rpx;
                        text-align: center;
                        margin: 15rpx 18rpx 0 0;
                        image{
                            width: 100%;
                            height: 150rpx;
                        }
                    }
                }
            }
        }
    }
</style>
