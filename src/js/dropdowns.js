document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	toogleDropdown()
	insertTextInInput()
})

const toogleDropdown = () => {
	const dropdowns = document.querySelectorAll('.dropdown')

	if (!dropdowns.length) return

	dropdowns.forEach(dropdown => {
		if (dropdown.classList.contains('opened'))
			reCalculateDropdownHeight(dropdown)
	})

	dropdowns.forEach(dropdown => {
		dropdown.addEventListener('click', () => {
			const dropdownOpen = dropdown.querySelector('.dropdown__open')

			if (!dropdownOpen) return

			if (!dropdown.classList.contains('opened')) {
				dropdown.classList.add('opened')
				reCalculateDropdownHeight(dropdown)
			}
			else {
				dropdown.classList.remove('opened')
				dropdownOpen.style.height = '0'
			}
		})
	})
}

window.addEventListener('resize', () => {
	const dropdowns = document.querySelectorAll('.dropdown.opened')

	if (!dropdowns.length) return

	dropdowns.forEach(dropdown => reCalculateDropdownHeight(dropdown))
})

const reCalculateDropdownHeight = dropdown => {
	const dropdownOpen = dropdown.querySelector('.dropdown__open'),
		dropdownInner = dropdown.querySelector('.dropdown__inner')

	if (!dropdownOpen || !dropdownInner) return

	dropdownOpen.style.height = `${dropdownInner.getBoundingClientRect().height}px`
}

const insertTextInInput = () => {
	const dropdownItem = document.querySelectorAll('.dropdown_item')
	const dropdownArea = document.querySelector('.dropdown_area')

	if (!dropdownItem.length && !dropdownArea) return

	dropdownItem.forEach(item => {
		item.addEventListener('click', e => {
			const target = e.target
			dropdownArea.value = target.textContent.trim()
		})
	})
}