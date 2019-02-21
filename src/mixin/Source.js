export default {
  // inject: ['setSource'],

  // data: {
  //   source: null,
  // },

  mounted () {
    // console.log("mounting source")
    this.$parent.setSource(this.source)
  },
}