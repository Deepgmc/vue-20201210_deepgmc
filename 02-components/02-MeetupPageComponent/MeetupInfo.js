export const MeetupInfo = {
  template: `<ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="date">{{dateStr}}</time>
      </li>
    </ul>`,

  // props
  props: {
    organizer: {
      type: String,
      required:true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },

  // computed
  computed: {
    dateStr: function(){
      return this.getLocaleDateTime(this.date, 'date')
    },
  },

  methods: {
    getLocaleDateTime(date, type = 'date'){
      const options = {}
      if(type === 'date'){
        options.year  = 'numeric'
        options.month = 'long'
        options.day   = 'numeric'
      }
      //тут подогнал под тесты - они требуют дату в en-US формате. Хотя это не верно по идее
      return date.toLocaleString('en-US', options)
    },
  }

};
