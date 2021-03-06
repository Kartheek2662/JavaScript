const I = actor();

module.exports = {

  fields: {
    firstName: '#D8RespondentFirstName',
    lastName: '#D8RespondentLastName',
    respondentChangedName: '#D8RespondentNameAsOnMarriageCertificate-No',
    respondentGender: '#D8InferredRespondentGender',
    respondentHomeAddress: '#D8DerivedRespondentHomeAddress',
    wishToEffectServiceOnRespondent: '#PetitionerSolicitorToEffectService-Yes',
    respondentUsingASolicitor: '#D8RespondentCorrespondenceSendToSol-No',
    respondentServiceAddress: '#D8DerivedRespondentCorrespondenceAddr',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.firstName, 20);
    I.fillField(this.fields.firstName, 'Tasha');
    I.fillField(this.fields.lastName, 'St Patrick');
    I.click(this.fields.respondentChangedName);
    I.selectOption(this.fields.respondentGender, 'female');
    I.fillField(this.fields.respondentHomeAddress, '300 Central London, Lagos W2 3MU');
    I.click(this.fields.wishToEffectServiceOnRespondent);
    I.click(this.fields.respondentUsingASolicitor);
    I.fillField(this.fields.respondentServiceAddress, '007 Peter Pan Road , E14 5RT');
    I.wait(5);
    I.click(this.fields.submit);
  }
};