<template>
  <q-page style="background-color: #222222; margin-bottom: 55px;">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="community">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="news">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel style="background-color: #222222;" name="main">
<div class="row">
<h5 style="font-size: 15px;color: #ffffffad;text-align: start;font-family: inherit;">عرض الكل</h5>
<h5 style="font-size: 19px;color: white;font-weight: bold;text-align: right;width: -webkit-fill-available;position: absolute;margin-right: 33px;">أخر المضاف</h5>
</div>
            <q-card>
    <q-carousel style="height: 180px;" swipeable animated v-model="slide" :autoplay="autoplay" ref="carousel" infinite>
      <q-carousel-slide style="padding: 0px; box-shadow: inset 0px -60px 10px -10px #00000048;" v-for="latest in newan" v-bind:key="latest.id" :name="latest.ids" v-bind:img-src="latest.image">
        <div class="your-div" style="weight: 100%">
          <span class="your-div-span">{{ latest.epName }}</span>
        </div>
      </q-carousel-slide>
    </q-carousel>
            </q-card>
<div class="row" style="place-content: center;"><div style="height: 1px;width: 25%;background-color: #fffffff0;align-self: center;margin-right: 10px;"></div>
<h5 style="font-size: 19px; color: white; font-weight: bold; text-align: center;">التصنيفات</h5>
<div style="height: 1px;width: 25%;background-color: #fffffff0;align-self: center;margin-left: 10px;"></div></div>
    <q-scroll-area horizontal style="background-color: #00000000 height: 210px; width: 100%;" class="rounded-borders" >
      <div>
      <div class="row no-wrap">
        <div v-for="generes in genere" v-bind:key="generes.name" style="height: 40px">
          <q-card style="height: 35px; min-width: 65px; margin-left: 2px; margin-right: 2px; border-radius: 20px !important;">
          <h6 style="text-align: center;font-size: larger;" >{{ generes.name }}</h6>
          </q-card>
        </div>
      </div>
      </div>
    </q-scroll-area>
<div style="margin-top: 3px;">
<h5 style="font-size: 19px;color: white;font-weight: bold; text-align: right;">مختارة لكم</h5>
</div>
            <q-card>
    <q-carousel style="height: 180px;" swipeable animated v-model="slide2" :autoplay="autoplay" ref="carousel" infinite>
      <q-carousel-slide style="padding: 0px; box-shadow: inset 0px -60px 10px -10px #00000048;" v-for="foryous in foryou" v-bind:key="foryous.id" :name="foryous.ids" v-bind:img-src="foryous.image">
        <div class="your-div" style="weight: 100%">
          <span class="your-div-span">{{ foryous.name }}</span>
        </div>
      </q-carousel-slide>
    </q-carousel>
            </q-card>
<div class="row" style="place-content: center;"><div style="height: 1px;width: 25%;background-color: #fffffff0;align-self: center;margin-right: 10px;"></div>
<h5 style="font-size: 19px; color: white; font-weight: bold; text-align: center;">المواسم</h5>
<div style="height: 1px;width: 25%;background-color: #fffffff0;align-self: center;margin-left: 10px;"></div>
    <q-scroll-area horizontal style="background-color: #00000000 height: 210px; width: 100%;" class="rounded-borders" >
      <div>
      <div class="row no-wrap">
        <div v-for="seasons in season" v-bind:key="seasons.name" style="height: 40px">
          <q-card style="height: 35px; min-width: 80px; margin-left: 2px; margin-right: 2px; border-radius: 20px !important;">
          <h6 style="text-align: center;font-size: small;" >{{ seasons.name }}</h6>
          </q-card>
        </div>
      </div>
      </div>
    </q-scroll-area>
</div>
<div class="row">
<h5 style="font-size: 15px;color: #ffffffad;text-align: start;font-family: inherit;">عرض الكل</h5>
<h5 style="font-size: 19px;color: white;font-weight: bold;text-align: right;width: -webkit-fill-available;position: absolute;margin-right: 33px;">قائمة ألانمي</h5>
</div>
    <q-scroll-area horizontal style="background-color: #00000000 height: 210px; width: 100%;" class="rounded-borders" >
      <div>
      <div class="row no-wrap">
        <div v-for="animelists in animelist" v-bind:key="animelists.id" style="my-card">
    <q-card class="my-cardt">
      <img style="height: 150px; object-fit: cover;" :src="animelists.image">
        <div style="color: #fff; font-size: small; background-color: #00000087; margin-bottom: -1px;" class="absolute-bottom text-subtitle2 text-center">
          {{ animelists.title }}
        </div>
    </q-card>
        </div>
      </div>
      </div>
    </q-scroll-area>
