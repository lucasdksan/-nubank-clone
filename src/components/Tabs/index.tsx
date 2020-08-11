import React from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import  Icon  from '@expo/vector-icons/build/MaterialIcons';
import styles from './styles';

interface Props{
    translateY: Animated.Value;
}

const Tabs: React.FC = () => {
  return (
        <View style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.contentContainerStyles}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.tabItem}>
                    <Icon name='person-add' size={24} color='#FFF'/>
                    <Text style={styles.tabText}>Indicar Amigos</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name='chat-bubble-outline' size={24} color='#FFF'/>
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name='arrow-downward' size={24} color='#FFF'/>
                    <Text style={styles.tabText}>Depositar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name='arrow-upward' size={24} color='#FFF'/>
                    <Text style={styles.tabText}>Transferir</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name='lock' size={24} color='#FFF'/>
                    <Text style={styles.tabText}>Bloquear cartão</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default Tabs;