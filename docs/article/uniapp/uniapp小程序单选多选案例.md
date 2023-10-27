# :strawberry: uniapp小程序单选多选案例




>在日常开发中，难免会遇到一些单选多选全选的业务功能，下面这个小案例带您玩转单多选!一起来看看吧....


```vue
<template>
    <view>
        <!-- 单个复选框 -->
      <!-- <checkbox-group class="block" @change="checkboxChange">
            <view class="cu-form-group">
                <view class="title">复选选操作(checkbox)</view>
                <checkbox :class="isChecked?'checked':''" :checked="isChecked?true:false" value="1"></checkbox>
            </view>
        </checkbox-group> -->
        <!-- 多个复选框，带全选 -->
        <view>
            <checkbox-group class="block" @change="changeCheckbox">
				<label class="checkbox" v-for="(item,index) in checkboxData" :key="item.value">
				   <view class="item" style="display: flex;">
				      <checkbox :value="String(item.value)" :checked="checkedArr.includes(String(item.value))" :class="{'checked':checkedArr.includes(String(item.value))}"></checkbox>
				      <text>{{item.label}}</text>
				   </view>
				</label>
            </checkbox-group>
        </view>
        <view>
            <checkbox-group @change="allChoose">
                <label>
                    <checkbox value="all" :class="{'checked':allChecked}" :checked="allChecked?true:false"></checkbox> 全选
                </label>
            </checkbox-group>
        </view>
		<button type="default" @click="submit">确认</button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                isChecked:false,
                checkboxData:[
                    {'value':0,'label':'选项一'},
                    {'value':1,'label':'选项二'},
                    {'value':2,'label':'选项三'},
                    {'value':3,'label':'选项四'},
                    {'value':4,'label':'选项五'},
                    {'value':5,'label':'选项六'},
                    {'value':6,'label':'选项七'},
                    {'value':7,'label':'选项八'},
                    {'value':8,'label':'选项九'},
                    {'value':9,'label':'选项十'}
                ],
                checkedArr:[], //复选框选中的值
                allChecked:false //是否全选
            }
        },
        methods: {
            // 单个复选框事件
            checkboxChange(e) {
                let values = e.detail.value;
                if(values[0]==1){
                    this.isChecked=true;
                }else{
                    this.isChecked=false;
                }
            },
            // 多选复选框改变事件
            changeCheckbox(e){
                this.checkedArr = e.detail.value;
                // 如果选择的数组中有值，并且长度等于列表的长度，就是全选
                if(this.checkedArr.length>0 && this.checkedArr.length==this.checkboxData.length){
                    this.allChecked=true;
                }else{
                    this.allChecked=false;
                }
            },
            // 全选事件
            allChoose(e){
                let chooseItem = e.detail.value;
                // 全选
                if(chooseItem[0]=='all'){
                    this.allChecked=true;
                    for(let item of this.checkboxData){
                        let itemVal=String(item.value);
                        if(!this.checkedArr.includes(itemVal)){
                            this.checkedArr.push(itemVal);
                        }
                    }                    
                }else{
                    // 取消全选
                    this.allChecked=false;
                    this.checkedArr=[];
                }
            },
			submit(){
				let that=this;
				console.log(that.checkedArr,'已选数组')
				let arr=that.checkboxData.filter(item=>{
					if(that.checkedArr.map(Number).indexOf(item.value)!= -1){
						return item
					}
				});
				console.log(arr,'选择的完整数组')
			}
        }
    }
</script>
<style>
	
</style>

<style>
/*每个页面公共css */	
/* #ifdef H5 */
uni-checkbox .uni-checkbox-input {
  border-radius: 50% !important;
  color: #ffffff !important;
}
.item{
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
  /* border: none !important; */
  background: #9FD8F5;
  border-color: #9FD8F5;
}

uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before {
  width: 20rpx;
  height: 20rpx;
  line-height: 20rpx;
  text-align: center;
  font-size: 18rpx;
  color: #fff;
  background: transparent;
  /* transform: translate(-70%, -50%) scale(1);
  -webkit-transform: translate(-70%, -50%) scale(1); */
}

/* #endif */
/* 微信样式 */
/* #ifdef APP-PLUS ||MP-WEIXIN */
checkbox .wx-checkbox-input {
  border-radius: 50% !important;
  color: #ffffff !important;
}

checkbox .wx-checkbox-input.wx-checkbox-input-checked {
  color: #fff;
  background: #9FD8F5;
}

.wx-checkbox-input.wx-checkbox-input-checked {
  bborder-color: #9FD8F5;
}
/* #endif */
</style>

```

![alt 示例图片](/img/study/uniapp/uniapp小程序单选多选案例/demo.png)

* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