<div style="weight: 100%; text-align; center;">
<h5 style="font-size: 19px;color: white;font-weight: bold;text-align: right;width: -webkit-fill-available;">شوهد مؤخرا</h5>
</div>
    <q-scroll-area horizontal style="background-color: #00000000 height: 210px; width: 100%;" class="rounded-borders" >
      <div>
      <div class="row no-wrap">
        <div v-for="watchings in watching" v-bind:key="watchings.id" style="my-card">
    <q-card class="my-cardt">
      <img style="height: 150px; object-fit: cover;" :src="watchings.image">
        <div style="color: #fff; font-size: small; background-color: #00000087; margin-bottom: -1px;" class="absolute-bottom text-subtitle2 text-center">
          {{ watchings.title }}
        </div>
    </q-card>
        </div>
      </div>
      </div>
    </q-scroll-area>
          </q-tab-panel>
          <q-tab-panel name="myanime">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="settings">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>

        <q-separator />

        <q-tabs
          v-model="tab"
          dense
          class="fixed-bottom"
          style="background-color: #222222 !important; color: white;"
          align="justify"
          narrow-indicator
        >
        <q-tab name="community" icon="forum" label="المجتمع" />
        <q-tab name="news" icon="list_alt" label="الاخبار" />
        <q-tab name="main" icon="live_tv" label="المشاهدة" />
        <q-tab name="myanime" icon="favorite_border" label="أنمياتي" />
        <q-tab name="settings" icon="settings" label="الاعدادات" />
        </q-tabs>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './toolbar'
export default {
  mixins: [UiMixin, PageMixin],
  components: {

  },
  data () {
    return {
      slide: 1,
      slide2: 1,
      autoplay: false,
      count: 0,
      newan: [

      ],
      foryou: [

      ],
      animelist: [

      ],
      watching: [

      ],
      genere: [

      ],
      season: [

      ],
      dialog: false,
      maximizedToggle: true,
      tab: 'main',
      itemsinfo: {

      }
    }
  },
  beforeDestroy () {
  },
  methods: {
    getPic (index) {
      return this.items[index].image
    },
    loadData () {
      this.$q.loading.show({
        message: '<span>يرجى الأنتظار</span>'
      })
      this.$axios
        .get('https://snoanime.com/data/newindex.php/')
        .then(response => {
          this.$q.loading.hide()
          this.newan = response.data.latest
          this.foryou = response.data.foryou
          this.genere = response.data.genere
          this.season = response.data.season
          this.watching = response.data.top
          this.animelist = response.data.lists
          this.slide2 = response.data.foryou[0].ids
          this.slide = response.data.latest[0].ids
        })
        .catch(() => {
          this.$q.loading.hide()
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'توجد مشكلة في الشبكة حاول أعادة الفتح',
            icon: 'report_problem'
          })
        })
    },
    loadinfo: function (id, name, image) {
      this.$q.loading.show({
        message: '<span>يرجى الأنتظار</span>'
      })
      this.$axios
        .get('https://snoanime.com/ns/api/new/infotest.php/?url=' + id)
        .then(response => {
          this.$q.loading.hide()
          var self = this
          self.dialog = true
          self.itemsinfo = response.data
          self.name = name
          self.image = image
          self.ages = self.itemsinfo.main.age
          self.rank = self.itemsinfo.main.rank
          self.genres = self.itemsinfo.main.genres
          self.story = self.itemsinfo.main.story
          self.ep = self.itemsinfo.ep
          self.other = self.itemsinfo.other
          self.commants = self.itemsinfo.commants
        })
        .catch(() => {
          this.$q.loading.hide()
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'توجد مشكلة في الشبكة حاول أعادة الفتح',
            icon: 'report_problem'
          })
        })
    }
  },
  created () {
    this.setToolbar(Toolbar)
    this.loadData()
  }
}
</script>
<style lang="sass" scoped>
.your-div
    position: relative;
    height: 100%;
.your-div span
   position: absolute;
   bottom: 0;
   margin-left: 8px;
   margin-bottom: 15px;
   color: #fff;
.my-card
  width: 100%
  max-width: 250px
.my-cardt
  height: 150px;
  width: 733px;
  margin: 4px;
  padding: 0.6px;
  max-width: 115px!important;
  background: transparent;
.cardtext
  background: rgba(0, 0, 0, 0.61);
  padding: 8px;
  font-size: 15px !important;
  font: message-box;
</style>
