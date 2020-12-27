import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div class="meetup-agenda">
      <div class="meetup-agenda__item"
        v-for="agendaData in agenda"
        :key="agendaData.id"
      >
        <MeetupAgendaItem
          :agendaItem="agendaData"
        />
      </div>
    </div>`,

  // components
  components: {
    MeetupAgendaItem: MeetupAgendaItem
  },

  // props
  props: {
    agenda: {type: Array, required: true}
  },

};
