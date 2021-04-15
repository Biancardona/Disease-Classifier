# Disease Classifier
  INSTALL DEPENDENCIES AND RUN APP
  * npm install
  * npm start
  * Navigate to http://localhost:5000

  RUN TEST CASES
  * npm run test

EXAMPLE OF VALID INPUTS

* For Hypertension calculation:

[
{SysBP: 120, DiaBP: 90, atDate: '2018/10/31'},
{ SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}
]

* For Kidney disease calculation:

[
{eGFR: 65, atDate: '2018/10/31'},
{eGFR: 70, atDate: '2018/10/20'}
]

EXAMPLE INVALID INPUT WITH WRONG CHARACTERS

* Please note the character ‘ versus ' below:

[
{SysBP: 120, DiaBP: 90, atDate: ‘2018/10/31’},
{ SysBP: 115, DiaBP: 100, atDate: ‘2018/10/20}
]

