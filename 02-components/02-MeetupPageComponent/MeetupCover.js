export const MeetupCover = {
  template: `
  <div
    class="meetup-cover"
    :style="styleUrl"
  >
    <h1 class="meetup-cover__title">{{title}}</h1>
  </div>`,

  // props
  props: {
    link: {type: String},
    title: {type: String}
  },

  computed: {
    styleUrl(){
      if(!this.link) return ''
      return {'--bg-url': `url(${this.link})`}
    }
  },
};
