import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { resizehandler } from './table.resize'


export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        if (shouldresize(event)) {
            resizehandler(this.$root, event)
        }
    }
}

