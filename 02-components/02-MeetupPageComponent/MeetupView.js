import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';
import { getMeetupCoverLink } from './data.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div>
      <MeetupCover
        :link="coverLink"
        :title="meetup.title"
      />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description" />

            <template v-if="meetup.agenda.length">
              <h3>Программа</h3>
              <MeetupAgenda :agenda="meetup.agenda" />
            </template>

          </div>
          <div class="meetup__aside">
            <MeetupInfo
              v-if="meetup.date > 0"
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="dateNotNum"
            />
          </div>
        </div>
      </div>
    </div>`,

  // props
  props: {
    meetup: {type: Object, required:true}
  },

  // components
  components: {
    MeetupDescription: MeetupDescription,
    MeetupCover      : MeetupCover,
    MeetupAgenda     : MeetupAgenda,
    MeetupInfo       : MeetupInfo
  },

  computed: {
    coverLink: function() {
      return this.meetup.imageId ? getMeetupCoverLink(this.meetup) : null
    },
    dateNotNum: function() {
      //подогнал под тесты, хотя не согласен: я бы продолжал передавать Number Timestamp
      return new Date(this.date)
    }
  }

};
