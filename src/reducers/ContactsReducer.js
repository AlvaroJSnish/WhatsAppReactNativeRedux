const INITIAL_STATE = [
  {
    user: "Beth",
    number: "111-222-333",
    picture:
      "https://vignette.wikia.nocookie.net/rickandmorty/images/b/be/Screenshot_2016-11-20_at_6.54.33_PM.png/revision/latest?cb=20161121033552"
  },
  {
    user: "Rick",
    number: "picklenumberick",
    picture:
      "https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728"
  },
  {
    user: "Morty",
    number: "222-333-444",
    picture:
      "https://vignette.wikia.nocookie.net/rick-y-morty-espanol/images/5/58/Ick_y_morty_wiki.png/revision/latest?cb=20170914132754&path-prefix=es"
  },
  {
    user: "Summer",
    number: "333-444-555",
    picture:
      "https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest/scale-to-width-down/310?cb=20160919183158"
  },
  {
    user: "Jerry",
    number: "losersphone-123",
    picture: "https://img.fireden.net/co/image/1501/62/1501626995857.png"
  }
];

const ContactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ContactsReducer;
