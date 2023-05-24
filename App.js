import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.ccontainer}>
        <Image
          style={styles.logo} source={require('./assets/img/logo.png')}
        />
        <Text style={styles.title}>
          Marketspace
        </Text>
        <Text style={styles.subtitle}>
          Seu espaço de compra e venda
        </Text>
        <Text style={styles.acesse}>
          Acesse sua conta
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.input1} placeholder="E-mail" />
          <TextInput style={styles.input1} placeholder="Senha" />
          <TouchableOpacity style={styles.button1}>
            <Text>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.footer}>
        <Text style={styles.semAcesso}>
          Ainda não tem acesso?
        </Text>
        <TouchableOpacity style={styles.button2}>
          <Text>
            Criar uma conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ccontainer: {
    flex: 1,
    backgroundColor: 'black',
    backgroundColor: '#edecee',
    justifyContent: 'center',
    textAlign: 'center'
  },
  logo: {
    width: 365,
    height: 200
  },
  input1: {
    backgroundColor: '#fff',
    border: '1px solid #222',
    margin: 5,
    width: 250,
    padding: 5,
    borderRadius: 10
  },
  input2: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10
  },
  input: {
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  subtitle: {
    marginTop: -5,
    marginBottom: 20,
    color: '#b5b4b7',
  },
  button1: {
    backgroundColor: '#647ac6',
    width: '60%',
    marginTop: 10,
    padding: 5,
    borderRadius: 10
  },
  button2: {
    backgroundColor: '#647ac6',
    width: '80%',
    textAlign: 'center',
    borderRadius: 10,
    padding: 5
  },
  footer:{
    alignItems: 'center',
    margin: 20
  }
});
