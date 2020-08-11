import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header/index';
import Tabs from '../../components/Tabs/index';
import CardContainer from '../../components/CardContainer/index';
import styles from './styles';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.containerCard}>
          <CardContainer/>
        </View>
        <Tabs/>
    </View>
  );
}

export default Main;