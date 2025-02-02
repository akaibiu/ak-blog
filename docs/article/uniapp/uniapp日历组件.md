```javascript
<template>
	<view class="container">
		<sign-calendar @selectDate="selectedDateFn" @onDayClick="onDayClickFn" @changeStatus="changeStatusFn" :markDays="values" :disabledAfter="false" :collapsible="true" :open="true" :headerBar="true" weekstart='0'></sign-calendar>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import signCalendar from '@/components/sign-calendar/sign-calendar.vue';
	var app = getApp().globalData.config;
	export default {
		components:{signCalendar},
		data() {
			return {
				values:["2024-01-01","2024-01-02","2024-01-22","2024-01-26", "2024-02-02","2024-02-03", "2024-02-5"]
			};
		},
		
		methods: {
			/**
			 * @description 关闭登录提示组件
			 * @param {} Object
			*/
			closeLoginComponent(){
				this.isLoginFlag=!this.isLoginFlag;
			},
			
			changeStatusFn(res){
				console.log(res,'changeStatus');
			},
			onDayClickFn(res){
				console.log(res,'onDayClick');
			},
			selectedDateFn(res){
				console.log(res,'selectedDateFn');
			}
		},
	};
</script>
<style lang="less" scoped>
	.dflex() {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dflexsb() {
		.dflex();
		justify-content: space-between;
	}
	.dflexsa() {
		.dflex();
		justify-content: space-around;
	}
	.container {
	
	}
</style>

```

