import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';
import Homepage from './components/home/Homepage';
import { Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';

import { Amplify } from 'aws-amplify';
import { Authenticator, View, Image, useTheme, Button, Heading, Text } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react'; // Import useAuthenticator
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={`${tokens.space.large} 0`}>
          <Image
            alt="peopleplus"
            src=//s3 url
            width="150" // Set the width of the image to 150 pixels
          />
        </View>
      );
    },
    SignIn: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Sign in to your account
          </Heading>
        );
      },
      Footer() {
        const { toResetPassword } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toResetPassword}
              size="small"
              variation="link"
            >
              Reset Password
            </Button>
          </View>
        );
      },
    },
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  };
  
  return (
    <Authenticator loginMechanisms={['email']} components={components}>
      {({ signOut, user }) => (
        <div>
          <SiteNav logOut={signOut} />
          <Routes>
            <Route path='*' element={<Homepage />} />
            <Route path='/' exact={true} element={<Homepage />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
          <SiteFooter />
        </div>
      )}
    </Authenticator>
  );
}

export default App;
