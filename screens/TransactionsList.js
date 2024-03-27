import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TransactionsContext } from '../context/TransactionsContext'; 

const TransactionsList = ({ navigation }) => {
  const { transactions, setTransactions } = useContext(TransactionsContext); // Accessing transactions data from context

  useEffect(() => {
   
    fetchTransactions(); // Calling the function to fetch transactions
  }, []);

  const fetchTransactions = () => {
    
    //  mock transactions
    const transactionNames = ['Starbucks', 'Tim Hortons', 'Mac Store', 'No Frills', 'Food Basics', 'Walmart', 'Hilfiger', 'A&W', 'PsP', 'McDonalds'];
    const newTransactions = [];
  
    for (let i = 0; i < transactionNames.length; i++) {
      newTransactions.push({
        id: i + 1, // Adding 1 to index to start ids from 1
        name: transactionNames[i],
        amount: Math.floor(Math.random() * 1000) + 1,
      });
    }
    setTransactions(newTransactions); // Updating transactions data in context
  };


  const navigateToDetail = (transaction) => {
    navigation.navigate('Transaction Details', { transaction });
  };

  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetail(item)} style={styles.transactionItem}>
      <Text style={styles.transactionName}>{item.name}</Text>
      <Text style={styles.transactionAmount}>${item.amount}</Text>
      <Icon name="chevron-right" size={20} color="#000" style={styles.arrowIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.transactionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  transactionList: {
    alignItems: 'stretch',
    backgroundColor: 'pink'
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
    flex: 1, 
  },
  transactionAmount: {
    fontSize: 16,
    color: '#000',
    marginRight: 10,
  },
  arrowIcon: {},
});

export default TransactionsList;
