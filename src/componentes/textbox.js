import React, { useState } from 'react'
import { TextInput } from 'react-native'
import estilos from './estilos'
import Icon from './icone'

export default props => {
    const [txt, setTexto] = useState(props.interno )
    return (                
       
         <TextInput
                placeholder= {props.interno}
                selectionColorn="gray"
                onChangeText={value => setTexto(txt)}
                style={estilos.TextoMedio}
                secureTextEntry={props.senha}
                
            />
             
        
       )
}