type EventFilter = 'ALL' | 'PAST' | 'FUTURE';

function toggleTimelineReducer(state: EventFilter): EventFilter {
  switch (state) {
    case 'ALL':
      return 'PAST';
    case 'PAST':
      return 'FUTURE';
    case 'FUTURE':
      return 'ALL';
  }
}

export { toggleTimelineReducer };
