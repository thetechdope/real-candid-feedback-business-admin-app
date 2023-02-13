import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/dimensions/dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
const CustomBottomTab = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View
            style={{
              width: width * 0.32,
              height: height * 0.08,
            }}
            key={index}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Icon
                name={
                  label == 'Settings'
                    ? 'settings'
                    : label == 'Home'
                    ? 'home'
                    : label == 'Feedbacks'
                    ? 'message'
                    : label == 'Setting'
                    ? 'settings'
                    : null
                }
                style={{marginLeft: 50}}
                size={30}
                color={isFocused ? '#673ab7' : '#222'}
              />
              <Text
                style={{
                  color: isFocused ? '#673ab7' : '#222',
                  textAlign: 'center',
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({});
