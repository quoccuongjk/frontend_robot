import { View, Text, StyleSheet, ScrollView,Modal,TouchableOpacity,TouchableHighlight } from "react-native";
import React, { Component } from 'react';
import { defaultStyles, colors } from "../../styles/styles";
import MenuTab from "./components/MenuTab";
import ProductCard from "./components/ProductCard";
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  
});

export default class Home extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  render () {
    return (
      <View style={defaultStyles}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <View
                style={{
                  backgroundColor: colors.color2,
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 50,
                  flex: 1,
                  marginBottom: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 30,
                    paddingBottom: 10,
                    paddingRight: 10,
                    paddingLeft: 10,
                  }}>
                  
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Text style={{ marginRight: 5, fontSize: 20 }}>FILTERS</Text>
                    <FontAwesome name="sliders" size={32}  />
                  </View>
                </View>
               
  
                <View />
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    style={[
                      styles.buttonStyle,
                      {
                        marginTop: 30,
                        backgroundColor: colors.primary,
                        flex: 1,
                        marginRight: 5,
                        marginLeft: 10,
                      },
                    ]}
                    onPress={() => {}}>
                    <Text style={{ textAlign: 'center', color: colors.color2 }}>
                      SAVE
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.buttonStyle,
                      {
                        marginTop: 30,
                        backgroundColor: colors.color2,
                        flex: 1,
                        marginRight: 10,
                        marginLeft: 5,
                      },
                    ]}
                    onPress={() => {this.setModalVisible(false)}}>
                    <Text style={{ textAlign: 'center' }}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
  
          <TouchableHighlight
            style={{ marginTop: 30 }}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Filter</Text>
          </TouchableHighlight>
          <MenuTab/>
          <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          >
          {new Array(9).fill(0).map((_, i) => {
            return <ProductCard key={i} />;
          })}
          </ScrollView>
          
        </View>
    );
  }
  
       
}
