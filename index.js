/**
 * @file mofron-effect-border/index.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class mofron.effect.Border
 * @brief border style effect class
 */
mf.effect.Border = class extends mf.Effect {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Border');
            this.prmMap(['width', 'color']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable () {}
    disable () {}
    
    /**
     * set/delete border config
     * 
     * @param flg (boolean) true : set border config
     * @param flg (boolean) false : delete border config
     * @param cmp (Component) mofron Component object
     * @note private method
     */
    contents (flg, cmp) {
        try {
            super.contents(flg, cmp);
            let set_style = {};
            set_style[this.type() + 'width'] = (true === flg) ? mf.func.getSize(this.width()).toString() : null;
            set_style[this.type() + 'style'] = (true === flg) ? this.style() : null;
            set_style[this.type() + 'color'] = (true === flg) ? this.color().toString() : null;
            cmp.style(set_style);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter border width
     * 
     * @param val (string) css value of border width
     * @param val (undefined) call as getter
     * @return (string) css value of border width
     */
    width (val) {
        try {
            let ret = this.member('width', 'string', val, '0.01rem');
            if ( (undefined !== val)       &&
                 (true === this.isExecd()) &&
                 (true === this.status()) ) {
                this.execute(true);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter border style
     *
     * @param val (string) css value of border style
     * @param val (undefined) call as getter
     * @return (string) css value of border style
     */
    style (prm) {
        try {
            let ret = this.member('style', 'string', prm, 'solid');
            if ( (undefined !== prm)       && 
                 (true === this.isExecd()) &&
                 (true === this.status()) ) {
                this.execute(true);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter border type
     * 
     * @param prm (string) border target position
     *            ('all', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right')
     * @param val (undefined) call as getter
     * @return (string) css value of border type
     */
    type (prm) {
        try {
            let ret = this.member(
                'type',
                ['all', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
                prm,
                'all'
            );
            if ( (undefined !== prm)       &&
                 (true === this.isExecd()) && 
                 (true === this.status()) ) {
                this.execute(true);
            } else if (undefined !== ret) {
                return ('all' === ret) ? 'border-' : 'border-' + ret + '-';
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter border color
     * 
     * @param prm (string) border color (color name, 'rgb(r,g,b)', '#HEX')
     * @param prm (array) border color ([r,g,b])
     * @param val (undefined) call as getter
     * @return (string) css value of border type
     */
    color (prm) {
        try {
            prm = (null === prm) ? prm = [0,0,0] : prm;
            let ret = this.member(
                'color',
                'Color',
                (undefined === prm) ? prm : mf.func.getColor(prm)
            );
            if ( (undefined !== prm)       &&
                 (true === this.isExecd()) &&
                 (true === this.status()) ) {
                this.execute(true);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Border;
/* end of file */
