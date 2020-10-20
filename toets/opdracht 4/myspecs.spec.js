describe('voorbeeld.js', function () {
    it('voorbeeld undefined test', function () {
        console.log('voorbeeld undefined test');
        expect(example.voorbeeld).toBeUndefined();
    });

        it('should have one an amount >= 2', function () {
            console.log('aantal >= 2 test')
            expect(example.aantal).toBeGreaterThanOrEqual(2);
        });

});

   
