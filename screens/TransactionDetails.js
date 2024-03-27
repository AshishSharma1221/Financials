// TransactionDetails.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetails = ({ route }) => {
  const { transaction } = route.params;

  // Mock transaction date
  const transactionDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Transaction Name:</Text>
        <Text style={styles.value}>{transaction.name}</Text>
        
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>${transaction.amount}</Text>
        
        <Text style={styles.label}>Transaction Date:</Text>
        <Text style={styles.value}>{transactionDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
});

export default TransactionDetails;
