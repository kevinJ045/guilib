import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";
import Store from "../../data/Store.js";

const defaultDataTable = () => getDefaults({
	element: { name: 'div', html: `<table></table>` },
	class: 'data-table data-table-init',
	stateName: '$items_data_table'
});


function createTable(_table, data) {
  const el = findEl(_table.id);
	el.html(`<table></table>`);
	
	if(_table.options.header){
		const { header } = _table.options;
		const head = $(`<div class="card-header"><div class="data-table-header">
			<div class="data-table-title">Table</div>
			<div class="data-table-actions">
			</div>
		</div>
	</div></div>`);
		el.prepend(head);
		if(header.title){
			head.find('.data-table-title').empty();
			if(typeof header.title == "string") head.find('.data-table-title').text(header.title);
			else header.title.to(head.find('.data-table-title')[0])
		}
		if(header.actions && Array.isArray(header.actions)){
			header.actions.forEach(action => action.to(head.find('.data-table-actions')[0]));
		}
		if(header.selected && Array.isArray(header.selected)){
			const sel = $(`<div class="data-table-header-selected">
			<div class="data-table-title-selected"><span class="data-table-selected-count"></span> items selected
			</div>
			<div class="data-table-actions">
			</div>`);
			sel.appendTo(head);
			header.selected.forEach(action => action.to(sel.find('.data-table-actions')[0]));
		}
	}

  let table = el.find('table');

  const thead = $(`<thead></thead>`);
  const tbody = $(`<tbody></tbody>`);

  const headerRow = $(`<tr></tr>`);

	function inhanceDataCell(cell, head){
		if(head){
			if(_table.options.sortable){
				cell.addClass('sortable-cell');
			}
		}

		if(isNaN(cell.text())){
			cell.addClass('label-cell');
		} else {
			cell.addClass('numeric-cell');
		}
	}

	function inhanceDataRow(row){
		if(_table.options.checkboxes){
			row.append(`<td class="checkbox-cell">
			<label class="checkbox">
				<input type="checkbox" /><i class="icon-checkbox"></i>
			</label>
		</td>`);
		}
	}

	if(_table.options.checkboxes){
		headerRow.append(`<th class="checkbox-cell">
		<label class="checkbox">
			<input type="checkbox" /><i class="icon-checkbox"></i>
		</label>
	</th>`);
	}

  if (Array.isArray(data[0])) {
    data[0].forEach((key) => {
      const headerCell = $(`<th>${key}</th>`);
			inhanceDataCell(headerCell, 'head');
      headerRow.append(headerCell);
    });

    thead.append(headerRow);

    for (let i = 1; i < data.length; i++) {
      const dataRow = $('<tr />');
			inhanceDataRow(dataRow);

      data[i].forEach((value) => {
        const dataCell = $(`<td>${value}</td>`);
				inhanceDataCell();
        dataRow.append(dataCell);
      });

      tbody.append(dataRow);
    }
  } else if (typeof data[0] === 'object') {
    const keys = Object.keys(data[0]);

    keys.forEach((key) => {
      const headerCell = $(`<th>${key}</th>`);
      headerRow.append(headerCell);
    });

    thead.append(headerRow);

    data.forEach((item) => {
      const dataRow = $('<tr />');
			inhanceDataRow(dataRow);

      keys.forEach((key) => {
        const value = item[key];
        const dataCell = $(`<td>${value}</td>`);
				inhanceDataCell(dataCell);
        dataRow.append(dataCell);
      });

      tbody.append(dataRow);
    });
  }

  table.append(thead);
  table.append(tbody);
}


class DataTable extends Widget {
  constructor(selectedOptions){
		const options = {...defaultDataTable(), ...selectedOptions};
		super(options);

		this.on('state:change', ({new: state}) => {
			if(state[this.options.stateName]) createTable(this, state[this.options.stateName]);
		});

		if(options.data){
			this.setState({[this.options.stateName]: options.data});
		}

		if(options.statelessData){
			createTable(this, options.statelessData);
		}
  }

	add(child){
		this.add(child, 'table');
	}

	_onMount(parent, app){
		super._onMount(parent);
	}
}

export default DataTable;