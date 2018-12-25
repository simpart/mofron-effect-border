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
            this.suspend(false, true);
            
            this.width('0.01rem', '0rem');
            this.style('solid', null);
            this.color([90,90,90], null);
            
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            let set_style = {};
            set_style[this.type() + 'width'] = (null === this.width()[0]) ? null : this.width()[0].toString();
            set_style[this.type() + 'style'] = (null === this.style()[0]) ? null : this.style()[0];
            set_style[this.type() + 'color'] = (null === this.color()[0]) ? null : this.color()[0].toString();
            tgt.style(set_style);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            let set_style = {};
            set_style[this.type() + 'width'] = (null === this.width()[1]) ? null : this.width()[1].toString();
            set_style[this.type() + 'style'] = (null === this.style()[1]) ? null : this.style()[1];
            set_style[this.type() + 'color'] = (null === this.color()[1]) ? null : this.color()[1].toString();
            tgt.style(set_style);
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
    width (prm, dis) {
        try {
            if (undefined !== prm) {
                prm = mf.func.getSize(prm).toString();
            }
            if (undefined !== dis) {
                dis = mf.func.getSize(dis).toString();
            }
            return this.execConfig('width', prm, dis);
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
    style (prm, dis) {
        try {
            if ( (undefined !== prm) &&
                 (null !== prm)      &&
                 ('string' !== typeof prm) ) {
                throw new Error('invalid parameter');
            }
            if ( (undefined !== dis) &&
                 (null !== dis)      &&
                 ('string' !== typeof dis) ) {
                throw new Error('invalid parameter');
            }
            return this.execConfig('style', prm, dis);
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
            //if ( (undefined !== prm)       &&
            //     (true === this.isExecd()) && 
            //     (true === this.status()) ) {
            //    this.execute(true);
            //}//} else 
            if (undefined !== ret) {
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
    color (prm, dis) {
        try {
            if ( (undefined !== prm) && (null !== prm) ) {
                prm = mf.func.getColor(prm);
            }
            if ( (undefined !== dis) && (null !== dis) ) {
                dis = mf.func.getColor(dis)
            }
            
            return this.execConfig('color', prm, dis);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Border;
/* end of file */
