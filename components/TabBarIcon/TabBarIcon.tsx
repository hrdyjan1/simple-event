import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

function TabBarIcon(props: TabBarIconProps) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export { TabBarIcon };
