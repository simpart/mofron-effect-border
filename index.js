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
    
    contents (cmp) {
        try {
            let set_style = {};
            let type = ('all' === this.type()) ? 'border-' : 'border-' + this.type() + '-';
            set_style[type + 'width'] = this.width();
            set_style[type + 'style'] = this.style();
            set_style[type + 'color'] = this.color();
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
     * @return (string) css value of border width
     */
    width (prm) {
        try { return this.member('width', 'string', prm, '0.01rem'); } catch (e) {
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
            let tmp = ['none', 'hidden', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'dashed', 'dotted'];
            return this.member('style', tmp, prm, 'solid');
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
            let tmp = ['all', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
            return this.member('type', tmp, prm, 'all');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter border color
     * 
     * @param p1 (string) border color (color name, 'rgb(r,g,b)', '#HEX')
     * @param p1 (array) border color ([r,g,b])
     * @return (string) css value of border type
     */
    color (prm) {
        try {
            return this.member(
                'color',
                'string',
                (undefined !== prm) ? mf.func.getColor(prm).toString() : prm,
                'rgb(90.90.90)'
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Border;
/* end of file */
