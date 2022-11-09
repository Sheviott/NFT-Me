console.log('modules.js');
// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
export let bodyUnlock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		const lockPadding = document.querySelectorAll('.lock-padding');
	  setTimeout(() => {
		for (let index = 0; index < lockPadding.length; index++) {
		  const el = lockPadding[index];
		  el.style.paddingRight = "0px";
		}
		body.style.paddingRight = "0px";
		document.documentElement.classList.remove("lock");
	  }, delay);
	  bodyLockStatus = false;
	  setTimeout(function () {
		bodyLockStatus = true;
	  }, delay);
	}
  };
  export let bodyLock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
	  const lockPadding = document.querySelectorAll('.lock-padding');

	  for (let index = 0; index < lockPadding.length; index++) {
		const el = lockPadding[index];
		el.style.paddingRight =
		  window.innerWidth -
		  document.querySelector(".wrapper").offsetWidth +
		  "px";
	  }
	  body.style.paddingRight =
		window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
	  document.documentElement.classList.add("lock");

	  bodyLockStatus = false;
	  setTimeout(function () {
		bodyLockStatus = true;
	  }, delay);
	}
  };



export function menuInit() {
	const iconMenu = document.querySelector(".icon-menu");
	const menuBody = document.querySelector(".menu__body");
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			if (bodyLockStatus && e.target.closest('.icon-menu')) {
				bodyLockToggle();
				iconMenu.classList.toggle("menu-open");
				menuBody.classList.toggle("__active-menu--burger");
			}
		});
	};
}

export function menuOpen() {
	bodyLock();
	document.documentElement.classList.add("menu-open");
}
export function menuClose() {
	bodyUnlock();
	document.documentElement.classList.remove("menu-open");
}
