import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `
  <div>
    <div v-if="loading">Загрузка...</div>
    <MeetupView
      v-else
      :meetup="meetupData"
    ></MeetupView>
  </div>`,

  // components
  components: {
    MeetupView: MeetupView
  },

  // data
  data: {
    meetupData: null,
    loading: true
  },

  // mounted
  async mounted() {
    this.meetupData = await fetchMeetup(MEETUP_ID)
    this.loading = false
  },
};
