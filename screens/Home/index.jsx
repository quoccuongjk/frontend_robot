import { View, Text, StyleSheet, ScrollView,Modal,TouchableOpacity,TouchableHighlight } from "react-native";
import React, { Component } from 'react';
import { defaultStyles, colors } from "../../styles/styles";
import MenuTab from "./components/MenuTab";
import ProductCard from "./components/ProductCard";
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


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
  styleTitle: {
    color:'black',
    fontSize:18,
    fontWeight:'bold',
  }
  
  
});

import MultiSlider from "@ptomasroos/react-native-multi-slider";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];


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
                
                <View style={{marginHorizontal:20}}>
                  <View 
                  style={{
                    padding:30
                  }}
                  >
                    
                    <SelectDropdown
                    data={countries}
                    defaultButtonText="Chọn khu vực"
                    buttonStyle={{backgroundColor:'white',borderWidth:1,borderColor:'black',borderRadius:10,width:'100%'}}
                    renderDropdownIcon={isOpened => {
                      return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    />
                  </View>
                  <View 
                    style={{
                      padding:30
                  }}>
                    <Text style={styles.styleTitle}>Chiều cao</Text>
                    <MultiSlider 
                    values={[3,7]}
                    
                    min={0}
                    max={10}
                    step={1}
                    markerOffsetY={20}
                    selectedStyle ={{
                      backgroundColor: colors.primary
                    }}
                    trackStyle={{
                      height:20,
                      borderRadius:10,
                      backgroundColor:colors.secondary
                    }}
                    minMarkerOverlapDistance ={50}
                    customMarker={(e)=> {
                      return(
                        <View
                        style={{
                          height:60,
                          alignItems:'center',
                          justifyContent: 'center'
                        }}>
                          <View style={{
                            height:30,
                            width:30,
                            borderRadius:15,
                            borderWidth:4,
                            borderColor:'white',
                            backgroundColor:colors.primary,
                            
                          }}/>
                          <Text>
                            {e.currentValue} m
                          </Text>

                      </View>
                      )
                      
                    }}
                    onValuesChange={(values) => console.log(values)}
                    />
                  </View>

                  <View 
                    style={{
                      padding:30
                  }}>
                    <Text style={styles.styleTitle}>Bán kính</Text>
                    <MultiSlider 
                    values={[3,7]}
                    
                    min={0}
                    max={10}
                    step={1}
                    markerOffsetY={20}
                    selectedStyle ={{
                      backgroundColor: colors.primary
                    }}
                    trackStyle={{
                      height:20,
                      borderRadius:10,
                      backgroundColor:colors.secondary
                    }}
                    minMarkerOverlapDistance ={50}
                    customMarker={(e)=> {
                      return(
                        <View
                        style={{
                          height:60,
                          alignItems:'center',
                          justifyContent: 'center'
                        }}>
                          <View style={{
                            height:30,
                            width:30,
                            borderRadius:15,
                            borderWidth:4,
                            borderColor:'white',
                            backgroundColor:colors.primary,
                            
                          }}/>
                          <Text>
                            {e.currentValue} m
                          </Text>

                      </View>
                      )
                      
                    }}
                    onValuesChange={(values) => console.log(values)}
                    />
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
