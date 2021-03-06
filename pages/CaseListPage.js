const I = actor();

module.exports = {

  selectors: {
    caseLink: 'table tr:nth-last-child(1) a[href^="/case/DIVORCE/DIVORCE/"]',
    jurisdictionSelsct: '#wb-jurisdiction',
    caseTypeSelect: '#wb-case-type',
    caseStateSelect: '#wb-case-state',
    rdcSelect: '#D8DivorceUnit',
    solicitorPaymentMethodSelect: '#SolPaymentHowToPay'
  },

  selectCase() {
    I.waitForElement(this.selectors.caseLink, 25);
    I.click(this.selectors.caseLink);
  },

  resetFilter() {
    I.waitForElement(this.selectors.jurisdictionSelsct, 20);
    I.waitForElement(this.selectors.caseTypeSelect, 20);
    I.waitForElement(this.selectors.caseStateSelect, 20);
    I.selectOption(this.selectors.caseStateSelect, 'Any');
    I.waitForElement(this.selectors.rdcSelect, 40);
    I.waitForElement(this.selectors.solicitorPaymentMethodSelect, 40);
    I.see('Create new case');
    I.click('Apply');
  }
};
