require( './style.scss' );





/**
 *
 */
var computed = {
    behavioralClasses: function () {
        var rounded = this.get( 'rounded' ),
            speed   = this.get( 'speed' ),
            classes = '';

        classes += rounded ? 'r-hamburger-rounded ' : '';
        classes += speed ? 'r-hamburger-' + speed : '';

        return classes;
    }
}





/**
 *
 */
module.exports = Ractive.extend({
    template:       require( './template.html' ),
    computed:       computed,
    oncomplete:     oncomplete,

    open: open,
    close: close
});






/**
 *
 */
function oncomplete() {
    this.observe( 'open', function ( open ) {
        open ? this.fire( 'open', this ) : this.fire( 'closed', this );
    });
}






/**
 *
 */
function open() {
    this.set( 'open', 1 );
}






/**
 *
 */
function close() {
    this.set( 'open' );
}