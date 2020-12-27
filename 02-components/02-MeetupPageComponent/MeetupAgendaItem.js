import { agendaItemTitles, agendaItemIcons } from './data.js';
export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaIcon" />
      </div>
      <div class="meetup-agenda__item-col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{agendaTitle}}</h5>
        <p v-if="agendaItem.type === 'talk'">
          <span>{{agendaItem.speaker}}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{agendaItem.language}}</span>
        </p>
        <p>{{agendaItem.description}}</p>
      </div>
    </div>`,

  data: function() {
    return {
      agendaIcons: agendaItemIcons,
      agendaTitles: agendaItemTitles,
    }
  },

  // props
  props: {
    agendaItem: {type: Object, required: true},
  },

  computed: {
    agendaIcon(){
      if(!this.agendaIcons) return ''
      return `/assets/icons/icon-${this.agendaIcons[this.agendaItem.type]}.svg`
    },
    agendaTitle(){
      return this.agendaItem.title ? this.agendaItem.title : this.agendaTitles[this.agendaItem.type]
    }
  },

};
