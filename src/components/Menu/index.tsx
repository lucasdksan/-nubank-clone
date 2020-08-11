import React from 'react';
import { View, ScrollView, Text, Animated } from 'react-native';
import  Icon  from '@expo/vector-icons/build/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
//import QRcode from 'react-native-qrcode';
import styles from './styles';

interface Props{
    translateY: Animated.Value;
}

const Menu: React.FC<Props> = ({translateY}) => {
    return (
        <Animated.ScrollView 
            contentContainerStyle={{alignItems:'center'}} 
            style={
                [
                    {
                        opacity: translateY.interpolate(
                            {
                                inputRange:[0, 150],
                                outputRange:[0, 1]
                            }
                        )
                    },
                    styles.container
                ]
            }
        >
            <View style={styles.code}>
                {/*<QRcode
                    value='https://rocketseat.com.br'
                    size={80}
                    fgColor='#FFF'
                    bgColor='#8B10AE'
                />*/}
            </View>
            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Icon name='help-outline' size={20} color='#FFF'/>
                    <Text style={styles.navText}>Me ajuda</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name='person-outline' size={20} color='#FFF'/>
                    <Text style={styles.navText}>Perfil</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name='credit-card' size={20} color='#FFF'/>
                    <Text style={styles.navText}>Configurar cartão</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name='smartphone' size={20} color='#FFF'/>
                    <Text style={styles.navText}>Configurações dos APP</Text>
                </View>
            </View>
            <RectButton style={styles.signOutButton} onPress={()=>{}}>
                <Text style={styles.singOutText}>SAIR DO APP</Text>
            </RectButton>
        </Animated.ScrollView >
    );
}

export default Menu;