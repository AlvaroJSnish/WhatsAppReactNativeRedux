const INITIAL_STATE = [
  {
    id: 1,
    user: "Beth",
    picture:
      "https://vignette.wikia.nocookie.net/rickandmorty/images/b/be/Screenshot_2016-11-20_at_6.54.33_PM.png/revision/latest?cb=20161121033552",
    callDate: "12:45 26/08/2017",
    lost: false
  },
  {
    id: 2,
    user: "Rick",
    picture:
      "https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728",
    callDate: "Mmm we don't know",
    lost: true
  },
  {
    id: 3,
    user: "Morty",
    picture:
      "https://vignette.wikia.nocookie.net/rick-y-morty-espanol/images/5/58/Ick_y_morty_wiki.png/revision/latest?cb=20170914132754&path-prefix=es",
    callDate: "11:11 20/08/2018",
    lost: false
  },
  {
    id: 4,
    user: "Morty",
    picture:
      "https://vignette.wikia.nocookie.net/rick-y-morty-espanol/images/5/58/Ick_y_morty_wiki.png/revision/latest?cb=20170914132754&path-prefix=es",
    callDate: "Please call him, he is afraid",
    lost: false
  }
];

const CallsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CallsReducer;
