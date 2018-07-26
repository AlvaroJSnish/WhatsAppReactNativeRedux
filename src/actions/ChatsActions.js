import { ADD_MESSAGE } from "./types";

export const addMessage = (id, text) => ({
  type: ADD_MESSAGE,
  payload: {
    id,
    text
  }
});
