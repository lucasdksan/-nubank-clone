import React from 'react';
import { View, Text, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Menu from '../Menu/index';
import  Icon  from '@expo/vector-icons/build/MaterialIcons';
import styles from './styles';

const CardContainer: React.FC = () => {
    let opened = false;
    let offset = 0;
    const translateY = new Animated.Value(0);
    const animatedEvent = Animated.event(
        [
        {
            nativeEvent:{
            translationY: translateY,
            }
        }
        ],
        {useNativeDriver: true}
    );
    function onHandlerStateChange(event:any){
        if(event.nativeEvent.oldState === State.ACTIVE){
            const { translationY } = event.nativeEvent;
            offset += translationY;
            if(offset >= 150){
                opened = true;
            } else {
                opened = false;
            }
            Animated.timing(translateY, {
                toValue: opened ? 400: 0,
                duration: 200,
                useNativeDriver: true,
            }).start(()=>{
                offset = opened ? 400 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }
    return (
        <>
            <Menu translateY={translateY}/>
            <PanGestureHandler
                onGestureEvent={animatedEvent}
                onHandlerStateChange={onHandlerStateChange}
            >
                <Animated.View style={[{transform: [{
                    translateY: translateY.interpolate({
                        inputRange:[-350, 0, 400],
                        outputRange:[-50, 0, 400],
                        extrapolate: 'clamp',
                    })
                }]}, styles.card]}>
                    <View style={styles.cardHeader}>
                        <Icon name='attach-money' size={28} color='#654'/>
                        <Icon name='visibility' size={28} color='#654'/>
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.titleContent}>Saldo disponível</Text>
                        <Text style={styles.descriptionContent}>R$ 197.600,65</Text>
                    </View>
                    <View style={styles.cardFooter}>
                        <Text style={styles.annotationFooter}>
                            Transferência de R$ 20,00 recebida de Leonardo da Silva hoje às 06:30h
                        </Text>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </>
    );
}

export default CardContainer;