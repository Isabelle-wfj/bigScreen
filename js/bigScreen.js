var loadUi={
	initialize:function(){
		this.scrollBox=document.getElementById("scroll-engineer");
		this.scrollBegin=document.getElementById("scroll-enBegin");
		this.liBox=$('#scroll-enBegin li');
		this.scrollEnd=document.getElementById("scroll-enEnd");
		this.speed=30;//滚动速度
		/*未接收动画*/
		this.nReceive=$('.bs-nReceive ul');
		this.pageSize=2;//显示多少条
		this.ANIMATE_TIME=3000;//动画时间
		
		this.initEvent();
	},
	initEvent:function(){
		this.initScroll();
		this.animateReceive();
		this.drawRepair(288);
	},
	/*工程师滚动*/
	initScroll:function(){
		var that=this;
		this.scrollEnd.innerHTML = this.scrollBegin.innerHTML;
		setInterval(function(){
			that.scrollEngineer()
		}, this.speed);
	},
	/*向上滚动函数*/
	scrollEngineer:function(){
		var liHeight=(this.liBox.outerHeight()-5)*this.liBox.length;
		if(this.scrollBox.scrollTop >= liHeight) {
			this.scrollBox.scrollTop =5;
		} else {
			this.scrollBox.scrollTop++;
		}
	},
	animateReceive:function(){
		var that=this;
		//setTimeout(function(){
			that.nReceive.html(that.animateReceiveHtml().join(''));
			//that.animateReceive();
		//},this.ANIMATE_TIME);
	},
	animateReceiveHtml:function(){
		var html=[],pageSize,
		    screenHeight=window.screen.height;
			screenWidth=window.screen.width;
		if(screenWidth==1280 && screenHeight==980){
			pageSize=4;
		}
		pageSize=screenHeight <= 800 ? 4 : 6;
		for(var i=0;i<pageSize;i++){
			html.push('<li>');
				html.push('<div class="bs-mainList">');
					html.push('<dl class="bs-detailsLeft clearfix">');
						html.push('<dt class="bs-num">1</dt>');
						/**多个人名用<label>李某某</label>形式包裹。只能显示一个人名*/
						html.push('<dt class="bs-people"><label>李某某某</label></dt>');
						/**未接收的为   bs-nostatus*/
						html.push('<dt class="bs-status">已接收</dt>');
					html.push('</dl>');
					html.push('<dl class="bs-listMore clearfix">');
						html.push('<dt>报修编号:0000000001121254521232</dt>');
						html.push('<dt>名称:光纤交换机</dt>');
					html.push('</dl>');
					html.push('<dl class="bs-listMore bs-timePerson clearfix">');
						html.push('<dt><i class="bs-icon bs-time"></i>2017-2-12&ensp;12:32:54</dt>');
						html.push('<dt><i class="bs-icon bs-people"></i>王某某 18558585858</dt>');
					html.push('</dl>');
				html.push('</div>');
				html.push('<div class="bs-level">');
					html.push('<label class="bs-high">高</label>');
					html.push('<label class="bs-listLocal bs-breakContent"><i class="bs-icon bs-break"></i>显示故障描述问题显示故障描述问题显示故障描述问题显示故障描述问题显示故障描述问题显示故障描述问题</label>');
					html.push('<label class="bs-listLocal"><i class="bs-icon bs-location"></i>综合病房</label>');
				html.push('</div>');
			html.push('</li>');
		}
		return html;
	},
	/*报修统计*/
	drawRepair:function(repairNum){
		var canvas1 = document.querySelector('#canvas1');
		var canvas2 = document.querySelector('#canvas2');
		var cxt1 = canvas1.getContext('2d');
		var cxt2 = canvas2.getContext('2d');
		cxt1.lineWidth = 16;
		cxt1.strokeStyle = "#9599a5";
		cxt1.beginPath();
		cxt1.arc(canvas1.width / 2, canvas1.height / 2, canvas1.width / 2 - cxt1.lineWidth / 2, 0, Math.PI * 2, false);
		cxt1.closePath();
		cxt1.stroke();
		cxt2.lineWidth = 16;
		cxt2.lineCap="round";
		cxt2.strokeStyle = "#f3595b";
		(function draw() {
			cxt2.clearRect(0, 0, canvas2.width, canvas2.height);
			cxt2.beginPath();
			cxt2.arc(canvas2.width / 2, canvas2.height / 2, canvas2.width / 2 - cxt2.lineWidth / 2, 0,repairNum * Math.PI / 180, false);
			cxt2.stroke();
			cxt2.closePath();
			cxt2.save();
			cxt2.beginPath();
			cxt2.rotate(90 * Math.PI / 180);
			cxt2.closePath();
			cxt2.restore();
		})();
	}
}
$(function(){
	loadUi.initialize();
});