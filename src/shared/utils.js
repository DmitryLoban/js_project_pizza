// create checkbox
export const createCheckboxItems = (label, category, items) => {
	const wrapper = document.createElement('div');
	wrapper.classList.add('checkbox', category);
	wrapper.append(createTagP(label));

	items.forEach((item)=>{
		const id = `${category}-${item.id}`;

		const label = document.createElement('label');
		label.setAttribute("for", id);
		wrapper.appendChild(label);

		const checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.name = category;
		checkbox.value = item.id;
		checkbox.id = id;

		label.appendChild(checkbox);
		label.appendChild(document.createTextNode(item.text));
	});

	return wrapper;
}

export const createTagP = (text) => {
	const p = document.createElement('p');
	p.innerText = text;

	return p;
};
