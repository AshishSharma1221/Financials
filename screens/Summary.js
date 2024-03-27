import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';

const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const highestExpense = transactions.reduce((max, transaction) => (transaction.amount > max.amount ? transaction : max), { amount: -Infinity });
  const lowestExpense = transactions.reduce((min, transaction) => (transaction.amount < min.amount ? transaction : min), { amount: Infinity });

  const summaryData = [
    { label: 'Total number of transactions:', value: totalTransactions },
    { label: 'Total amount:', value: `$${totalAmount}` },
    { label: 'Highest Expense:', value: `${highestExpense.name} ($${highestExpense.amount})` },
    { label: 'Lowest Expense:', value: `${lowestExpense.name} ($${lowestExpense.amount})` },
  ];

  const renderSummaryItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.value}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={summaryData}
        renderItem={renderSummaryItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.summaryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  summaryList: {
    flexGrow: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default Summary;
