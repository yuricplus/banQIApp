/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import Header from './src/shared/components/Header';
import getBalanceAndTransactions from './src/service';

const App = () => {
  const [balance, setBalance] = useState({
    transactions: [],
  });

  const getBalance = async () => {
    let data = await getBalanceAndTransactions();
    setBalance(data);
  };

  useEffect(() => {
    getBalance();
  });

  function currencyFormat(num) {
    return (
      'R$' +
      num
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        .replace('.', ',')
    );
  }
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#f8f8f8'}}>
        <ScrollView>
          <View>
            <Header />
            <View style={styles.balance}>
              <Text style={styles.textBalance}>Meu Saldo:</Text>
              <Text style={styles.balanceValue}>
                {currencyFormat(parseInt(balance.balance))}
              </Text>
            </View>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.flex}>
            <View style={styles.boxList}>
              <Image source={require('./assets/pix.png')} />
              <Text style={styles.boxListText}>PIX</Text>
            </View>
            <View style={styles.boxList}>
              <Image source={require('./assets/arrow-up.png')} />
              <Text style={styles.boxListText}>Depositar</Text>
            </View>
            <View style={styles.boxList}>
              <Image source={require('./assets/arrow-bottom.png')} />
              <Text style={styles.boxListText}>Sacar</Text>
            </View>
          </View>

          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.containerBox}>
            <Image
              source={require('./assets/card-wallet.png')}
              style={{resizeMode: 'contain', marginRight: 10}}
            />
            <View>
              <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                Empréstimo pessoal
              </Text>
              <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>
                Você tem R$ 500 pré-aprovados!
              </Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView style={styles.listTransactions}>
          <View>
            <Text>Histórico de transações</Text>
          </View>
          <View style={{paddingTop: 20}}>
            {balance.transactions.map((item) => {
              return (
                <View key={item.id} style={styles.boxTransaction}>
                  <Text style={styles.textTransactions}>
                    {item.description}
                  </Text>
                  {item.amount > 0 ? (
                    <>
                      <Text style={styles.valuePositive}>
                        + {currencyFormat(parseInt(item.amount))}
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text>{currencyFormat(parseInt(item.amount))}</Text>
                    </>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
  },
  balance: {
    flex: 1,
    alignItems: 'center',
  },
  textBalance: {
    fontSize: 20,
  },
  balanceValue: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  containerBox: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 4,
    height: 62,
    flex: 1,
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  listTransactions: {
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 20,
  },
  textTransactions: {
    fontSize: 15,
  },
  valuePositive: {
    color: '#14C46F',
  },
  boxTransaction: {
    padding: 7,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  boxList: {
    backgroundColor: '#fff',
    width: 120,
    height: 104,
    margin: 5,
    padding: 12,
    borderRadius: 4,
    position: 'relative',
  },
  boxListText: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 12,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'red',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
