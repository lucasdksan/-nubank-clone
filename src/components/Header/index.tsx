import React from 'react';
import { View, Image, Text } from 'react-native';
import Logo from '../../assets/Nubank_Logo.png';
import  Icon  from '@expo/vector-icons/build/MaterialIcons';
import styles from './styles';

const Header = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={Logo}/>
                <Text style={styles.title}>Lucas da Silva</Text>
            </View>
            <Icon name='keyboard-arrow-down' size={20} color='#FFF'/>
        </View>
    );
}

export default Header;