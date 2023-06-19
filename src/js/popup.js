import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showPopup()
	hideInputValue()
})

const showPopup = () => {
	const popupBtn = document.querySelector('.call__popup')
	const popupWrapper = document.querySelector('.popup__wrapper')
	const closeButton = document.querySelector('.popup__close')
	setTargetElement( document.querySelector( '#popup__lock' ) )

	if (!popupWrapper) return

	popupBtn.addEventListener('click', () => {   //call popup
		setTargetElement( document.querySelector( '#popup__lock' ) )
		if (!popupWrapper.classList.contains('showed')) {
			disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
			popupWrapper.classList.add('showed')
		} 
	})

	closeButton.addEventListener('click', () => {
		popupWrapper.classList.remove('showed')
		enableBodyScroll( getTargetElement() )
	})

	popupWrapper.addEventListener('click', e => { 				//close popup by tap anywhere
		e.stopPropagation()

		const target = e.target

		if (target.className && target.classList.contains('popup__wrapper')) {
			popupWrapper.classList.remove('showed')
			enableBodyScroll( getTargetElement() )
		}
	})
}

const hideInputValue = () => {
	const buttons = document.querySelectorAll('.eye__wrapper')

	if( ! buttons.length) return

	buttons.forEach( button => {
		button.addEventListener( 'click', () => {
			const input = button.closest('span').querySelector('input')
			if( !button.classList.contains( 'clicked')) {
				button.classList.add( 'clicked')
				input.type = 'text'
			} else {
				button.classList.remove( 'clicked')
				input.type = 'password'
			}
		})
	})
}
