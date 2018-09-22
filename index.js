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
    
    constructor (po) {
        try {
            super();
            this.name('Border');
            this.prmMap('width', 'color');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable () {}
    disable () {}
    
    contents (flg, cmp) {
        try {
            super.contents(flg, cmp);
            let set_style = {};
            set_style[this.type() + '-width'] = (true === flg) ? this.width() : null;
            set_style[this.type() + '-style'] = (true === flg) ? this.style() : null;
            set_style[this.type() + '-color'] = (true === flg) ? this.color().toString() : null;
            cmp.style(set_style);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_width) ? '0.01rem' : this.m_width.toString();
            }
            /* setter */
            this.m_width = mf.func.getSize(prm);
            if (true === this.status()) {
                this.execute(true);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    style (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_style) ? 'solid' : this.m_style;
            }
            /* setter */
            if ('string' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.m_style = prm;
            if (true === this.status()) {
                this.execute(true);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_type) ? 'border' : 'border-' + this.m_type;
            }
            /* setter */
            if ( ('top'    !== prm)   &&
                 ('bottom' !== prm)   &&
                 ('left'   !== prm)   &&
                 ('right'  !== prm)   &&
                 ('top-left'     !== prm) &&
                 ('top-rigth'    !== prm) && 
                 ('bottom-left'  !== prm) && 
                 ('bottom-right' !== prm) ) {
                throw new Error('invalid parameter');
            }
            this.m_type = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_color) ? new mf.Color(0,0,0).toString() : this.m_color.toString();
            }
            /* setter */
            this.m_color = mf.func.getColor(prm);
            if (true === this.status()) {
                this.execute(true);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
module.exports = mf.effect.Border;
/* end of file */