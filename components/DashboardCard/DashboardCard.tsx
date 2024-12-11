import { DashboardDetailResponse } from '@/api/apiTypes';
import React from 'react';
import { Block } from '../Block/Block';
import { Typography } from '../Typography/Typography';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  data: DashboardDetailResponse;
  onPress?: () => void;
}

function DashboardCard(props: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Typography fontSize={14} lineHeight={24} color='#CACDD0'>
          April 4, 2017 – 2:17 PM
        </Typography>
        <Block height={8} />
        <Typography fontSize={22} lineHeight={48} color='#323C46'>
          {props.data.title}
        </Typography>
        <Typography fontSize={14} lineHeight={24} color='#7D7878' top={-10}>
          {props.data.owner.firstName} {props.data.owner.lastName}
        </Typography>
        <Block height={32} />
        <Text style={styles.description}>{props.data.description}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.participants}>9 of 31</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>EDIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    minHeight: 296,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
    marginBottom: 16,
  },
  content: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 16,
    paddingRight: 53,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  participants: {
    fontSize: 14,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  editText: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export { DashboardCard };
