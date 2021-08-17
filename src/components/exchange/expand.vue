<style scoped>
    .expand-row{
        margin-bottom: 8px;
    }
    td.ivu-table-expanded-cell{
        padding: 10px 50px;
    }
    .expand-row .ivu-col{
        line-height: 20px;
    }
</style>
<template>
    <div>
        <Row class="expand-row" :class="skin">
            <Col span="8">
                <span class="expand-key">{{t('exchange.expand.time')}} </span>
            </Col>
            <Col span="4">
                <span class="expand-key">{{t('exchange.expand.price')}} </span>
            </Col>
            <Col span="4">
                <span class="expand-key">{{t('exchange.expand.amount')}} </span>
            </Col>
            <Col span="4">
              <span class="expand-key">成交额</span>
            </Col>
            <Col span="4">
                <span class="expand-key">{{t('exchange.expand.fee')}}</span>
            </Col>
        </Row>
<!--      removed index-->
       <Row v-for="row in rows"   v-bind:key="row"> ///777 changed alot
            <Col span="8" >
                <span class="expand-value">{{ dateFormat(row.time) }}</span>
            </Col>
            <Col span="4">
                <span class="expand-value">{{ $filters.toFloor(row.price)}}</span>
            </Col>
            <Col span="4">
                <span class="expand-value">{{ $filters.toFloor(row.amount)}}</span>
            </Col>
            <Col span="4">
            <span class="expand-value">{{ $filters.toFloor(row.turnover)}}</span>
            </Col>
            <Col span="4">
                <span class="expand-value">{{ $filters.toFloor(row.fee)}}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            skin:String,
            rows: Array
        },
        created(){
            // console.log(this.skin)
        },
       computed:{
         dateFormat(){
          return (v)=>{
            return v.dateFormat()
          }
        }
      }
    };
</script>
