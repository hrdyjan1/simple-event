import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import { TabBarIcon } from '@/components/TabBarIcon/TabBarIcon';
import { Icon } from '@/components/Icon/Icon';
import { useDispatch } from 'react-redux';
import { resetAuth } from '@/store/slices/auth';

function TabLayout() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
          headerRight: () => (
            <Pressable onPress={() => dispatch(resetAuth())}>
              {({ pressed }) => <Icon name='sign-out' isPressed={pressed} />}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => <Icon name='info-circle' isPressed={pressed} />}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
