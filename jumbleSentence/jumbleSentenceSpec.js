describe(
  ("jumbleSentence" = () => {
    it(
      ("Will re-arrange words" = () => {
        expect(jumbleSentence("The cat sat on the Ikea mat.")).toEqual(
          "Eht act ast no eht Aeik amt."
        );
      })
    );
  })
);
