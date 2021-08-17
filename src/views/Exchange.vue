<template>
  <!--begin::Layout Builder Notice-->
  <div class="d-flex flex-row h-100 font2 main-theme bg-theme">
    <!--  <div class="d-flex flex-column flex-row-auto w-200px">
        <div class="d-flex flex-column-auto h-50px bg-primary">
          <span class="text-white">Fixed Height</span>
        </div>

        <div class="d-flex flex-column-fluid bg-success flex-center">
          <span class="text-white">Fluid Height</span>
        </div>
      </div>-->

    <div class="d-flex flex-column flex-row-fluid" style="min-width: 750px">
      <div
        class="d-flex flex-row bd-highlight h-60px fw-bolder align-items-center justify-content-start top-bar"
      >
        <div class="bd-highlight w-300px border-bottom-0">
          <span class="svg-icon svg-icon-3 p-1 top-symbol">
            <inline-svg src="media/icons/duotone/Shopping/Bitcoin.svg" />
          </span>
          {{ enableMarketBuy }}
          <span class="badge overlap-group text-wrap x5x">
            5x
          </span>
          <span class="svg-icon svg-icon-3 p-2">
            <inline-svg src="media/icons/duotone/Navigation/Arrow-down.svg" />
          </span>
          {{ currentCoin.coin }}
          {{  this.green }}
        </div>

        <div class="p-3 bd-highlight lh-lg top-small-title">
          <div>24h Change</div>
          <div class="top-small-title-bottom">3.16+0.03%</div>
        </div>
        <div class="p-3 bd-highlight lh-lg top-small-title">
          <div>24h High</div>
          <div class="top-small-title-bottom">$98.000</div>
        </div>
        <div class="p-3 bd-highlight lh-lg top-small-title">
          <div>24h Low</div>
          <div class="top-small-title-bottom">$96.000</div>
        </div>
        <div class="p-3 bd-highlight lh-lg top-small-title">
          <div>24h Volume</div>
          <div class="top-small-title-bottom">$98.000.000</div>
        </div>
        <div class="ms-auto p-2 bd-highlight">
          <span class="svg-icon svg-icon-3 p-1 top-symbol">
            <inline-svg src="media/icons/duotone/Shopping/Settings.svg" />
          </span>
        </div>
      </div>

      <div class="d-flex flex-column-auto flex-row-fluid middle-data">
        <div class="d-flex flex-row-fluid flex-column middle-data-left">
          <div class="h-75 left-chart flex-center">
            <img
              src="media/product-demos/tradingview.png"
              class="p-3 img-fluid"
              alt="..."
            />
            <DepthGraph :class="{hidden:currentImgTable==='k'}" ref="depthGraph"></DepthGraph>
          </div>
          <div class="h-25 left-data">
            <div class="left-bottom-data">
              <ul class="nav nav-tabs nav-line-tabs ">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#kt_tab_pane_4"
                  >Open Orders 2W2</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5"
                  >Order History</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6"
                  >Trade History</a
                  >
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade active show"
                  id="kt_tab_pane_4"
                  role="tabpanel"
                >
                  <div>
                    <table
                      class="table table-hover table-sm gy-3 row-data gs-1"
                    >
                      <thead>
                      <tr class="fw-bolder title-data">
                        <th>Date</th>
                        <th>Pair</th>
                        <th>Type</th>
                        <th>Side</th>
                        <th>Size</th>
                        <th>Amount</th>
                        <th>Filled</th>
                        <th>Total</th>
                        <th>
                          <a class="CancelAll"
                          >Cancel All
                            <i class="bi bi-chevron-compact-down fs-9"></i
                            ></a>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>06-23 10:25:15</td>
                        <td>BTC/USD</td>
                        <td>Limit</td>
                        <td>Buy</td>
                        <td>$50.000</td>
                        <td>0.0008</td>
                        <td>0.0004</td>
                        <td>22</td>
                        <td><a>Cancel</a></td>
                      </tr>
                      <tr>
                        <td>06-23 10:25:15</td>
                        <td>BTC/USD</td>
                        <td>Limit</td>
                        <td>Buy</td>
                        <td>$50.000</td>
                        <td>0.0008</td>
                        <td>0.0004</td>
                        <td>22</td>
                        <td><a>Cancel</a></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
                  Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim
                  irure officia enim reprehenderit. Magna duis labore cillum
                  sint adipisicing
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
                  Sint sit mollit irure quis est nostrud cillum consequat Lorem
                  esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam
                  Lorem
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="d-flex flex-row-auto w-200px flex-center middle-data-center"
        >
          <span class="text-white">Fixed Width Yellow</span>
        </div>

        <div class="d-flex flex-row-auto w-200px flex-center middle-data-right">
          <span class="text-white">Fixed Width Green</span>
        </div>
      </div>
    </div>
  </div>
  <!--end::Layout Builder Notice-->
</template>

<style>
.middle-data-center {
  padding-left: 1rem !important;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}