组件代码
```javascript
<template>
	<view class="calendar-wrapper">
		<view class="header" v-if="headerBar">
			<!-- <view class="pre" @click="changeMonth('pre')">上个月</view> -->
			<u-icon name="arrow-left-double" :color="vuex_default__content_skin"  top="1px" size="20" @click="changeMonth('pre')"></u-icon>
			<view style="margin: 0rpx 8rpx;">{{y+'年'+formatNum(m)+'月'}}</view>
			<u-icon name="arrow-right-double" :color="vuex_default__content_skin" top="1px" size="20"  @click="changeMonth('next')"></u-icon>
			<!-- <view class="next">下个月</view> -->
		</view>
		<view class="week">
			<view class="week-day" v-for="(item, index) in weekDay" :key="index">{{ item }}</view>
		</view>
		<view :class="{ hide: !monthOpen }" class="content" :style="{ height: height }">
			<view :style="{ top: positionTop + 'rpx' }" class="days">
				<view class="item" v-for="(item, index) in dates" :key="index">
					<view class="day" @click="selectOne(item, $event)" :class="{
                            choose: choose == `${item.year}-${item.month}-${item.date}`&&item.isCurM,
				                    isMarkDay:isMarkDay(item.year, item.month, item.date),
                            nolm: !item.isCurM,
                            today: isToday(item.year, item.month, item.date),
                            isWorkDay: isWorkDay(item.year, item.month, item.date)
                        }">
						{{ Number(item.date) }}
					</view>
					<view class="markDay" v-if="isMarkDay(item.year, item.month, item.date)&&item.isCurM"></view>
					<view class="today-text" v-if="isToday(item.year, item.month, item.date)">今</view>
				</view>
			</view>
		</view>
		<view class="iconToggle">
			<u-icon v-if="collapsible" :name="monthOpen?'arrow-up':'arrow-down'" :color="vuex_default__content_skin" size="28" @click="toggle"></u-icon>
		</view>
		<!-- <image style="width: 150rpx;" src="../../static/class/logo-teacher.png" mode="scaleToFill" v-if="collapsible"
			@click="toggle" class="weektoggle" :class="{ down: monthOpen }"></image> -->
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		name: 'sign-calendar',
		props: {
			// 星期几为第一天(0为星期日)
			weekstart: {
				type: Number,
				default: 0
			},
			// 标记的日期
			markDays: {
				type: Array,
				default: () => {
					return []; //例如["2023-05-01", "2023-05-03", "2023-04-13"]
				}
			},
			//是否展示月份切换按钮
			headerBar: {
				type: Boolean,
				default: true
			},
			// 是否展开
			open: {
				type: Boolean,
				default: true
			},
			//是否可收缩
			collapsible: {
				type: Boolean,
				default: true
			},
			//未来日期是否不可点击
			disabledAfter: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				weektext: ['日', '一', '二', '三', '四', '五', '六'],
				y: new Date().getFullYear(), // 年
				m: new Date().getMonth() + 1, // 月
				dates: [], // 当前月的日期数据
				positionTop: 0,
				monthOpen: true,
				choose: ''
			};
		},
		created() {
			this.dates = this.monthDay(this.y, this.m);
			!this.open && this.toggle();
		},
		mounted() {
			this.choose = this.getToday().date;
		},
		computed: {
			// 顶部星期栏
			weekDay() {
				return this.weektext.slice(this.weekstart).concat(this.weektext.slice(0, this.weekstart));
			},
			height() {
				return (this.dates.length / 7) * 80 + 'rpx';
			}
		},
		methods: {
			formatNum(num) {
				let res = Number(num);
				return res < 10 ? '0' + res : res;
			},
			getToday() {
				let date = new Date();
				let y = date.getFullYear();
				let m = date.getMonth();
				let d = date.getDate();
				let week = new Date().getDay();
				let weekText = ['日', '一', '二', '三', '四', '五', '六'];
				let formatWeek = '星期' + weekText[week];
				let today = {
					date: y + '-' + this.formatNum(m + 1) + '-' + this.formatNum(d),
					week: formatWeek
				};
				return today;
			},
			// 获取当前月份数据
			monthDay(y, month) {
				let dates = [];
				let m = Number(month);
				let firstDayOfMonth = new Date(y, m - 1, 1).getDay(); // 当月第一天星期几
				let lastDateOfMonth = new Date(y, m, 0).getDate(); // 当月最后一天
				let lastDayOfLastMonth = new Date(y, m - 2, 0).getDate(); // 上一月的最后一天
				let weekstart = this.weekstart == 7 ? 0 : this.weekstart;
				let startDay = (() => {
					// 周初有几天是上个月的
					if (firstDayOfMonth == weekstart) {
						return 0;
					} else if (firstDayOfMonth > weekstart) {
						return firstDayOfMonth - weekstart;
					} else {
						return 7 - weekstart + firstDayOfMonth;
					}
				})();
				let endDay = 7 - ((startDay + lastDateOfMonth) % 7); // 结束还有几天是下个月的
				for (let i = 1; i <= startDay; i++) {
					dates.push({
						date: this.formatNum(lastDayOfLastMonth - startDay + i),
						day: weekstart + i - 1 || 7,
						month: m - 1 >= 0 ? this.formatNum(m - 1) : 12,
						year: m - 1 >= 0 ? y : y - 1
					});
				}
				for (let j = 1; j <= lastDateOfMonth; j++) {
					dates.push({
						date: this.formatNum(j),
						day: (j % 7) + firstDayOfMonth - 1 || 7,
						month: this.formatNum(m),
						year: y,
						isCurM: true //是否当前月份
					});
				}
				for (let k = 1; k <= endDay; k++) {
					dates.push({
						date: this.formatNum(k),
						day: (lastDateOfMonth + startDay + weekstart + k - 1) % 7 || 7,
						month: m + 1 <= 11 ? this.formatNum(m + 1) : 0,
						year: m + 1 <= 11 ? y : y + 1
					});
				}
				// console.log(dates);
				return dates;
			},
			isWorkDay(y, m, d) {
				//是否工作日
				let ymd = `${y}/${m}/${d}`;
				let formatDY = new Date(ymd.replace(/-/g, '/'));
				let week = formatDY.getDay();
				if (week == 0 || week == 6) {
					return false;
				} else {
					return true;
				}
			},
			isFutureDay(y, m, d) {
				//是否未来日期
				let ymd = `${y}/${m}/${d}`;
				let formatDY = new Date(ymd.replace(/-/g, '/'));
				let showTime = formatDY.getTime();
				let curTime = new Date().getTime();
				if (showTime > curTime) {
					return true;
				} else {
					return false;
				}
			},
			// 标记日期
			isMarkDay(y, m, d) {
				// console.log(y, m, d, '当前遍历的日期项', y - m - d);
				let flag = false;
				// console.log('传递过来需要标记的日期项', this.markDays);
				this.markDays.forEach(item => {
					let dy = `${y}-${m}-${d}`
					if (item == dy) {
						flag = true
					}
				})

				return flag;
			},
			isToday(y, m, d) {
				let checkD = y + '-' + m + '-' + d;
				let today = this.getToday().date;
				if (checkD == today) {
					return true;
				} else {
					return false;
				}
			},
			// 展开收起
			toggle() {
				this.monthOpen = !this.monthOpen;
				if (this.monthOpen) {
					this.positionTop = 0;
					// console.log(this.monthOpen);
					this.$emit('changeStatus', this.monthOpen)
				} else {
					// console.log(this.monthOpen);
					this.$emit('changeStatus', this.monthOpen)
					let index = -1;
					this.dates.forEach((i, x) => {
						this.isToday(i.year, i.month, i.date) && (index = x);
					});
					this.positionTop = -((Math.ceil((index + 1) / 7) || 1) - 1) * 80;
				}
			},
			// 点击回调
			selectOne(i, event) {
				let date = `${i.year}-${i.month}-${i.date}`;
				let selectD = new Date(date).getTime();
				let curTime = new Date().getTime();
				let week = new Date(date).getDay();
				let weekText = ['日', '一', '二', '三', '四', '五', '六'];
				let formatWeek = '星期' + weekText[week];
				let response = {
					date: date,
					week: formatWeek
				};
				if (!i.isCurM) {
					// console.log('不在当前月范围内');
					return false;
				}
				if (selectD > curTime) {
					if (this.disabledAfter) {
						// console.log('未来日期不可选');
						this.$refs.uToast.show({
							type: 'error',
							message:'您好，未来日期不可选中哦!',
							position: 'top'
						})
						return false;
					} else {
						this.choose = date;
						this.$emit('onDayClick', response);
					}
				} else {
					this.choose = date;
					this.$emit('onDayClick', response);
				}
				this.$emit('selectDate',response)
				// console.log('萨',response);
			},
			//改变年月
			changYearMonth(y, m) {
				this.dates = this.monthDay(y, m);
				this.y = y;
				this.m = m;
			},
			changeMonth(type) {
				if (type == 'pre') {
					this.$emit('toogleMonth', 'pre')
					if (this.m + 1 == 2) {
						this.m = 12;
						this.y = this.y - 1;
					} else {
						this.m = this.m - 1;
					}
				} else {
					this.$emit('toogleMonth', 'next')
					if (this.m + 1 == 13) {
						this.m = 1;
						this.y = this.y + 1;
					} else {
						this.m = this.m + 1;
					}
				}
				this.dates = this.monthDay(this.y, this.m);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.calendar-wrapper {
		width: 100vw;
		color: #bbb7b7;
		font-size: 28rpx;
		text-align: center;
		background-color: #fff;
		padding-bottom: 10rpx;

		.header {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 88rpx;
			color: #42464A;
			font-size: 32rpx;
			font-weight: bold;
			border-bottom: 2rpx solid #f2f2f2;

			.pre,
			.next {
				color: #4d7df9;
				font-size: 28rpx;
				font-weight: normal;
				padding: 8rpx 15rpx;
				border-radius: 10rpx;
				border: 2rpx solid #dcdfe6;
			}

			.pre {
				margin-right: 30rpx;
			}

			.next {
				margin-left: 30rpx;
			}
		}

		.week {
			display: flex;
			align-items: center;
			height: 80rpx;
			line-height: 80rpx;
			border-bottom: 1rpx solid rgba(255, 255, 255, 0.2);

			view {
				flex: 1;
			}
		}

		.content {
			position: relative;
			overflow: hidden;
			transition: height 0.4s ease;

			.days {
				transition: top 0.3s;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				position: relative;

				.item {
					position: relative;
					display: block;
					height: 80rpx;
					line-height: 80rpx;
					width: calc(100% / 7);

					.day {
						font-style: normal;
						display: inline-block;
						vertical-align: middle;
						width: 60rpx;
						height: 60rpx;
						line-height: 60rpx;
						overflow: hidden;
						border-radius: 60rpx;

						&.isMarkDay {
							background-color: green;
							color: #fff;
						}

						&.choose {
							background-color: #4d7df9;
							color: #fff;
						}

						&.nolm {
							color: #fff;
							opacity: 0.3;
						}
					}

					.isWorkDay {
						color: #42464a;
					}

					.notSigned {
						font-style: normal;
						width: 8rpx;
						height: 8rpx;
						background: #fa7268;
						border-radius: 10rpx;
						position: absolute;
						left: 50%;
						bottom: 0;
						pointer-events: none;
					}

					.today {
						color: #fff;
						background-color: #a8c0ff;
					}

					.workDay {
						font-style: normal;
						width: 8rpx;
						height: 8rpx;
						background: #4d7df9;
						border-radius: 10rpx;
						position: absolute;
						left: 50%;
						bottom: 0;
						pointer-events: none;
					}

					.markDay {
						font-style: normal;
						width: 8rpx;
						height: 8rpx;
						background: red;
						border-radius: 10rpx;
						position: absolute;
						left: 50%;
						bottom: 0;
						pointer-events: none;
					}
				}
			}
		}

		.hide {
			height: 80rpx !important;
		}
		.iconToggle{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 4rpx 20rpx;
			box-sizing: border-box;
		}
		.weektoggle {
			width: 85rpx;
			height: 32rpx;
			position: relative;
			bottom: -42rpx;

			&.down {
				transform: rotate(180deg);
				bottom: 0;
			}
		}
	}
</style>


```