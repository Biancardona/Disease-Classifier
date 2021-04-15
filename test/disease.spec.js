global.window = global;
require('../src/classifier');

describe('classifier', () => {
  it('should be an object', () => {
    expect(typeof global.bpd).toBe('object');
  });
  describe('classifier.hypertensionClassification', () => {
    it('should be a function', () => {
      expect(typeof global.bpd.hypertensionClassification).toBe('function');
    });
    it('should return a stage 1 classification', () => {
      expect(global.bpd.hypertensionClassification("[{SysBP: 120, DiaBP: 90, atDate: '2018/10/31'},{ SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}]"))
        .toBe(('Latest reading:\nSys: 120\nDia: 90\nDate: 2018/10/31\nClassification: Stage 1'));
    });
    it('should return a stage 2 classification', () => {
      expect(global.bpd.hypertensionClassification("[{SysBP: 170, DiaBP: 90, atDate: '2018/10/31'},{ SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}]"))
        .toBe(('Latest reading:\nSys: 170\nDia: 90\nDate: 2018/10/31\nClassification: Stage 2'));
    });
    it('should return a stage 2 classification', () => {
      expect(global.bpd.hypertensionClassification("[{SysBP: 170, DiaBP: 100, atDate: '2018/10/31'},{ SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}]"))
        .toBe(('Latest reading:\nSys: 170\nDia: 100\nDate: 2018/10/31\nClassification: Stage 2'));
    });
    it('should return a stage 1 classification', () => {
      expect(global.bpd.hypertensionClassification("[{SysBP: 180, DiaBP: 90, atDate: '2018/10/31'},{ SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}]"))
        .toBe(('Latest reading:\nSys: 180\nDia: 90\nDate: 2018/10/31\nClassification: Stage 1'));
    });
    it('should return a stage 3 classification', () => {
      expect(global.bpd.hypertensionClassification("[{SysBP: 180, DiaBP: 120, atDate: '2018/10/31'},{ SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}]"))
        .toBe(('Latest reading:\nSys: 180\nDia: 120\nDate: 2018/10/31\nClassification: Stage 3'));
    });
    it('should return invalid data', () => {
      expect(global.bpd.hypertensionClassification("[{SysBP: 180, DiaBP: 120, atDate: ‘2018/10/31‘},{ SysBP: 115, DiaBP: 100, atDate: ‘2018/10/20‘}]"))
        .toBe(('Invalid Data'));
    });
  });
  describe('classifier.kidneyClassification', () => {
    it('should be a function', () => {
      expect(typeof global.bpd.kidneyClassification).toBe('function');
    });
    it('should return midly decreased classification', () => {
      expect(global.bpd.kidneyClassification("[{eGFR: 65, atDate: '2018/10/31' },{eGFR: 70, atDate: '2018/10/20'}]"))
        .toBe(('Latest reading:\neGFR: 65\nDate: 2018/10/31\nClassification: Mildly Decreased\nPercentage variance: -7.142857142857142'));
    });
    it('should return normal classification', () => {
      expect(global.bpd.kidneyClassification("[{eGFR: 90, atDate: '2018/10/31' },{eGFR: 70, atDate: '2018/10/20'}]"))
        .toBe(('Latest reading:\neGFR: 90\nDate: 2018/10/31\nClassification: Normal\nPercentage variance: 28.57142857142857'));
    });
    it('should return mild to moderate classification', () => {
      expect(global.bpd.kidneyClassification("[{eGFR: 45, atDate: '2018/10/31' },{eGFR: 46, atDate: '2018/10/20'}]"))
        .toBe(('Latest reading:\neGFR: 45\nDate: 2018/10/31\nClassification: Mild to Moderate\nPercentage variance: -2.1739130434782608'));
    });
    it('should return percentage drop', () => {
      expect(global.bpd.kidneyClassification("[{eGFR: 80, atDate: '2018/10/31' },{eGFR: 100, atDate: '2018/10/20'}]"))
        .toBe(('Latest reading:\neGFR: 80\nDate: 2018/10/31\nClassification: Mildly Decreased\nOldest reading:\neGFR: 100\nDate: 2018/10/20\nPercentage variance: -20'));
    });
    it('should return invalid data', () => {
      expect(global.bpd.kidneyClassification("[{eGFR: 80, atDate: ‘2018/10/31‘ },{eGFR: 100, atDate: ‘2018/10/20‘}]"))
        .toBe(('Invalid Data'));
    });
  });
});
