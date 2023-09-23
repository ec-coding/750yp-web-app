import { API_KEY, API_URL } from '@env';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AutoScrollFlatList } from 'react-native-autoscroll-flatlist';
import { TypingAnimation } from 'react-native-typing-animation';

const Typing = () => (
  <View style={[styles.message, { alignSelf: 'flex-start' }]}>
    <View style={{ paddingBottom: 30, paddingLeft: 20 }}>
      <View
        style={[
          styles.messageText,
          {
            textAlign: 'left',
          },
        ]}>
        <TypingAnimation
          dotColor="#CBC3E3"
          dotMargin={10}
          dotAmplitude={10}
          dotSpeed={0.15}
          dotRadius={5}
          dotX={12}
          dotY={6}
        />
      </View>
    </View>
  </View>
);

export default function MedicationGuide() {
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState('');

  const textPrefix =
    "The question I want to ask is in quotes at the end of this statement. If it's related to health, wellness, medicine, or anything medical then answer it. Don't say that it's related to health and wellness. If it's not related, then tell me that you only respond to health and wellness questions.";

  useEffect(() => {
    setData([...data, { type: 'typing' }]);
    setTimeout(() => {
      setData([
        ...data.filter((d) => d.type === 'typing'),
        { type: 'bot', text: 'How can I help you today?' },
      ]);
    }, 1000);
  }, []);

  const handleSend = async () => {
    if (textInput.length > 0) {
      setData([...data, { type: 'user', text: textInput }, { type: 'typing' }]);
      setTextInput('');

      try {
        const response = await axios.post(
          API_URL,
          {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: `${textPrefix} "${textInput}"` }],
            temperature: 0.2,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        const text = response.data['choices'][0]['message']['content'];

        setData([
          ...data.filter((d) => d.type !== 'typing'),
          { type: 'user', text: textInput },
          { type: 'bot', text },
        ]);

        setTextInput('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <AutoScrollFlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => {
          if (item.type === 'typing') {
            return <Typing />;
          } else {
            return (
              <View
                style={[
                  styles.message,
                  { alignSelf: item.type === 'user' ? 'flex-end' : 'flex-start' },
                  item.error ? styles.error : null,
                ]}>
                <View style={styles.messageBubble}>
                  <Text
                    style={[
                      styles.messageText,
                      {
                        textAlign: item.type === 'user' ? 'right' : 'left',
                      },
                    ]}>
                    {item.text}
                  </Text>
                </View>
                {item.error && <Text style={styles.errorMessage}>{item.error}</Text>}
              </View>
            );
          }
        }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ask me about your medication..."
          style={styles.input}
          onChangeText={(text) => setTextInput(text)}
          value={textInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  message: {
    marginVertical: 5,
    maxWidth: '80%',
  },
  messageBubble: {
    backgroundColor: '#CBC3E3',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#efeaef',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    height: 40,
    width: 60,
    backgroundColor: '#CBC3E3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});
