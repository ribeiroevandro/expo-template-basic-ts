import React from 'react';
import { Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Title,
  Description,
  LinkContainer,
  Link,
  LinkText,
} from './styles';

export default function Home() {
  function hadleGithub() {
    Linking.openURL('https://github.com/ribeiroevandro/expo-template-basic-ts');
  }
  return (
    <Container>
      <Title>Expo</Title>
      <Description>Template Base</Description>
      <Description>TypeScript</Description>
      <LinkContainer>
        <LinkText>Veja mais em:</LinkText>
        <Link onPress={hadleGithub}>
          <AntDesign name="github" size={25} color="#fff" />
          <LinkText>/ribeiroevandro/expo-template-basic-ts</LinkText>
        </Link>
      </LinkContainer>
    </Container>
  );
}

Home.navigationOptions = {
  headerShown: false,
};
