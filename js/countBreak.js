$(function() {
	var chart1 = null,
		chart2 = null,
		colorbreak = ['#52D5D0', '#4484C1', '#53CFE9'];
	var bsbreak = Highcharts.chart('bs-break', {
			chart: {
				backgroundColor: '#3a3e52',
				marginTop: 30
			},
			credits: {
				enabled: false
			},
			title: {
				floating: true,
				align: 'center',
				useHTML: true,
				text: '<label>本周</label><br/><label>500</label>',
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
						format: '<label>{point.name}</label><br/>占 {point.percentage:.1f} %',
						style: {
							color: '#fff',
							fontSize: '15px',
							backgroundColor:'transparent'
						}
					}
				}
			},
			series: [{
				type: 'pie',
				innerSize: '65%',
				borderWidth: 4,
				borderColor: '#3a3e52',
				color: '#fff',
				data: [{
					name: '事务',
					y: 50,
					color: colorbreak[1]
				}, {
					name: '其他',
					y: 10,
					sliced: true,
					selected: true,
					color: colorbreak[2]
				}, {
					name: '台账',
					y: 40,
					color: colorbreak[0]
				}]
			}]
		},
		function(c) {
			var centerY = c.series[0].center[1],
				titleHeight = parseInt(c.title.styles.fontSize);
			c.setTitle({
				y: centerY + titleHeight / 2
			});
			chart1 = c;
		});

	/*故障原因统计*/
	var colorsMaincount = ['#52D5D0', '#52C1D5', '#52B8D5', '#52A2D5', '#5296D5', '#54A8E8', '#75A7DA', '#6B8BD4', '#6B7AD4'];
	Highcharts.chart('bs-maincountBreak', {
		chart: {
			type: 'solidgauge',
			backgroundColor: '#3a3e52',
			marginTop: 30
		},
		credits: {
			enabled: false
		},
		title: {
			align: 'center',
			verticalAlign: 'middle',
			useHTML: true,
			text: '<img src="img/year.png">'

		},
		pane: {
			startAngle: 90,
			endAngle: 360,
			background: [{
				backgroundColor: Highcharts.Color(colorsMaincount[8]).setOpacity(0).get(),
				borderWidth: 0
			}, {
				backgroundColor: Highcharts.Color(colorsMaincount[7]).setOpacity(0).get(),
				borderWidth: 0
			}, {
				backgroundColor: Highcharts.Color(colorsMaincount[6]).setOpacity(0).get(),
				borderWidth: 0
			}, {
				backgroundColor: Highcharts.Color(colorsMaincount[5]).setOpacity(0).get(),
				borderWidth: 0
			}, {
				backgroundColor: Highcharts.Color(colorsMaincount[4]).setOpacity(0).get(),
				borderWidth: 0
			}, {
				backgroundColor: Highcharts.Color(colorsMaincount[3]).setOpacity(0).get(),
				borderWidth: 0
			}, {
				backgroundColor: Highcharts.Color(colorsMaincount[2]).setOpacity(0).get(),
				borderWidth: 0
			}, {
				backgroundColor: Highcharts.Color(colorsMaincount[1]).setOpacity(0).get(),
				borderWidth: 0
			}, {
				backgroundColor: Highcharts.Color(colorsMaincount[0]).setOpacity(0).get(),
				borderWidth: 0
			}]
		},
		yAxis: {
			min: 0,
			max: 100,
			lineWidth: 0,
			tickPositions: []
		},
		plotOptions: {
			solidgauge: {
				borderWidth: '6px',
				dataLabels: {
					enabled: false
				},
				linecap: 'round',
				stickyTracking: false
			}
		},
		series: [{
			name: '电源',
			borderColor: colorsMaincount[0],
			data: [{
				color: colorsMaincount[0],
				radius: '100%',
				innerRadius: '100%',
				y: 80 //相应的值放置处
			}]
		}, {
			name: '水源',
			borderColor: colorsMaincount[1],
			data: [{
				color: colorsMaincount[1],
				radius: '92%',
				innerRadius: '92%',
				y: 95
			}]
		}, {
			name: '温度',
			borderColor: colorsMaincount[2],
			data: [{
				color: colorsMaincount[2],
				radius: '84%',
				innerRadius: '84%',
				y: 80
			}]
		}, {
			name: '湿度',
			borderColor: colorsMaincount[3],
			data: [{
				color: colorsMaincount[3],
				radius: '76%',
				innerRadius: '76%',
				y: 75
			}]
		}, {
			name: '气源',
			borderColor: colorsMaincount[4],
			data: [{
				color: colorsMaincount[4],
				radius: '68%',
				innerRadius: '68%',
				y: 60
			}]
		}, {
			name: '保养不当',
			borderColor: colorsMaincount[5],
			data: [{
				color: colorsMaincount[5],
				radius: '60%',
				innerRadius: '60%',
				y: 55
			}]
		}, {
			name: '操作不当',
			borderColor: colorsMaincount[6],
			data: [{
				color: colorsMaincount[6],
				radius: '52%',
				innerRadius: '52%',
				y: 80
			}]
		}, {
			name: '校正不调',
			borderColor: colorsMaincount[7],
			data: [{
				color: colorsMaincount[7],
				radius: '44%',
				innerRadius: '44%',
				y: 75
			}]
		}, {
			name: '电磁干扰',
			borderColor: colorsMaincount[8],
			data: [{
				color: colorsMaincount[8],
				radius: '36%',
				innerRadius: '36%',
				y: 60
			}]
		}]
	});

	/*动态改变饼图的标题大小*/
	if(window.screen.width <= 1024) {
		bsbreak.setTitle({
			style: {
				fontSize: '16px'
			}
		});
	}
});