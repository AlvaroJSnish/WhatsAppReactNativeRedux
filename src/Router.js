import React from "react";
import { Router, Stack, Tabs, Scene } from "react-native-router-flux";

import Calls from "./components/calls/Calls";
import Chats from "./components/chats/Chats";
import Settings from "./components/settings/Settings";

import Ionicons from "react-native-vector-icons/Ionicons";
import Chat from "./components/chats/Chat";
import Call from "./components/calls/Call";
import Contacts from "./components/common/Contacts";

const stories = () => (
  <Ionicons name="ios-checkmark-circle-outline" size={24} />
);
const calls = () => <Ionicons name="ios-call-outline" size={24} />;
const chats = () => <Ionicons name="ios-chatbubbles-outline" size={24} />;
const settings = () => <Ionicons name="ios-settings-outline" size={24} />;

const RouterComponent = () => (
  <Router key="root">
    <Stack key="app">
      <Tabs>
        <Scene
          key="calls"
          title="Received calls"
          component={Calls}
          icon={calls}
        />
        <Scene
          key="chats"
          title="Chats"
          component={Chats}
          icon={chats}
          initial
        />
        <Scene
          key="settings"
          title="Settings"
          component={Settings}
          icon={settings}
        />
      </Tabs>
      <Scene key="chat" component={Chat} hideNavBar />
      <Scene key="call" component={Call} hideNavBar />
      <Scene key="contacts" component={Contacts} hideNavBar title="Contacts" />
    </Stack>
  </Router>
);

export default RouterComponent;
