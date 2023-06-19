document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toggleBurgerMenu()
})

const toggleBurgerMenu = () => {
	const burgerButton  = document.querySelector( '.burger__button' )
	const burgerMenu    = document.querySelector( '.header__inner' )

	if( ! burgerButton || ! burgerMenu ) return

	burgerButton.addEventListener( 'click', () => {

		if( ! burgerButton && ! burgerMenu ) return

		if( ! burgerMenu.classList.contains( 'opened' ) ) {
			burgerMenu.classList.add( 'opened' )
			burgerButton.classList.add( 'active' )

		} else {
			burgerMenu.classList.remove( 'opened' )
			burgerButton.classList.remove( 'active' )
		}
	} )

	window.addEventListener( 'resize', () => {
		const windowWidth = window.innerWidth
		const WINDOW_WIDTH_MD = 768
	
		if( windowWidth >= WINDOW_WIDTH_MD &&  burgerMenu.classList.contains( 'opened' ) ) {
			burgerMenu.classList.remove( 'opened' )
			burgerButton.classList.remove( 'active' )
		}
	} )
}