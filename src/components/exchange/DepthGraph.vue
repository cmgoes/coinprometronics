<template>
  <div id="depth_chart" style="position: relative;width: 100%;height: 100%;">
    <canvas id="depthGraph" style="position:absolute;left:0"></canvas>
    <canvas id="depthGraph_cover" style="position:absolute;left:0"></canvas>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "depth-graph",
  data: function() {
    return {
      xObj: {},
      yObj: {},
      canvas: null,
      context: null,
      // eslint-disable-next-line @typescript-eslint/camelcase
      canvas_cover: null,
      // eslint-disable-next-line @typescript-eslint/camelcase
      context_cover: null,
      pWidth: 900,
      pHeight: 300,
      buyPoints: [],
      sellPoints: [],
      values: null
    };
  },
  // props:{
  //     values:{
  //       type:Object,
  //       required:true
  //     }
  // },
  // computed:{
  //     xMin:function () {
  //       return buyArr[0].price;
  //     },
  //     xMax:function () {
  //       return sellArr[sellArr.length - 1].price;
  //     },
  //     yMin:function () {
  //       return 0;
  //     },
  //     yMax:function () {
  //      return  buyArr[0].amount * 1.2;
  //     }
  // },
  // watch:{
  //   values:{
  //     handler(newValue, oldValue) {
  //       this.initPoints();
  //       this.draw();
  //     },
  //     deep: true
  //   }
  // },
  mounted: function() {
    this.initCanvas();
    // this.initPoints();
    // this.draw();
  },
  methods: {
    initCanvas() {
      this.canvas = document.getElementById("depthGraph");
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.canvas_cover = document.getElementById("depthGraph_cover");
      this.canvas.width = this.canvas_cover.width = this.pWidth = Math.floor(
        document.getElementById("depth_chart").offsetWidth
      );
      this.canvas.height = this.canvas_cover.height = this.pHeight = Math.floor(
        document.getElementById("depth_chart").offsetHeight
      );
      this.context = this.canvas.getContext("2d");
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.context_cover = this.canvas_cover.getContext("2d");
      this.initHoverEvent();
    },
    initPoints() {
      const buy = this.values.bid,
        sell = this.values.ask;
      if (buy != undefined && sell != undefined) {
        this.xObj.min = buy.lowestPrice;
        this.xObj.max = sell.highestPrice;
        this.yObj.min = 0;
        let bidValue = null;
        this.values.bid.items.length >= 1 &&
          (bidValue = this.values.bid.items[this.values.bid.items.length - 1]
            .amount);
        this.values.bid.items.length == 0 && (bidValue = 0);
        let askValue = null;
        this.values.ask.items.length >= 1 &&
          (askValue = this.values.ask.items[this.values.ask.items.length - 1]
            .amount);
        this.values.ask.items.length == 0 && (askValue = 0);
        this.yObj.max = Math.max(bidValue, askValue);
        this.yObj.max = this.yObj.max * 1.2; //y轴最大值略大于最大委托量
        const buyArr = this.values.bid.items;

        let xScale = Math.floor((this.pWidth - 50) / (2 * (buyArr.length - 1))); //买入x轴等分
        const yScale = parseFloat(
          (this.pHeight - 50) / (this.yObj.max - this.yObj.min)
        ).toFixed(4);
        this.buyPoints = [];
        for (let i = buyArr.length - 1; i >= 0; i--) {
          const x = (buyArr.length - 1 - i) * xScale;
          const y = Math.floor(
            this.pHeight - 50 - (buyArr[i].amount - this.yObj.min) * yScale
          );

          this.buyPoints[this.buyPoints.length] = {
            x: x,
            y: y,
            amount: buyArr[i].amount,
            price: buyArr[i].price
          };
        }

        this.sellPoints = [];
        const sellArr = this.values.ask.items;
        sellArr.unshift({ price: this.values.bid.highestPrice, amount: 0 });

        xScale = Math.floor((this.pWidth - 50) / (2 * (sellArr.length - 1)));
        for (let i = 0; i < sellArr.length; i++) {
          const x = i * xScale + Math.floor((this.pWidth - 50) / 2);
          const y = Math.floor(
            this.pHeight - 50 - (sellArr[i].amount - this.yObj.min) * yScale
          );
          this.sellPoints[this.sellPoints.length] = {
            x: x,
            y: y,
            amount: sellArr[i].amount,
            price: sellArr[i].price
          };
        }
      }
    },
    convertTotal() {
      for (let i = 1; i < this.values.ask.items.length; i++) {
        this.values.ask.items[i].amount += this.values.ask.items[i - 1].amount;
      }

      for (let i = 1; i < this.values.bid.items.length; i++) {
        this.values.bid.items[i].amount += this.values.bid.items[i - 1].amount;
      }
    },
    draw(plate) {
      this.values = plate;
      if(this.values.bid.items.length > 100){
        this.values.bid.items = this.values.bid.items.slice(0, 100);
      }
      if(this.values.ask.items.length > 100){
        this.values.ask.items = this.values.ask.items.slice(0, 100);
      }
      this.convertTotal();
      this.initPoints();
      this.canvas.height = this.pHeight;
      // this.drawAxis();
      this.drawBuy();
      this.drawSell();
    },
    drawBuy() {
      this.context.beginPath();
      this.context.moveTo(0, this.pHeight - 0);
      for (let i = 0; i < this.buyPoints.length; i++) {
        this.context.lineTo(this.buyPoints[i].x, this.buyPoints[i].y);
      }
      this.context.lineTo((this.pWidth - 50) / 2, this.pHeight - 0);
      if (this.values.skin === "day") {
        this.context.fillStyle = "rgba(0,178,117,.5)";

      } else {
        this.context.fillStyle = "#243235";
      }
      this.context.fill();
    },
    drawSell() {
      this.context.beginPath();
      this.context.moveTo((this.pWidth - 50) / 2, this.pHeight - 0);
      for (let i = 0; i < this.sellPoints.length; i++) {
        this.context.lineTo(this.sellPoints[i].x, this.sellPoints[i].y);
      }
      this.context.lineTo(
        this.pWidth - 5,
        this.sellPoints[this.sellPoints.length - 1].y
      );
      this.context.lineTo(this.pWidth - 5, this.pHeight - 0);
      this.context.fillStyle = "#392231";
      if (this.values.skin === "day") {
        this.context.fillStyle = "rgba(241,80,87,.5)";
      } else {
        this.context.fillStyle = "#392231";
      }
      this.context.fill();
    },
    drawAxis() {
      this.context.beginPath();
      this.context.moveTo(0, this.pHeight - 50);
      this.context.lineTo(this.pWidth - 50, this.pHeight - 50);
      this.context.lineTo(this.pWidth - 50, 0);
      this.context.strokeStyle = "#61688a";
      this.context.stroke();
      this.context.closePath();

      this.context.beginPath();
      this.context.moveTo(this.pWidth - 50, this.pHeight - 50);
      this.context.lineTo(this.pWidth - 50 + 5, this.pHeight - 50);
      this.context.strokeStyle = "#61688a";
      this.context.stroke();
      this.context.closePath();

      this.context.fillStyle = "#61688a";
      this.context.font = "12px Adobe Ming Std";
      this.context.fillText("0", this.pWidth - 50 + 10, this.pHeight - 50 + 5);

      if(this.buyPoints.length > 50) {
          this.buyPoints.length = 50;
      }
      for (let i = 0; i < this.buyPoints.length; i++) {
        if (i % 10) {
          this.context.beginPath();
          this.context.moveTo(this.buyPoints[i].x, this.pHeight - 50);
          this.context.lineTo(this.buyPoints[i].x, this.pHeight - 45);
          this.context.strokeStyle = "#61688a";
          this.context.stroke();
          this.context.closePath();

          this.context.fillStyle = "#61688a";
          this.context.font = "12px Adobe Ming Std";
          this.context.fillText(
            this.buyPoints[i].price,
            this.buyPoints[i].x - 10,
            this.pHeight - 30
          );
        }
      }

      for (let i = 0; i < this.sellPoints.length; i++) {
        if (i % 10) {
          this.context.beginPath();
          this.context.moveTo(this.sellPoints[i].x, this.pHeight - 50);
          this.context.lineTo(this.sellPoints[i].x, this.pHeight - 45);
          this.context.strokeStyle = "#61688a";
          this.context.stroke();
          this.context.closePath();

          this.context.fillStyle = "#61688a";
          this.context.font = "12px Adobe Ming Std";
          this.context.fillText(
            this.sellPoints[i].price,
            this.sellPoints[i].x - 10,
            this.pHeight - 30
          );
        }
      }

      const yInterval = Math.floor((this.pHeight - 100) / 5);
      for (let i = 1; i <= 5; i++) {
        this.context.beginPath();
        this.context.moveTo(
          this.pWidth - 50,
          this.pHeight - 50 - i * yInterval
        );
        this.context.lineTo(
          this.pWidth - 50 + 5,
          this.pHeight - 50 - i * yInterval
        );
        this.context.strokeStyle = "#61688a";
        this.context.stroke();
        this.context.closePath();

        this.context.fillStyle = "#61688a";
        this.context.font = "12px Adobe Ming Std";
        const yVal = this.yObj.max * i / 6;
        this.context.fillText(
          yVal,
          this.pWidth - 50 + 10,
          this.pHeight - 50 - i * yInterval + 5
        );
      }
    },
    initHoverEvent() {
      const opts = ref(this).value; //777 .value added
      this.canvas_cover.addEventListener(
        "mousemove",
        function(e) {
          let arr = 0;
          if (e.offsetX <= (opts.pWidth - 50) / 2)
            arr = opts.getPoint(opts.buyPoints, e.offsetX);
          else arr = opts.getPoint(opts.sellPoints, e.offsetX);

          if (arr != null) {
            /*清空画板*/
            opts.canvas_cover.height = 500;
            /*画圆*/
            opts.context_cover.beginPath();
            opts.context_cover.arc(e.offsetX, arr.y, 10, 0, 2 * Math.PI);
            opts.context_cover.fillStyle = "#354067";
            opts.context_cover.fill();
            opts.context_cover.closePath();
            opts.context_cover.beginPath();
            opts.context_cover.arc(e.offsetX, arr.y, 5, 0, 2 * Math.PI);
            opts.context_cover.fillStyle = "#7a98f7";
            opts.context_cover.fill();
            opts.context_cover.closePath();

            /*画矩形框*/
            let rx = 0;
            if (e.offsetX <= 155) {
              rx = 5;
            } else {
              rx = e.offsetX - 150;
            }
            let ry = 0;
            if (arr.y <= 100) {
              ry = arr.y + 20;
            } else if (arr.y + 100 > opts.pHeight - 50) {
              ry = arr.y - 100;
            } else {
              ry = arr.y - 100;
            }
            opts.context_cover.beginPath();
            opts.context_cover.rect(rx, ry, 180, 80);
            opts.context_cover.fillStyle = "#262a42";
            opts.context_cover.fill();
            opts.context_cover.closePath();

            /*填充文本*/
            opts.context_cover.beginPath();
            opts.context_cover.fillStyle = "#ddd";
            opts.context_cover.font = "14px Microsoft YaHei";
            opts.context_cover.fillText("委托价", rx + 20, ry + 30);
            opts.context_cover.fillText(arr.price, rx + 70, ry + 30);
            opts.context_cover.fillText("累计", rx + 20, ry + 60);
            opts.context_cover.fillText(arr.amount.toFixed(8), rx + 70, ry + 60);
            opts.context_cover.closePath();
          }
        },
        false
      );
    },
    getPoint(arr, x) {
      const obj = null;
      for (let i = 0; i < arr.length; i++) {
        if (x == arr[i].x) {
          return arr[i];
        }
      }
      return obj;
    }
  }
};
</script>

<style scoped>
</style>
