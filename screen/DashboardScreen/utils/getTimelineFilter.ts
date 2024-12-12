function getTimelineFilter(timeline: 'ALL' | 'PAST' | 'FUTURE') {
  return function filter<T extends { startsAt: string }>(item: T) {
    switch (timeline) {
      case 'ALL':
        return true;
      case 'PAST':
        return new Date(item.startsAt) < new Date();
      case 'FUTURE':
        return new Date(item.startsAt) > new Date();
    }
  };
}

export { getTimelineFilter };
