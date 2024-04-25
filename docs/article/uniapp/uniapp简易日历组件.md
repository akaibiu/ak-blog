```javascript
<template>
	<view class="container">
		<calendar :values="checks"></calendar>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import calendar from '@/components/calendar/calendar.vue';
	var app = getApp().globalData.config;
	export default {
		// components:{calendar},
		data() {
			return {
				 checks: [
				        { date: "20230928", signInFlag: true, xbCount: 7 },
				        { date: "20230927", signInFlag: true, xbCount: 6 },
				        { date: "20230926", signInFlag: true, xbCount: 5 },
				        { date: "20230925", signInFlag: true, xbCount: 4 },
				        { date: "20231019", signInFlag: true, xbCount: 4 },
				        { date: "20231018", signInFlag: true, xbCount: 3 },
				        { date: "20231017", signInFlag: true, xbCount: 2 },
				        { date: "20231016", signInFlag: true, xbCount: 1 },
				        { date: "20231015", signInFlag: true, xbCount: 7 },
				        { date: "20231014", signInFlag: true, xbCount: 6 },
				        { date: "20231002", signInFlag: true, xbCount: 1 },
				        { date: "20231022", signInFlag: true, xbCount: 7 },
				        { date: "20231021", signInFlag: true, xbCount: 6 },
				        { date: "20231020", signInFlag: true, xbCount: 5 },
				        { date: "20231009", signInFlag: true, xbCount: 1 },
				        { date: "20231008", signInFlag: true, xbCount: 7 },
				        { date: "20231007", signInFlag: true, xbCount: 6 },
				        { date: "20230930", signInFlag: true, xbCount: 1 },
				        { date: "20231006", signInFlag: true, xbCount: 5 },
				        { date: "20231001", signInFlag: true, xbCount: 4 },
				        { date: "20231005", signInFlag: true, xbCount: 4 },
				        { date: "20231004", signInFlag: true, xbCount: 3 },
				        { date: "20231003", signInFlag: true, xbCount: 2 },
				        { date: "20231013", signInFlag: true, xbCount: 5 },
				        { date: "20231012", signInFlag: true, xbCount: 4 },
				        { date: "20231011", signInFlag: true, xbCount: 3 },
				        { date: "20231010", signInFlag: true, xbCount: 2 },
				      ],
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

```javascript
<template>
	<view class="calendar">
		<view class="calendar-header">
			<view class="header-icon-wrap" @tap="handleClickPrevMonth">
				<img class="header-icon" src="https://z1.ax1x.com/2023/10/27/piZX39K.png" alt="" />
			</view>
			<view class="calendar-date">{{ nowYear + "年" + nowMonth + "月" }}</view>
			<view class="header-icon-wrap" @tap="handleClickNextMonth">
				<img class="header-icon" src="https://z1.ax1x.com/2023/10/27/piZXUHA.png" alt="" />
			</view>
			<view class="calendar-tip">{{ title }}</view>
		</view>
		<!-- 星期展示 -->
		<view class="calendar-grid calendar-week">
			<view v-for="(value, index) in weekDay" :key="index" class="calendar-grid-item calendar-week-item">
				<view class="calendar-grid-item-text"> {{ value }}</view>
			</view>
		</view>
		<!-- 日期内容 -->
		<view class="calendar-grid calendar-day">
			<view v-for="(item, index) in totalDay" :key="index" class="calendar-grid-item calendar-day-item"
				@click="handleCheck(item)">
				<view :class="{
            'calendar-grid-item-text': true,
            'calendar-prev-month-day': item.prevMonth,
            'calendar-next-month-day': item.nextMonth,
            'calendar-check': item.check,
            'calendar-today': item.today,
          }">
					{{ item.day }}
				</view>
				<view v-if="item.check" class="calendar-day-mark">
					<!-- <img
            style="width: 24rpx; height: 24rpx"
            src="../images/star1.png"
            alt=""
          /> -->
					<u-icon name="star" color="#ffb949" size="12"></u-icon>
					<view>+{{ item.value }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			values: {
				type: Array,
				default: [],
			},
			title: {
				type: String,
				default: "积分按当月连续签到天数累加",
			},
		},
		data() {
			return {
				weekDay: ["日", "一", "二", "三", "四", "五", "六"],
				nowYear: new Date().getFullYear(),
				nowMonth: new Date().getMonth() + 1,
				nowDay: new Date().getDate(),
				maxDayList: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
				totalDay: [],
			};
		},
		onLoad() {},
		methods: {
			initCalendar() {
				const maxDayList = [...this.maxDayList];
				const year = this.nowYear;
				const month = this.nowMonth;

				//计算当前年是不是闰年，规则：能被4整除且不被100整除，或者能被400整除的年份
				maxDayList[1] =
					(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;

				this.maxDayList = maxDayList;

				// 累计当天天数
				let days = [];
				for (let index = 1; index <= maxDayList[month - 1]; index++) {
					let {
						check,
						value
					} = this.getCheckState(year, month, index);
					days.push({
						year,
						month,
						day: index,
						today: this.isToDay(index),
						check,
						value,
					});
				}

				//当前月的1号是星期几,0是星期天
				let firstDayWeek = new Date(year + "/" + month + "/1").getDay();

				//需要补的前置天数，需要处理是否是本年的月份
				let beforeDays = [];
				let nowYear = this.nowYear;
				let previousMonth = month - 1;
				let previousMonthIndex = month - 2;
				if (previousMonthIndex < 0) {
					previousMonthIndex = 11;
					nowYear = nowYear - 1;
					previousMonth = 12;
				}
				for (let index = 0; index < firstDayWeek; index++) {
					let day = maxDayList[previousMonthIndex] - index;
					let {
						check,
						value
					} = this.getCheckState(
						nowYear,
						previousMonthIndex + 1,
						day
					);
					beforeDays.push({
						year,
						month: previousMonth,
						day,
						prevMonth: true,
						check,
						value,
					});
				}
				//当前月最后一天是星期几
				let endDayWeek = new Date(
					year + "/" + month + "/" + maxDayList[month - 1]
				).getDay();

				let newxMonth = month + 1;
				if (month === 12) {
					newxMonth = 1;
				}
				//需要补的后置天数
				let afterDays = [];
				for (let index = 1; index < 7 - endDayWeek; index++) {
					let {
						check,
						value
					} = this.getCheckState(nowYear, newxMonth, index);
					afterDays.push({
						year,
						month: newxMonth,
						day: index,
						nextMonth: true,
						check,
						value,
					});
				}

				this.totalDay = [...beforeDays.reverse(), ...days, ...afterDays];
			},

			getCheckState(year, month, day) {
				let currentMonth = month > 9 ? month : "0" + month;
				let currentDay = day > 9 ? day : "0" + day;
				let curentDate = `${year}${currentMonth}${currentDay}`;
				let item = this.values?.find((item) => item.date === curentDate);
				if (item) return {
					check: true,
					value: item.xbCount
				};
				return {};
			},

			isToDay(day) {
				let currentYear = new Date().getFullYear();
				let currentMonth = new Date().getMonth() + 1;
				let currentDay = new Date().getDate();
				if (
					currentDay === day &&
					this.nowYear === currentYear &&
					this.nowMonth === currentMonth
				)
					return true;
				return false;
			},

			handleClickPrevMonth() {
				if (this.nowMonth === 1) {
					this.nowMonth = 12;
					this.nowYear = this.nowYear - 1;
				} else {
					this.nowMonth = this.nowMonth - 1;
				}

				this.initCalendar();
			},

			handleClickNextMonth() {
				if (this.nowMonth === 12) {
					this.nowMonth = 1;
					this.nowYear = this.nowYear + 1;
				} else {
					this.nowMonth = this.nowMonth + 1;
				}

				this.initCalendar();
			},

			handleCheck(item) {
				this.$emit("onChange", item);
			},
		},
		mounted() {
			this.initCalendar();
		},
	};
</script>

<style lang="less">
	.calendar {
		width: 100%;
		height: 100%;
		.calendar-header {
			padding: 0 16rpx;
			margin: 36rpx 0 42rpx;
			height: 48rpx;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			.header-icon-wrap {
				padding: 0 16rpx;
				.header-icon {
					width: 14rpx;
					height: 20rpx;
				}
			}
			.calendar-date {
				font-size: 28rpx;
				font-weight: 500;
				color: #07132b;
				padding: 0 16rpx;
			}
			.calendar-tip {
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				background: #fff5c6;
				border-radius: 26rpx 0px 0px 26rpx;
				padding: 0 16rpx 0 20rpx;
				line-height: 48rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #eccc66;
			}
		}
		.calendar-grid {
			display: grid;
			grid-template-columns: repeat(7, 14.28%);
			.calendar-grid-item {
				height: 84rpx;
				text-align: center;
				font-size: 28rpx;
				font-weight: 500;
				color: #07132b;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				flex-direction: column;
				.calendar-grid-item-text {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 52rpx;
					height: 52rpx;
				}
			}
		}
		.calendar-day {
			.calendar-day-item {
				.calendar-prev-month-day,
				.calendar-next-month-day {
					color: #a6b1bf;
				}
				.calendar-check {
					background: rgba(236, 204, 102, 0.2);
					border-radius: 50%;
				}
				.calendar-today {
					background: #eccc66;
					border-radius: 50%;
					color: #ffffff;
				}
				.calendar-day-mark {
					height: 26rpx;
					font-size: 20rpx;
					font-weight: 400;
					color: #eccc66;
					display: flex;
					align-items: center;
					img {
						width: 24rpx;
						height: 24rpx;
					}
				}
			}
		}
	}
</style>
```