const { head1,tail,min,max} = require('./head');
var arr=[1,54,3,7];
describe('Shows head,tail,min of an array', () => {
    it('fx 1 check', () => {
        expect(head1(arr)).toEqual(1);
    });
    it('fx 2 check', () => {
        expect(tail(arr)).toEqual(7);
    });
    it('fx 3 check', () => {
        expect(min(arr)).toEqual(1);
    });
    it('fx 4 check', () => {
        expect(max(arr)).toEqual(54);
    });

})
