import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicio from './telas/TelaInicio';
import TelaRespostaCorreta from './telas/TelaRespostaCorreta';
import TelaRespostaIncorreta from './telas/TelaRespostaIncorreta';
import TelaTabuada from './telas/TelaTabuada';

const navigation = createStackNavigator();


const App = () => (
  <NavigationContainer>
    <navigation.Navigator>
      <navigation.Screen name="Inicio" component = {TelaInicio}/>
      <navigation.Screen name="RespostaCorreta" component={TelaRespostaCorreta}/>
      <navigation.Screen name="RespostaIncorreta" component={TelaRespostaIncorreta}/>
      <navigation.Screen name="Tabuada" component={TelaTabuada}/>
    </navigation.Navigator>
  </NavigationContainer>
  
);

export default App;
