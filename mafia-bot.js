;
/*
bot for mafia-game: https://mafia.t3h1337.ru/home/#, which framed to VK
author: Max Donchenko (https://github.com/goodwin64)
*/
(function bot() {
	var money = +($("#co_basic_money")[0].innerHTML.replace(/ /g, ''));
	for (var i = 0; i < money; i++) {
		setTimeout(function() {
			$("#bank_deposit_amount")[0].value = 4;
			$("#bank")[0].children[0].children[0].children[0].children[0].children[3].click();
		}, 125);
	}
})();