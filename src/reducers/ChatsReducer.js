import { ADD_MESSAGE } from "../actions/types";

const INITIAL_STATE = [
  {
    id: 1,
    user: "Beth",
    picture:
      "https://vignette.wikia.nocookie.net/rickandmorty/images/b/be/Screenshot_2016-11-20_at_6.54.33_PM.png/revision/latest?cb=20161121033552",
    messages: [
      {
        user: "Beth",
        message: "Hi, how you doing?"
      },
      {
        user: "Me",
        message: "Sorry, I only talk with doctors"
      },
      {
        user: "Beth",
        message: "But I am A HORSE SURGEON"
      }
    ],
    lastMessage: "But I am A HORSE SURGEON",
    lastMessageDate: "20:12",
    lastConnection: "21:43"
  },
  {
    id: 2,
    user: "Rick",
    picture:
      "https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728",
    messages: [
      {
        user: "Rick",
        message: "F*ck, you are not real."
      },
      {
        user: "Me",
        message: "Rick I swear to you... it's me!"
      },
      {
        user: "Rick",
        message: "I can't believe it..."
      },
      {
        user: "Rick",
        message: "The only thing I can do is destroy you!"
      },
      {
        user: "Rick",
        message: "Your last words?"
      },
      {
        user: "Me",
        message: "Weba Liba Dab Dep"
      },
      {
        user: "Rick",
        message: "It's wubba lubba dub dub, baby."
      }
    ],
    lastMessage: "It's wubba lubba dub dub, baby.",
    lastMessageDate: "21:43",
    lastConnection: "The next year... wait what?"
  },
  {
    id: 3,
    user: "Morty",
    picture:
      "https://vignette.wikia.nocookie.net/rick-y-morty-espanol/images/5/58/Ick_y_morty_wiki.png/revision/latest?cb=20170914132754&path-prefix=es",
    messages: [
      {
        user: "Me",
        message: "Morty I'm bored"
      },
      {
        user: "Morty",
        message: "Come watch TV"
      }
    ],
    lastMessage: "Come watch TV",
    lastMessageDate: "21:52",
    lastConnection: "21:43"
  },
  {
    id: 4,
    user: "Summer",
    picture:
      "https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest/scale-to-width-down/310?cb=20160919183158",
    messages: [
      {
        user: "Me",
        message: "How are you living when Rick LOVES MORE MORTY THAN YOU"
      },
      {
        user: "Summer",
        message: "Rick loves me more than Morty, let's seeeee"
      }
    ],
    lastMessage: "Rick loves me more than Morty, let's seeeee",
    lastMessageDate: "22:03",
    lastConnection: "22:17"
  },
  {
    id: 5,
    user: "Jerry",
    picture: "https://img.fireden.net/co/image/1501/62/1501626995857.png",
    messages: [
      {
        user: "Jerry",
        message: "THIS. IS. MY. HOUSE."
      },
      {
        user: "Me",
        message: "No one cares Jerry."
      }
    ],
    lastMessage: "No one cares Jerry.",
    lastMessageDate: "22:11",
    lastConnection: "22:18"
  }
];

const ChatsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return state.map(
        chat =>
          chat.id === action.payload.id
            ? {
                ...chat,
                lastMessage: action.payload.text,
                messages: [
                  ...chat.messages,
                  { user: "Me", message: action.payload.text }
                ]
              }
            : chat
      );
    default:
      return state;
  }
};

export default ChatsReducer;
