import { combineReducers } from "redux";
import ChatsReducer from "./ChatsReducer";
import CallsReducer from "./CallsReducer";
import ContactsReducer from "./ContactsReducer";
import SettingsReducer from "./SettingsReducer";

export default combineReducers({
  chats: ChatsReducer,
  calls: CallsReducer,
  contacts: ContactsReducer,
  settings: SettingsReducer
});