.middle-data-right {
  padding-left: 1rem !important;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  background: linear-gradient(202deg, #ffffff00 33%, #92cb5a 200%);
}

.nav-tabs > .active > a,
.nav-tabs > .active > a:hover,
.nav-tabs > .active > a:focus {
  border-color: #d45500;
  border-top-color: transparent;
  border-bottom: 0;
}

.nav-tabs {
  border-bottom: 0;
}

.nav-line-tabs .nav-item {
  margin-top: -2px;
}

.nav-link {
  color: white !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
}

.nav-link:hover:not(.disabled):not(.active) {
  background-color: transparent;
  border-bottom: 0 !important;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 3px solid rgba(146, 203, 90, 0.6) !important;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-link:not(hover):not(.active) {
  border-top: 3px solid transparent !important;
}

.nav-link.active {
  border-top: 3px solid #92cb5a !important;
  border-bottom: 0 !important;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.left-chart {
  padding-left: 1rem !important;
}

.left-bottom-data {
  padding: 0px 8px;
}

.left-data {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  font-size: 10px;
  padding: 0px 3px 0px 3px;
}

.row-data {
  font-size: 10px;
  color: white;
}

.title-data {
  color: #6e87a5 !important;
}

.CancelAll {
  color: #d3b376;
}

.CancelAll:hover {
  cursor: pointer;
}

.middle-data {
}

.table tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}

.bg-theme {
  background-color: #1e1f23 !important;
}

.main-theme {
  color: white;
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto,
  "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";
}

.top-bar {
  padding-left: 1rem !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}

.top-symbol {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
}

.top-small-title {
  color: #6e87a5;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
}

.top-small-title-bottom {
  color: white;
}

.top-symbol {
}

.overlap-group {
  border: 1px solid #92cb5a;
  border-radius: 3px;
  padding: 3px 6px;
  position: relative;
  bottom: 1px;
}

.x5x {
  color: #92cb5a;
  font-weight: 700;
}
</style>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, toRefs } from "vue";
import { config } from "@/core/helpers/config";
import { themeName } from "@/core/helpers/documentation";
import $ from "@/assets/js/jquery.min.js";
import Stomp from "stompjs";
import moment from "moment-timezone";
import SockJS from "sockjs-client";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import UcenterApi from "@/core/services/ucenterApi";
import MarketApi from "@/core/services/marketApi";
import ExchangeApi from "@/core/services/exchangeApi";
import Datafeeds from "@/assets/ts/charting_library/datafeed/bitrade.ts";
import ConfigApi from "@/config/api";
import DepthGraph from "@/components/exchange/DepthGraph.vue";
import expandRow from "@/components/exchange/expand.vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import store from "@/store/index";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Actions } from "@/store/enums/StoreEnums";
import { getCurrentInstance } from 'vue';
import { provide, inject } from 'vue';
import $filters from "@/core/helpers/filters";

export default defineComponent({
  //inject: ['$filters'],
  name: "Exchange",
  // eslint-disable-next-line vue/no-unused-components
  components: {DepthGraph, expandRow},
  computed: {},
  data() {
    return {
      //filters: (this as any).$filters.getTimezone4K()
    }
  },

  setup(props, context) {

    const app = getCurrentInstance();
    const store = useStore();
    const { t } = useI18n();
    const tabIndex = ref(0);
    const defaultPath = "btc_usdt";
    const currentCoinIsFavor = ref(false);
    const enableMarketBuy = ref(1);
    const enableMarketSell = ref(1);
    const host = inject('host');
    const sliderBuyLimitPercent = ref(0);
    const sliderSellLimitPercent = ref(0);
    const sliderBuyMarketPercent = ref(0);
    const sliderSellMarketPercent = ref(0);
    const symbolFee = ref(0.001);
    const CNYRate = ref(null);
    const fullTrade = ref({});
    const selectedOrder= ref("current");
    const  selectedPlate= ref("all");
    const exchangeable = ref(1); // 0:可交易   1:不可交易
      const publishType= ref("NONE");
    const  currentTime= ref(0);
      const publishAmount= ref(0);
      const  publishPrice= ref(0);
        const startTime= ref("2000-01-01 00:00:00");
    const endTime= ref("2000-01-01 00:00:00");
      const clearTime = ref("2000-01-01 00:00:00");
    const showPublish= ref(false);
    const  showCountDown= ref(false);

    const baseCoinScale = ref(46);
    const self = ref(this);
    const coinScale = ref(6);
    let datafeed = ref(null);
    const skin = ref("night");
    const basecion = ref("usdt");
    const form = ref({
      buy: {
        limitPrice: 0.0,
          limitAmount: 0.0,
          marketAmount: 0.0,
          limitTurnover: 0.0
      },
      sell: {
        limitPrice: 0.0,
          limitAmount: 0.0,
          marketAmount: 0.0,
          limitTurnover: 0.0
      }
    });
    const dataIndex = ref([]);
    const dataIndex2 = ref([]);

    const wallet = ref({
      base: 0.0,
      coin: 0.0
    });
    const showMarket = ref(false);
    const isLogin = computed(function() {
      return store.getters.isAuthenticated;
    });


    function cancel(index) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const order = currentOrder.value.rows[index];
      this.$Modal.confirm({
        title: "撤单提示",
        content: this.$t("exchange.undotip"),
        onOk: () => {
          ExchangeApi
            .post(
              ConfigApi.exchange.orderCancel + "/" + order.orderId,
              {}
            )
            .then(response => {
              const resp = response.data;
              if (resp.code == 0) {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                refreshAccount();
                this.$Notice.success({
                  title: t("exchange.tip"),
                  desc: t("exchange.cancelsuccess")
                });
              } else {
                this.$Notice.error({
                  title: t("exchange.tip"),
                  desc: resp.message
                });
              }
            });
        }
      });
    };


    const currentOrder = ref({
      columns: [
        {
          type: "index",
          width: 40,
          height:40,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                skin: params.row.skin,
                rows: params.row.detail
              }
            });
          }
        },
        {
          title: t("exchange.time"),
          key: "time",
          render: (h, params) => {
            return h("span", {}, (this as any).dateFormat(params.row.time));
          }
        },
        {
          title: t("exchange.symbol"),
          key: "symbol"
        },
        {
          title: t("exchange.type"),
          render(h, params) {
            return h(
              "span",
              params.row.type === "LIMIT_PRICE" ? t("exchange.limited_price") : t("exchange.market_price")
            );
          }
        },
        {
          title: t("exchange.direction"),
          key: "direction",
          render: (h, params) => {
            const row = params.row;
            const className = row.direction.toLowerCase();
            return h(
              "span",
              {
                attrs: {
                  class: className
                }
              },
              row.direction == "BUY"
                ? t("exchange.buyin")
                : t("exchange.sellout")
            );
          }
        },
        {
          title: t("exchange.price"),
          key: "price",
          render(h, params) {
            return h("span", this.$filters.toFloor(params.row.price));
          }
        },
        {
          title: t("exchange.num"),
          key: "amount",
          render(h, params) {
            return h("span", this.$filters.toFloor(params.row.amount));
          }
        },
        {
          title: t("exchange.traded"),
          key: "tradedAmount",
          render(h, params) {
            return h("span", this.$filters.toFloor(params.row.tradedAmount));
          }
        },
        {
          title: t("exchange.dealamount"),
          key: "turnover",
          render(h, params) {
            return h("span", this.$filters.toFloor(params.row.turnover));
          }
        },
        {
          title: t("exchange.action"),
          key: "operate",
          width: 110,
          render: (h, params) => {
            return h(
              "Button",
              {
                props: {
                  size: "small"
                },
                style: {
                  border: "1px solid #f0ac19",
                  color: "#f1ac19",
                  "line-height": "1.2",
                  "border-radius": "10px"
                },
                on: {
                  click: () => {
                    // console.log("======开始撤单")
                    cancel(params.index);
                  }
                }
              },
              t("exchange.undo")
            );
          }
        }
      ],
        rows: []
    });

    const historyOrder = ref({
      pageSize: 10,
        total: 10,
        page: 0,
        columns: [
        {
          type: "index",
          width: 40,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                skin: params.row.skin,
                rows: params.row.detail
              }
            });
          }
        },
        {
          title: t("exchange.time"),
          key: "time",
          render: (h, params) => {
            return h("span", {}, (this as any).dateFormat(params.row.time));
          }
        },
        {
          title: t("exchange.symbol"),
          key: "symbol"
        },
        {
          title: t("exchange.type"),
          render(h, params) {
            return h(
              "span",
              params.row.type === "LIMIT_PRICE" ? t("exchange.limited_price") : t("exchange.market_price")
            );
          }
        },
        {
          title: t("exchange.direction"),
          key: "direction",
          render: (h, params) => {
            const row = params.row;
            const className = row.direction.toLowerCase();
            return h(
              "span",
              {
                attrs: {
                  class: className
                }
              },
              row.direction == "BUY"
                ? t("exchange.buyin")
                : t("exchange.sellout")
            );
          }
        },
        {
          title: t("exchange.price"),
          key: "price",
          render(h, params) {
            return h("span", this.$filters.toFloor(params.row.price));
          }
        },
        {
          title: t("exchange.num"),
          key: "amount",
          render(h, params) {
            return h("span", this.$filters.toFloor(params.row.amount));
          }
        },
        {
          title: t("exchange.done"),
          key: "tradedAmount",
          render(h, params) {
            return h("span", this.$filters.toFloor(params.row.tradedAmount));
          }
        },
        {
          title: t("exchange.dealamount"),
          key: "turnover",
          render(h, params) {
            return h("span", this.$filters.toFloor(params.row.turnover));
          }
        },
        {
          title: t("exchange.status"),
          key: "status",
          render: (h, params) => {
            const status = params.row.status;
            if (status == "COMPLETED") {
              return h(
                "span",
                {
                  style: {
                    color: "#f0a70a"
                  }
                },
                t("exchange.finished")
              );
            } else if (status == "CANCELED") {
              return h(
                "span",
                {
                  style: {
                    color: "#7c7f82"
                  }
                },
                t("exchange.canceled")
              );
            } else {
              return h("span", {}, "--");
            }
          }
        }
      ],
        rows: []
    });


    const currentCoin = ref({
      base: "",
      coin: "",
      symbol: "",
      coinScale: "",
      baseCoinScale: ""
    });


    const plate = ref({
      maxPostion: 10,
      columns: [
        {
          //   价格;
          title: t("exchange.price"),
          key: "price",
          render: (h, params) => {
            let str = "";
            let price = "";
            const className = params.row.direction.toLowerCase();
            params.row.price == 0 && (str = h("span", {}, "--"));
            params.row.price != 0 &&
            (price = params.row.price.toFixed(baseCoinScale)) &&
            (str = h(
              "span",
              {
                attrs: {
                  class: className
                }
              },
              price
            ));
            return str;
          },
          renderHeader: (h, params) => {
            const title =
              t("exchange.price") + "(" + currentCoin.value.base + ")";
            return h("span", {}, title);
          }
        },
        {
          title: t("exchange.num"),
          key: "amount",
          render: (h, params) => {
            let str = "";
            params.row.amount == 0 && (str = h("span", {}, "--"));
            params.row.amount != 0 &&
            (str = h(
              "span",
              {},
              params.row.amount.toFixed(coinScale)
            ));
            return str;
          },
          renderHeader: (h, params) => {
            const title =
              t("exchange.num") + "(" + currentCoin.value.coin + ")";
            return h("span", {}, title);
          }
        },
        {
          title: t("exchange.total"),
          key: "totalAmount",
          render: (h, params) => {
            if (params.row.price == 0 || params.row.totalAmount == 0) {
              return h("span", {}, "--");
            } else {
              return h(
                "span",
                {},
                params.row.totalAmount.toFixed(coinScale)
              );
            }
          },
          renderHeader: (h, params) => {
            const title =
              t("exchange.total") + "(" + currentCoin.value.coin + ")";
            return h("span", {}, title);
          }
        },
        {
          className: "percenttd",
          width: 1,
          render: (h, params) => {
            let width = "0";
            console.log("ddd");
            console.log(params);
           const backgroundColor =  params.row.direction === "BUY" ? "#00b275" : "#f15057", totle = params.row.direction === "BUY" ? plate.value.bidTotle  : plate.value.askTotle;
           if(params.row.totalAmount) {
            width = Number.parseFloat((params.row.totalAmount / totle).toFixed(4)) * 100 + "%"; //777 changed alot
            };
            return h(
              "div",
              {
                style: {
                   width,
                   backgroundColor
                },
                attrs: {
                  class: "percentdiv"
                }
              },
              " "
            );
          }
        }
      ],
      askRows: [],
      bidRows: [],
      askTotle: 0,
      bidTotle: 0
    });

    const trade = ref(  {
      rows: [],
        columns: [
        {
          title: t("exchange.price"),
          key: "price",
          render: (h, params) => {
            const row = params.row;
            const className = row.direction == "BUY" ? "buy" : "sell";

            return h(
              "span",
              {
                attrs: {
                  class: className
                }
              },
              params.row.price.toFixed(baseCoinScale)
            );
          },
          renderHeader: (h, params) => {
            const title =
              t("exchange.price") + "(" + currentCoin.value.base + ")";
            return h("span", {}, title);
          }
        },
        {
          title: t("exchange.num"),
          key: "amount",
          render: (h, params) => {
            return h("span", {}, params.row.amount.toFixed(coinScale));
          },
          renderHeader: (h, params) => {
            const title =
              t("exchange.num") + "(" + currentCoin.value.coin + ")";
            return h("span", {}, title);
          }
        },
        {
          title: t("exchange.time"),
          key: "time",
          render: (h, params) => {
            return h("span", {}, (this as any).timeFormat(params.row.time)); ///777 chaanged
          }
        }
      ]
    });

    console.log(isLogin.value);

    function noLoginMessage() {
      Swal.fire({
        text: t("common.logintip"),
        icon: "success",
        confirmButtonText: "Ok",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-light-primary"
        }
      });
    }


    function cancelCollect(index, row) {
      if (isLogin.value) {
        noLoginMessage();
        return;
      }
      ExchangeApi.post(ConfigApi.exchange.favorDelete,
        "symbol=" + row.symbol
      ).then(response => {
        const resp = response.data;
        if (resp.code == 0) {
          Swal.fire({
            text: t("exchange.cancel_favorite"),
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-light-primary"
            }
          });
          this.getCoin(row.symbol).isFavor = false;
          for (let i = 0; i < this.coins.favor.length; i++) {
            const favorCoin = this.coins.favor[i];
            if (favorCoin.symbol == row.symbol) {
              this.coins.favor.splice(i, 1);
              break;
            }
          }
          if (this.currentCoin.symbol == row.symbol) {
            this.currentCoinIsFavor = false;
          }
        }
      });
    };

    function collect(index, row) {
      if (isLogin.value) {
        noLoginMessage();
        return;
      }
      const params = {};
      params["symbol"] = row.symbol;

      ExchangeApi.post(ConfigApi.exchange.favorAdd,
        "symbol=" + row.symbol
      ).then(response => {
        const resp = response.data;
        if (resp.code == 0) {
          this.$Message.info(this.$t("exchange.do_favorite"));
          this.getCoin(row.symbol).isFavor = true;
          row.isFavor = true;
          this.coins.favor.push(row);
          if (this.currentCoin.symbol == row.symbol) {
            this.currentCoinIsFavor = true;
          }
        }
      });
    };
    const favorColumns = ref([
      {
        title: t("exchange.coin"),
        key: "coin",
        sortable: false,
        width: 120,
        className: "coin-menu-symbol",
        render: (h, params) => {
          return h("div", [
            h("Icon", {
              props: {
                // color:"red",
                type: params.row.isFavor
                  ? "ios-star"
                  : "ios-star-outline"
              },
              nativeOn: {
                click: (event) => {
                  event.stopPropagation(); //阻止事件冒泡
                  if (isLogin.value) {
                    if (
                      event.currentTarget.className ==
                      "ivu-icon ivu-icon-ios-star"
                    ) {
                      cancelCollect(params.index, params.row);
                      event.currentTarget.className ==
                      "ivu-icon ivu-icon-ios-star-outline";
                    } else {
                      collect(params.index, params.row);
                      event.currentTarget.className =
                        "ivu-icon ivu-icon-ios-star";
                    }
                  } else {
                    Swal.fire({
                      text: "请先登录",
                      icon: "warning",
                      confirmButtonText: "Ok",
                      buttonsStyling: false,
                      customClass: {
                        confirmButton: "btn btn-light-primary"
                      }
                    });
                  }
                }
              }
            }),
            h("span", params.row.symbol)
          ]);
        }
      },
      {
        title: t("exchange.lastprice"),
        key: "close",
        sortable: true,
        sortMethod: function(a, b, type) {
          const a1 = parseFloat(a);
          const b1 = parseFloat(b);
          if (type == "asc") {
            return a1 - b1;
          } else {
            return b1 - a1;
          }
        }
      },
      {
        title: t("exchange.daychange"),
        key: "rose",
        sortable: true,
        sortMethod: function(a, b, type) {
          const a1 = a.replace(/[^\d|.|-]/g, "") - 0;
          const b1 = b.replace(/[^\d|.|-]/g, "") - 0;
          if (type == "asc") {
            return a1 - b1;
          } else {
            return b1 - a1;
          }
        },
        render: (h, params) => {
          const row = params.row;
          const className = parseFloat(row.rose) < 0 ? "sell" : "buy";
          return h(
            "span",
            {
              attrs: {
                class: className
              }
            },
            row.rose
          );
        }
      }
    ]);
    const coins = {
      _map: [],
      USDT: [],
      BTC: [],
      ETH: [],
      USDT2: [],
      BTC2: [],
      ETH2: [],
      favor: [],
      columns: [
        {
          title: t("exchange.coin"),
          key: "coin",
          sortable: false,
          width: 120,
          className: "coin-menu-symbol",
          render: (h, params) => {
            if (params.row.coin == "FLOW") {
              return h("div", [
                h("Icon", {
                  props: {
                    // color:"red",
                    type: params.row.isFavor
                      ? "ios-star"
                      : "ios-star-outline"
                  },
                  nativeOn: {
                    click: (event) => { //777 added event
                      event.stopPropagation(); //阻止事件冒泡
                      if (isLogin.value) {
                        if (
                          event.currentTarget.className ==
                          "ivu-icon ivu-icon-ios-star"
                        ) {
                          cancelCollect(params.index, params.row);
                          event.currentTarget.className ==
                          "ivu-icon ivu-icon-ios-star-outline";
                        } else {
                          collect(params.index, params.row);
                          event.currentTarget.className =
                            "ivu-icon ivu-icon-ios-star";
                        }
                      } else {
                        noLoginMessage();
                      }
                    }
                  }
                }),
                h("span", params.row.coin),
                h("Tooltip", { props: { placement: "top-start", content: "价格跟随演示，价格为BTC价格的0.92%" } }, [h("span", {
                  style: {
                    fontSize: "8px",
                    padding: "2px 2px 1px 2px",
                    color: "#FFF",
                    marginLeft: "5px",
                    background: "#F30",
                    borderRadius: "8px",
                    display: "inline-block",
                    height: "8px",
                    width: "8px"
                  }
                }, "")])
              ]);
            } else if (params.row.coin == "FDC") {
              return h("div", [
                h("Icon", {
                  props: {
                    // color:"red",
                    type: params.row.isFavor
                      ? "ios-star"
                      : "ios-star-outline"
                  },
                  nativeOn: {
                    click: (event) => {
                      event.stopPropagation(); //阻止事件冒泡
                      if (isLogin.value) {
                        if (
                          event.currentTarget.className ==
                          "ivu-icon ivu-icon-ios-star"
                        ) {
                          cancelCollect(params.index, params.row);
                          event.currentTarget.className ==
                          "ivu-icon ivu-icon-ios-star-outline";
                        } else {
                          collect(params.index, params.row);
                          event.currentTarget.className =
                            "ivu-icon ivu-icon-ios-star";
                        }
                      } else {
                        noLoginMessage();
                      }
                    }
                  }
                }),
                h("span", params.row.coin),
                h("Tooltip", { props: { placement: "right", content: "首发抢购活动演示" } }, [h("span", {
                  style: {
                    fontSize: "8px",
                    padding: "2px 2px 1px 2px",
                    color: "#FFF",
                    marginLeft: "5px",
                    background: "#F30",
                    borderRadius: "8px",
                    display: "inline-block",
                    height: "8px",
                    width: "8px"
                  }
                }, "")])
              ]);
            } else if (params.row.coin == "FDB") {
              return h("div", [
                h("Icon", {
                  props: {
                    // color:"red",
                    type: params.row.isFavor
                      ? "ios-star"
                      : "ios-star-outline"
                  },
                  nativeOn: {
                    click: (event) => {
                      event.stopPropagation(); //阻止事件冒泡
                      if (isLogin.value) {
                        if (
                          event.currentTarget.className ==
                          "ivu-icon ivu-icon-ios-star"
                        ) {
                          cancelCollect(params.index, params.row);
                          event.currentTarget.className ==
                          "ivu-icon ivu-icon-ios-star-outline";
                        } else {
                          collect(params.index, params.row);
                          event.currentTarget.className =
                            "ivu-icon ivu-icon-ios-star";
                        }
                      } else {
                        noLoginMessage();
                      }
                    }
                  }
                }),
                h("span", params.row.coin),
                h("Tooltip", { props: { placement: "right", content: "首发分摊活动演示" } }, [h("span", {
                  style: {
                    fontSize: "8px",
                    padding: "2px 2px 1px 2px",
                    color: "#FFF",
                    marginLeft: "5px",
                    background: "#F30",
                    borderRadius: "8px",
                    display: "inline-block",
                    height: "8px",
                    width: "8px"
                  }
                }, "")])
              ]);
            }
            return h("div", [
              h("Icon", {
                props: {
                  // color:"red",
                  type: params.row.isFavor
                    ? "ios-star"
                    : "ios-star-outline"
                },
                nativeOn: {
                  click: (event) => {
                    event.stopPropagation(); //阻止事件冒泡
                    if (isLogin.value) {
                      if (
                        event.currentTarget.className ==
                        "ivu-icon ivu-icon-ios-star"
                      ) {
                        cancelCollect(params.index, params.row);
                        event.currentTarget.className ==
                        "ivu-icon ivu-icon-ios-star-outline";
                      } else {
                        collect(params.index, params.row);
                        event.currentTarget.className =
                          "ivu-icon ivu-icon-ios-star";
                      }
                    } else {
                      noLoginMessage();
                    }
                  }
                }
              }),
              h("span", params.row.coin)
            ]);
          }
        },
        {
          title: t("exchange.lastprice"),
          key: "close",
          sortable: true,
          sortMethod: function(a, b, type) {
            const a1 = parseFloat(a);
            const b1 = parseFloat(b);
            if (type == "asc") {
              return a1 - b1;
            } else {
              return b1 - a1;
            }
          }
        },
        {
          title: t("exchange.daychange"),
          key: "rose",
          sortable: true,
          sortMethod: function(a, b, type) {
            const a1 = a.replace(/[^\d|.|-]/g, "") - 0;
            const b1 = b.replace(/[^\d|.|-]/g, "") - 0;
            if (type == "asc") {
              return a1 - b1;
            } else {
              return b1 - a1;
            }
          },
          render: (h, params) => {
            const row = params.row;
            const className = parseFloat(row.rose) < 0 ? "sell" : "buy";
            return h(
              "span",
              {
                attrs: {
                  class: className
                }
              },
              row.rose
            );
          }
        }
      ]
    };

    function getCoin(this: any, symbol) {
      return coins._map[symbol];
    };
    const coinInfo = ref({});
    console.log(isLogin);

    function getLang4K(){
      const curlang = "en_US"; //777 store remove
      if(curlang=="en_US"){
        return "en";
      }
      if(curlang=="ja_JP"){
        return "ja";
      }
      if(curlang=="ko_KR"){
        return "ko";
      }
      if(curlang=="de_DE"){
        return "de_DE";
      }
      if(curlang=="fr_FR"){
        return "fr";
      }
      if(curlang=="it_IT"){
        return "it";
      }
      if(curlang=="es_ES"){
        return "es";
      }
      if(curlang=="zh_HK"){
        return "zh_TW";
      }
      if(curlang=="zh_CN"){
        return "zh";
      }
      return curlang;
    };

    // eslint-disable-next-line @typescript-eslint/camelcase
    function getKline() {
      const that = this as any; //777 changed
      const config = {
        autosize: true,
        height: 320,
        fullscreen: true,
        symbol: currentCoin.value.symbol, //777 changed
        interval: "5", // 默认K线周期
        timezone: $filters.getTimezone4K(),
        // eslint-disable-next-line @typescript-eslint/camelcase
        toolbar_bg: "#18202a",
        // eslint-disable-next-line @typescript-eslint/camelcase
        container_id: "kline_container",
        datafeed: datafeed.value, //77remove that.
        // eslint-disable-next-line @typescript-eslint/camelcase
        library_path:
          process.env.NODE_ENV === "production"
            ? "/assets/charting_library/"
            : "/src/assets/js/charting_library/",
        locale: getLang4K(),
        debug: false,
        // eslint-disable-next-line @typescript-eslint/camelcase
        drawings_access: {
          type: "black",
          tools: [{ name: "Regression Trend" }]
        },
        // eslint-disable-next-line @typescript-eslint/camelcase
        disabled_features: [
          "header_resolutions",
          "timeframes_toolbar",
          "header_symbol_search",
          "header_chart_type",
          "header_compare",
          "header_undo_redo",
          "header_screenshot",
          "header_saveload",
          //"use_localstorage_for_settings",
          //"left_toolbar",
          "volume_force_overlay",
          "widget_logo",
          "compare_symbol",
          "display_market_status",
          "go_to_date",
          "header_interval_dialog_button",
          "legend_context_menu",
          "show_hide_button_in_legend",
          "show_interval_dialog_on_key_press",
          "snapshot_trading_drawings",
          "symbol_info",
          //"header_widget", 
          "edit_buttons_in_legend",
          "context_menus",
          "control_bar",
          "border_around_the_chart"

        ],
        // eslint-disable-next-line @typescript-eslint/camelcase
        enabled_features: [
          "disable_resolution_rebuild",
          "keep_left_toolbar_visible_on_small_screens", //防止左侧工具栏在小屏幕上消失
          "hide_last_na_study_output",
          "move_logo_to_main_pane",
          "dont_show_boolean_study_arguments",
          "use_localstorage_for_settings",
          "remove_library_container_border",
          "save_chart_properties_to_local_storage",
          "side_toolbar_in_fullscreen_mode",
          "constraint_dialogs_movement",
          "hide_left_toolbar_by_default",
          "left_toolbar",
          "same_data_requery",
          "header_in_fullscreen_mode"
        ],
        //成交量样式
        // eslint-disable-next-line @typescript-eslint/camelcase
        studies_overrides: {
          "volume.volume.color.0": "#fa5252",
          "volume.volume.color.1": "#12b886",
          "volume.volume.transparency": 25,
        },
        // eslint-disable-next-line @typescript-eslint/camelcase
        custom_css_url: "bundles/common.css",
        // eslint-disable-next-line @typescript-eslint/camelcase
        supported_resolutions: ["1", "5", "15", "30", "60", "1D", "1W", "1M"],
        // eslint-disable-next-line @typescript-eslint/camelcase
        charts_storage_url: "http://saveload.tradingview.com",
        // eslint-disable-next-line @typescript-eslint/camelcase
        charts_storage_api_version: "1.1",
        // eslint-disable-next-line @typescript-eslint/camelcase
        client_id: "tradingview.com",
        // eslint-disable-next-line @typescript-eslint/camelcase
        user_id: "public_user_id",
        overrides: {
          "paneProperties.background": "#1B1E2E",
          "paneProperties.vertGridProperties.color": "rgba(0,0,0,.1)",
          "paneProperties.horzGridProperties.color": "rgba(0,0,0,.1)",
          //"scalesProperties.textColor" : "#AAA",
          "scalesProperties.textColor": "#61688A",
          "mainSeriesProperties.candleStyle.upColor": "#12b886",
          "mainSeriesProperties.candleStyle.downColor": "#fa5252",
          "mainSeriesProperties.candleStyle.drawBorder": true,
          "mainSeriesProperties.candleStyle.wickUpColor": "#589065",
          "mainSeriesProperties.candleStyle.wickDownColor": "#AE4E54",
          "paneProperties.legendProperties.showLegend": true,

          "mainSeriesProperties.areaStyle.color1": "rgba(71, 78, 112, 0.5)",
          "mainSeriesProperties.areaStyle.color2": "rgba(71, 78, 112, 0.5)",
          "mainSeriesProperties.areaStyle.linecolor": "#9194a4",
          "volumePaneSize": "small"
        },
        // eslint-disable-next-line @typescript-eslint/camelcase
        time_frames: [
          {
            text: "1min",
            resolution: "1",
            description: "realtime",
            title: t("exchange.realtime")
          },
          { text: "1min", resolution: "1", description: "1min" },
          { text: "5min", resolution: "5", description: "5min" },
          { text: "15min", resolution: "15", description: "15min" },
          { text: "30min", resolution: "30", description: "30min" },
          {
            text: "1hour",
            resolution: "60",
            description: "1hour",
            title: "1hour"
          },
          /*{ 
			text: "4hour", 
			resolution: "240", 
			description: "4hour",
			title: "4hour" 
		  },*/
          {
            text: "1day",
            resolution: "1D",
            description: "1day",
            title: "1day"
          },
          {
            text: "1week",
            resolution: "1W",
            description: "1week",
            title: "1week"
          },
          {
            text: "1mon",
            resolution: "1M",
            description: "1mon" ,
          }
        ]
      };
      if (skin.value === "day") {
        // eslint-disable-next-line @typescript-eslint/camelcase
        config.toolbar_bg = "#fff";
        // eslint-disable-next-line @typescript-eslint/camelcase
        config.custom_css_url = "bundles/common_day.css";
        config.overrides["paneProperties.background"] = "#fff";
        config.overrides["mainSeriesProperties.candleStyle.upColor"] =
          "#a6d3a5";
        config.overrides["mainSeriesProperties.candleStyle.downColor"] =
          "#ffa5a6";
      }
      require(["@/assets/ts/charting_library/charting_library.min.js"], function(tv) {
        // eslint-disable-next-line no-undef
      const widget = (window.tvWidget = new this.TradingView.widget(config)); //changed alot
        widget.onChartReady(function() {
          widget.chart().executeActionById("drawingToolbarAction");
          widget
            .chart()
            .createStudy("Moving Average", false, false, [5], null, {
              "plot.color": "#EDEDED"
            });
          widget
            .chart()
            .createStudy("Moving Average", false, false, [10], null, {
              "plot.color": "#ffe000"
            });
          widget
            .chart()
            .createStudy("Moving Average", false, false, [30], null, {
              "plot.color": "#ce00ff"
            });
          widget
            .chart()
            .createStudy("Moving Average", false, false, [60], null, {
              "plot.color": "#00adff"
            });
          widget
            .createButton()
            .attr("title", "realtime")
            .on("click", function() {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              widget.chart().setChartType(3);
              widget.setSymbol("", "1");
            })
            .append("<span>Time</span>");

          widget
            .createButton()
            .attr("title", "M1")
            .on("click", function() {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              widget.chart().setChartType(1);
              widget.setSymbol("", "1");
            })
            .append("<span>M1</span>");

          widget
            .createButton()
            .attr("title", "M5")
            .on("click", function() {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              widget.chart().setChartType(1);
              widget.setSymbol("", "5");
            })
            .append("<span>M5</span>")
            .addClass("selected");
          widget
            .createButton()
            .attr("title", "M15")
            .on("click", function() {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              widget.chart().setChartType(1);
              widget.setSymbol("", "15");
            })
            .append("<span>M15</span>");

          widget
            .createButton()
            .attr("title", "M30")
            .on("click", function() {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              widget.chart().setChartType(1);
              widget.setSymbol("", "30");
            })
            .append("<span>M30</span>");

          widget
            .createButton()
            .attr("title", "H1")
            .on("click", function() {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              widget.chart().setChartType(1);
              widget.setSymbol("", "60");
            })
            .append("<span>H1</span>");

          widget
            .createButton()
            .attr("title", "D1")
            .on("click", function() {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              widget.chart().setChartType(1);
              widget.setSymbol("", "1D");
            })
            .append("<span>D1</span>");

          widget
            .createButton()
            .attr("title", "W1")
            .on("click", function() {
              if ($(this as any).hasClass("selected")) return;
              $(this as any) //777 this as any
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              widget.chart().setChartType(1);
              widget.setSymbol("", "1W");
            })
            .append("<span>W1</span>");

          widget
            .createButton()
            .attr("title", "M1")
            .on("click", function() {
              if ($(this as any).hasClass("selected")) return;
              $(this as any)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              widget.chart().setChartType(1);
              widget.setSymbol("", "1M");
            })
            .append("<span>M1</span>");
        });
      });
    };
    function getFavor() {
      //查询自选(收藏)
      ExchangeApi.post(ConfigApi.exchange.favorFind,
        {}
      ).then(response => {
        this.coins.favor = [];
        this.currentCoinIsFavor = false;
        const resp = response.data;
        for (let i = 0; i < resp.length; i++) {
          const coin = this.getCoin(resp[i].symbol);
          if (coin != null) {
            coin.isFavor = true;
            this.coins.favor.push(coin);
          }
          if (this.currentCoin.symbol == resp[i].symbol) {
            this.currentCoinIsFavor = true;
          }
        }
      });
    };

  function getPlate(str="") {
    //买卖盘
    const params = {};
    params["symbol"] = currentCoin.value.symbol;
    MarketApi
      .post(ConfigApi.market.platemini, params)
      .then(response => {
        plate.value.askRows = [];
        plate.value.bidRows = [];
        const resp = response.data;
        if (resp.ask && resp.ask.items) {
          for (let i = 0; i < resp.ask.items.length; i++) {
            if (i == 0) {
              resp.ask.items[i].totalAmount = resp.ask.items[i].amount;
            } else {
              resp.ask.items[i].totalAmount =
                resp.ask.items[i - 1].totalAmount + resp.ask.items[i].amount;
            }
          }
          if (resp.ask.items.length >= plate.value.maxPostion) {
            for (let i = plate.value.maxPostion; i > 0; i--) {
              const ask = resp.ask.items[i - 1];
              ask.direction = "SELL";
              ask.position = i;
              plate.value.askRows.push(ask);
            }
            const rows = plate.value.askRows,
              len = rows.length,
              totle = rows[0].totalAmount;
            plate.value.askTotle = totle;
          } else {
            for (let i = plate.value.maxPostion; i > resp.ask.items.length; i--) {
              const ask = { price: 0, amount: 0, direction: "", position: 0, totalAmount:0};
              ask.direction = "SELL";
              ask.position = i;
              ask.totalAmount = ask.amount;
              plate.value.askRows.push(ask);
            }
            for (let i = resp.ask.items.length; i > 0; i--) {
              const ask = resp.ask.items[i - 1];
              ask.direction = "SELL";
              ask.position = i;
              plate.value.askRows.push(ask);
            }
            const askItemIndex = (resp.ask.items.length - 1) > 0 ? (resp.ask.items.length - 1) : 0;
            const rows = plate.value.askRows,
              len = rows.length,
              totle =
                rows[askItemIndex]
                  .totalAmount;
            plate.value.askTotle = totle;
          }
        }
        if (resp.bid && resp.bid.items) {
          for (let i = 0; i < resp.bid.items.length; i++) {
            if (i == 0)
              resp.bid.items[i].totalAmount = resp.bid.items[i].amount;
            else
              resp.bid.items[i].totalAmount =
                resp.bid.items[i - 1].totalAmount + resp.bid.items[i].amount;
          }
          for (let i = 0; i < resp.bid.items.length; i++) {
            const bid = resp.bid.items[i];
            bid.direction = "BUY";
            bid.position = i + 1;
            plate.value.bidRows.push(bid);
            if (i == plate.value.maxPostion - 1) break;
          }
          if (resp.bid.items.length < plate.value.maxPostion) {
            for (
              let i = resp.bid.items.length;
              i < plate.value.maxPostion;
              i++
            ) {
              const bid = { price: 0, amount: 0, direction: "", position: 0, totalAmount:0 };
              bid.direction = "BUY";
              bid.position = i + 1;
              bid.totalAmount = 0;
              plate.value.bidRows.push(bid);
            }
            const bidItemIndex = (resp.bid.items.length - 1) > 0 ? (resp.bid.items.length - 1) : 0;
            const rows = plate.value.bidRows,
              len = rows.length,
              totle = rows[bidItemIndex].totalAmount;
            plate.value.bidTotle = totle;
          } else {
            const rows = plate.value.bidRows,
              len = rows.length,
              totle = rows[len - 1].totalAmount;
            plate.value.bidTotle = totle;
          }
        }
        if(str!=""){
          selectedPlate.value = str;
        }
      });
  };
  function getPlateFull() {
    //深度图
    const params = {};
    params["symbol"] = currentCoin.value.symbol;
    MarketApi
      .post(ConfigApi.market.platefull, params)
      .then(response => {
        const resp = response.data;
        fullTrade.value = resp;
     //   resp.skin = skin.value; //777 removed
        (this as any).toRefs.depthGraph.draw(resp); //777 changed alot rem
      });
  };
function updatePlate(type, row) {
    //发现该方法未被使用
    if (type == "sell") {
      for (let i = 0; i < plate.value.askRows.length; i++) {
        if (
          row.price > plate.value.askRows[i].price &&
          i != 0 &&
          plate.value.askRows[i].price > 0
        ) {
          plate.value.askRows.splice(i, 0, row);
          plate.value.askRows.shift();
          break;
        } else if (
          i == plate.value.askRows.length - 1 &&
          (row.price < plate.value.askRows[i].price ||
            plate.value.askRows[i].price == 0)
        ) {
          plate.value.askRows.push(row);
          plate.value.askRows.shift();
          break;
        }
      }
    } else if (type == "buy") {
      for (let i = 0; i < plate.value.bidRows.length; i++) {
        if (row.price > plate.value.bidRows[i].price) {
          plate.value.bidRows.splice(i, 0, row);
          plate.value.bidRows.pop();
          break;
        }
      }
    }
  };
function getTrade() {
    const params = {};
    params["symbol"] = currentCoin.value.symbol;
    params["size"] = 20;
    MarketApi
      .post(ConfigApi.market.trade, params)
      .then(response => {
        trade.value.rows = [];
        const resp = response.data;
        for (let i = 0; i < resp.length; i++) {
          trade.value.rows.push(resp[i]);
        }
      });
  };


    function startWebsock(this: any) {
    //777  if (this.stompClient) {
   //777     this.stompClient.ws.close();
    //777  }
      let stompClient = null;

      const socket = new SockJS(host + ':6004' + ConfigApi.market.ws);
      stompClient = Stomp.over(socket);
    //777  this.stompClient = stompClient;
      stompClient.debug = false;
      // this.datafeed = new Datafeeds.WebsockFeed(that.host+'/market',this.currentCoin,stompClient);
      // this.getKline();
      stompClient.connect({}, function(frame) {
        datafeed = new Datafeeds.WebsockFeed(
          host + ":6004/market",
          currentCoin,
          stompClient,
          baseCoinScale
        );
        //777later 
        getKline();
        //订阅价格变化消息
        stompClient.subscribe("/topic/market/thumb", function(msg) {
          const resp = JSON.parse(msg.body);
          const coin = this.getCoin(resp.symbol);
          if (coin != null) {
            // coin.price = resp.close.toFixed(2);
            coin.price = resp.close;
            coin.rose =
              resp.chg > 0
                ? "+" + (resp.chg * 100).toFixed(2) + "%"
                : (resp.chg * 100).toFixed(2) + "%";
            // coin.close = resp.close.toFixed(2);
            // coin.high = resp.high.toFixed(2);
            // coin.low = resp.low.toFixed(2);
            coin.close = resp.close;
            coin.high = resp.high;
            coin.low = resp.low;
            coin.turnover = parseInt(resp.volume);
            coin.volume = resp.volume;
            coin.usdRate = resp.usdRate;
          }
        });
        //订阅实时成交信息
        stompClient.subscribe(
          "/topic/market/trade/" + currentCoin.value.symbol,
          function(msg) {
            const resp = JSON.parse(msg.body);
            if (resp.length > 0) {
              for (let i = 0; i < resp.length; i++) {
                trade.value.rows.unshift(resp[i]);
              }
            }
            if (trade.value.rows.length > 30) {
              trade.value.rows = trade.value.rows.slice(0, 30);
            }
          }
        );
        if (isLogin.value) {
          //订阅委托取消信息
          stompClient.subscribe(
            "/topic/market/order-canceled/" +
            currentCoin.value.symbol +
            "/" +
            "1", //777  member.id
            function(msg) {
              const resp = JSON.parse(msg.body);
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              refreshAccount();
            }
          );
          //订阅委托交易完成
          stompClient.subscribe(
            "/topic/market/order-completed/" +
            currentCoin.value.symbol +
            "/" +
            "1", //777  member.id
            function(msg) {
              const resp = JSON.parse(msg.body);
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              refreshAccount();
            }
          );
          //订阅委托部分交易
          stompClient.subscribe(
            "/topic/market/order-trade/" +
            currentCoin.value.symbol +
            "/" +
            "1", //777  member.id
            function(msg) {
              const resp = JSON.parse(msg.body);
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              refreshAccount();
            }
          );
        }

        //订阅盘口消息
        stompClient.subscribe(
          "/topic/market/trade-plate/" + currentCoin.value.symbol,
          function(msg) {
            const resp = JSON.parse(msg.body);
            if (resp.direction == "SELL") {
              const asks = resp.items;
              this.plate.askRows = [];
              let totle = 0;
              for (let i = this.plate.maxPostion - 1; i >= 0; i--) {
                let ask: any = {};
                if (i < asks.length) {
                  ask = asks[i];
                } else {
                  ask["price"] = 0;
                  ask["amount"] = 0;
                }
                ask.direction = "SELL";
                ask.position = i + 1;
                this.plate.askRows.push(ask);
              }
              for (let i = this.plate.askRows.length - 1; i >= 0; i--) {
                if (
                  i == this.plate.askRows.length - 1 ||
                  this.plate.askRows[i].price == 0
                ) {
                  this.plate.askRows[i].totalAmount =
                    this.plate.askRows[i].amount;
                } else {
                  this.plate.askRows[i].totalAmount =
                    this.plate.askRows[i + 1].totalAmount +
                    this.plate.askRows[i].amount;
                }
                totle += this.plate.askRows[i].amount;
              }
              this.plate.askTotle = totle;
            } else {
              const bids = resp.items;
              this.plate.bidRows = [];
              let totle = 0;
              for (let i = 0; i < this.plate.maxPostion; i++) {
                let bid: any = {};
                if (i < bids.length) {
                  bid = bids[i];
                } else {
                  bid["price"] = 0;
                  bid["amount"] = 0;
                }
                bid.direction = "BUY";
                bid.position = i + 1;
                this.plate.bidRows.push(bid);
              }
              for (let i = 0; i < this.plate.bidRows.length; i++) {
                if (i == 0 || this.plate.bidRows[i].amount == 0) {
                  this.plate.bidRows[i].totalAmount =
                    this.plate.bidRows[i].amount;
                } else {
                  this.plate.bidRows[i].totalAmount =
                    this.plate.bidRows[i - 1].totalAmount +
                    this.plate.bidRows[i].amount;
                }
                totle += this.plate.bidRows[i].amount;
              }
              this.plate.bidTotle = totle;
            }
            if (this.currentImgTable == "s") {
              this.getPlateFull();
            }
          }
        );
      });
    };
    function changeBaseCion(str) {
      basecion.value = str;
      if(str == "usdt"){
        dataIndex.value = coins.USDT;
        dataIndex2.value = coins.USDT2;
      }else if(str == "btc"){
        dataIndex.value = coins.BTC;
        dataIndex2.value = coins.BTC2;
      }else if(str == "eth"){
        dataIndex.value = coins.ETH;
        dataIndex2.value = coins.ETH2;
      }else if(str == "favor"){
        dataIndex.value = coins.favor;
      }
    };
    function getSymbol() {
      MarketApi.post(ConfigApi.market.thumb).then(response => {
        const resp = response.data;
        //先清空已有数据
        console.log(resp);
        for (let i = 0; i < resp.length; i++) {
          const coin = resp[i];
          coin.base = resp[i].symbol.split("/")[1];
          coins[coin.base] = [];
          coins[coin.base + "2"] = [];
          coins._map = [];
          coins.favor = [];
        }
        for (let i = 0; i < resp.length; i++) {
          const coin = resp[i];
          coin.price = resp[i].close = resp[i].close.toFixed(
            baseCoinScale.value
          );
          coin.rose =
            resp[i].chg > 0
              ? "+" + (resp[i].chg * 100).toFixed(2) + "%"
              : (resp[i].chg * 100).toFixed(2) + "%";
          coin.coin = resp[i].symbol.split("/")[0];
          coin.base = resp[i].symbol.split("/")[1];
          coin.href = (coin.coin + "_" + coin.base).toLowerCase();
          coin.isFavor = false;
          coins._map[coin.symbol] = coin;
          if (coin.zone == 0) {
            coins[coin.base].push(coin);
          } else {
            coins[coin.base + "2"].push(coin);
          }
          if (coin.symbol == currentCoin.value.symbol) {
            currentCoin.value = coin;
            form.value.buy.limitPrice = form.value.sell.limitPrice = coin.price;
          }
        }
        if (isLogin.value) {
          getFavor();
          console.log("islogin");
        }
        require(["../assets/ts/exchange.ts"], function(e) {
          e.clickScTab();
        });
        startWebsock();
        changeBaseCion(basecion);
      });
    }
    function getCNYRate() {
      MarketApi
        .post("/market/exchange-rate/usd-cny")
        .then(response => {
          const resp = response.data;
          CNYRate.value = resp.data;
        });
    };
    function getCoinInfo() {
      // const params = new URLSearchParams();
      // params.append('unit', currentCoin.coin);
      MarketApi.post(ConfigApi.market.coinInfo,
        "unit=" + currentCoin.value.coin
      ).then(response => {
        const resp = response.data;
        if (resp != null) {
          coinInfo.value = resp;
          console.log(resp);
        }
      });
    };
    function getSymbolScale() {
      //获取精度
      MarketApi
        .post(ConfigApi.market.symbolInfo,
          "symbol=" + currentCoin.value.symbol
        )
        .then(response => {
          const resp = response.data;
          if (resp != null) {
            currentCoin.value.coinScale = resp.coinScale;
            currentCoin.value.baseCoinScale = resp.baseCoinScale;

            baseCoinScale.value = resp.baseCoinScale;
            coinScale.value = resp.coinScale;
            symbolFee.value = resp.fee;

            enableMarketBuy.value = resp.enableMarketBuy;
            enableMarketSell.value = resp.enableMarketSell;

            exchangeable.value = resp.exchangeable;

            publishType.value = resp.publishType;
            startTime.value = resp.startTime;
            endTime.value = resp.endTime;
            clearTime.value = resp.clearTime;
            currentTime.value = parseInt((resp.currentTime / 1000).toString()); //777 added .tostring()
            publishAmount.value = resp.publishAmount;
            publishPrice.value = resp.publishPrice;

            const temCurT = moment(resp.currentTime).format("YYYY-MM-DD HH:mm:ss");
            if(temCurT < clearTime.value) {
              if(publishType.value == "QIANGGOU" || publishType.value == "FENTAN"){
                showPublish.value = true;
                showCountDown.value = true;
              }else{
                showPublish.value = false;
                showCountDown.value = false;
              }
            }else{
              showPublish.value = false;
              showCountDown.value = false;
            }

            // 获取币种信息

          }
        });
    };
    function getWallet() {
      UcenterApi
        .post(ConfigApi.uc.wallet + currentCoin.value.base, {})
        .then(response => {
          const resp = response.data;
          wallet.value.base = resp.data.balance || "";
        });
      UcenterApi
        .post(ConfigApi.uc.wallet + currentCoin.value.coin, {})
        .then(response => {
          const resp = response.data;
          wallet.value.coin = resp.data.balance;
        });
    };
    function getCurrentOrder() {
      //查询当前委托
      const params = {};
      params["pageNo"] = 0;
      params["pageSize"] = 100;
      params["symbol"] = this.currentCoin.symbol;
      this.currentOrder.rows = [];
     // const that = this; //777 remocve
      ExchangeApi
        .post(ConfigApi.exchange.current, params)
        .then(response => {
          const resp = response.data;
          if (resp.content.length > 0) {
            currentOrder.value.rows = resp.content;
            currentOrder.value.rows.forEach((row, index) => {
              row.skin = skin.value;
              row.price =
                row.type == "MARKET_PRICE"
                  ? t("exchange.marketprice")
                  : row.price;
            });
          }
        });
    };
    function getHistoryOrder(pageNo) {
      //查询历史委托
      if (pageNo == undefined) {
        pageNo = this.historyOrder.page;
      } else {
        pageNo = pageNo - 1;
      }
      historyOrder.value.rows = []; //清空数据
      const params = {};
      params["pageNo"] = pageNo;
      params["pageSize"] = this.historyOrder.pageSize;
      params["symbol"] = this.currentCoin.symbol;
      // const that = this; //777 remocve
      ExchangeApi
        .post(ConfigApi.exchange.history, params)
        .then(response => {
          const resp = response.data;
          const rows = [];
          if (resp.content.length > 0) {
            this.historyOrder.total = resp.totalElements;
            this.historyOrder.page = resp.number;
            for (let i = 0; i < resp.content.length; i++) {
              const row = resp.content[i];
              if (row) {
                row.skin = skin.value;
                row.price =
                  row.type == "MARKET_PRICE"
                    ? t("exchange.marketprice")
                    : row.price;
                // this.historyOrder.rows.push(row);
                rows.push(row);
              }
            }
            historyOrder.value.rows = rows;
          }
        });
    };
    function refreshAccount(){
      getCurrentOrder();
      getHistoryOrder(0);///777 added 0
      getWallet();
    }
    onMounted(() => {
      // set the tab from previous
      setCurrentPageTitle("Exchange");
      let params = defaultPath.toString();
      if (params == undefined) {
        //this.$router.push("/exchange/" + defaultPath);
        params = defaultPath.toString();
      }
      console.log('params');
      console.log(params);
      const coin = params
        .toString()
        .toUpperCase()
        .split("_")[0];
      const base = params
        .toString()
        .toUpperCase()
        .split("_")[1];
      currentCoin.value.symbol = coin + "/" + base;
      currentCoin.value.coin = coin;
      currentCoin.value.base = base;
      console.log(coin);
      console.log($filters.getTimezone4K());
      getCNYRate();
      getSymbolScale();
      getCoinInfo();
      getSymbol();
      getPlate(); //买卖盘
      getPlateFull();
      getTrade();

      if (isLogin.value) {
        getWallet(); //账户资产信息
        getCurrentOrder(); //当前委托
        getHistoryOrder(0); //历史委托 ///777 added 0
      }
      sliderBuyLimitPercent.value = 0;
      sliderSellLimitPercent.value = 0;
      sliderBuyMarketPercent.value = 0;
    });

    /**
     * Reset config
     * @param event
     */
    const reset = event => {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem("config");
      window.location.reload();
    };

    /**
     * Set active tab when the tab get clicked
     * @param event
     */
    const setActiveTab = event => {
      tabIndex.value = parseInt(event.target.getAttribute("data-tab-index"));
      // keep active tab
      localStorage.setItem("builderTab", tabIndex.value.toString());
    };

    /**
     * Submit form
     * @param event
     */
    const submit = event => {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem("config", JSON.stringify(config.value));
      window.location.reload();
    };

    return {
      tabIndex,
      config,
      reset,
      setActiveTab,
      submit,
      themeName,
      defaultPath,
      currentCoin,
      coinInfo,
      enableMarketBuy,
      enableMarketSell,
      getCoinInfo,
      isLogin,
      getSymbol,
      getCoin,
      DepthGraph
    };
  }
});
</script>
