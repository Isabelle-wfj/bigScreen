var chart1 = null,
	chart2=null,
	color = ['#52D5D0', '#4484C1', '#53CFE9'];
window.onload=function(){
	/**本周维修统计*/
	var bsweek = Highcharts.chart('bs-week', {
		chart: {
			backgroundColor: '#3a3e52',
			marginTop:30
		},
		credits: {
			enabled: false
		},
		title: {
			floating: true,
			align:'center',
			useHTML:true,
			text:'<label>本周</label><br/><label>500</label>',
			style: {
				color: '#fff',
				fontSize: '20px'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					useHTML:true,
					format: '<label>{point.name}</label>: {point.y}<br/>占 {point.percentage:.1f} %',
					style: {
						color: '#fff',
						fontSize: '15px'
					}
				}
			}
		},
		series: [{
			type: 'pie',
			innerSize: '65%',	
			borderWidth:4,
			borderColor: '#3a3e52',
			color: '#fff',
			data: [{
				name: '已完修',
				y: 50,
				color: color[2]
			}, {
				name: '未接收',
				y: 10,
				sliced: true,
				selected: true,
				color: color[0]
			}, {
				name: '未完修',
				y: 40,
				color: color[1]
			}]
		}]
	}, function(c) {
		var centerY = c.series[0].center[1],
			titleHeight = parseInt(c.title.styles.fontSize);
		c.setTitle({
			y: centerY + titleHeight / 2
		});
		chart1 = c;
	});
	
	/*本月维修统计**/
	var bsmonth = Highcharts.chart('bs-month', {
		chart: {
			backgroundColor: '#3a3e52',
			marginTop:30
		},
		credits: {
			enabled: false
		},
		title: {
			floating: true,
			align:'center',
			useHTML:true,
			text:'<label>本月</label><br/><label>500</label>',
			style: {
				color: '#fff',
				fontSize: '20px'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					useHTML:true,
					format: '<label>{point.name}</label>: {point.y}<br/>占 {point.percentage:.1f} %',
					style: {
						color: '#fff',
						fontSize: '15px'
					}
				}
			}
		},
		series: [{
			type: 'pie',
			innerSize: '65%',
			borderWidth:4,
			borderColor: '#3a3e52',
			data: [{
				name: '已完修',
				y: 50,
				color: color[2]
			}, {
				name: '未接收',
				y: 10,
				sliced: true,
				selected: true,
				color: color[0]
			}, {
				name: '未完修',
				y: 40,
				color: color[1]
			}]
		}]
	}, function(c) {
		// 环形图圆心
		var centerY = c.series[0].center[1],
			titleHeight = parseInt(c.title.styles.fontSize);
		c.setTitle({
			y: centerY + titleHeight / 2
		});
		chart2 = c;
	});

	/*动态改变饼图的标题大小*/
	if(window.screen.width <= 1024) {
		bsweek.setTitle({
			style: {
				fontSize: '16px'
			}
		});
		bsmonth.setTitle({
			style: {
				fontSize: '16px'
			}
		})
	}
	
	/*维修人员统计*/
	var maintainPerson = Highcharts.chart('maintainPerson',{
		chart: {
			type: 'column',
			backgroundColor: '#3a3e52'
		},
		legend: {
			floating: true,
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: 0,
			y: 0,
			itemStyle :{
				color:'#fff'
			}
		},
		credits: {
			enabled: false,
			color: '#fff'
		},
		title: {
			text: '维修人员统计（年）',
			style: {
				color: '#fff',
				fontSize: '32px'
			}
		},
		xAxis: {
			categories: [
				'某某',
				'某某',
				'某某',
				'某某',
				'某某',
				'某某',
				'某某',
				'某某',
				'某某',
				'某某',
				'某某',
				'某某'
			],
			crosshair: true,
			labels: {
                style: {
                    color: 'white',
                    fontSize:'14px'
                }
            }
		},
		yAxis: {
			min: 0,
			title: {
				text: ''
			},
			gridLineColor: '#4c5062',
			labels: {
                style: {
                    color: 'white',
                    fontSize:'18px'
                }
            }

		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y} 人</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			},
			 series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    useHTML:true,
                    format: '{point.y}',
                    style:{
                    	fontSize:'14px',
                    	color:'#fff'
                    }
                }
            }
		},
		
		series: [{
			name: '未接收',
			color: color[0],
			data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
		}, {
			name: '未完修',
			color: color[1],
			data: [83, 78, 98, 93, 106, 84, 105, 104, 91, 83, 106, 92]
		}, {
			name: '已完修',
			color: color[2],
			data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 65, 59, 51]
		}]
	});
};